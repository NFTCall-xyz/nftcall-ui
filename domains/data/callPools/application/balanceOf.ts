import { useControllers, useWallet } from 'domains'
import { useCallback, useMemo } from 'react'

import { useNetwork } from 'domains/data'

import type { BalanceOfProps } from 'store/callPool/balanceOf/adapter'

import type { CallPool } from '..'

export const useBalanceOf = (callPools: CallPool[]) => {
  const {
    contracts: { callPoolService },
  } = useNetwork()
  const { callPool } = useControllers()
  const { networkAccount } = useWallet()
  const query: BalanceOfProps = useMemo(
    () => ({
      callPoolService,
      callPools: callPools.map((callPool) => callPool.address.CallPool),
      user: networkAccount,
    }),
    [callPoolService, callPools, networkAccount]
  )

  callPool.balanceOf.usePolling(query, (query) => !query.callPools.length || !query.user, 1000 * 60)

  const updateBalanceOf = useCallback(() => {
    callPool.balanceOf.polling.restart()
  }, [callPool.balanceOf.polling])

  return {
    updateBalanceOf,
  }
}
