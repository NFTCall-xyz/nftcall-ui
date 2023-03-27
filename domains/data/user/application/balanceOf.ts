import { useControllers, useWallet } from 'domains'
import { useCallback, useMemo } from 'react'

import { useNetwork } from 'domains/data'

import { useUserStateData } from 'store/user/useUserStateData'

export const useBalanceOf = () => {
  const returnValue = useUserStateData()
  const { provider } = useNetwork()
  const { account } = useWallet()
  const {
    user: { balanceOf },
  } = useControllers()

  const query = useMemo(() => ({ provider, user: account }), [account, provider])
  balanceOf.usePolling(query, (query) => !query.user || !query.provider, 1000 * 60)

  const updateBalanceOf = useCallback(() => {
    balanceOf.polling.restart()
  }, [balanceOf.polling])

  return {
    ...returnValue,
    updateBalanceOf,
  }
}
