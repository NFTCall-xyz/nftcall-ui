export enum NFTStatus {
  'Deposited' = 'Deposited',
  'Listed' = 'Listed',
  'Called' = 'Called',
  'Removed' = 'Removed',
}
export type BaseNFT = {
  tokenId: string
  nftAddress: string
}
export type NFTActions = Partial<{
  setStatus: (status: NFTStatus) => void
  setLoading: (loading: boolean) => void
  update: () => void
}>
export type NFT = BaseNFT &
  Partial<{
    callPoolAddress: string
    status: NFTStatus
    minStrikePrice: number
    maxExpriyTime: number
    actions: NFTActions
  }>
