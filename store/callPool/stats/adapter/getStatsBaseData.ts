import type { BaseNFT } from 'domains/data/nft/types'

type CallPoolStats = {
  id: string
  accumulativePremium: string
  totalTradingVolume: string
  totalDepositedNFTs: number
  nfts: BaseNFT[]
}
export type StatsBaseData = {
  callPool: string
  accumulativePremium: string
  totalTradingVolume: string
  totalDepositedNFTs: number
  nfts: BaseNFT[]
}

export const getStatsBaseData = (callPools: string[], callPoolStats: CallPoolStats[]): StatsBaseData[] => {
  return callPoolStats.map(({ id, ...others }) => {
    const callPool = callPools.find((i) => i.toLowerCase() === id)
    return {
      ...others,
      callPool,
    }
  })
}
