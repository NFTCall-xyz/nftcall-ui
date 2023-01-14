import type { BNValue } from 'lib/math/types'

export type TotalOpenInterestBaseData = {
  callPool: string
  value: string
}

export const getTotalOpenInterestBaseData = (callPool: string, value: BNValue): TotalOpenInterestBaseData => {
  return { callPool, value: value.toString() }
}
