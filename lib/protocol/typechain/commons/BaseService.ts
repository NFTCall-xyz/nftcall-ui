import type { Provider } from '@ethersproject/providers'
import type { Contract, PopulatedTransaction, Signer, providers } from 'ethers'

import type { TransactionGenerationMethod, tEthereumAddress, transactionType } from './types'
import { DEFAULT_NULL_VALUE_ON_TX } from './utils'

export interface ContractsFactory {
  connect: (address: string, signerOrProvider: Signer | Provider) => Contract
}

export default class BaseService<T extends Contract> {
  readonly contractInstances: Record<string, T>

  readonly contractFactory: ContractsFactory

  readonly provider: providers.Provider

  constructor(provider: providers.Provider, contractFactory: ContractsFactory) {
    this.contractFactory = contractFactory
    this.provider = provider
    this.contractInstances = {}
  }

  public getContractInstance = (address: tEthereumAddress): T => {
    if (!this.contractInstances[address]) {
      this.contractInstances[address] = this.contractFactory.connect(address, this.provider) as T
    }

    return this.contractInstances[address]
  }

  readonly generateTxCallback =
    ({ rawTxMethod, from, value }: TransactionGenerationMethod): (() => Promise<transactionType>) =>
    async () => {
      const txRaw: PopulatedTransaction = await rawTxMethod()
      const tx: transactionType = {
        ...txRaw,
        from,
        value: value ?? DEFAULT_NULL_VALUE_ON_TX,
      }
      return tx
    }
}
