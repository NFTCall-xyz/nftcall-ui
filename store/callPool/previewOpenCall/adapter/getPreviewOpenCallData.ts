import { toBN } from 'lib/math'
import type { PreviewOpenCallBaseData } from './getPreviewOpenCallBaseData'

export type PremiumData = {
  curveIdx: number
  currentPremium: BN
}
export type PreviewOpenCallData = {
  callPool: string
  vol: number
  premiums: PremiumData[]
}

export const getPreviewOpenCallData = (previewOpenCallBaseData: PreviewOpenCallBaseData[]): PreviewOpenCallData[] => {
  if (!previewOpenCallBaseData) return []
  return previewOpenCallBaseData.map(({ premiums, ...others }) => ({
    ...others,
    premiums: premiums.map((i) => ({
      ...i,
      currentPremium: toBN(i.currentPremium),
    })),
  }))
}
