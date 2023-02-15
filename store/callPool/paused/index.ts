import { createStoreRequest } from 'store/helpers/request'

import type { PausedSliceState } from './adapter'
import { pausedRequest } from './adapter'

const key = 'callPool.paused'
const { reducer, select, useRequestController } = createStoreRequest<PausedSliceState>(key)(pausedRequest)
export default reducer
export const pausedReducer = reducer
export const pausedSelect = select
export const usePausedController = useRequestController
