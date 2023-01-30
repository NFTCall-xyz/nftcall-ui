import { toBN, weiToValue } from 'lib/math'

import type { BalanceOfBaseData } from './getBalanceOfBaseData'

export type BalanceOfData = BN

export const getBalanceOfData = (balanceOfBaseData: BalanceOfBaseData): BalanceOfData => {
  if (!balanceOfBaseData) return toBN(0)
  return weiToValue(balanceOfBaseData)
}
