import type { PreviewOpenCallBaseData } from './getPreviewOpenCallBaseData'
import { getPreviewOpenCallBaseData } from './getPreviewOpenCallBaseData'

export type PreviewOpenCallProps = {}

export const PreviewOpenCallRequest = (props: PreviewOpenCallProps) => {}

export type PreviewOpenCallSliceState = Awaited<ReturnType<typeof PreviewOpenCallRequest>>
