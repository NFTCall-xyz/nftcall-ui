import { useCallback, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import type { TableCellRenderer } from 'react-virtualized'

import { headerRenderer } from 'components/table/renderer'
import type { TableColumnsProps, BasicTableProps } from 'components/table/BasicTable/types'
import { useCallPools, useNetwork } from 'domains/data'
import { usePost } from 'app/hooks/request'
import { useMount } from 'app/hooks/useMount'

import { request } from 'domains/data/position/adapter'
import { tokenIconCellRenderer } from 'components/table/renderer'
import { nftCellRenderer, positionDateCellRenderer, statusCellRenderer } from './renderer'
import TableCell from '@mui/material/TableCell'
import Button from '@mui/material/Button'
import { useWallet } from 'domains'
import { useSendTransaction } from 'lib/protocol/hooks/sendTransaction'
import { transaction } from 'domains/controllers/adapter/transaction'
import type { ExerciseCallProps } from 'lib/protocol/typechain/nftcall'
import { valueToWei } from 'lib/math'
import { safeGet } from 'app/utils/get'
import { PositionStatus } from 'domains/data/position/types'

const pageSize = 5

type PositionsProps = {
  isActive: boolean
}
export const useTable = ({ isActive }: PositionsProps): BasicTableProps => {
  const { t } = useTranslation('app-positions', { keyPrefix: 'table' })
  const [pageIndex, setPageIndex] = useState(0)
  const dataFetcher = usePost(request)
  const [noMoreSourceData, setNoMoreSourceData] = useState(false)
  const [sourceData, setSourceData] = useState([])

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
            width: 650,
            headerRenderer,
            cellRenderer: nftCellRenderer,
          },
          {
            dataKey: 'floorPrice',
            width: 350,
            headerRenderer,
            cellRenderer: tokenIconCellRenderer,
          },
          {
            dataKey: 'strikePrice',
            width: 300,
            headerRenderer,
            cellRenderer: tokenIconCellRenderer,
          },
          {
            dataKey: 'date',
            cellData: 'endTime',
            width: 450,
            headerRenderer,
            cellRenderer: positionDateCellRenderer,
          },
          {
            dataKey: 'premium',
            cellData: 'premiumToOwner',
            width: 300,
            headerRenderer,
            cellRenderer: tokenIconCellRenderer,
          },
          {
            dataKey: 'status',
            width: 450,
            headerRenderer,
            cellRenderer: statusCellRenderer,
          },
          {
            dataKey: 'action',
            width: 400,
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
      const callPool = callPools.find((callPool) => callPool.address.CallPool === i.callPoolAddress)
      return {
        ...i,
        floorPrice: safeGet(() => callPool.nftOracle.price),
      }
    })
  }, [callPools, sourceData])

  const end = useMemo(() => {
    if (!noMoreSourceData) return false
    return skip > data.length
  }, [data.length, noMoreSourceData, skip])

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
            subgraphName: 'rockgold0911/nftcall',
            isActive,
          })
          .then((rowData) => {
            if (rowData.length < pageSize) setNoMoreSourceData(true)
            setSourceData((data) => data.concat(rowData))
          })
      },
    }
  }, [dataFetcher, end, isActive, networkAccount, noMoreSourceData, pageIndex, skip])

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
