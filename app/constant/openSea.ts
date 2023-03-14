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
    case '0x445b465bA8E68C6f2d50C29DB5B629E40F6e9978': // BAYC
      return utils.getAddress('0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d')
    case '0x88898d1596204a25C93CE4832D3fB98A99058Fe8': // MAYC
      return utils.getAddress('0x60e4d786628fea6478f785a6d7e704777c86a7c6')
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
    case '0x10DBCd5310FCE7bb9D16E7E4B4fDE9a1A15AF5B0': // CloneX
      return utils.getAddress('0x49cF6f5d44E70224e2E23fDcdd2C053F30aDA28B')
    case '0x85E3FCe05eE614f39133fA685798354df9A7f85A': // Moonbirds
      return utils.getAddress('0x23581767a106ae21c074b2276D25e5C3e136a68b')
    case '0x00E08ef200F274604F0201B7F780a43Df9cDEBbf': // Doodles
      return utils.getAddress('0x8a90CAb2b38dba80c64b7734e58Ee1dB38B8992e')
    default:
      return address
  }
}
