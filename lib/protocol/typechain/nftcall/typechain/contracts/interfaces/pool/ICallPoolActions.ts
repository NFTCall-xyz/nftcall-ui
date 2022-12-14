/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers'
import type { FunctionFragment, Result } from '@ethersproject/abi'
import type { Listener, Provider } from '@ethersproject/providers'
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from '../../../common'

export interface ICallPoolActionsInterface extends utils.Interface {
  functions: {
    'balanceOf(address)': FunctionFragment
    'deposit(address,uint256)': FunctionFragment
    'depositWithPreference(address,uint256,uint8,uint8,uint256)': FunctionFragment
    'exerciseCall(uint256)': FunctionFragment
    'getNFTStatus(uint256)': FunctionFragment
    'openCall(uint256,uint256,uint256)': FunctionFragment
    'openCallBatch(uint256[],uint256[],uint256[])': FunctionFragment
    'relistNFT(uint256)': FunctionFragment
    'takeNFTOffMarket(uint256)': FunctionFragment
    'withdraw(address,uint256)': FunctionFragment
    'withdrawETH(address,uint256)': FunctionFragment
  }

  getFunction(
    nameOrSignatureOrTopic:
      | 'balanceOf'
      | 'deposit'
      | 'depositWithPreference'
      | 'exerciseCall'
      | 'getNFTStatus'
      | 'openCall'
      | 'openCallBatch'
      | 'relistNFT'
      | 'takeNFTOffMarket'
      | 'withdraw'
      | 'withdrawETH'
  ): FunctionFragment

  encodeFunctionData(functionFragment: 'balanceOf', values: [PromiseOrValue<string>]): string
  encodeFunctionData(
    functionFragment: 'deposit',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string
  encodeFunctionData(
    functionFragment: 'depositWithPreference',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string
  encodeFunctionData(functionFragment: 'exerciseCall', values: [PromiseOrValue<BigNumberish>]): string
  encodeFunctionData(functionFragment: 'getNFTStatus', values: [PromiseOrValue<BigNumberish>]): string
  encodeFunctionData(
    functionFragment: 'openCall',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string
  encodeFunctionData(
    functionFragment: 'openCallBatch',
    values: [PromiseOrValue<BigNumberish>[], PromiseOrValue<BigNumberish>[], PromiseOrValue<BigNumberish>[]]
  ): string
  encodeFunctionData(functionFragment: 'relistNFT', values: [PromiseOrValue<BigNumberish>]): string
  encodeFunctionData(functionFragment: 'takeNFTOffMarket', values: [PromiseOrValue<BigNumberish>]): string
  encodeFunctionData(
    functionFragment: 'withdraw',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string
  encodeFunctionData(
    functionFragment: 'withdrawETH',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string

  decodeFunctionResult(functionFragment: 'balanceOf', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'deposit', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'depositWithPreference', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'exerciseCall', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getNFTStatus', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'openCall', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'openCallBatch', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'relistNFT', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'takeNFTOffMarket', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'withdraw', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'withdrawETH', data: BytesLike): Result

  events: {}
}

export interface ICallPoolActions extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  interface: ICallPoolActionsInterface

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

    deposit(
      onBehalfOf: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    depositWithPreference(
      onBehalfOf: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      lowerStrikePriceGapIdx: PromiseOrValue<BigNumberish>,
      upperDurationIdx: PromiseOrValue<BigNumberish>,
      lowerLimitOfStrikePrice: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    exerciseCall(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    getNFTStatus(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean, boolean, number, number]>

    openCall(
      tokenId: PromiseOrValue<BigNumberish>,
      strikePrice: PromiseOrValue<BigNumberish>,
      duration: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    openCallBatch(
      tokenIds: PromiseOrValue<BigNumberish>[],
      strikePrices: PromiseOrValue<BigNumberish>[],
      durations: PromiseOrValue<BigNumberish>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    relistNFT(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    takeNFTOffMarket(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    withdraw(
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    withdrawETH(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>
  }

  balanceOf(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>

  deposit(
    onBehalfOf: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  depositWithPreference(
    onBehalfOf: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    lowerStrikePriceGapIdx: PromiseOrValue<BigNumberish>,
    upperDurationIdx: PromiseOrValue<BigNumberish>,
    lowerLimitOfStrikePrice: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  exerciseCall(
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  getNFTStatus(
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<[boolean, boolean, number, number]>

  openCall(
    tokenId: PromiseOrValue<BigNumberish>,
    strikePrice: PromiseOrValue<BigNumberish>,
    duration: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  openCallBatch(
    tokenIds: PromiseOrValue<BigNumberish>[],
    strikePrices: PromiseOrValue<BigNumberish>[],
    durations: PromiseOrValue<BigNumberish>[],
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  relistNFT(
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  takeNFTOffMarket(
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  withdraw(
    to: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  withdrawETH(
    to: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  callStatic: {
    balanceOf(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>

    deposit(
      onBehalfOf: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>

    depositWithPreference(
      onBehalfOf: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      lowerStrikePriceGapIdx: PromiseOrValue<BigNumberish>,
      upperDurationIdx: PromiseOrValue<BigNumberish>,
      lowerLimitOfStrikePrice: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>

    exerciseCall(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>

    getNFTStatus(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean, boolean, number, number]>

    openCall(
      tokenId: PromiseOrValue<BigNumberish>,
      strikePrice: PromiseOrValue<BigNumberish>,
      duration: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>

    openCallBatch(
      tokenIds: PromiseOrValue<BigNumberish>[],
      strikePrices: PromiseOrValue<BigNumberish>[],
      durations: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>

    relistNFT(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>

    takeNFTOffMarket(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>

    withdraw(
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>

    withdrawETH(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>
  }

  filters: {}

  estimateGas: {
    balanceOf(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>

    deposit(
      onBehalfOf: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    depositWithPreference(
      onBehalfOf: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      lowerStrikePriceGapIdx: PromiseOrValue<BigNumberish>,
      upperDurationIdx: PromiseOrValue<BigNumberish>,
      lowerLimitOfStrikePrice: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    exerciseCall(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    getNFTStatus(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>

    openCall(
      tokenId: PromiseOrValue<BigNumberish>,
      strikePrice: PromiseOrValue<BigNumberish>,
      duration: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    openCallBatch(
      tokenIds: PromiseOrValue<BigNumberish>[],
      strikePrices: PromiseOrValue<BigNumberish>[],
      durations: PromiseOrValue<BigNumberish>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    relistNFT(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    takeNFTOffMarket(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    withdraw(
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    withdrawETH(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>
  }

  populateTransaction: {
    balanceOf(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>

    deposit(
      onBehalfOf: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    depositWithPreference(
      onBehalfOf: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      lowerStrikePriceGapIdx: PromiseOrValue<BigNumberish>,
      upperDurationIdx: PromiseOrValue<BigNumberish>,
      lowerLimitOfStrikePrice: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    exerciseCall(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    getNFTStatus(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>

    openCall(
      tokenId: PromiseOrValue<BigNumberish>,
      strikePrice: PromiseOrValue<BigNumberish>,
      duration: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    openCallBatch(
      tokenIds: PromiseOrValue<BigNumberish>[],
      strikePrices: PromiseOrValue<BigNumberish>[],
      durations: PromiseOrValue<BigNumberish>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    relistNFT(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    takeNFTOffMarket(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    withdraw(
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    withdrawETH(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>
  }
}
