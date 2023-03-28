import type { BigNumber as EthersBN } from '@ethersproject/bignumber'
import type { BigNumber } from 'bignumber.js'

export type BN = BigNumber
export type BNValue =
  | string
  | number
  | BN
  | EthersBN
  | {
      _hex?: string
      _isBigNumber: true
    }
