import { useCallback } from 'react'

import { useBalanceOfController } from './balanceOf'
import { usePausedController } from './paused'
import { usePreviewOpenCallController } from './previewOpenCall'
import { useStatsController } from './stats'
import { useTotalOpenInterestController } from './totalOpenInterest'
import { useUserStatsController } from './userStats'

export const useCallPoolController = () => {
  const balanceOfController = useBalanceOfController()
  const previewOpenCallController = usePreviewOpenCallController()
  const statsController = useStatsController()
  const userStatsController = useUserStatsController()
  const totalOpenInterestController = useTotalOpenInterestController()
  const pausedController = usePausedController()
  const updateData = useCallback(() => {}, [])
  return {
    balanceOf: balanceOfController,
    previewOpenCall: previewOpenCallController,
    stats: statsController,
    userStats: userStatsController,
    totalOpenInterest: totalOpenInterestController,
    paused: pausedController,
    updateData,
  }
}
