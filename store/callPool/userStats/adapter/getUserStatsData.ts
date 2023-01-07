import { getWeiToValueBN } from 'app/utils/get'
import type { UserStatsBaseData } from './getUserStatsBaseData'

export type UserStatsData = {
  accumulativeEarnings: BN
}

export const getUserStatsData = (userStatsBaseData: UserStatsBaseData): UserStatsData => {
  if (!userStatsBaseData) return {} as undefined
  return {
    ...getWeiToValueBN(userStatsBaseData, ['accumulativeEarnings'], 18),
  }
}
