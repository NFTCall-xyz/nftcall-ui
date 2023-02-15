import { useMemo } from 'react'

import { DAY } from 'app/constant'
import { safeGet } from 'app/utils/get'

import { useCallPools } from 'domains/data'

import { toBN } from 'lib/math'

export const useSellStats = () => {
  const { allCallPool } = useCallPools()

  const sellStats = useMemo(() => {
    const { sellerYield, totalDuration } = allCallPool.userStats
    return {
      ...allCallPool.userStats,
      balanceOf: allCallPool.balanceOf,
      APY: safeGet(() => sellerYield.div(totalDuration).multipliedBy(365 * DAY)) || toBN(0),
    }
  }, [allCallPool.balanceOf, allCallPool.userStats])

  return sellStats
}
