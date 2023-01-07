import type { NFTOracleData } from 'store/oracle/nftOracle/adapter/getNFTOracleData'
import { curveIdxs } from './premium'
import { getPreviewOpenCallBaseData } from './getPreviewOpenCallBaseData'

export type PreviewOpenCallProps = {
  tokenIds: string[]
  nftOracle: NFTOracleData
}

export const previewOpenCallRequest = ({ tokenIds, nftOracle }: PreviewOpenCallProps) => {
  const length = tokenIds.length
  return Promise.resolve(curveIdxs.map((curveIdx) => getPreviewOpenCallBaseData({ curveIdx, length, nftOracle })))
}

export type PreviewOpenCallSliceState = Awaited<ReturnType<typeof previewOpenCallRequest>>
