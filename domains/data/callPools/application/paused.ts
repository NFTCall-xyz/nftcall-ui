import { useControllers } from 'domains'
import { useCallback, useMemo } from 'react'

import { DAY } from 'app/constant'

import { useNetwork } from 'domains/data'

import type { PausedProps } from 'store/callPool/paused/adapter'

import type { CallPool } from '..'

export const usePaused = (callPools: CallPool[]) => {
  const {
    contracts: { callPoolService },
  } = useNetwork()
  const { callPool } = useControllers()
  const query: PausedProps = useMemo(
    () => ({
      callPoolService,
      callPools: callPools.map((callPool) => callPool.address.CallPool),
    }),
    [callPoolService, callPools]
  )

  callPool.paused.usePolling(query, (query) => !query.callPools.length, DAY)

  const updatePaused = useCallback(() => {
    callPool.paused.polling.restart()
  }, [callPool.paused.polling])

  return {
    updatePaused,
  }
}
