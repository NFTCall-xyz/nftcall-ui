import { createStoreRequest } from "store/helpers/request";
import type { AssetsSliceState } from "./adapter";
import { assetsRequest } from "./adapter";
const key = 'nft.tokenId.assets'
const { reducer, select, useRequestController } = createStoreRequest<AssetsSliceState>(key)(assetsRequest)
export default reducer
export const assetsReducer = reducer
export const assetsSelect = select
export const useAssetsController = useRequestController
