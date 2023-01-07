import { groupBy } from 'lodash'
export type WalletBaseData = {
  nftAddress: string
  tokenIds: string[]
}

export const getWalletBaseData = (data: any[]): WalletBaseData[] => {
  const map = groupBy(
    data.map(({ token_address, token_id }) => ({
      underlyingNFT: token_address,
      tokenId: token_id,
    })),
    'underlyingNFT'
  )
  return Object.keys(map).map((underlyingNFT) => ({
    nftAddress: underlyingNFT,
    tokenIds: map[underlyingNFT].map(({ tokenId }) => tokenId),
  }))
}
