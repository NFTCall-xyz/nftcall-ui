import { getWeiToValueBN } from 'app/utils/get'
import { toBN } from 'lib/math'
import type { StatsBaseData } from './getStatsBaseData'

export type Stats = {
  callPool?: string
  accumulativePremium: BN
  totalNFTSales: BN
  totalDepositedNFTs: number
  totalOptionContracts: number
}
export type StatsData = {
  callPools: Stats[]
  all: Stats
}

export const getStatsData = (statsBaseData: StatsBaseData[]): StatsData => {
  if (!statsBaseData) return { callPools: [], all: {} as any }
  const all: Stats = {
    accumulativePremium: toBN(0),
    totalNFTSales: toBN(0),
    totalDepositedNFTs: 0,
    totalOptionContracts: 0,
  }
  const callPools = statsBaseData.map((i) => {
    const returnValue = {
      ...i,
      ...getWeiToValueBN(i, ['accumulativePremium', 'totalNFTSales'], 18),
    }
    all.accumulativePremium = all.accumulativePremium.plus(returnValue.accumulativePremium)
    all.totalNFTSales = all.totalNFTSales.plus(returnValue.totalNFTSales)
    all.totalDepositedNFTs += returnValue.totalDepositedNFTs
    all.totalOptionContracts += returnValue.totalOptionContracts
    return returnValue
  })

  return {
    callPools,
    all,
  }
}
