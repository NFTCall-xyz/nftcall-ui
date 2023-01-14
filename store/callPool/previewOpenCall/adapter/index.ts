import type { NFTOracleData } from 'store/oracle/nftOracle/adapter/getNFTOracleData'
import type { PreviewOpenCallBaseData } from './getPreviewOpenCallBaseData'
import { getPreviewOpenCallBaseData } from './getPreviewOpenCallBaseData'
import store from 'store'

export const getStoreCacheData = () => store.getState().callPool.previewOpenCall.data || ([] as undefined)
export type PreviewOpenCallProps = {
  getStoreCacheData: () => PreviewOpenCallBaseData[]
  callPool: string
  nftOracle: NFTOracleData
}

export const previewOpenCallRequest = ({ callPool, nftOracle, getStoreCacheData }: PreviewOpenCallProps) => {
  const storeCacheData = getStoreCacheData()
  const cacheData = storeCacheData.find((i) => i.callPool === callPool && i.vol === nftOracle.vol)
  return Promise.resolve(
    cacheData ? storeCacheData : [...storeCacheData, getPreviewOpenCallBaseData({ callPool, nftOracle })]
  )
}

export type PreviewOpenCallSliceState = Awaited<ReturnType<typeof previewOpenCallRequest>>
