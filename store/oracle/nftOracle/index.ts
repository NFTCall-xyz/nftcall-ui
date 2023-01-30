import { createStoreRequest } from 'store/helpers/request'

import type { NFTOracleSliceState } from './adapter'
import { nftOracleRequest } from './adapter'

const key = 'oracle.nftOracle'
const { reducer, select, useRequestController } = createStoreRequest<NFTOracleSliceState>(key)(nftOracleRequest)
export default reducer
export const nftOracleReducer = reducer
export const nftOracleSelect = select
export const useNFTOracleController = useRequestController
