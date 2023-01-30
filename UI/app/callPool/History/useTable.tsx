import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { usePost } from 'app/hooks/request'
import { useMount } from 'app/hooks/useMount'

import type { BasicTableProps, TableColumnsProps } from 'components/table/BasicTable/types'
import {
  dateCellRenderer,
  headerRenderer,
  linkToAddressCellRenderer,
  tokenIconCellRenderer,
} from 'components/table/renderer'

import { useCallPoolDetails, useNetwork } from 'domains/data'
import { request } from 'domains/data/position/adapter'

import { NFTCellRenderer, statusCellRenderer } from './renderer'

const pageSize = 5

export const useTable = (): BasicTableProps => {
  const { t } = useTranslation('app-callpool', { keyPrefix: 'history' })
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
            cellData: 'userAddress',
            width: 450,
            headerRenderer,
            cellRenderer: linkToAddressCellRenderer,
          },
          {
            dataKey: 'NFT',
            width: 450,
            headerRenderer,
            cellRenderer: NFTCellRenderer,
          },
          {
            dataKey: 'strikePrice',
            width: 450,
            headerRenderer,
            cellRenderer: tokenIconCellRenderer,
          },
          {
            dataKey: 'expiryDate',
            cellData: 'endTime',
            width: 450,
            headerRenderer,
            cellRenderer: dateCellRenderer,
          },
          {
            dataKey: 'premium',
            cellData: 'premiumToOwner',
            width: 450,
            headerRenderer,
            cellRenderer: tokenIconCellRenderer,
          },
          {
            dataKey: 'status',
            width: 450,
            headerRenderer,
            cellRenderer: statusCellRenderer,
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
  const { subgraphName } = useNetwork()

  const loadMore = useMemo(() => {
    return {
      end,
      disabled: dataFetcher.loading,
      onLoadMore: () => {
        const callPoolAddress = callPool.address.CallPool
        setPageIndex(pageIndex + 1)
        if (noMoreSourceData) return Promise.resolve()
        return dataFetcher
          .post({
            skip,
            first: pageSize,
            callPoolAddress,
            subgraphName,
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
  }, [callPool.address.CallPool, dataFetcher, end, noMoreSourceData, pageIndex, skip, subgraphName])

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
