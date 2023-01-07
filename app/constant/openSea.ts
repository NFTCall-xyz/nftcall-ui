import { ChainId } from 'lib/protocol/chain/types'

const getBaseUrl = (chainId: ChainId) => {
  switch (chainId) {
    case ChainId.goerli:
      return 'https://testnets-api.opensea.io'
    default:
      return 'https://api.opensea.io'
  }
}
export const getOpenSeaUrl = (chainId: ChainId, uri: string) => {
  return getBaseUrl(chainId) + uri
}
