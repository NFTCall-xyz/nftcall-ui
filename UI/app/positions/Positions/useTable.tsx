import { useCallback, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import type { TableCellRenderer } from 'react-virtualized'

import { cellRenderer, headerRenderer } from 'components/table/renderer'
import type { TableColumnsProps, BasicTableProps } from 'components/table/BasicTable/types'
import { useNetwork } from 'domains/data'
import { usePost } from 'app/hooks/request'
import { useMount } from 'app/hooks/useMount'

import { request } from './adapter'
import { numberCellRenderer } from 'components/table/renderer'
import { expiryDateCellRenderer, NFTCellRenderer, premiumCellRenderer } from './renderer'
import TableCell from '@mui/material/TableCell'
import Button from '@mui/material/Button'
import { useWallet } from 'domains'
import { useSendTransaction } from 'lib/protocol/hooks/sendTransaction'
import { transaction } from 'domains/controllers/adapter/transaction'
import type { ExerciseCallProps } from 'lib/protocol/typechain/nftcall'
import { valueToWei } from 'lib/math'

const pageSize = 5

export const useTable = (): BasicTableProps => {
  const { t } = useTranslation('app-positions', { keyPrefix: 'table' })
  const [pageIndex, setPageIndex] = useState(0)
  const dataFetcher = usePost(request)
  const [noMoreSourceData, setNoMoreSourceData] = useState(false)
  const [sourceData, setSourceData] = useState([])

  const { networkAccount } = useWallet()
  const {
    contracts: { callPoolService },
  } = useNetwork()
  const sendTransaction = useSendTransaction()
  const fn = useCallback(
    (props: ExerciseCallProps) => {
      console.log(props)
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
            disabled={rowData.status !== 'Exercisible'}
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
            width: 450,
            headerRenderer,
            cellRenderer: NFTCellRenderer,
          },
          {
            dataKey: 'floorPrice',
            width: 450,
            headerRenderer,
            cellRenderer: numberCellRenderer,
          },
          {
            dataKey: 'strikePrice',
            width: 450,
            headerRenderer,
            cellRenderer: numberCellRenderer,
          },
          {
            dataKey: 'expiryDate',
            width: 450,
            headerRenderer,
            cellRenderer: expiryDateCellRenderer,
          },
          {
            dataKey: 'premium',
            width: 450,
            headerRenderer,
            cellRenderer: premiumCellRenderer,
          },
          {
            dataKey: 'status',
            width: 450,
            headerRenderer,
            cellRenderer,
          },
          {
            dataKey: 'action',
            width: 250,
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
    const returnValue = [...sourceData]
    return returnValue.sort((a, b) => b.createTimestamp - a.createTimestamp).slice(0, skip)
  }, [skip, sourceData])
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
          })
          .then((data) => {
            // const { symbol } = portfolio
            const rowData = data.map((i) => ({
              ...i,
              // vault,
            }))

            if (rowData.length < pageSize) setNoMoreSourceData(true)
            setSourceData((data) => data.concat(rowData))
          })
      },
    }
  }, [dataFetcher, end, networkAccount, noMoreSourceData, pageIndex, skip])

  useMount(() => {
    loadMore.onLoadMore()
  })

  return {
    columns,
    data,
    loadMore,
  }
}
