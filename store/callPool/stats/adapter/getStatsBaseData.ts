import type { BaseNFT } from 'domains/data/nft/types'

type CallPoolStats = {
  id: string
  paused: boolean
  deactivate: boolean
  accumulativePremium: string
  totalTradingVolume: string
  totalDepositedNFTs: number
  totalListedNFTs: number
  nfts: BaseNFT[]
}
export type StatsBaseData = {
  callPool: string
  paused: boolean
  deactivate: boolean
  accumulativePremium: string
  totalTradingVolume: string
  totalDepositedNFTs: number
  totalListedNFTs: number
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
