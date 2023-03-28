import { useWallet } from 'domains'
import { merge } from 'lodash'
import { useCallback, useMemo } from 'react'

import { log } from 'app/utils/dev'

import { useCacheData } from 'database/helpers'
import { db } from 'database/nftcall'

import { toBN } from 'lib/math'

import type { CallPoolStats } from 'store/callPool/stats/adapter/getStatsData'
import { useCallPoolStateData } from 'store/callPool/useCallPoolStateData'
import type { UserStatsData } from 'store/callPool/userStats/adapter/getUserStatsData'

import type { CallPool } from '..'

export type AllCallPools = {
  stats: CallPoolStats
  balanceOf: BN
  userStats: UserStatsData
  totalOpenInterest: BN
}
const useAllCallPoolsDataSouceData = (callPools: CallPool[]) => {
  const storeData = useCallPoolStateData()

  const allCallPoolSouceData = useMemo(() => {
    const stats = storeData.stats.all || ({} as undefined)
    let balanceOf = toBN(0)
    let totalOpenInterest = toBN(0)
    callPools.forEach((callPool) => {
      balanceOf = balanceOf.plus(callPool.balanceOf)
      totalOpenInterest = totalOpenInterest.plus(callPool.totalOpenInterest)
    })
    const userStats = storeData.userStats || ({} as undefined)

    const returnValue: AllCallPools = {
      stats,
      balanceOf,
      userStats,
      totalOpenInterest,
    }
    log('[CallPoolsService][allCallPool]', returnValue)
    return returnValue
  }, [callPools, storeData.stats.all, storeData.userStats])

  return allCallPoolSouceData
}

export const useAllCallPoolsData = (callPools: CallPool[]) => {
  const { chainId } = useWallet()
  const allCallPoolsSouceData = useAllCallPoolsDataSouceData(callPools)

  const getTable = useCallback(() => db.allCallPools, [])
  const getCacheData = useCallback(
    (table: ReturnType<typeof getTable>) => table.where('network').equals(chainId).toArray(),
    [chainId]
  )
  const sourceData = useMemo(() => [allCallPoolsSouceData], [allCallPoolsSouceData])
  const allCallPoolsCacheData = useCacheData({
    getTable,
    getCacheData,
    sourceData,
    getSaveData: (data) => {
      const network = chainId
      return data
        .map((i) => {
          if (!i.stats.totalDepositedNFTs) return
          const item = {
            ...i,
            network,
          }
          delete item.userStats
          return item
        })
        .filter(Boolean)
    },
  })

  const allCallPools = useMemo(() => {
    if (!allCallPoolsCacheData || !allCallPoolsCacheData.length) return allCallPoolsSouceData
    const returnValue = merge({}, allCallPoolsSouceData, allCallPoolsCacheData[0])
    log('[AllCallPoolsData]', returnValue)
    return returnValue
  }, [allCallPoolsCacheData, allCallPoolsSouceData])

  return allCallPools
}
