import { ChainId } from '../chain/types'
import type { NetworkConfig } from './types'

export const infuraId = 'b35fa1d7962a48c5a9afa529bec491e7'

export const networks: Record<ChainId, NetworkConfig> = {
  [ChainId.goerli]: {
    name: 'Goerli',
    fullName: 'Goerli',
    symbol: 'ETH',
    publicJsonRPCUrl: [`https://goerli.infura.io/v3/${infuraId}`],
  },
}

export function getNetwork(chainId: ChainId): NetworkConfig {
  const config = networks[chainId]
  return config || null
}
