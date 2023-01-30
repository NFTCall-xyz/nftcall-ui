import { createStoreRequest } from 'store/helpers/request'

import type { UserStatsSliceState } from './adapter'
import { userStatsRequest } from './adapter'

const key = 'callPool.userStats'
const { reducer, select, useRequestController } = createStoreRequest<UserStatsSliceState>(key)(userStatsRequest)
export default reducer
export const userStatsReducer = reducer
export const userStatsSelect = select
export const useUserStatsController = useRequestController
