import { useWallet } from 'domains'
import { useCallback, useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useImmer } from 'use-immer'

import { usePost } from 'app/hooks/request'
import { safeGet } from 'app/utils/get'

import type { BasicTableProps, TableColumnsProps } from 'components/table/BasicTable/types'
import { headerRenderer } from 'components/table/renderer'
import { tokenIconCellRenderer } from 'components/table/renderer'

import { useCallPools, useNetwork } from 'domains/data'
import { request } from 'domains/data/position/adapter'

import { nftCellRenderer, positionDateCellRenderer, statusCellRenderer } from './renderer'

const pageSize = 5

type PositionsProps = {
  isActive: boolean
}
export const useTable = ({ isActive }: PositionsProps): BasicTableProps => {
  const { t } = useTranslation('app-sell', { keyPrefix: 'positions' })
  const [pageIndex, setPageIndex] = useImmer(0)
  const dataFetcher = usePost(request)
  const [noMoreSourceData, setNoMoreSourceData] = useImmer(false)
  const [sourceData, setSourceData] = useImmer([])

  const { callPools } = useCallPools()
  const { account } = useWallet()

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
  const { thegraphUrl } = useNetwork()

  const onFetch = useCallback(
    (pageIndex: number) => {
      return dataFetcher
        .post({
          skip: pageIndex * pageSize,
          first: pageSize,
          nftOwnerAddress: account,
          thegraphUrl,
          isActive,
        })
        .then((rowData) => {
          if (rowData.length < pageSize) setNoMoreSourceData(true)
          setSourceData((data) => data.concat(rowData))
        })
    },
    [dataFetcher, isActive, account, setNoMoreSourceData, setSourceData, thegraphUrl]
  )

  const loadMore = useMemo(() => {
    return {
      end,
      disabled: dataFetcher.loading,
      onLoadMore: () => {
        if (!account) return setNoMoreSourceData(true)
        if (noMoreSourceData) return Promise.resolve()
        setPageIndex(pageIndex + 1)
        return onFetch(pageIndex)
      },
    }
  }, [account, dataFetcher.loading, end, noMoreSourceData, onFetch, pageIndex, setNoMoreSourceData, setPageIndex])

  useEffect(() => {
    if (!account) return
    setSourceData([])
    setPageIndex(1)
    onFetch(0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account])

  return {
    loading: dataFetcher.loading,
    columns,
    data,
    loadMore,
  }
}
