import { useMemo } from 'react'
import { useAppSelector } from 'store'

import { assetsSelect } from './assets'
import { getAssetsData } from './assets/adapter/getAssetsData'
import { walletSelect } from './wallet'
import { getWalletData } from './wallet/adapter/getWalletData'

export const useTokenIdStateData = () => {
  const assetsBaseData = useAppSelector(assetsSelect.selectData)
  const walletBaseData = useAppSelector(walletSelect.selectData)
  const returnValue = useMemo(() => {
    return { assets: getAssetsData(assetsBaseData), wallet: getWalletData(walletBaseData) }
  }, [assetsBaseData, walletBaseData])
  return returnValue
}
