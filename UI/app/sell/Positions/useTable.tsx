import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { headerRenderer } from 'components/table/renderer'
import type { TableColumnsProps, BasicTableProps } from 'components/table/BasicTable/types'
import { useCallPools, useNetwork } from 'domains/data'
import { usePost } from 'app/hooks/request'
import { useMount } from 'app/hooks/useMount'

import { request } from 'domains/data/position/adapter'
import { tokenIconCellRenderer } from 'components/table/renderer'
import { nftCellRenderer, positionDateCellRenderer, statusCellRenderer } from './renderer'
import { useWallet } from 'domains'
import { safeGet } from 'app/utils/get'

const pageSize = 5

type PositionsProps = {
  isActive: boolean
}
export const useTable = ({ isActive }: PositionsProps): BasicTableProps => {
  const { t } = useTranslation('app-sell', { keyPrefix: 'positions' })
  const [pageIndex, setPageIndex] = useState(0)
  const dataFetcher = usePost(request)
  const [noMoreSourceData, setNoMoreSourceData] = useState(false)
  const [sourceData, setSourceData] = useState([])

  const { callPools } = useCallPools()
  const { networkAccount } = useWallet()

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
            width: 350,
            headerRenderer,
            cellRenderer: tokenIconCellRenderer,
          },
          {
            dataKey: 'date',
            cellData: 'endTime',
            width: 350,
            headerRenderer,
            cellRenderer: positionDateCellRenderer,
          },
          {
            dataKey: 'premiumToOwner',
            width: 350,
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
            nftOwnerAddress: networkAccount,
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
