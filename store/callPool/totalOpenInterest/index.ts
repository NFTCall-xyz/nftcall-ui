import { createStoreRequest } from 'store/helpers/request'
import type { TotalOpenInterestSliceState } from './adapter'
import { totalOpenInterestRequest } from './adapter'
const key = 'callPool.totalOpenInterest'
const { reducer, select, useRequestController } =
  createStoreRequest<TotalOpenInterestSliceState>(key)(totalOpenInterestRequest)
export default reducer
export const totalOpenInterestReducer = reducer
export const totalOpenInterestSelect = select
export const useTotalOpenInterestController = useRequestController
