import { useCallback } from 'react'

import { useAssetsController } from './assets'
import { useWalletController } from './wallet'

export const useTokenIdController = () => {
  const assetsController = useAssetsController()
  const walletController = useWalletController()
  const updateData = useCallback(() => {}, [])
  return { assets: assetsController, wallet: walletController, updateData }
}
