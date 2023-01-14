import { toBN } from 'lib/math'
import type { TotalOpenInterestBaseData } from './getTotalOpenInterestBaseData'

export type TotalOpenInterestData = {
  callPool: string
  value: number
}

export const getTotalOpenInterestData = (
  totalOpenInterestBaseData: TotalOpenInterestBaseData[]
): TotalOpenInterestData[] => {
  if (!totalOpenInterestBaseData) return []
  return totalOpenInterestBaseData.map((i) => {
    return {
      ...i,
      value: toBN(i.value).toNumber(),
    }
  })
}
