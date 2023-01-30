import type { NFTOracleData } from 'store/oracle/nftOracle/adapter/getNFTOracleData'

import { curveIdxs, getPremium } from './premium'

export type GetPreviewOpenCallBaseDataProps = {
  callPool: string
  nftOracle: NFTOracleData
}

type PremiumBaseData = {
  curveIdx: number
  currentPremium: string
}
export type PreviewOpenCallBaseData = {
  callPool: string
  vol: number
  premiums: PremiumBaseData[]
}

export const getPreviewOpenCallBaseData = ({
  callPool,
  nftOracle: { vol },
}: GetPreviewOpenCallBaseDataProps): PreviewOpenCallBaseData => {
  const premiums = curveIdxs
    .map((curveIdx) => {
      try {
        const currentPremium = getPremium({
          curveIdx,
          vol,
        })
        const premium: PremiumBaseData = {
          curveIdx,
          currentPremium: currentPremium.toString(),
        }
        return premium
      } catch (error) {
        return undefined
      }
    })
    .filter((i) => i)

  return {
    callPool,
    vol,
    premiums,
  }
}
