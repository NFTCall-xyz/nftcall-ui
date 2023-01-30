import { createStoreRequest } from 'store/helpers/request'

import type { BalanceOfSliceState } from './adapter'
import { balanceOfRequest } from './adapter'

const key = 'user.balanceOf'
const { reducer, select, useRequestController } = createStoreRequest<BalanceOfSliceState>(key)(balanceOfRequest)
export default reducer
export const balanceOfReducer = reducer
export const balanceOfSelect = select
export const useBalanceOfController = useRequestController
