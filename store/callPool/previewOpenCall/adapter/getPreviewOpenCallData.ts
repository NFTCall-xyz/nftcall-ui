import { toBN } from 'lib/math'
import type { PreviewOpenCallBaseData } from './getPreviewOpenCallBaseData'

export type PreviewOpenCallData = {
  premiumTotal: BN
  premiumToReserve: BN
  premiumToOwner: BN
}

export const getPreviewOpenCallData = (previewOpenCallBaseData: PreviewOpenCallBaseData[]): PreviewOpenCallData[] => {
  if (!previewOpenCallBaseData) return []
  return previewOpenCallBaseData.map(({ premiumTotal, premiumToReserve, premiumToOwner }) => ({
    premiumTotal: toBN(premiumTotal),
    premiumToReserve: toBN(premiumToReserve),
    premiumToOwner: toBN(premiumToOwner),
  }))
}
