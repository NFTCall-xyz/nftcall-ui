import { useWallet } from 'domains'
import { merge } from 'lodash'
import { useMemo } from 'react'

import { log } from 'app/utils/dev'

import { getUseCacheMemo } from 'database/helpers'
import { db } from 'database/nftcall'

import { toBN } from 'lib/math'

import type { CallPoolStats } from 'store/callPool/stats/adapter/getStatsData'
import { useCallPoolStateData } from 'store/callPool/useCallPoolStateData'
import type { UserStatsData } from 'store/callPool/userStats/adapter/getUserStatsData'

import type { CallPool } from '..'

type UseCacheMemoProps = { chainId: number }
const { useCacheMemo, useCacheDataEffect } = getUseCacheMemo(
  () => db.allCallPools,
  (table, { chainId }: UseCacheMemoProps) => table.where('network').equals(chainId).toArray()
)

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

  const allCallPoolsCacheData = useCacheMemo([allCallPoolsSouceData], {
    chainId,
  })

  const allCallPools = useMemo(() => {
    if (!allCallPoolsCacheData.length) return allCallPoolsSouceData
    const returnValue = merge({}, allCallPoolsSouceData, allCallPoolsCacheData[0])
    log('[AllCallPoolsData]', returnValue)
    return returnValue
  }, [allCallPoolsCacheData, allCallPoolsSouceData])

  useCacheDataEffect(allCallPoolsSouceData, (data) => {
    const network = chainId
    if (!data.stats.totalDepositedNFTs) return
    const item = {
      ...data,
      network,
    }
    delete item.userStats
    return item
  })

  return allCallPools
}
