import { useMemo } from 'react'
import { useImmer } from 'use-immer'

import { createContextWithProvider } from 'app/utils/createContext'
import { safeGet } from 'app/utils/get'

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
  const { callPools: sourceData } = useCallPools()
  const [collectionName, setCollectionName] = useImmer('')
  const callPools = useMemo(() => {
    if (!collectionName) return sourceData
    return sourceData.filter(({ collection }) =>
      safeGet(() => collection.name.toLowerCase().includes(collectionName.toLowerCase()))
    )
  }, [collectionName, sourceData])

  return { callPools, collectionName, setCollectionName }
}

const useBuyService = () => {
  const stats = useBuyStats()
  const buyCallPools = useBuyCallPools()
  return {
    stats,
    ...buyCallPools,
    usePageEffect,
  }
}
const { Provider: BuyProvider, createUseContext } = createContextWithProvider(useBuyService)
export const createBuyContext = createUseContext

export default BuyProvider
