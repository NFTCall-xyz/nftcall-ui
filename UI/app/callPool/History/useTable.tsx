import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { cellRenderer, headerRenderer } from 'components/table/renderer'
import type { TableColumnsProps, BasicTableProps } from 'components/table/BasicTable/types'
import { useCallPoolDetails } from 'domains/data'
import { usePost } from 'app/hooks/request'
// import { useMount } from 'app/hooks/useMount'

import { request } from './adapter'

const pageSize = 5

export const useTable = (): BasicTableProps => {
  const { t } = useTranslation('portfolioDetails')
  const { callPool } = useCallPoolDetails()
  const [pageIndex, setPageIndex] = useState(0)
  const dataFetcher = usePost(request)
  const [noMoreSourceData, setNoMoreSourceData] = useState(false)
  const [sourceData, setSourceData] = useState([])

  const columns = useMemo(
    () =>
      (
        [
          {
            dataKey: 'account',
            width: 450,
            headerRenderer,
            cellRenderer,
          },
          {
            dataKey: 'NFT',
            width: 450,
            headerRenderer,
            cellRenderer,
          },
          {
            dataKey: 'strikePrice',
            width: 450,
            headerRenderer,
            cellRenderer,
          },
          {
            dataKey: 'expiryDate',
            width: 450,
            headerRenderer,
            cellRenderer,
          },
          {
            dataKey: 'premium',
            width: 450,
            headerRenderer,
            cellRenderer,
          },
          {
            dataKey: 'status',
            width: 450,
            headerRenderer,
            cellRenderer,
          },
        ] as TableColumnsProps[]
      ).map((column) => {
        column.label = t('history.' + column.dataKey)
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
        const callPoolAddress = callPool.address.CallPools
        setPageIndex(pageIndex + 1)
        if (noMoreSourceData) return Promise.resolve()
        return dataFetcher
          .post({
            skip,
            first: pageSize,
            callPoolAddress,
            subgraphName: 'nftcall',
          })
          .then((data) => {
            // const { symbol } = portfolio
            const rowData = data.map((i) => ({
              ...i,
              // vault,
            }))

            if (!rowData.length) setNoMoreSourceData(true)
            setSourceData((data) => data.concat(rowData))
          })
      },
    }
  }, [callPool.address.CallPools, dataFetcher, end, noMoreSourceData, pageIndex, skip])

  // useMount(() => {
  //   loadMore.onLoadMore()
  // })

  return {
    columns,
    data,
    loadMore,
  }
}
