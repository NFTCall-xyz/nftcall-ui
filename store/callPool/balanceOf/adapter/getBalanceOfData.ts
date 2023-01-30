import { weiToValue } from 'lib/math'

import type { BalanceOfBaseData } from './getBalanceOfBaseData'

export type BalanceOfData = {
  callPool: string
  user: string
  value: BN
}

export const getBalanceOfData = (balanceOfBaseData: BalanceOfBaseData[]): BalanceOfData[] => {
  if (!balanceOfBaseData) return []
  return balanceOfBaseData.map((i) => {
    return {
      ...i,
      value: weiToValue(i.value, 18),
    }
  })
}
