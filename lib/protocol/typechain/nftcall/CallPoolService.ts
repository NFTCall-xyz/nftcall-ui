import type { providers } from 'ethers'
import { constants } from 'ethers'

import { valueToWei, weiToValue } from 'lib/math'

import BaseService from '../commons/BaseService'
import type { ApproveType, EthereumTransactionTypeExtended, tEthereumAddress, transactionType } from '../commons/types'
import { eEthereumTxType } from '../commons/types'
import { DEFAULT_NULL_VALUE_ON_TX } from '../commons/utils'
import type { IsApprovalForAll, SetApprovalForAll } from '../erc721-contract'
import type { CallPool } from './typechain'
import { CallPool__factory } from './typechain'

type BaseCallPoolProps = {
  callPool: tEthereumAddress
}

export type BalanceOfProps = BaseCallPoolProps & {
  user: tEthereumAddress
}

export type PausedfProps = BaseCallPoolProps

export type TotalOpenInterest = BaseCallPoolProps

export type CheckAvailableProps = BaseCallPoolProps & {
  tokenId: string
}

export type DepositProps = BaseCallPoolProps & {
  tokenIds: tEthereumAddress[]
  user: tEthereumAddress
  nft: tEthereumAddress
  lowerStrikePriceGapIdx?: number
  upperDurationIdx?: number
  lowerLimitOfStrikePrice?: string
  lowerStrikePriceGapIdxs?: number[]
  upperDurationIdxs?: number[]
  lowerLimitOfStrikePrices?: string[]
  approveService: {
    approve: (args: ApproveType) => EthereumTransactionTypeExtended
    setApprovalForAll: (args: SetApprovalForAll) => EthereumTransactionTypeExtended[]
    isApproved: (args: ApproveType) => Promise<boolean>
    isApprovedForAll: (args: IsApprovalForAll) => Promise<boolean>
  }
}

export type WithdrawProps = BaseCallPoolProps & {
  user: tEthereumAddress
  tokenIds: string[]
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
  tokenIds: string[]
}

export type RelistNFTProps = BaseCallPoolProps & {
  user: tEthereumAddress
  tokenIds: string[]
}

