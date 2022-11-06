import type { NetworkConfig } from './types'
import { ChainId } from '../chain/types'

export const infuraId = 'dea011a2bebb451ba3602b02994145c1'

export const networks: Record<ChainId, NetworkConfig> = {
  [ChainId.goerli]: {
    name: 'Goerli',
    fullName: 'Goerli',
    symbol: 'ETH',
    publicJsonRPCUrl: [`https://goerli.infura.io/v3/${infuraId}`],
  },
  [ChainId.ethereum]: {
    name: 'Ethereum',
    fullName: 'Ethereum',
    symbol: 'ETH',
    publicJsonRPCUrl: [`https://mainnet.infura.io/v3/${infuraId}`],
  },
  [ChainId.bsc_testnet]: {
    name: 'BSC Testnet',
    fullName: 'Binance Smart Chain Testnet',
    symbol: 'tBNB',
    publicJsonRPCUrl: ['https://data-seed-prebsc-1-s1.binance.org:8545'],
  },
}

export function getNetwork(chainId: ChainId): NetworkConfig {
  const config = networks[chainId]
  return config || null
}
