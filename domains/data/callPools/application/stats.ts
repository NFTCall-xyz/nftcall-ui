import { useControllers } from 'domains'
import { useCallback, useMemo } from 'react'

import { useNetwork } from 'domains/data'

import type { StatsProps } from 'store/callPool/stats/adapter'

import type { CallPool } from '..'

export const useStats = (callPools: CallPool[]) => {
  const { callPool } = useControllers()
  const { thegraphUrl } = useNetwork()

  const query: StatsProps = useMemo(
    () => ({
      callPools: callPools.map((callPool) => callPool.address.CallPool),
      thegraphUrl,
    }),
    [callPools, thegraphUrl]
  )

  callPool.stats.usePolling(query, (query) => !query.callPools.length || !query.thegraphUrl, 1000 * 60)

  const updateStats = useCallback(() => {
    callPool.stats.polling.restart()
  }, [callPool.stats.polling])

  return {
    updateStats,
  }
}
