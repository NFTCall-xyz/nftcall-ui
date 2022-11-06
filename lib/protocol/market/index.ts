import goerli from 'lib/protocol/generate/goerli.json'
import bsc_testnet from 'lib/protocol/generate/bsc_testnet.json'

import { ChainId } from '../chain/types'

export type AddressData = {
  chainId: ChainId
} & typeof goerli

const list: Record<ChainId, typeof goerli> = {
  [ChainId.goerli]: {
    ...goerli,
  },
  [ChainId.bsc_testnet]: {
    ...bsc_testnet,
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
  // [ChainId.ethereum]: getMarketsData(ChainId.ethereum),
  [ChainId.goerli]: getMarketsData(ChainId.goerli),
  [ChainId.bsc_testnet]: getMarketsData(ChainId.bsc_testnet),
}

export const defaultMarket = MARKETS[ChainId.goerli]
export const getAddress = (chainId: ChainId) => MARKETS[chainId] || defaultMarket
export const marktetIds = Object.keys(defaultMarket.markets)
