import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import type { BasicTableProps, TableColumnsProps } from 'components/table/BasicTable/types'
import { headerRenderer, percentCellRenderer, tokenIconCellRenderer } from 'components/table/renderer'

import { useAppBuy } from 'domains/pages/app'

import { collectionNameCellRenderer } from './renderer'

export const useTable = (): BasicTableProps => {
  const { t } = useTranslation('app-buy', { keyPrefix: 'callPools.table' })
  const { callPools } = useAppBuy()

  const columns = useMemo(
    () =>
      (
        [
          {
            dataKey: 'collectionName',
            width: 450,
            headerRenderer,
            cellRenderer: collectionNameCellRenderer,
          },
          {
            dataKey: 'tradingVolume',
            cellData: 'stats.totalTradingVolume',
            width: 450,
            headerRenderer,
            cellRenderer: tokenIconCellRenderer,
          },
          {
            dataKey: 'floorPrice',
            cellData: 'nftOracle.price',
            width: 450,
            headerRenderer,
            cellRenderer: tokenIconCellRenderer,
          },
          {
            dataKey: 'volatility',
            cellData: 'nftOracle.vol',
            width: 450,
            headerRenderer,
            cellRenderer: percentCellRenderer,
          },
        ] as TableColumnsProps[]
      ).map((column) => {
        column.label = t(column.dataKey)
        return column
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [t]
  )

  const router = useRouter()
  const tableProps = useMemo(
    () => ({ onRowClick: ({ rowData }: any) => router.push('/app/callPool/' + rowData.address.CallPool) }),
    [router]
  )

  return {
    loading: false,
    columns,
    data: callPools,
    tableProps,
  }
}
