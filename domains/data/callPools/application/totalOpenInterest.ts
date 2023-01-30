import { useControllers } from 'domains'
import { useCallback, useMemo } from 'react'

import { useNetwork } from 'domains/data'

import type { TotalOpenInterestProps } from 'store/callPool/totalOpenInterest/adapter'

import type { CallPool } from '..'

export const useTotalOpenInterest = (callPools: CallPool[]) => {
  const {
    contracts: { callPoolService },
  } = useNetwork()
  const { callPool } = useControllers()
  const query: TotalOpenInterestProps = useMemo(
    () => ({
      callPoolService,
      callPools: callPools.map((callPool) => callPool.address.CallPool),
    }),
    [callPoolService, callPools]
  )

  callPool.totalOpenInterest.usePolling(query, (query) => !query.callPools.length, 1000 * 60)

  const updateTotalOpenInterest = useCallback(() => {
    callPool.totalOpenInterest.polling.restart()
  }, [callPool.totalOpenInterest.polling])

  return {
    updateTotalOpenInterest,
  }
}
