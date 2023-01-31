import { useMemo } from 'react'

import { useCallPools } from 'domains/data'

export const useSellStats = () => {
  const { allCallPool } = useCallPools()

  const sellStats = useMemo(
    () => ({
      ...allCallPool.userStats,
      balanceOf: allCallPool.balanceOf,
    }),
    [allCallPool.balanceOf, allCallPool.userStats]
  )

  return sellStats
}
