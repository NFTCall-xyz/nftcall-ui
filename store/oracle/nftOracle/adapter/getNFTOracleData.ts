import { weiToValue } from 'lib/math'
import type { NFTOracleBaseData } from './getNFTOracleBaseData'

export type NFTOracleData = {
  nft: string
  price: BN
  vol: number
}

export const getNFTOracleData = (nftOracleBaseData: NFTOracleBaseData[]): NFTOracleData[] => {
  if (!nftOracleBaseData) return []
  return nftOracleBaseData.map(({ nft, price, vol }) => {
    return {
      nft,
      price: weiToValue(price, 18),
      vol,
    }
  })
}
