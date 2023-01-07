import { useCallback } from 'react'
import { useBalanceOfController } from './balanceOf'
import { usePreviewOpenCallController } from './previewOpenCall'
import { useStatsController } from './stats'
import { useUserStatsController } from './userStats'

export const useCallPoolController = () => {
  const balanceOfController = useBalanceOfController()
  const previewOpenCallController = usePreviewOpenCallController()
  const statsController = useStatsController()
  const userStatsController = useUserStatsController()
  const updateData = useCallback(() => {}, [])
  return {
    balanceOf: balanceOfController,
    previewOpenCall: previewOpenCallController,
    stats: statsController,
    userStats: userStatsController,
    updateData,
  }
}
