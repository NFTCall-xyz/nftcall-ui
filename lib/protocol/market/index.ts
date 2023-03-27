import goerli from 'lib/protocol/generate/goerli.json'
import ethereum from 'lib/protocol/generate/mainnet.json'
import { ChainId } from 'lib/wallet/constant/chains'

export type AddressData = {
  chainId: ChainId
} & typeof goerli

const list: Record<ChainId, typeof goerli> = {
  [ChainId.ethereum]: {
    ...ethereum,
  },
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

export const MARKETS: Record<number, AddressData> = {
  [ChainId.ethereum]: getMarketsData(ChainId.ethereum),
  [ChainId.goerli]: getMarketsData(ChainId.goerli),
}

export const defaultMarket = MARKETS[ChainId.ethereum]
export const getAddress = (chainId: ChainId) => MARKETS[chainId] || defaultMarket
export const marktetIds = Object.keys(defaultMarket.markets)
