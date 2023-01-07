import type { AssetsBaseData } from './getAssetsBaseData'

export type AssetsData = {
  image_thumbnail_url: string
  image_preview_url: string
  image_original_url: string
  image_url: string
  permalink: string
  nftAddress: string
  token_id: string
  token_metadata: string
}

export const getAssetsData = (assetsBaseData: AssetsBaseData[]): AssetsData[] => {
  if (!assetsBaseData) return []
  return assetsBaseData
}
