import { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import type { TableCellRenderer } from 'react-virtualized'

import { headerRenderer } from 'components/table/renderer'
import type { TableColumnsProps, BasicTableProps } from 'components/table/BasicTable/types'
import { useCallPools, useNetwork } from 'domains/data'

import { claimableEarningsCellRenderer, collectionNameCellRenderer, cumulativeEarningsCellRenderer } from './renderer'
import TableCell from '@mui/material/TableCell'
import Button from '@mui/material/Button'
import { useWallet } from 'domains'
import { useSendTransaction } from 'lib/protocol/hooks/sendTransaction'
import { transaction } from 'domains/controllers/adapter/transaction'
import type { ClaimProps } from 'lib/protocol/typechain/nftcall'
import { safeGet } from 'app/utils/get'
import { useAppSelector } from 'store'
import { userStatsSelect } from 'store/callPool/userStats'

export const useTable = (): BasicTableProps => {
  const { t } = useTranslation('app-claim', { keyPrefix: 'table' })
  const { callPools, balanceOf } = useCallPools()

  const {
    contracts: { callPoolService },
  } = useNetwork()
  const { networkAccount } = useWallet()
  const sendTransaction = useSendTransaction()
  const fn = useCallback(
    (props: ClaimProps) => {
      return transaction({
        createTransaction: callPoolService.claim(props),
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
            disabled={rowData.balanceOf.isZero()}
            onClick={() => {
              fn({
                callPool: rowData.address.CallPool,
                user: networkAccount,
                amount: '-1',
              }).then(() => balanceOf.updateBalanceOf())
            }}
            sx={{ padding: '5px' }}
          >
            {t('claim')}
          </Button>
        </TableCell>
      )
    },
    [balanceOf, fn, networkAccount, t]
  )

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
            dataKey: 'cumulativeEarnings',
            width: 450,
            headerRenderer,
            cellRenderer: cumulativeEarningsCellRenderer,
          },
          {
            dataKey: 'claimableEarnings',
            width: 450,
            headerRenderer,
            cellRenderer: claimableEarningsCellRenderer,
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

  const data = useMemo(
    () =>
      callPools.filter(
        (callPool) => !callPool.balanceOf.isZero() || safeGet(() => !callPool.userStats.accruedEarnings.isZero())
      ),
    [callPools]
  )
  const loading = useAppSelector(userStatsSelect.selectLoading)

  return {
    loading,
    columns,
    data,
  }
}
