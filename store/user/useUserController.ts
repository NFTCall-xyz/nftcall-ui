import { useCallback } from 'react'
import { useBalanceOfController } from './balanceOf'

export const useUserController = () => {
  const balanceOfController = useBalanceOfController()
  const updateData = useCallback(() => {}, [])
  return { balanceOf: balanceOfController, updateData }
}
