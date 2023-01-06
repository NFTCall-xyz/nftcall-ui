import { useCallback } from 'react'
import { useTokenIdsController } from './tokenIds'

export const useOpenSeaController = () => {
  const tokenIdsController = useTokenIdsController()
  const updateData = useCallback(() => {}, [])
  return { tokenIds: tokenIdsController, updateData }
}
