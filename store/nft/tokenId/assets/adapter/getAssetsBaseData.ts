import { cloneDeep } from 'lodash'
import type { AssetsData } from './getAssetsData'

export type AssetsBaseData = {
  image_thumbnail_url: string
  image_preview_url: string
  image_original_url: string
  image_url: string
  permalink: string
  nftAddress: string
  token_id: string
  token_metadata: string
}

export const getAssetsBaseData = (storeCacheData: AssetsData[], nftAddress: string, data: any[]): AssetsBaseData[] => {
  if (!data) return storeCacheData || []
  const returnValue: AssetsBaseData[] = []

  data.forEach(
    ({
      token_id,
      image_thumbnail_url,
      image_preview_url,
      image_original_url,
      image_url,
      permalink,
      token_metadata,
    }) => {
      const assetsData: AssetsBaseData = {
        nftAddress,
        token_id,
        image_thumbnail_url,
        image_preview_url,
        image_original_url,
        image_url,
        permalink,
        token_metadata,
      }
      returnValue.push(assetsData)
    },
    []
  )

  return [...returnValue, ...storeCacheData]
}
