import type { WalletBaseData } from './getWalletBaseData'

export type NFT = {
  tokenId: string
  nftAddress: string
}
export type WalletData = {
  nftAddress: string
  tokenIds: string[]
}

export const getWalletData = (walletBaseData: WalletBaseData[]): WalletData[] => {
  if (!walletBaseData) return []
  return walletBaseData
}

export const getWalletDataByNFTs = (nfts: NFT[]) => {
  const wallet: WalletData[] = []
  let key = ''
  nfts.forEach(({ tokenId, nftAddress }) => {
    let walletData = wallet.find((i) => i.nftAddress === nftAddress)
    if (!walletData) {
      walletData = { nftAddress, tokenIds: [] }
      wallet.push(walletData)
    }
    walletData.tokenIds.push(tokenId)
    key += nftAddress + tokenId
  })
  return { wallet, key }
}

export const getWalletDataKeyByNFTs = (nfts: NFT[]) => {
  let key = ''
  nfts.forEach(({ tokenId, nftAddress }) => {
    key += nftAddress + tokenId
  })
  return key
}
