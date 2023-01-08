import { useControllers } from 'domains'
import { useNetwork } from 'domains/data'
import { useCallback, useMemo } from 'react'
import type { StatsProps } from 'store/callPool/stats/adapter'
import type { CallPool } from '..'

export const useStats = (callPools: CallPool[]) => {
  const { callPool } = useControllers()
  const { subgraphName } = useNetwork()

  const query: StatsProps = useMemo(
    () => ({
      callPools: callPools.map((callPool) => callPool.address.CallPool),
      subgraphName,
    }),
    [callPools, subgraphName]
  )

  callPool.stats.usePolling(query, (query) => !query.callPools.length || !query.subgraphName, 1000 * 60)

  const updateStats = useCallback(() => {
    callPool.stats.polling.restart()
  }, [callPool.stats.polling])

  return {
    updateStats,
  }
}
