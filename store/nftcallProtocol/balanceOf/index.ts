import { createStoreRequest } from 'store/helpers/request'
import type { BalanceOfSliceState } from './adapter'
import { BalanceOfRequest } from './adapter'
const key = 'nftcallProtocol.callPool.balanceOf'
const { reducer, select, useRequestController } = createStoreRequest<BalanceOfSliceState>(key)(BalanceOfRequest)
export default reducer
export const balanceOfReducer = reducer
export const balanceOfSelect = select
export const useBalanceOfController = useRequestController
