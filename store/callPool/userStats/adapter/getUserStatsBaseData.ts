export type UserCallPoolStatBaseData = {
  accruedEarnings: string
  callPoolAddress: string
}
export type UserStatsBaseData = {
  accumulativeEarnings: string
  sellerYield: string
  totalDuration: string
  userCallPoolStat: UserCallPoolStatBaseData[]
}

export const getUserStatsBaseData = (userStats: any): UserStatsBaseData[] => {
  return userStats
}
