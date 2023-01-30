import { createStoreRequest } from 'store/helpers/request'

import type { PreviewOpenCallSliceState } from './adapter'
import { previewOpenCallRequest } from './adapter'

const key = 'callPool.previewOpenCall'
const { reducer, select, useRequestController } =
  createStoreRequest<PreviewOpenCallSliceState>(key)(previewOpenCallRequest)
export default reducer
export const previewOpenCallReducer = reducer
export const previewOpenCallSelect = select
export const usePreviewOpenCallController = useRequestController
