import type { ChainId } from 'lib/protocol/chain/types'

import type { Currency } from '../currency/types'

export type ChainInformation = {
  id: ChainId
  name: string
  currency: Currency
  explorerUrl: string
  publicJsonRPCUrl: string[]
}
