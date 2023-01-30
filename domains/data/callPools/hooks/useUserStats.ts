import { useControllers, useWallet } from 'domains'
import { useMemo } from 'react'

import { useNetwork } from 'domains/data'

import type { UserStatsProps } from 'store/callPool/userStats/adapter'

export const useUserStats = () => {
  const { callPool } = useControllers()
  const { subgraphName } = useNetwork()
  const { networkAccount } = useWallet()

  const query: UserStatsProps = useMemo(
    () => ({
      userAddress: networkAccount,
      subgraphName,
    }),
    [networkAccount, subgraphName]
  )

  callPool.userStats.usePolling(query, (query) => !query.userAddress || !query.subgraphName, 1000 * 60)
}
