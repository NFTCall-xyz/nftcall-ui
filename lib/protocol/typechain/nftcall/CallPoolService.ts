import type { providers } from 'ethers'
import { constants } from 'ethers'
import { valueToWei, weiToValue } from 'lib/math'

import BaseService from '../commons/BaseService'
import type { ApproveType, EthereumTransactionTypeExtended, tEthereumAddress, transactionType } from '../commons/types'
import { eEthereumTxType } from '../commons/types'
import { DEFAULT_NULL_VALUE_ON_TX } from '../commons/utils'

import type { CallPool } from './typechain'
import { CallPool__factory } from './typechain'

type baseCallPoolProps = {
  callPool: tEthereumAddress
}

export type BalanceOfProps = baseCallPoolProps & {
  user: tEthereumAddress
}

export type CheckAvailableProps = baseCallPoolProps & {
  tokenId: string
}

export type DepositProps = baseCallPoolProps & {
  tokenId: tEthereumAddress
  user: tEthereumAddress
  nft: tEthereumAddress
  lowerStrikePriceGapIdx: number
  upperDurationIdx: number
  approveService: {
    approve: (args: ApproveType) => EthereumTransactionTypeExtended
    isApproved: (args: ApproveType) => Promise<boolean>
  }
}

export type WithdrawProps = baseCallPoolProps & {
  user: tEthereumAddress
  tokenId: string
}

export type ExerciseCallProps = baseCallPoolProps & {
  user: tEthereumAddress
  tokenId: string
  strikePrice: string
}

export type ClaimProps = baseCallPoolProps & {
  user: tEthereumAddress
  amount: string
}

export type TakeNFTOffMarketProps = baseCallPoolProps & {
  user: tEthereumAddress
  tokenId: string
}

export type RelistNFTProps = baseCallPoolProps & {
  user: tEthereumAddress
  tokenId: string
}

export type PreviewOpenCallProps = baseCallPoolProps & {
  tokenIds: string[]
  strikePriceGapIdx: number
  durationIdx: number
}

export type OpenCallProps = PreviewOpenCallProps & {
  user: tEthereumAddress
}

export class CallPoolService extends BaseService<CallPool> {
  provider: providers.Provider

  constructor(provider: providers.Provider) {
    super(provider, CallPool__factory)
    this.provider = provider

    this.balanceOf = this.balanceOf.bind(this)
    this.checkAvailable = this.checkAvailable.bind(this)
  }

  public balanceOf({ callPool, user }: BalanceOfProps) {
    const callPoolContractInstance = this.getContractInstance(callPool)
    return callPoolContractInstance.balanceOf(user)
  }

  public checkAvailable({ callPool, tokenId }: CheckAvailableProps) {
    const callPoolContractInstance = this.getContractInstance(callPool)
    return callPoolContractInstance.checkAvailable(tokenId)
  }

  public async deposit({
    callPool,
    user,
    nft,
    tokenId,
    approveService: { isApproved, approve },
    lowerStrikePriceGapIdx,
    upperDurationIdx,
  }: DepositProps) {
    const txs: EthereumTransactionTypeExtended[] = []
    const callPoolContractInstance = this.getContractInstance(callPool)
    const approveProps = {
      user,
      spender: callPool,
      token: nft,
      tokenId,
    }
    const approved = await isApproved(approveProps)
    if (!approved) {
      const approveTx: EthereumTransactionTypeExtended = approve(approveProps)
      txs.push(approveTx)
    }

    if (lowerStrikePriceGapIdx === 1 && upperDurationIdx === 3) {
      const txCallback: () => Promise<transactionType> = this.generateTxCallback({
        rawTxMethod: async () => callPoolContractInstance.populateTransaction.deposit(user, tokenId),
        from: user,
        value: DEFAULT_NULL_VALUE_ON_TX,
      })

      txs.push({
        tx: txCallback,
        txType: eEthereumTxType.DLP,
      })
    } else {
      const txCallback: () => Promise<transactionType> = this.generateTxCallback({
        rawTxMethod: async () =>
          callPoolContractInstance.populateTransaction.depositWithPreference(
            user,
            tokenId,
            lowerStrikePriceGapIdx,
            upperDurationIdx
          ),
        from: user,
        value: DEFAULT_NULL_VALUE_ON_TX,
      })

      txs.push({
        tx: txCallback,
        txType: eEthereumTxType.DLP,
      })
    }

    return txs
  }

