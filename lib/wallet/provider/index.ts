import { FallbackProvider } from '@ethersproject/providers'

import type { ChainId } from '../constant/chains'
import { getChainInformationByChainId } from '../constant/chains'
import type { Provider } from './common-static-json-rpc-provider'
import { CommonStaticJsonRpcProvider } from './common-static-json-rpc-provider'

const cacheProviders = new Map<ChainId, Provider>()

const createConnectionInfo = (rpc: string) => {
  return {
    url: rpc,
  }
}

export const getProvider = (chainId: ChainId) => {
  const cacheProvider = cacheProviders.get(chainId)
  if (cacheProvider) return cacheProvider

  let provider: Provider
  const network = getChainInformationByChainId(chainId)

  if (network.publicJsonRPCUrl) {
    if (typeof network.publicJsonRPCUrl === 'string') {
      provider = new CommonStaticJsonRpcProvider(createConnectionInfo(network.publicJsonRPCUrl)) as any
    } else {
      const providers: any[] = []
      network.publicJsonRPCUrl.map((url) => {
        providers.push(new CommonStaticJsonRpcProvider(createConnectionInfo(url)))
      })
      provider = new FallbackProvider(providers) as any
    }
  } else {
    throw new Error(`${chainId} has no jsonRPCUrl configured`)
  }

  cacheProviders.set(chainId, provider)
  return provider
}
