import { createStoreRequest } from 'store/helpers/request'
import type { StatsSliceState } from './adapter'
import { statsRequest } from './adapter'
const key = 'callPool.stats'
const { reducer, select, useRequestController } = createStoreRequest<StatsSliceState>(key)(statsRequest)
export default reducer
export const statsReducer = reducer
export const statsSelect = select
export const useStatsController = useRequestController
