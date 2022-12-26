import { useCallback } from 'react'
import { useBalanceOfController } from './balanceOf'
import { usePreviewOpenCallController } from './previewOpenCall'

export const useCallPoolController = () => {
  const balanceOfController = useBalanceOfController()
  const previewOpenCallController = usePreviewOpenCallController()
  const updateData = useCallback(() => {}, [])
  return { balanceOf: balanceOfController, previewOpenCall: previewOpenCallController, updateData }
}
