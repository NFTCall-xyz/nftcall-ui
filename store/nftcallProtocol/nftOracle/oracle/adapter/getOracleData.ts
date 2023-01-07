import { weiToValue } from 'lib/math'
import type { OracleBaseData } from './getOracleBaseData'

export type OracleData = {
  nft: string
  price: BN
  vol: number
}

export const getOracleData = (oracleBaseData: OracleBaseData[]): OracleData[] => {
  if (!oracleBaseData) return []
  return oracleBaseData.map(({ nft, price, vol }) => {
    return {
      nft,
      price: weiToValue(price, 18),
      vol,
    }
  })
}
