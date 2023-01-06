import goerli from 'lib/protocol/generate/goerli.json'

import { ChainId } from '../chain/types'

export type AddressData = {
  chainId: ChainId
} & typeof goerli

const list: Record<ChainId, typeof goerli> = {
  [ChainId.goerli]: {
    ...goerli,
  },
} as any

const getMarketsData = (chainId: ChainId): AddressData => {
  const generateInfo = list[chainId]
  if (!generateInfo) throw new Error(`[getMarketsData] error. chainId => ${chainId}`)

  return {
    chainId,
    ...generateInfo,
  }
}

const MARKETS: Record<number, AddressData> = {
  [ChainId.goerli]: getMarketsData(ChainId.goerli),
}

export const defaultMarket = MARKETS[ChainId.goerli]
export const getAddress = (chainId: ChainId) => MARKETS[chainId] || defaultMarket
export const marktetIds = Object.keys(defaultMarket.markets)
