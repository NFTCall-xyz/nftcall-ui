import { useWallet } from 'domains'
import { useMemo } from 'react'

import { log } from 'app/utils/dev'
import { safeGet } from 'app/utils/get'

import { getUseCacheMemo } from 'database/helpers'
import { db } from 'database/nftcall'

import { useNFT, useNetwork } from 'domains/data'

import { toBN } from 'lib/math'

import { useCallPoolStateData } from 'store/callPool/useCallPoolStateData'

import type { CallPool } from '..'

type UseCacheMemoProps = { chainId: number }
const { useCacheMemo, useCacheDataEffect } = getUseCacheMemo(
  () => db.callPools,
  (table, { chainId }: UseCacheMemoProps) => table.filter((callPool) => callPool.network === chainId).toArray()
)

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
    // log('[CallPoolsService][callPoolsSouceData]', returnValue)
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
  return callPoolsSouceData
}

export const useCallPoolsData = () => {
  const { chainId } = useWallet()
  const callPoolsSouceData = useCallPoolsSouceData()

  const callPoolsCacheData = useCacheMemo([callPoolsSouceData], {
    chainId,
  })

  const callPools = useMemo(() => {
    if (!callPoolsCacheData.length) return callPoolsSouceData
    const returnValue = callPoolsSouceData.map((callPool) => {
      const callPoolAddress = callPool.address.CallPool
      const cacheData = callPoolsCacheData.find((i) => i.callPoolAddress === callPoolAddress)
      return {
        ...callPool,
        ...cacheData,
      }
    })
    log('[CallPools]', returnValue)
    return returnValue
  }, [callPoolsCacheData, callPoolsSouceData])

  useCacheDataEffect(callPoolsSouceData, (data) => {
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
  })

  return callPools
}
