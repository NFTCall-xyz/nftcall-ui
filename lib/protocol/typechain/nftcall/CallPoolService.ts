import type { providers } from 'ethers'
import { constants } from 'ethers'
import { valueToWei, weiToValue } from 'lib/math'

import BaseService from '../commons/BaseService'
import type { ApproveType, EthereumTransactionTypeExtended, tEthereumAddress, transactionType } from '../commons/types'
import { eEthereumTxType } from '../commons/types'
import { DEFAULT_NULL_VALUE_ON_TX } from '../commons/utils'

import type { CallPool } from './typechain'
import { CallPool__factory } from './typechain'

type BaseCallPoolProps = {
  callPool: tEthereumAddress
}

export type BalanceOfProps = BaseCallPoolProps & {
  user: tEthereumAddress
}

export type CheckAvailableProps = BaseCallPoolProps & {
  tokenId: string
}

export type DepositProps = BaseCallPoolProps & {
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

export type WithdrawProps = BaseCallPoolProps & {
  user: tEthereumAddress
  tokenId: string
}

export type ExerciseCallProps = BaseCallPoolProps & {
  user: tEthereumAddress
  tokenId: string
  strikePrice: string
}

export type ClaimProps = BaseCallPoolProps & {
  user: tEthereumAddress
  amount: string
}

export type TakeNFTOffMarketProps = BaseCallPoolProps & {
  user: tEthereumAddress
  tokenId: string
}

export type RelistNFTProps = BaseCallPoolProps & {
  user: tEthereumAddress
  tokenId: string
}

export type PreviewOpenCallProps = BaseCallPoolProps & {
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
    this.deposit = this.deposit.bind(this)
    this.withdraw = this.withdraw.bind(this)
    this.takeNFTOffMarket = this.takeNFTOffMarket.bind(this)
    this.relistNFT = this.relistNFT.bind(this)
    this.previewOpenCall = this.previewOpenCall.bind(this)
    this.openCall = this.openCall.bind(this)
    this.exerciseCall = this.exerciseCall.bind(this)
  }

  public balanceOf({ callPool, user }: BalanceOfProps) {
    const callPoolContract = this.getContractInstance(callPool)
    return callPoolContract.balanceOf(user)
  }

  public checkAvailable({ callPool, tokenId }: CheckAvailableProps) {
    const callPoolContract = this.getContractInstance(callPool)
    return callPoolContract.checkAvailable(tokenId)
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
    const callPoolContract = this.getContractInstance(callPool)
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
        rawTxMethod: async () => callPoolContract.populateTransaction.deposit(user, tokenId),
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
          callPoolContract.populateTransaction.depositWithPreference(
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
    const callPoolContract = this.getContractInstance(callPool)
    const txCallback: () => Promise<transactionType> = this.generateTxCallback({
      rawTxMethod: async () => callPoolContract.populateTransaction.withdraw(user, tokenId),
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

    const callPoolContract = this.getContractInstance(callPool)
    const txCallback: () => Promise<transactionType> = this.generateTxCallback({
      rawTxMethod: async () => callPoolContract.populateTransaction.withdrawETH(user, convertedAmount),
      from: user,
      value: DEFAULT_NULL_VALUE_ON_TX,
    })
    return {
      tx: txCallback,
      txType: eEthereumTxType.DLP,
    }
  }

  public takeNFTOffMarket({ callPool, tokenId, user }: TakeNFTOffMarketProps) {
    const callPoolContract = this.getContractInstance(callPool)
    const txCallback: () => Promise<transactionType> = this.generateTxCallback({
      rawTxMethod: async () => callPoolContract.populateTransaction.takeNFTOffMarket(tokenId),
      from: user,
      value: DEFAULT_NULL_VALUE_ON_TX,
    })
    return {
      tx: txCallback,
      txType: eEthereumTxType.DLP,
    }
  }

  public relistNFT({ callPool, tokenId, user }: RelistNFTProps) {
    const callPoolContract = this.getContractInstance(callPool)
    const txCallback: () => Promise<transactionType> = this.generateTxCallback({
      rawTxMethod: async () => callPoolContract.populateTransaction.relistNFT(tokenId),
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
    const callPoolContract = this.getContractInstance(callPool)
    const { strikePrice, premiumToOwner, premiumToReserve } = await callPoolContract.previewOpenCall(
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
    const callPoolContract = this.getContractInstance(props.callPool)
    const { premiumToOwner, premiumToReserve } = await this.previewOpenCall(props)
    const { tokenIds, user, strikePriceGapIdx, durationIdx } = props
    let txCallback: () => Promise<transactionType>
    const value = valueToWei(premiumToOwner.plus(premiumToReserve)).toString()
    if (tokenIds.length === 1) {
      const tokenId = tokenIds[0]
      txCallback = this.generateTxCallback({
        rawTxMethod: async () => callPoolContract.populateTransaction.openCall(tokenId, strikePriceGapIdx, durationIdx),
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
          callPoolContract.populateTransaction.openCallBatch(tokenIds, strikePriceGapIdxs, durationIdxs),
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
    const callPoolContract = this.getContractInstance(callPool)
    const txCallback: () => Promise<transactionType> = this.generateTxCallback({
      rawTxMethod: async () => callPoolContract.populateTransaction.exerciseCall(tokenId),
      from: user,
      value: strikePrice,
    })
    return {
      tx: txCallback,
      txType: eEthereumTxType.DLP,
    }
  }
}
