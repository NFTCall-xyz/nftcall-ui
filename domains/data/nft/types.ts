export type NFTStatus = 'Deposited' | 'Listed' | 'Called' | 'Removed'
export type BaseNFT = {
  tokenId: string
  nftAddress: string
}
export type NFT = BaseNFT &
  Partial<{
    status: NFTStatus
    minStrikePrice: number
    maxExpriyTime: number
  }>
