import type { BaseNFT } from '../types'

export const getNFTId = (nft: BaseNFT) => {
  if (!nft) return
  return `${nft.nftAddress}_${nft.tokenId}`
}

export const resolveNFTId = (id: string) => {
  if (!id) return {} as undefined
  const [nftAddress, tokenId] = id.split('_')
  return {
    nftAddress,
    tokenId,
  }
}
