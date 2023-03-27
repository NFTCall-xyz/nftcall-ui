import { utils } from 'ethers'

import type { ChainId } from 'lib/wallet/constant/chains'
import { getChainInformationByChainId } from 'lib/wallet/constant/chains'
import type { Provider } from 'lib/wallet/provider/common-static-json-rpc-provider'

function isUnwrappedRpcResult(response: unknown): response is {
  error?: string
  result?: unknown
} {
  return typeof response === 'object' && response !== null && 'jsonrpc' in response
}

export function rpcResult(response: unknown): unknown | null {
  // Some providers don’t wrap the response
  if (isUnwrappedRpcResult(response)) {
    if (response.error) {
      throw new Error(response.error)
    }
    return response.result || null
  }

  return response || null
}

async function ethereumRequest(ethereum: Provider, method: string, params: any[]): Promise<any> {
  if (ethereum.send) {
    return ethereum.send(method, params).then(rpcResult)
  }

  throw new Error('The Ethereum provider does not seem to provide a request method.')
}

export async function switchEthereumChain(ethereum: Provider, chainId: ChainId) {
  const id = utils.hexValue(chainId)
  return ethereumRequest(ethereum, 'wallet_switchEthereumChain', [
    {
      chainId: id,
    },
  ]).catch((switchError) => {
    if (switchError.code === 4902) {
      const network = getChainInformationByChainId(chainId)
      if (!network) return Promise.reject(`${chainId} not support switch ethereum chain!`)
      return ethereumRequest(ethereum, 'wallet_addEthereumChain', [
        {
          chainId: id,
          chainName: network.name,
          rpcUrls: [network.publicJsonRPCUrl],
        },
      ])
    }
  })
}
