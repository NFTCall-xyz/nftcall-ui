import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'

import {
  linkToAddressCellRenderer,
  dateCellRenderer,
  headerRenderer,
  tokenIconCellRenderer,
} from 'components/table/renderer'
import type { TableColumnsProps, BasicTableProps } from 'components/table/BasicTable/types'
import { usePost } from 'app/hooks/request'
import { useMount } from 'app/hooks/useMount'

import { request } from './adapter'
import { NFTCellRenderer } from './renderer'
import { useWallet } from 'domains'

const pageSize = 5

export const useTable = (): BasicTableProps => {
  const { t } = useTranslation('app-sell', { keyPrefix: 'history' })
  const [pageIndex, setPageIndex] = useState(0)
  const dataFetcher = usePost(request)
  const [noMoreSourceData, setNoMoreSourceData] = useState(false)
  const [sourceData, setSourceData] = useState([])
  const { networkAccount } = useWallet()

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
            dataKey: 'transactionHash',
            width: 450,
            headerRenderer,
            cellRenderer: linkToAddressCellRenderer,
          },
          {
            dataKey: 'createTimestamp',
            width: 450,
            headerRenderer,
            cellRenderer: dateCellRenderer,
          },
          {
            dataKey: 'soldPrice',
            width: 450,
            headerRenderer,
            cellRenderer: tokenIconCellRenderer,
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
