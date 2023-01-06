import { createStoreRequest } from 'store/helpers/request'
import type { TokenIdsSliceState } from './adapter'
import { TokenIdsRequest } from './adapter'
const key = 'openSea.tokenIds'
const { reducer, select, useRequestController } = createStoreRequest<TokenIdsSliceState>(key)(TokenIdsRequest)
export default reducer
export const tokenIdsReducer = reducer
export const tokenIdsSelect = select
export const useTokenIdsController = useRequestController