export type ChangePreferenceProps = BaseCallPoolProps & {
  user: tEthereumAddress
  tokenIds: string[]
  lowerStrikePriceGapIdx?: number
  upperDurationIdx?: number
  lowerLimitOfStrikePrice?: string
  lowerStrikePriceGapIdxs?: number[]
  upperDurationIdxs?: number[]
  lowerLimitOfStrikePrices?: string[]
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
    this.totalOpenInterest = this.totalOpenInterest.bind(this)
    this.checkAvailable = this.checkAvailable.bind(this)
    this.deposit = this.deposit.bind(this)
    this.withdraw = this.withdraw.bind(this)
    this.takeNFTOffMarket = this.takeNFTOffMarket.bind(this)
    this.relistNFT = this.relistNFT.bind(this)
    this.changePreference = this.changePreference.bind(this)
    this.previewOpenCall = this.previewOpenCall.bind(this)
    this.openCall = this.openCall.bind(this)
    this.exerciseCall = this.exerciseCall.bind(this)
  }

  public balanceOf({ callPool, user }: BalanceOfProps) {
    const callPoolContract = this.getContractInstance(callPool)
    return callPoolContract.balanceOf(user)
  }

  public paused({ callPool }: PausedfProps) {
    const callPoolContract = this.getContractInstance(callPool)
    return callPoolContract.paused()
  }

  public totalOpenInterest({ callPool }: TotalOpenInterest) {
    const callPoolContract = this.getContractInstance(callPool)
    return callPoolContract.totalOpenInterest()
  }

  public checkAvailable({ callPool, tokenId }: CheckAvailableProps) {
    const callPoolContract = this.getContractInstance(callPool)
    return callPoolContract.checkAvailable(tokenId)
  }

  public async deposit({
    callPool,
    user,
    nft,
    tokenIds,
    approveService: { isApproved, approve, isApprovedForAll, setApprovalForAll },
    lowerStrikePriceGapIdx,
    upperDurationIdx,
    lowerLimitOfStrikePrice,
    lowerStrikePriceGapIdxs,
    upperDurationIdxs,
    lowerLimitOfStrikePrices,
  }: DepositProps) {
    const txs: EthereumTransactionTypeExtended[] = []
    const callPoolContract = this.getContractInstance(callPool)

    if (!tokenIds.length) return txs

    const isSingleParameter = !lowerStrikePriceGapIdxs

    const isDefaultDeposit =
      !isSingleParameter && lowerStrikePriceGapIdx === 1 && upperDurationIdx === 3 && lowerLimitOfStrikePrice === '0'
    if (tokenIds.length === 1) {
      const tokenId = tokenIds[0]
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

      if (isDefaultDeposit) {
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
              upperDurationIdx,
              lowerLimitOfStrikePrice
            ),
          from: user,
          value: DEFAULT_NULL_VALUE_ON_TX,
        })

        txs.push({
          tx: txCallback,
          txType: eEthereumTxType.DLP,
        })
      }
    } else {
      const approveProps = {
        user,
        spender: callPool,
        token: nft,
        value: true,
      }
      const approved = await isApprovedForAll(approveProps)
      if (!approved) {
        const approveTx: EthereumTransactionTypeExtended = setApprovalForAll(approveProps)[0]
        txs.push(approveTx)
      }

      if (isDefaultDeposit) {
        const txCallback: () => Promise<transactionType> = this.generateTxCallback({
          rawTxMethod: async () => callPoolContract.populateTransaction.depositBatch(user, tokenIds),
          from: user,
          value: DEFAULT_NULL_VALUE_ON_TX,
        })

        txs.push({
          tx: txCallback,
          txType: eEthereumTxType.DLP,
        })
      } else {
        if (isSingleParameter) {
          lowerStrikePriceGapIdxs = []
          upperDurationIdxs = []
          lowerLimitOfStrikePrices = []

          for (let i = 0; i < tokenIds.length; i++) {
            lowerStrikePriceGapIdxs.push(lowerStrikePriceGapIdx)
            upperDurationIdxs.push(upperDurationIdx)
            lowerLimitOfStrikePrices.push(lowerLimitOfStrikePrice)
          }
        }

        const txCallback: () => Promise<transactionType> = this.generateTxCallback({
          rawTxMethod: async () =>
            callPoolContract.populateTransaction.depositWithPreferenceBatch(
              user,
              tokenIds,
              lowerStrikePriceGapIdxs,
              upperDurationIdxs,
              lowerLimitOfStrikePrices
            ),
          from: user,
          value: DEFAULT_NULL_VALUE_ON_TX,
        })

        txs.push({
          tx: txCallback,
          txType: eEthereumTxType.DLP,
        })
      }
    }

    return txs
  }

  public async withdraw({ callPool, user, tokenIds }: WithdrawProps) {
    const callPoolContract = this.getContractInstance(callPool)
    let txCallback: () => Promise<transactionType>
    if (tokenIds.length === 1) {
      const tokenId = tokenIds[0]
      txCallback = this.generateTxCallback({
        rawTxMethod: async () => callPoolContract.populateTransaction.withdraw(user, tokenId),
        from: user,
        value: DEFAULT_NULL_VALUE_ON_TX,
      })
    } else {
      txCallback = this.generateTxCallback({
        rawTxMethod: async () => callPoolContract.populateTransaction.withdrawBatch(user, tokenIds),
        from: user,
        value: DEFAULT_NULL_VALUE_ON_TX,
      })
    }

    return [
      {
        tx: txCallback,
        txType: eEthereumTxType.DLP,
      },
    ]
  }

  public async claim({ callPool, user, amount }: ClaimProps) {
    const convertedAmount: string =
      amount === '-1' ? constants.MaxUint256.toString() : valueToWei(amount, 18).toString()

    const callPoolContract = this.getContractInstance(callPool)
    const txCallback: () => Promise<transactionType> = this.generateTxCallback({
      rawTxMethod: async () => callPoolContract.populateTransaction.withdrawETH(user, convertedAmount),
      from: user,
      value: DEFAULT_NULL_VALUE_ON_TX,
    })
    return [
      {
        tx: txCallback,
        txType: eEthereumTxType.DLP,
      },
    ]
  }

  public async takeNFTOffMarket({ callPool, tokenIds, user }: TakeNFTOffMarketProps) {
    const callPoolContract = this.getContractInstance(callPool)
    let txCallback: () => Promise<transactionType>
    if (tokenIds.length === 1) {
      const tokenId = tokenIds[0]
      txCallback = this.generateTxCallback({
        rawTxMethod: async () => callPoolContract.populateTransaction.takeNFTOffMarket(tokenId),
        from: user,
        value: DEFAULT_NULL_VALUE_ON_TX,
      })
    } else {
      txCallback = this.generateTxCallback({
        rawTxMethod: async () => callPoolContract.populateTransaction.takeNFTOffMarketBatch(tokenIds),
        from: user,
        value: DEFAULT_NULL_VALUE_ON_TX,
      })
    }
    return [
      {
        tx: txCallback,
        txType: eEthereumTxType.DLP,
      },
    ]
  }

  public async relistNFT({ callPool, tokenIds, user }: RelistNFTProps) {
    const callPoolContract = this.getContractInstance(callPool)
    let txCallback: () => Promise<transactionType>
    if (tokenIds.length === 1) {
      const tokenId = tokenIds[0]
      txCallback = this.generateTxCallback({
        rawTxMethod: async () => callPoolContract.populateTransaction.relistNFT(tokenId),
        from: user,
        value: DEFAULT_NULL_VALUE_ON_TX,
      })
    } else {
      txCallback = this.generateTxCallback({
        rawTxMethod: async () => callPoolContract.populateTransaction.relistNFTBatch(tokenIds),
        from: user,
        value: DEFAULT_NULL_VALUE_ON_TX,
      })
    }
    return [
      {
        tx: txCallback,
        txType: eEthereumTxType.DLP,
      },
    ]
  }

  public async changePreference({
    callPool,
    user,
    tokenIds,
    lowerStrikePriceGapIdx,
    upperDurationIdx,
    lowerLimitOfStrikePrice,
    lowerStrikePriceGapIdxs,
    upperDurationIdxs,
    lowerLimitOfStrikePrices,
  }: ChangePreferenceProps) {
    let txCallback: () => Promise<transactionType>
    const callPoolContract = this.getContractInstance(callPool)
    const isSingleParameter = !lowerStrikePriceGapIdxs

    if (tokenIds.length === 1) {
      const tokenId = tokenIds[0]
      txCallback = this.generateTxCallback({
        rawTxMethod: async () =>
          callPoolContract.populateTransaction.changePreference(
            tokenId,
            lowerStrikePriceGapIdx,
            upperDurationIdx,
            lowerLimitOfStrikePrice
          ),
        from: user,
        value: DEFAULT_NULL_VALUE_ON_TX,
      })
    } else {
      if (isSingleParameter) {
        lowerStrikePriceGapIdxs = []
        upperDurationIdxs = []
        lowerLimitOfStrikePrices = []

        for (let i = 0; i < tokenIds.length; i++) {
          lowerStrikePriceGapIdxs.push(lowerStrikePriceGapIdx)
          upperDurationIdxs.push(upperDurationIdx)
          lowerLimitOfStrikePrices.push(lowerLimitOfStrikePrice)
        }
      }
      txCallback = this.generateTxCallback({
        rawTxMethod: async () =>
          callPoolContract.populateTransaction.changePreferenceBatch(
            tokenIds,
            lowerStrikePriceGapIdxs,
            upperDurationIdxs,
            lowerLimitOfStrikePrices
          ),
        from: user,
        value: DEFAULT_NULL_VALUE_ON_TX,
      })
    }
    return [
      {
        tx: txCallback,
        txType: eEthereumTxType.DLP,
      },
    ]
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
          obj.strikePriceGapIdxs.push(strikePriceGapIdx)
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
    return [
      {
        tx: txCallback,
        txType: eEthereumTxType.DLP,
      },
    ]
  }

  public async exerciseCall({ callPool, tokenId, user, strikePrice }: ExerciseCallProps) {
    const callPoolContract = this.getContractInstance(callPool)
    const txCallback: () => Promise<transactionType> = this.generateTxCallback({
      rawTxMethod: async () => callPoolContract.populateTransaction.exerciseCall(tokenId),
      from: user,
      value: strikePrice,
    })
    return [
      {
        tx: txCallback,
        txType: eEthereumTxType.DLP,
      },
    ]
  }
}
