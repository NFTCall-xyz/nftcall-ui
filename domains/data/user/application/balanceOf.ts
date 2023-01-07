import { useControllers, useWallet } from 'domains'
import { useNetwork } from 'domains/data'
import { useCallback, useMemo } from 'react'
import { useUserStateData } from 'store/user/useUserStateData'

export const useBalanceOf = () => {
  const returnValue = useUserStateData()
  const { provider } = useNetwork()
  const { networkAccount } = useWallet()
  const {
    user: { balanceOf },
  } = useControllers()

  const query = useMemo(() => ({ provider, user: networkAccount }), [networkAccount, provider])
  balanceOf.usePolling(query, (query) => !query.user || !query.provider, 1000 * 60)

  const updateBalanceOf = useCallback(() => {
    balanceOf.polling.restart()
  }, [balanceOf.polling])

  return {
    ...returnValue,
    updateBalanceOf,
  }
}
