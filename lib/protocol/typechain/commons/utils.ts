import { BigNumber, constants } from 'ethers'

export const DEFAULT_NULL_VALUE_ON_TX = BigNumber.from(0).toHexString()
export const DEFAULT_APPROVE_AMOUNT = constants.MaxUint256.toString()
export const SUPER_BIG_ALLOWANCE_NUMBER = '11579208923731619542357098500868790785326998466564056403945758400791'
