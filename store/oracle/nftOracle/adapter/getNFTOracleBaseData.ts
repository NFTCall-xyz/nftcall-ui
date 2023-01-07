import { toBN } from 'lib/math'

export type NFTOracleBaseData = {
  nft: string
  price: string
  vol: number
}

export const getNFTOracleBaseData = (nfts: string[], data: any[]): NFTOracleBaseData[] => {
  return nfts.map((nft, index) => {
    const [price, vol] = data[index]
    return {
      nft,
      price: price.toString(),
      vol: toBN(vol).toNumber(),
    }
  })
}
