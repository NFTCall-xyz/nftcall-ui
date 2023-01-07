import { createStoreRequest } from 'store/helpers/request'
import type { WalletSliceState } from './adapter'
import { walletRequest } from './adapter'
const key = 'nft.tokenId.wallet'
const { reducer, select, useRequestController } = createStoreRequest<WalletSliceState>(key)(walletRequest)
export default reducer
export const walletReducer = reducer
export const walletSelect = select
export const useWalletController = useRequestController
