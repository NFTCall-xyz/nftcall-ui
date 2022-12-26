import { createStoreRequest } from 'store/helpers/request'
import type { PreviewOpenCallSliceState } from './adapter'
import { PreviewOpenCallRequest } from './adapter'
const key = 'nftcallProtocol.callPool.previewOpenCall'
const { reducer, select, useRequestController } =
  createStoreRequest<PreviewOpenCallSliceState>(key)(PreviewOpenCallRequest)
export default reducer
export const previewOpenCallReducer = reducer
export const previewOpenCallSelect = select
export const usePreviewOpenCallController = useRequestController
