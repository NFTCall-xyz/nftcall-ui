/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { FunctionFragment, Result } from '@ethersproject/abi'
import type { Listener, Provider } from '@ethersproject/providers'
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers'

import type { OnEvent, PromiseOrValue, TypedEvent, TypedEventFilter, TypedListener } from '../../../common'

export declare namespace DataTypes {
  export type NFTStatusOutputStruct = {
    ifOnMarket: PromiseOrValue<boolean>
    minimumStrikeGapIdx: PromiseOrValue<BigNumberish>
    maximumDurationIdx: PromiseOrValue<BigNumberish>
    exerciseTime: PromiseOrValue<BigNumberish>
    endTime: PromiseOrValue<BigNumberish>
    minimumStrikePrice: PromiseOrValue<BigNumberish>
    strikePrice: PromiseOrValue<BigNumberish>
  }

  export type NFTStatusOutputStructOutput = [boolean, number, number, BigNumber, BigNumber, BigNumber, BigNumber] & {
    ifOnMarket: boolean
    minimumStrikeGapIdx: number
    maximumDurationIdx: number
    exerciseTime: BigNumber
    endTime: BigNumber
    minimumStrikePrice: BigNumber
    strikePrice: BigNumber
  }
}

export interface ICallPoolStateInterface extends utils.Interface {
  functions: {
    'balanceOf(address)': FunctionFragment
    'getEndTime(uint256)': FunctionFragment
    'getNFTStatus(uint256)': FunctionFragment
    'getNFTStatusBatch(uint256[])': FunctionFragment
    'previewOpenCall(uint256,uint8,uint8)': FunctionFragment
    'previewOpenCallBatch(uint256[],uint8[],uint8[])': FunctionFragment
    'totalOpenInterest()': FunctionFragment
  }

  getFunction(
    nameOrSignatureOrTopic:
      | 'balanceOf'
      | 'getEndTime'
      | 'getNFTStatus'
      | 'getNFTStatusBatch'
      | 'previewOpenCall'
      | 'previewOpenCallBatch'
      | 'totalOpenInterest'
  ): FunctionFragment

