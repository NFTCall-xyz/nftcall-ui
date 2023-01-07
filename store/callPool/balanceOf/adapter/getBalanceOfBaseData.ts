import type { BNValue } from 'lib/math/types'

export type BalanceOfBaseData = {
  callPool: string
  user: string
  value: string
}

export const getBalanceOfBaseData = (callPool: string, user: string, value: BNValue): BalanceOfBaseData => {
  return { callPool, user, value: value.toString() }
}
