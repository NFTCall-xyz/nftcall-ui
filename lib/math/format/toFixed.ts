import { BN, toBN } from '../BN'
import type { BNValue } from '../types'

export const toFixed = (value: BNValue, maximumFractionDigits = 2) => {
  const BNDigit = BN.clone({ DECIMAL_PLACES: maximumFractionDigits })
  return new BNDigit(toBN(value)).div(1).toString()
}