  encodeFunctionData(functionFragment: 'balanceOf', values: [PromiseOrValue<string>]): string
  encodeFunctionData(functionFragment: 'getEndTime', values: [PromiseOrValue<BigNumberish>]): string
  encodeFunctionData(functionFragment: 'getNFTStatus', values: [PromiseOrValue<BigNumberish>]): string
  encodeFunctionData(functionFragment: 'getNFTStatusBatch', values: [PromiseOrValue<BigNumberish>[]]): string
  encodeFunctionData(
    functionFragment: 'previewOpenCall',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string
  encodeFunctionData(
    functionFragment: 'previewOpenCallBatch',
    values: [PromiseOrValue<BigNumberish>[], PromiseOrValue<BigNumberish>[], PromiseOrValue<BigNumberish>[]]
  ): string
  encodeFunctionData(functionFragment: 'totalOpenInterest', values?: undefined): string

  decodeFunctionResult(functionFragment: 'balanceOf', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getEndTime', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getNFTStatus', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getNFTStatusBatch', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'previewOpenCall', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'previewOpenCallBatch', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'totalOpenInterest', data: BytesLike): Result

  events: {}
}

export interface ICallPoolState extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  interface: ICallPoolStateInterface

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>
  listeners(eventName?: string): Array<Listener>
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this
  removeAllListeners(eventName?: string): this
  off: OnEvent<this>
  on: OnEvent<this>
  once: OnEvent<this>
  removeListener: OnEvent<this>

  functions: {
    balanceOf(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>

    getEndTime(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>

    getNFTStatus(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[DataTypes.NFTStatusOutputStructOutput]>

    getNFTStatusBatch(
      tokenIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<[DataTypes.NFTStatusOutputStructOutput[]]>

    previewOpenCall(
      tokenId: PromiseOrValue<BigNumberish>,
      strikePriceGapIdx: PromiseOrValue<BigNumberish>,
      durationIdx: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        strikePrice: BigNumber
        premiumToOwner: BigNumber
        premiumToReserve: BigNumber
        errorCode: BigNumber
      }
    >

    previewOpenCallBatch(
      tokenIds: PromiseOrValue<BigNumberish>[],
      strikePriceGaps: PromiseOrValue<BigNumberish>[],
      durations: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<
      [BigNumber[], BigNumber[], BigNumber[], BigNumber[]] & {
        strikePrices: BigNumber[]
        premiumsToOwner: BigNumber[]
        premiumsToReserve: BigNumber[]
        errorCodes: BigNumber[]
      }
    >

    totalOpenInterest(overrides?: CallOverrides): Promise<[BigNumber]>
  }

  balanceOf(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>

  getEndTime(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>

  getNFTStatus(
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<DataTypes.NFTStatusOutputStructOutput>

  getNFTStatusBatch(
    tokenIds: PromiseOrValue<BigNumberish>[],
    overrides?: CallOverrides
  ): Promise<DataTypes.NFTStatusOutputStructOutput[]>

  previewOpenCall(
    tokenId: PromiseOrValue<BigNumberish>,
    strikePriceGapIdx: PromiseOrValue<BigNumberish>,
    durationIdx: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber] & {
      strikePrice: BigNumber
      premiumToOwner: BigNumber
      premiumToReserve: BigNumber
      errorCode: BigNumber
    }
  >

  previewOpenCallBatch(
    tokenIds: PromiseOrValue<BigNumberish>[],
    strikePriceGaps: PromiseOrValue<BigNumberish>[],
    durations: PromiseOrValue<BigNumberish>[],
    overrides?: CallOverrides
  ): Promise<
    [BigNumber[], BigNumber[], BigNumber[], BigNumber[]] & {
      strikePrices: BigNumber[]
      premiumsToOwner: BigNumber[]
      premiumsToReserve: BigNumber[]
      errorCodes: BigNumber[]
    }
  >

  totalOpenInterest(overrides?: CallOverrides): Promise<BigNumber>

  callStatic: {
    balanceOf(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>

    getEndTime(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>

    getNFTStatus(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<DataTypes.NFTStatusOutputStructOutput>

    getNFTStatusBatch(
      tokenIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<DataTypes.NFTStatusOutputStructOutput[]>

    previewOpenCall(
      tokenId: PromiseOrValue<BigNumberish>,
      strikePriceGapIdx: PromiseOrValue<BigNumberish>,
      durationIdx: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        strikePrice: BigNumber
        premiumToOwner: BigNumber
        premiumToReserve: BigNumber
        errorCode: BigNumber
      }
    >

    previewOpenCallBatch(
      tokenIds: PromiseOrValue<BigNumberish>[],
      strikePriceGaps: PromiseOrValue<BigNumberish>[],
      durations: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<
      [BigNumber[], BigNumber[], BigNumber[], BigNumber[]] & {
        strikePrices: BigNumber[]
        premiumsToOwner: BigNumber[]
        premiumsToReserve: BigNumber[]
        errorCodes: BigNumber[]
      }
    >

    totalOpenInterest(overrides?: CallOverrides): Promise<BigNumber>
  }

  filters: {}

  estimateGas: {
    balanceOf(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>

    getEndTime(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>

    getNFTStatus(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>

    getNFTStatusBatch(tokenIds: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<BigNumber>

    previewOpenCall(
      tokenId: PromiseOrValue<BigNumberish>,
      strikePriceGapIdx: PromiseOrValue<BigNumberish>,
      durationIdx: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    previewOpenCallBatch(
      tokenIds: PromiseOrValue<BigNumberish>[],
      strikePriceGaps: PromiseOrValue<BigNumberish>[],
      durations: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>

    totalOpenInterest(overrides?: CallOverrides): Promise<BigNumber>
  }

  populateTransaction: {
    balanceOf(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>

    getEndTime(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>

    getNFTStatus(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>

    getNFTStatusBatch(
      tokenIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    previewOpenCall(
      tokenId: PromiseOrValue<BigNumberish>,
      strikePriceGapIdx: PromiseOrValue<BigNumberish>,
      durationIdx: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    previewOpenCallBatch(
      tokenIds: PromiseOrValue<BigNumberish>[],
      strikePriceGaps: PromiseOrValue<BigNumberish>[],
      durations: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    totalOpenInterest(overrides?: CallOverrides): Promise<PopulatedTransaction>
  }
}
