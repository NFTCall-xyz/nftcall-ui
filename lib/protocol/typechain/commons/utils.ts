import { BigNumber, constants } from 'ethers'

export const DEFAULT_NULL_VALUE_ON_TX = BigNumber.from(0).toHexString()
export const DEFAULT_APPROVE_AMOUNT = constants.MaxUint256.toString()
