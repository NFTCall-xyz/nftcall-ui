import { useMemo } from 'react'

import { createContextWithProvider } from 'app/utils/createContext'

import { useCallPools } from 'domains/data'
import { useUpdateNFTAssets } from 'domains/data/nft/hooks/useUpdateNFTAssets'
import type { BaseNFT } from 'domains/data/nft/types'

const useBuyStats = () => {
  const { allCallPool } = useCallPools()
  const stats = useMemo(
    () => ({ ...allCallPool.stats, totalOpenInterest: allCallPool.totalOpenInterest }),
    [allCallPool.stats, allCallPool.totalOpenInterest]
  )
  return stats
}

const usePageEffect = () => {
  const { callPools } = useCallPools()
  const nfts = useMemo(() => {
    let returnValue: BaseNFT[] = []
    callPools.forEach(({ stats }) => {
      if (!stats || !stats.nfts || !stats.nfts.length) return
      returnValue = returnValue.concat(stats.nfts)
    })
    return returnValue
  }, [callPools])
  useUpdateNFTAssets(nfts)
}

const useBuyCallPools = () => {
  const { callPools } = useCallPools()
  return callPools
}

const useBuyService = () => {
  const stats = useBuyStats()
  const callPools = useBuyCallPools()
  return {
    stats,
    callPools,
    usePageEffect,
  }
}
const { Provider: BuyProvider, createUseContext } = createContextWithProvider(useBuyService)
export const createBuyContext = createUseContext

export default BuyProvider
