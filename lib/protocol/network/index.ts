import { ChainId } from '../chain/types'
import type { NetworkConfig } from './types'

export const infuraId = 'dea011a2bebb451ba3602b02994145c1'

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
