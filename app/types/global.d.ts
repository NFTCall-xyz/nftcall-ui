import type { FC as AppFC } from 'react'

import type { FCC as AppFCC } from 'app/types'

import type { BN as BigNumber } from 'lib/math/types'

declare global {
  declare type FCC<T = {}> = AppFCC<T>
  declare type FC<T = {}> = AppFC<T>
  declare type BN = BigNumber

  declare const __SERVER__: boolean
  declare const __DEV__: boolean

  declare interface Window {
    ethereum: {
      /**
       * Hex
       */
      chainId: string

      on: (key: 'chainChanged', fn: (...args: any[]) => void) => void
      removeListener: (key: 'chainChanged', fn: (...args: any[]) => void) => void
    }
  }
}
