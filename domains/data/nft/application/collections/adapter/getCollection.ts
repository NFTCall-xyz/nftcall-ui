export type BaseCollection = {
  name: string
  mainNetworkAddress: string
  description: string
  bannerImageUrl: string
  imageUrl: string
  callTokenImageUrl: string
  tokenMetaUrl: string
  symbol: string
}
export const getCollection = (
  mainNetworkAddress: string,
  { banner_image_url, description, name, image_url, callTokenImageUrl, tokenMetaUrl, symbol }: any
): BaseCollection => {
  return {
    name,
    mainNetworkAddress,
    description,
    bannerImageUrl: banner_image_url,
    imageUrl: image_url,
    callTokenImageUrl,
    tokenMetaUrl,
    symbol,
  }
}
