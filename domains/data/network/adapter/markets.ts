import type { AddressData } from 'lib/protocol/market'

export type MarketId = 'CloneX'

export type MarketInfo = {
  symbol: string
}

const getMarketInfo = (id: MarketId): MarketInfo => {
  switch (id) {
    default:
      return {
        symbol: 'ETH',
      }
  }
}

export type ContractsAddress = {
  CallPool: string
  CallPoolForTest: string
  NFT: string
}

export type Market = {
  id: MarketId
  info: MarketInfo
  address: ContractsAddress
}

export const getMarkets = (address: AddressData) => {
  return Object.keys(address.markets)
    .filter((key) => address.markets[key as 'CloneX'].CallPool)
    .map((key) => {
      const id: MarketId = key as any
      const info = getMarketInfo(id)

      return {
        id,
        info,
        address: {
          ...address.markets[id],
        } as ContractsAddress,
      }
    })
}
