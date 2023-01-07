import { toBN } from 'lib/math'

export type OracleBaseData = {
  nft: string
  price: string
  vol: number
}

export const getOracleBaseData = (nfts: string[], data: any[]): OracleBaseData[] => {
  return nfts.map((nft, index) => {
    const [price, vol] = data[index]
    return {
      nft,
      price: price.toString(),
      vol: toBN(vol).toNumber(),
    }
  })
}
