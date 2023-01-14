import { getNumber } from 'app/utils/get'
import { weiToValue } from 'lib/math'
import type { NFTOracleBaseData } from './getNFTOracleBaseData'

export type NFTOracleData = {
  nft: string
  price: BN
  vol: number
}

export const getNFTOracleData = (nftOracleBaseData: NFTOracleBaseData[]): NFTOracleData[] => {
  if (!nftOracleBaseData) return []
  return nftOracleBaseData.map((i) => {
    const { nft, price } = i
    return {
      nft,
      price: weiToValue(price, 18),
      ...getNumber(i, ['vol'], -2),
    }
  })
}