  public withdraw({ callPool, user, tokenId }: WithdrawProps) {
    const callPoolContractInstance = this.getContractInstance(callPool)
    const txCallback: () => Promise<transactionType> = this.generateTxCallback({
      rawTxMethod: async () => callPoolContractInstance.populateTransaction.withdraw(user, tokenId),
      from: user,
      value: DEFAULT_NULL_VALUE_ON_TX,
    })
    return {
      tx: txCallback,
      txType: eEthereumTxType.DLP,
    }
  }

  public claim({ callPool, user, amount }: ClaimProps) {
    const convertedAmount: string =
      amount === '-1' ? constants.MaxUint256.toString() : valueToWei(amount, 18).toString()

    const callPoolContractInstance = this.getContractInstance(callPool)
    const txCallback: () => Promise<transactionType> = this.generateTxCallback({
      rawTxMethod: async () => callPoolContractInstance.populateTransaction.withdrawETH(user, convertedAmount),
      from: user,
      value: DEFAULT_NULL_VALUE_ON_TX,
    })
    return {
      tx: txCallback,
      txType: eEthereumTxType.DLP,
    }
  }

  public takeNFTOffMarket({ callPool, tokenId, user }: TakeNFTOffMarketProps) {
    const callPoolContractInstance = this.getContractInstance(callPool)
    const txCallback: () => Promise<transactionType> = this.generateTxCallback({
      rawTxMethod: async () => callPoolContractInstance.populateTransaction.takeNFTOffMarket(tokenId),
      from: user,
      value: DEFAULT_NULL_VALUE_ON_TX,
    })
    return {
      tx: txCallback,
      txType: eEthereumTxType.DLP,
    }
  }

  public relistNFT({ callPool, tokenId, user }: RelistNFTProps) {
    const callPoolContractInstance = this.getContractInstance(callPool)
    const txCallback: () => Promise<transactionType> = this.generateTxCallback({
      rawTxMethod: async () => callPoolContractInstance.populateTransaction.relistNFT(tokenId),
      from: user,
      value: DEFAULT_NULL_VALUE_ON_TX,
    })
    return {
      tx: txCallback,
      txType: eEthereumTxType.DLP,
    }
  }

  public async previewOpenCall({ callPool, tokenIds, strikePriceGapIdx, durationIdx }: PreviewOpenCallProps) {
    const tokenId = tokenIds[0]
    const callPoolContractInstance = this.getContractInstance(callPool)
    const { strikePrice, premiumToOwner, premiumToReserve } = await callPoolContractInstance.previewOpenCall(
      tokenId,
      strikePriceGapIdx,
      durationIdx
    )
    return {
      strikePrice: weiToValue(strikePrice).multipliedBy(tokenIds.length),
      premiumToOwner: weiToValue(premiumToOwner).multipliedBy(tokenIds.length),
      premiumToReserve: weiToValue(premiumToReserve).multipliedBy(tokenIds.length),
    }
  }

  public async openCall(props: OpenCallProps) {
    const callPoolContractInstance = this.getContractInstance(props.callPool)
    const { premiumToOwner, premiumToReserve } = await this.previewOpenCall(props)
    const { tokenIds, user, strikePriceGapIdx, durationIdx } = props
    let txCallback: () => Promise<transactionType>
    const value = valueToWei(premiumToOwner.plus(premiumToReserve)).toString()
    if (tokenIds.length === 1) {
      const tokenId = tokenIds[0]
      txCallback = this.generateTxCallback({
        rawTxMethod: async () =>
          callPoolContractInstance.populateTransaction.openCall(tokenId, strikePriceGapIdx, durationIdx),
        from: user,
        value,
      })
    } else {
      const { strikePriceGapIdxs, durationIdxs } = tokenIds.reduce(
        (obj) => {
          obj.strikePriceGapIdxs.push(strikePriceGapIdxs)
          obj.durationIdxs.push(durationIdx)
          return obj
        },
        {
          strikePriceGapIdxs: [],
          durationIdxs: [],
        }
      )
      txCallback = this.generateTxCallback({
        rawTxMethod: async () =>
          callPoolContractInstance.populateTransaction.openCallBatch(tokenIds, strikePriceGapIdxs, durationIdxs),
        from: user,
        value,
      })
    }
    return {
      tx: txCallback,
      txType: eEthereumTxType.DLP,
    }
  }

  public async exerciseCall({ callPool, tokenId, user, strikePrice }: ExerciseCallProps) {
    const callPoolContractInstance = this.getContractInstance(callPool)
    const txCallback: () => Promise<transactionType> = this.generateTxCallback({
      rawTxMethod: async () => callPoolContractInstance.populateTransaction.exerciseCall(tokenId),
      from: user,
      value: strikePrice,
    })
    return {
      tx: txCallback,
      txType: eEthereumTxType.DLP,
    }
  }
}
