import { useMemo } from 'react'
import { useAppSelector } from 'store'

import { assetsSelect } from './assets'
import { getAssetsData } from './assets/adapter/getAssetsData'
import { walletSelect } from './wallet'
import { getWalletData } from './wallet/adapter/getWalletData'

export const useTokenIdStateData = () => {
  const assetsBaseData = useAppSelector(assetsSelect.selectData)
  const walletBaseData = useAppSelector(walletSelect.selectData)

  const assets = useMemo(() => getAssetsData(assetsBaseData), [assetsBaseData])
  const wallet = useMemo(() => getWalletData(walletBaseData), [walletBaseData])

  return {
    assets,
    wallet,
  }
}
