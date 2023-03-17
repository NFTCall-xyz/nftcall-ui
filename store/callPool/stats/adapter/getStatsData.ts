import { getWeiToValueBN } from 'app/utils/get'

import type { BaseNFT } from 'domains/data/nft/types'

import { toBN } from 'lib/math'

import type { StatsBaseData } from './getStatsBaseData'

export type CallPoolStats = {
  callPool?: string
  paused: boolean
  deactivate: boolean
  accumulativePremium: BN
  totalTradingVolume: BN
  totalDepositedNFTs: number
  totalListedNFTs: number
  nfts: BaseNFT[]
}
export type StatsData = {
  callPools: CallPoolStats[]
  all: CallPoolStats
}

export const getStatsData = (statsBaseData: StatsBaseData[]): StatsData => {
  if (!statsBaseData) return { callPools: [], all: {} as any }
  const all: CallPoolStats = {
    accumulativePremium: toBN(0),
    totalTradingVolume: toBN(0),
    totalDepositedNFTs: 0,
    totalListedNFTs: 0,
    nfts: [],
    paused: false,
    deactivate: false,
  }
  const callPools = statsBaseData.map((i) => {
    const returnValue = {
      ...i,
      ...getWeiToValueBN(i, ['accumulativePremium', 'totalTradingVolume'], 18),
    }
    all.accumulativePremium = all.accumulativePremium.plus(returnValue.accumulativePremium)
    all.totalTradingVolume = all.totalTradingVolume.plus(returnValue.totalTradingVolume)
    all.totalDepositedNFTs += returnValue.totalDepositedNFTs
    all.totalListedNFTs += returnValue.totalListedNFTs
    return returnValue
  })

  return {
    callPools,
    all,
  }
}
