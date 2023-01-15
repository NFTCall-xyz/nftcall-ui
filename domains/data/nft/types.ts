export type NFTStatus = 'Deposited' | 'Listed' | 'Called' | 'Removed'
export type BaseNFT = {
  tokenId: string
  nftAddress: string
}
export type NFTActions = Partial<{
  setStatus: (status: NFTStatus) => void
  setLoading: (loading: boolean) => void
}>
export type NFT = BaseNFT &
  Partial<{
    callPoolAddress: string
    status: NFTStatus
    minStrikePrice: number
    maxExpriyTime: number
    actions: NFTActions
  }>
