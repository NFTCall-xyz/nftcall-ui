import type { BNValue } from 'lib/math/types'

export type BalanceOfBaseData = string

export const getBalanceOfBaseData = (value: BNValue): BalanceOfBaseData => {
  return value.toString()
}
