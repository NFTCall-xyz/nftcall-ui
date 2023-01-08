import { getWeiToValueBN, safeGet } from 'app/utils/get'
import type { UserStatsBaseData } from './getUserStatsBaseData'

export type UserStatsData = {
  accumulativeEarnings: BN
}

export const getUserStatsData = (userStatsBaseData: UserStatsBaseData[]): UserStatsData => {
  const baseData = safeGet(() => userStatsBaseData[0])
  if (!baseData) return {} as undefined
  return {
    ...getWeiToValueBN(baseData, ['accumulativeEarnings'], 18),
  }
}
