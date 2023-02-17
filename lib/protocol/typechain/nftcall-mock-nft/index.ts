import type { providers } from 'ethers'

import BaseService from '../commons/BaseService'
import type { EthereumTransactionTypeExtended, tEthereumAddress, transactionType } from '../commons/types'
import { eEthereumTxType } from '../commons/types'
import { DEFAULT_NULL_VALUE_ON_TX } from '../commons/utils'
import type { MockNFT } from './typechain'
import { MockNFT__factory } from './typechain'

interface BaseMockNFTProps {
  nftAddress: tEthereumAddress
}

export interface MintProps extends BaseMockNFTProps {
  userAddress: tEthereumAddress
}

export class MockNFTService extends BaseService<MockNFT> {
  provider: providers.Provider

  constructor(provider: providers.Provider) {
    super(provider, MockNFT__factory)
    this.provider = provider
    this.mint = this.mint.bind(this)
  }

  public async mint(props: MintProps) {
    const txs: EthereumTransactionTypeExtended[] = []
    const { nftAddress, userAddress } = props
    const nftOracleContract = this.getContractInstance(nftAddress)
    const txCallback: () => Promise<transactionType> = this.generateTxCallback({
      rawTxMethod: async () => nftOracleContract.populateTransaction.mint(),
      from: userAddress,
      value: DEFAULT_NULL_VALUE_ON_TX,
    })

    txs.push({
      tx: txCallback,
      txType: eEthereumTxType.DLP,
    })
    return txs
  }
}
