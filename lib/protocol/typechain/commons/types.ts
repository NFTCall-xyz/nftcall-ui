import type { BigNumber, PopulatedTransaction } from 'ethers'

export type tEthereumAddress = string
export type ENS = string // something.eth

export type TransactionGenerationMethod = {
  rawTxMethod: () => Promise<PopulatedTransaction>
  from: tEthereumAddress
  value?: string
}

export type transactionType = {
  value?: string
  from?: string
  to?: string
  nonce?: number
  gasLimit?: BigNumber
  gasPrice?: BigNumber
  data?: string
  chainId?: number
}

export enum eEthereumTxType {
  APPROVAL = 'APPROVAL',
  DLP = 'DLP',
}

export type EthereumTransactionTypeExtended = {
  txType: eEthereumTxType
  tx: () => Promise<transactionType>
}

export type ApproveType = {
  user: tEthereumAddress
  spender: tEthereumAddress
  token: tEthereumAddress
  tokenId?: string
  amount?: string
}
