import { getAddresses, getWeiToValueBN, safeGet } from 'app/utils/get'
import type { UserCallPoolStatBaseData, UserStatsBaseData } from './getUserStatsBaseData'

export type UserCallPoolStat = {
  accruedEarnings: BN
  callPoolAddress: string
}
export type UserStatsData = {
  accumulativeEarnings: BN
  userCallPoolStat: UserCallPoolStat[]
}

const getUserCallPoolStatData = (userCallPoolStat: UserCallPoolStatBaseData[]): UserCallPoolStat[] => {
  return userCallPoolStat.map((i) => ({
    ...getAddresses(i, ['callPoolAddress']),
    ...getWeiToValueBN(i, ['accruedEarnings'], 18),
  }))
}

export const getUserStatsData = (userStatsBaseData: UserStatsBaseData[]): UserStatsData => {
  const baseData = safeGet(() => userStatsBaseData[0])
  if (!baseData) return {} as undefined
  return {
    ...getWeiToValueBN(baseData, ['accumulativeEarnings'], 18),
    userCallPoolStat: getUserCallPoolStatData(baseData.userCallPoolStat),
  }
}
