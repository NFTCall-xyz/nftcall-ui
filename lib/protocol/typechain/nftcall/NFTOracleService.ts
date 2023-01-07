import type { providers } from 'ethers'
import BaseService from '../commons/BaseService'
import type { tEthereumAddress } from '../commons/types'
import type { NFTOracle } from './typechain'
import { NFTOracle__factory } from './typechain'

interface BaseNFTOracleProps {
  nftOracle: tEthereumAddress
}

export interface GetAssetsProps extends BaseNFTOracleProps {
  nfts: tEthereumAddress[]
}

export class NFTOracleService extends BaseService<NFTOracle> {
  provider: providers.Provider

  constructor(provider: providers.Provider) {
    super(provider, NFTOracle__factory)
    this.provider = provider
    this.getAssets = this.getAssets.bind(this)
  }

  public async getAssets(props: GetAssetsProps) {
    const { nftOracle, nfts: nftAddresses } = props
    const nftOracleContract = this.getContractInstance(nftOracle)
    return nftOracleContract.getAssets(nftAddresses)
  }
}
