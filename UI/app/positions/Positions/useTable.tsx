import { useWallet } from 'domains'
import { useCallback, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import type { TableCellRenderer } from 'react-virtualized'

import Button from '@mui/material/Button'
import TableCell from '@mui/material/TableCell'

import { usePost } from 'app/hooks/request'
import { useMount } from 'app/hooks/useMount'
import { safeGet } from 'app/utils/get'

import type { BasicTableProps, TableColumnsProps } from 'components/table/BasicTable/types'
import { headerRenderer } from 'components/table/renderer'
import { tokenIconCellRenderer } from 'components/table/renderer'

import { transaction } from 'domains/controllers/adapter/transaction'
import { useCallPools, useNetwork } from 'domains/data'
import { request } from 'domains/data/position/adapter'
import type { Position } from 'domains/data/position/types'
import { PositionStatus } from 'domains/data/position/types'

import { toBN, valueToWei } from 'lib/math'
import { useSendTransaction } from 'lib/protocol/hooks/sendTransaction'
import type { ExerciseCallProps } from 'lib/protocol/typechain/nftcall'

import {
  nftCellRenderer,
  pnlCellRenderer,
  positionDate1CellRenderer,
  positionDate1HeaderRenderer,
  positionDate2CellRenderer,
  positionDate2HeaderRenderer,
  statusCellRenderer,
} from './renderer'

const pageSize = 5

type PositionsProps = {
  isActive: boolean
}
export const useTable = ({ isActive }: PositionsProps): BasicTableProps => {
  const { t } = useTranslation('app-positions', { keyPrefix: 'table' })
  const [pageIndex, setPageIndex] = useState(0)
  const dataFetcher = usePost(request)
  const [noMoreSourceData, setNoMoreSourceData] = useState(false)
  const [sourceData, setSourceData] = useState<Position[]>([])

  const { callPools } = useCallPools()
  const { networkAccount } = useWallet()
  const {
    contracts: { callPoolService },
  } = useNetwork()
  const sendTransaction = useSendTransaction()
  const fn = useCallback(
    (props: ExerciseCallProps) => {
      return transaction({
        createTransaction: callPoolService.exerciseCall(props),
        setStatus: () => {},
        sendTransaction,
        isOnlyApprove: false,
      })
    },
    [callPoolService, sendTransaction]
  )

  const ActionCellRenderer: TableCellRenderer = useCallback(
    ({ rowData }) => {
      return (
        <TableCell component="div" align="center">
          <Button
            variant="contained"
            size="small"
            disabled={rowData.status !== PositionStatus.Exercisable}
            onClick={() => {
              fn({
                user: networkAccount,
                callPool: rowData.callPoolAddress,
                tokenId: rowData.tokenId,
                strikePrice: valueToWei(rowData.strikePrice).toString(),
              })
            }}
            sx={{ padding: '5px' }}
          >
            {t('exercise')}
          </Button>
        </TableCell>
      )
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [t]
  )

  const columns = useMemo(
    () =>
      (
        [
          {
            dataKey: 'NFT',
            width: 600,
            headerRenderer,
            cellRenderer: nftCellRenderer,
          },
          {
            dataKey: 'floorPrice',
            width: 250,
            headerRenderer,
            cellRenderer: tokenIconCellRenderer,
          },
          {
            dataKey: 'strikePrice',
            width: 250,
            headerRenderer,
            cellRenderer: tokenIconCellRenderer,
          },
          {
            dataKey: 'createdDate',
            cellData: 'createTimestamp',
            width: 400,
            headerRenderer: positionDate2HeaderRenderer,
            cellRenderer: positionDate2CellRenderer,
          },
          {
            dataKey: 'exercisableDate',
            cellData: 'endTime',
            width: 400,
            headerRenderer: positionDate1HeaderRenderer,
            cellRenderer: positionDate1CellRenderer,
          },
          {
            dataKey: 'premium',
            width: 250,
            headerRenderer,
            cellRenderer: tokenIconCellRenderer,
          },
          {
            dataKey: 'PNL',
            width: 240,
            headerRenderer,
            cellRenderer: pnlCellRenderer,
          },
          {
            dataKey: 'status',
            width: 300,
            headerRenderer,
            cellRenderer: statusCellRenderer,
          },
          {
            dataKey: 'action',
            width: 350,
            headerRenderer,
            cellRenderer: ActionCellRenderer,
          },
        ] as TableColumnsProps[]
      ).map((column) => {
        column.label = t(column.dataKey)
        return column
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [t]
  )
  const skip = useMemo(() => pageIndex * pageSize, [pageIndex])
  const data = useMemo(() => {
    return sourceData.map((i) => {
      const floorPrice =
        safeGet(() => {
          if (!i.floorPrice.isZero()) return i.floorPrice
          const callPool = callPools.find((callPool) => callPool.address.CallPool === i.callPoolAddress)
          return callPool.nftOracle.price
        }) || toBN(0)
      if (!floorPrice.isZero()) {
        const { premium, strikePrice } = i
        if (i.status === PositionStatus.Exercised) {
          i.PnL = floorPrice.minus(strikePrice).minus(premium)
        } else {
          i.PnL = floorPrice.gt(strikePrice) ? floorPrice.minus(strikePrice).minus(premium) : toBN(0).minus(premium)
        }
        i.PnLInPercent = i.PnL.dividedBy(premium)
      }
      return {
        ...i,
        floorPrice,
      }
    })
  }, [callPools, sourceData])

  const end = useMemo(() => {
    if (!noMoreSourceData) return false
    return skip > data.length
  }, [data.length, noMoreSourceData, skip])
  const { subgraphName } = useNetwork()

  const loadMore = useMemo(() => {
    return {
      end,
      disabled: dataFetcher.loading,
      onLoadMore: () => {
        setPageIndex(pageIndex + 1)
        if (noMoreSourceData) return Promise.resolve()
        return dataFetcher
          .post({
            skip,
            first: pageSize,
            userAddress: networkAccount,
            subgraphName,
            isActive,
          })
          .then((rowData) => {
            if (rowData.length < pageSize) setNoMoreSourceData(true)
            setSourceData((data) => data.concat(rowData))
          })
      },
    }
  }, [dataFetcher, end, isActive, networkAccount, noMoreSourceData, pageIndex, skip, subgraphName])

  useMount(() => {
    loadMore.onLoadMore()
  })

  return {
    loading: dataFetcher.loading,
    columns,
    data,
    loadMore,
  }
}
