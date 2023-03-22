import { useControllers, useWallet } from 'domains'
import { useMemo } from 'react'

import { useNetwork } from 'domains/data'

import type { UserStatsProps } from 'store/callPool/userStats/adapter'

export const useUserStats = () => {
  const { callPool } = useControllers()
  const { thegraphUrl } = useNetwork()
  const { networkAccount } = useWallet()

  const query: UserStatsProps = useMemo(
    () => ({
      userAddress: networkAccount,
      thegraphUrl,
    }),
    [networkAccount, thegraphUrl]
  )

  callPool.userStats.usePolling(query, (query) => !query.userAddress || !query.thegraphUrl, 1000 * 60)
}
