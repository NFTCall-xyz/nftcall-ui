import { useWallet } from 'domains'
import { useCallback, useMemo } from 'react'

import { useWhyDidYouUpdate } from 'app/utils/dev/hooks/useWhyDidYouUpdate'
import { safeGet } from 'app/utils/get'

import { useCacheData } from 'database/helpers'
import { db } from 'database/nftcall'

import { useNFT, useNetwork } from 'domains/data'

import { toBN } from 'lib/math'

import { useCallPoolStateData } from 'store/callPool/useCallPoolStateData'

import type { CallPool } from '..'

const useCallPoolsSouceData = () => {
  const storeData = useCallPoolStateData()
  const { markets } = useNetwork()
  const { oracle, collections } = useNFT()
  const callPoolsSouceData = useMemo(() => {
    const returnValue = markets.map((market) => {
      const { id, address } = market
      const nftOracle = oracle.nftOracle.find((i) => i.nft === address.NFT) || ({} as undefined)
      const collection = collections[id]
      if (process.env.NEXT_PUBLIC_ENV === 'stage') {
        address.CallPool = address.CallPoolForTest
      }

      const { value: balanceOf } =
        storeData.balanceOf.find((i) => i.callPool === address.CallPool) || ({ value: toBN(0) } as undefined)

      const stats: CallPool['stats'] =
        storeData.stats.callPools.find((i) => i.callPool === address.CallPool) || ({} as undefined)
      const userStats =
        safeGet(() => storeData.userStats.userCallPoolStat.find((i) => i.callPoolAddress === address.CallPool)) ||
        ({} as undefined)
      const totalOpenInterest =
        safeGet(() => storeData.totalOpenInterest.find((i) => i.callPool === address.CallPool).value) || 0

      if (stats.totalListedNFTs && totalOpenInterest) {
        stats.totalListedNFTs = stats.totalListedNFTs - totalOpenInterest
        if (stats.totalListedNFTs < 0) stats.totalListedNFTs = 0
      }

      return {
        ...market,
        collection,
        nftOracle,
        balanceOf,
        paused: false,
        deactivate: false,
        stats,
        userStats,
        totalOpenInterest,
      } as CallPool
    })
    return returnValue
  }, [
    collections,
    markets,
    oracle.nftOracle,
    storeData.balanceOf,
    storeData.stats.callPools,
    storeData.totalOpenInterest,
    storeData.userStats.userCallPoolStat,
  ])

  useWhyDidYouUpdate('[CallPools][CallPoolsSouceData]', [
    collections,
    markets,
    oracle.nftOracle,
    storeData.balanceOf,
    storeData.stats.callPools,
    storeData.totalOpenInterest,
    storeData.userStats.userCallPoolStat,
  ])
  return callPoolsSouceData
}

export const useCallPoolsData = () => {
  const { chainId } = useWallet()
  const callPoolsSouceData = useCallPoolsSouceData()

  const getTable = useCallback(() => db.callPools, [])
  const getCacheData = useCallback(
    (table: ReturnType<typeof getTable>) => table.filter((callPool) => callPool.network === chainId).toArray(),
    [chainId]
  )
  const callPoolsCacheData = useCacheData({
    getTable,
    getCacheData,
    sourceData: callPoolsSouceData,
    getSaveData: (data) => {
      const network = chainId
      const items = data
        .filter((i) => i.stats.nfts)
        .map((i) => {
          const {
            address: { CallPool: callPoolAddress },
          } = i
          const returnValue = { ...i, callPoolAddress, network }
          delete returnValue.nftOracle
          delete returnValue.userStats
          return returnValue
        })
      return items
    },
  })

  const callPools = useMemo(() => {
    if (!callPoolsCacheData || !callPoolsCacheData.length) return callPoolsSouceData
    const returnValue = callPoolsSouceData.map((callPool) => {
      const callPoolAddress = callPool.address.CallPool
      const cacheData = callPoolsCacheData.find((i) => i.address.CallPool === callPoolAddress)
      return {
        ...callPool,
        ...cacheData,
      }
    })
    return returnValue
  }, [callPoolsCacheData, callPoolsSouceData])

  useWhyDidYouUpdate('[CallPools][callPools]', callPools)

  return callPools
}
