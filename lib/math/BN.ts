import BigNumber from 'bignumber.js'

import type { BNValue } from './types'

BigNumber.config({ EXPONENTIAL_AT: 1e9 })

export function toBN(amount: BNValue): BigNumber {
  let value: BigNumber.Value

  if (!amount) {
    value = 0
  } else if (amount instanceof BigNumber && !amount.isNaN()) {
    return amount
  } else if (typeof amount === 'string' || typeof amount === 'number') {
    value = amount
  } else if ('_hex' in amount) {
    value = amount._hex
  } else {
    value = amount.toString()
  }

  return new BigNumber(value)
}

export function valueToWei(n: BNValue, decimals = 18): BigNumber {
  return toBN(toBN(n).shiftedBy(decimals).integerValue())
}

export function weiToValue(n: BNValue, decimals = 18): BigNumber {
  return toBN(n).shiftedBy(decimals * -1)
}

export const BN = BigNumber
export { BigNumber as EthersBN } from '@ethersproject/bignumber'
