import { ChainId } from 'lib/protocol/chain/types'

import { ETH, GoerliETH } from '../currency'
import type { ChainInformation } from './types'

export const infuraId = 'd178bf7e1786465d9f22f733d8106552'
export const walletconnectId = 'beb7948db9bda6e0d2316f7582d6b332'


export const CHAIN_INFORMATION: ChainInformation[] = [
  {
    id: ChainId.ethereum,
    currency: ETH,
    name: 'Ethereum',
    explorerUrl: `https://etherscan.io`,
    publicJsonRPCUrl: [`https://mainnet.infura.io/v3/${infuraId}`],
  },
  {
    id: ChainId.goerli,
    currency: GoerliETH,
    name: 'Goerli',
    explorerUrl: `https://goerli.etherscan.io`,
    publicJsonRPCUrl: [`https://goerli.infura.io/v3/${infuraId}`],
  },
]

export const getChainInformationByChainId = (chainId: ChainId) => {
  return CHAIN_INFORMATION.find((chainInformation) => chainInformation.id === chainId)
}

export const CHAIN_IDS = CHAIN_INFORMATION.map((i) => i.id)
