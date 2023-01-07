import type { WalletBaseData } from './getWalletBaseData'

export type WalletData = {
  nftAddress: string
  tokenIds: string[]
}

export const getWalletData = (walletBaseData: WalletBaseData[]): WalletData[] => {
  if (!walletBaseData) return []
  return walletBaseData
}
