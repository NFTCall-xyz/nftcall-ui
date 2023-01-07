type CallPoolStats = {
  id: string
  accumulativePremium: string
  totalNFTSales: string
  totalDepositedNFTs: number
  totalOptionContracts: number
}
export type StatsBaseData = {
  callPool: string
  accumulativePremium: string
  totalNFTSales: string
  totalDepositedNFTs: number
  totalOptionContracts: number
}

export const getStatsBaseData = (callPools: string[], callPoolStats: CallPoolStats[]): StatsBaseData[] => {
  return callPoolStats.map(({ id, accumulativePremium, totalNFTSales, totalDepositedNFTs, totalOptionContracts }) => {
    const callPool = callPools.find((i) => i.toLowerCase() === id)
    return {
      callPool,
      accumulativePremium,
      totalNFTSales,
      totalDepositedNFTs,
      totalOptionContracts,
    }
  })
}
