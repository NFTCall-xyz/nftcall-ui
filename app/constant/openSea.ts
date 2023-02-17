import { utils } from 'ethers'

import { ChainId } from 'lib/protocol/chain/types'

const getBaseUrl = (chainId: ChainId) => {
  switch (chainId) {
    case ChainId.goerli:
      // return 'https://testnets-api.opensea.io'
      return 'https://api.opensea.io'
    default:
      return 'https://api.opensea.io'
  }
}
export const getOpenSeaUrl = (chainId: ChainId, uri: string) => {
  return getBaseUrl(chainId) + uri
}

export const getOpenSeaMainNetworkAddress = (address: string) => {
  if (!address) return
  switch (utils.getAddress(address)) {
    case '0x734cea5fB4e4DabbC290d0418c035a6490532bEd': // Beanz
      return utils.getAddress('0x306b1ea3ecdf94ab739f1910bbda052ed4a9f949')
    case '0xa76EA6E4991b6E99cf0b8A8E9B39AE284BB800AA': // Potatoz
      return utils.getAddress('0x39ee2c7b3cb80254225884ca001f57118c8f21b6')
    case '0xab5Be10ce171107f186626BbCD52443518c02c85': // Valhalla
      return utils.getAddress('0x231d3559aa848bf10366fb9868590f01d34bf240')
    case '0xa05BC3bb9BCC1c50DAE47951792e4829D4Ba5B2C': // Checks
      return utils.getAddress('0x34eebee6942d8def3c125458d1a86e0a897fd6f9')
    case '0x3a18b9Bc84792083Ed69aCa64eadD6156Ff0ef26': // Otherdeed
      return utils.getAddress('0x34d85c9cdeb23fa97cb08333b511ac86e1c4e258')
    default:
      return address
  }
}
