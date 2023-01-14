import { createContext } from 'app/utils/createContext'
import { log } from 'app/utils/dev'
import { safeGet } from 'app/utils/get'
import { toBN } from 'lib/math'
import { useMemo } from 'react'
import type { CallPoolStats } from 'store/callPool/stats/adapter/getStatsData'
import { useCallPoolStateData } from 'store/callPool/useCallPoolStateData'
import type { NFTOracleData } from 'store/oracle/nftOracle/adapter/getNFTOracleData'
import type { UserCallPoolStat } from 'store/callPool/userStats/adapter/getUserStatsData'
import { useNetwork, useNFT } from '..'
import type { Market } from '../network/adapter/markets'
import type { BaseCollection } from '../nft/application/collections/adapter/getCollection'
import { useBalanceOf } from './application/balanceOf'
import { useStats } from './application/stats'
import { useCallPoolsDialogs } from './application/dialogs'
import { useTotalOpenInterest } from './application/totalOpenInterest'

export type CallPool = Market & {
  collection: BaseCollection
  // depositedItems: number
  nftOracle: NFTOracleData

  balanceOf: BN
  stats: CallPoolStats & {
    totalListedNFTs?: number
  }
  userStats: UserCallPoolStat
  totalOpenInterest: number
}

const useCallPoolsService = () => {
  const storeData = useCallPoolStateData()
  const { markets } = useNetwork()
  const { oracle, collections } = useNFT()
  const dialogs = useCallPoolsDialogs()

  const callPools = useMemo(() => {
    const returnValue = markets.map((market) => {
      const { id, address } = market
      const nftOracle = oracle.nftOracle.find((i) => i.nft === address.NFT) || ({} as undefined)
      const collection = collections[id]
      address.CallPool = address.CallPoolForTest

      const { value: balanceOf } =
        storeData.balanceOf.find((i) => i.callPool === address.CallPool) || ({ value: toBN(0) } as undefined)

      const stats: CallPool['stats'] =
        storeData.stats.callPools.find((i) => i.callPool === address.CallPool) || ({} as undefined)
      const userStats =
        safeGet(() => storeData.userStats.userCallPoolStat.find((i) => i.callPoolAddress === address.CallPool)) ||
        ({} as undefined)
      const totalOpenInterest =
        safeGet(() => storeData.totalOpenInterest.find((i) => i.callPool === address.CallPool).value) || 0

      if (stats.totalDepositedNFTs) {
        stats.totalListedNFTs = stats.totalDepositedNFTs - totalOpenInterest
        if (stats.totalListedNFTs < 0) stats.totalListedNFTs = 0
      }

      return {
        ...market,
        collection,
        nftOracle,
        balanceOf,
        stats,
        userStats,
        totalOpenInterest,
      } as CallPool
    })
    log('[CallPoolsService][callPools]', returnValue)
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

  const allCallPool = useMemo(() => {
    const stats = storeData.stats.all || ({} as undefined)
    let balanceOf = toBN(0)
    callPools.forEach((callPool) => {
      balanceOf = balanceOf.plus(callPool.balanceOf)
    })
    const userStats = storeData.userStats || ({} as undefined)

    const returnValue = {
      stats,
      balanceOf,
      userStats,
    }
    log('[CallPoolsService][allCallPool]', returnValue)
    return returnValue
  }, [callPools, storeData.stats.all, storeData.userStats])

  const balanceOf = useBalanceOf(callPools)
  const totalOpenInterest = useTotalOpenInterest(callPools)
  const stats = useStats(callPools)

  return { callPools, allCallPool, balanceOf, totalOpenInterest, stats, dialogs }
}
const { Provider: CallPoolsProvider, createUseContext } = createContext(useCallPoolsService)
export const createCallPoolsContext = createUseContext

export default CallPoolsProvider
