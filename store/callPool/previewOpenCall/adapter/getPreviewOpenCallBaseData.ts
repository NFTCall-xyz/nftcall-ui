import type { NFTOracleData } from 'store/oracle/nftOracle/adapter/getNFTOracleData'
import { getPremium } from './premium'

export type GetPreviewOpenCallBaseDataProps = {
  curveIdx: number
  length: number
  nftOracle: NFTOracleData
}
export type PreviewOpenCallBaseData = {
  premiumTotal: string
  premiumToReserve: string
  premiumToOwner: string
}

export const getPreviewOpenCallBaseData = ({
  curveIdx,
  length,
  nftOracle: { vol, price },
}: GetPreviewOpenCallBaseDataProps): PreviewOpenCallBaseData => {
  try {
    const currentPremium = getPremium({
      curveIdx,
      vol,
    })
    const premiumTotal = price.multipliedBy(currentPremium)
    const premiumToReserve = premiumTotal.multipliedBy(0.1)
    const premiumToOwner = premiumTotal.minus(premiumToReserve)
    return {
      premiumTotal: premiumTotal.multipliedBy(length).toString(),
      premiumToReserve: premiumToReserve.multipliedBy(length).toString(),
      premiumToOwner: premiumToOwner.multipliedBy(length).toString(),
    }
  } catch (error) {
    return null
  }
}
