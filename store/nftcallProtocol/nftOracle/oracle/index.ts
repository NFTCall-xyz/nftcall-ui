import { createStoreRequest } from 'store/helpers/request'
import type { OracleSliceState } from './adapter'
import { OracleRequest } from './adapter'
const key = 'nftcallProtocol.nftOracle.oracle'
const { reducer, select, useRequestController } = createStoreRequest<OracleSliceState>(key)(OracleRequest)
export default reducer
export const oracleReducer = reducer
export const oracleSelect = select
export const useOracleController = useRequestController
