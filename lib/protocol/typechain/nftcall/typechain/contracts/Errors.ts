/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { FunctionFragment, Result } from '@ethersproject/abi'
import type { Listener, Provider } from '@ethersproject/providers'
import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from 'ethers'

import type { OnEvent, PromiseOrValue, TypedEvent, TypedEventFilter, TypedListener } from '../common'

export interface ErrorsInterface extends utils.Interface {
  functions: {
    'CP_ARRAY_LENGTH_UNMATCHED()': FunctionFragment
    'CP_CALLER_IS_NOT_FACTORY_OWNER()': FunctionFragment
    'CP_CAN_NOT_OPEN_CALL()': FunctionFragment
    'CP_DID_NOT_SEND_ENOUGHT_ETH()': FunctionFragment
    'CP_GAP_OR_DURATION_OUT_OF_INDEX()': FunctionFragment
    'CP_INVALID_AMOUNT()': FunctionFragment
    'CP_INVALID_RECEIVER()': FunctionFragment
    'CP_NFT_ON_MARKET_OR_UNABAILABLE()': FunctionFragment
    'CP_NOT_ENOUGH_BALANCE()': FunctionFragment
    'CP_NOT_IN_THE_EXERCISE_PERIOD()': FunctionFragment
    'CP_NOT_THE_OWNER()': FunctionFragment
  }

  getFunction(
    nameOrSignatureOrTopic:
      | 'CP_ARRAY_LENGTH_UNMATCHED'
      | 'CP_CALLER_IS_NOT_FACTORY_OWNER'
      | 'CP_CAN_NOT_OPEN_CALL'
      | 'CP_DID_NOT_SEND_ENOUGHT_ETH'
      | 'CP_GAP_OR_DURATION_OUT_OF_INDEX'
      | 'CP_INVALID_AMOUNT'
      | 'CP_INVALID_RECEIVER'
      | 'CP_NFT_ON_MARKET_OR_UNABAILABLE'
      | 'CP_NOT_ENOUGH_BALANCE'
      | 'CP_NOT_IN_THE_EXERCISE_PERIOD'
      | 'CP_NOT_THE_OWNER'
  ): FunctionFragment

  encodeFunctionData(functionFragment: 'CP_ARRAY_LENGTH_UNMATCHED', values?: undefined): string
  encodeFunctionData(functionFragment: 'CP_CALLER_IS_NOT_FACTORY_OWNER', values?: undefined): string
  encodeFunctionData(functionFragment: 'CP_CAN_NOT_OPEN_CALL', values?: undefined): string
  encodeFunctionData(functionFragment: 'CP_DID_NOT_SEND_ENOUGHT_ETH', values?: undefined): string
  encodeFunctionData(functionFragment: 'CP_GAP_OR_DURATION_OUT_OF_INDEX', values?: undefined): string
  encodeFunctionData(functionFragment: 'CP_INVALID_AMOUNT', values?: undefined): string
  encodeFunctionData(functionFragment: 'CP_INVALID_RECEIVER', values?: undefined): string
  encodeFunctionData(functionFragment: 'CP_NFT_ON_MARKET_OR_UNABAILABLE', values?: undefined): string
  encodeFunctionData(functionFragment: 'CP_NOT_ENOUGH_BALANCE', values?: undefined): string
  encodeFunctionData(functionFragment: 'CP_NOT_IN_THE_EXERCISE_PERIOD', values?: undefined): string
  encodeFunctionData(functionFragment: 'CP_NOT_THE_OWNER', values?: undefined): string

  decodeFunctionResult(functionFragment: 'CP_ARRAY_LENGTH_UNMATCHED', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'CP_CALLER_IS_NOT_FACTORY_OWNER', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'CP_CAN_NOT_OPEN_CALL', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'CP_DID_NOT_SEND_ENOUGHT_ETH', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'CP_GAP_OR_DURATION_OUT_OF_INDEX', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'CP_INVALID_AMOUNT', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'CP_INVALID_RECEIVER', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'CP_NFT_ON_MARKET_OR_UNABAILABLE', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'CP_NOT_ENOUGH_BALANCE', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'CP_NOT_IN_THE_EXERCISE_PERIOD', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'CP_NOT_THE_OWNER', data: BytesLike): Result

  events: {}
}

export interface Errors extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  interface: ErrorsInterface

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
    CP_ARRAY_LENGTH_UNMATCHED(overrides?: CallOverrides): Promise<[string]>

    CP_CALLER_IS_NOT_FACTORY_OWNER(overrides?: CallOverrides): Promise<[string]>

    CP_CAN_NOT_OPEN_CALL(overrides?: CallOverrides): Promise<[string]>

    CP_DID_NOT_SEND_ENOUGHT_ETH(overrides?: CallOverrides): Promise<[string]>

    CP_GAP_OR_DURATION_OUT_OF_INDEX(overrides?: CallOverrides): Promise<[string]>

    CP_INVALID_AMOUNT(overrides?: CallOverrides): Promise<[string]>

    CP_INVALID_RECEIVER(overrides?: CallOverrides): Promise<[string]>

    CP_NFT_ON_MARKET_OR_UNABAILABLE(overrides?: CallOverrides): Promise<[string]>

    CP_NOT_ENOUGH_BALANCE(overrides?: CallOverrides): Promise<[string]>

    CP_NOT_IN_THE_EXERCISE_PERIOD(overrides?: CallOverrides): Promise<[string]>

    CP_NOT_THE_OWNER(overrides?: CallOverrides): Promise<[string]>
  }

  CP_ARRAY_LENGTH_UNMATCHED(overrides?: CallOverrides): Promise<string>

  CP_CALLER_IS_NOT_FACTORY_OWNER(overrides?: CallOverrides): Promise<string>

  CP_CAN_NOT_OPEN_CALL(overrides?: CallOverrides): Promise<string>

  CP_DID_NOT_SEND_ENOUGHT_ETH(overrides?: CallOverrides): Promise<string>

  CP_GAP_OR_DURATION_OUT_OF_INDEX(overrides?: CallOverrides): Promise<string>

  CP_INVALID_AMOUNT(overrides?: CallOverrides): Promise<string>

  CP_INVALID_RECEIVER(overrides?: CallOverrides): Promise<string>

  CP_NFT_ON_MARKET_OR_UNABAILABLE(overrides?: CallOverrides): Promise<string>

  CP_NOT_ENOUGH_BALANCE(overrides?: CallOverrides): Promise<string>

  CP_NOT_IN_THE_EXERCISE_PERIOD(overrides?: CallOverrides): Promise<string>

  CP_NOT_THE_OWNER(overrides?: CallOverrides): Promise<string>

  callStatic: {
    CP_ARRAY_LENGTH_UNMATCHED(overrides?: CallOverrides): Promise<string>

    CP_CALLER_IS_NOT_FACTORY_OWNER(overrides?: CallOverrides): Promise<string>

    CP_CAN_NOT_OPEN_CALL(overrides?: CallOverrides): Promise<string>

    CP_DID_NOT_SEND_ENOUGHT_ETH(overrides?: CallOverrides): Promise<string>

    CP_GAP_OR_DURATION_OUT_OF_INDEX(overrides?: CallOverrides): Promise<string>

    CP_INVALID_AMOUNT(overrides?: CallOverrides): Promise<string>

    CP_INVALID_RECEIVER(overrides?: CallOverrides): Promise<string>

    CP_NFT_ON_MARKET_OR_UNABAILABLE(overrides?: CallOverrides): Promise<string>

    CP_NOT_ENOUGH_BALANCE(overrides?: CallOverrides): Promise<string>

    CP_NOT_IN_THE_EXERCISE_PERIOD(overrides?: CallOverrides): Promise<string>

    CP_NOT_THE_OWNER(overrides?: CallOverrides): Promise<string>
  }

  filters: {}

  estimateGas: {
    CP_ARRAY_LENGTH_UNMATCHED(overrides?: CallOverrides): Promise<BigNumber>

    CP_CALLER_IS_NOT_FACTORY_OWNER(overrides?: CallOverrides): Promise<BigNumber>

    CP_CAN_NOT_OPEN_CALL(overrides?: CallOverrides): Promise<BigNumber>

    CP_DID_NOT_SEND_ENOUGHT_ETH(overrides?: CallOverrides): Promise<BigNumber>

    CP_GAP_OR_DURATION_OUT_OF_INDEX(overrides?: CallOverrides): Promise<BigNumber>

    CP_INVALID_AMOUNT(overrides?: CallOverrides): Promise<BigNumber>

    CP_INVALID_RECEIVER(overrides?: CallOverrides): Promise<BigNumber>

    CP_NFT_ON_MARKET_OR_UNABAILABLE(overrides?: CallOverrides): Promise<BigNumber>

    CP_NOT_ENOUGH_BALANCE(overrides?: CallOverrides): Promise<BigNumber>

    CP_NOT_IN_THE_EXERCISE_PERIOD(overrides?: CallOverrides): Promise<BigNumber>

    CP_NOT_THE_OWNER(overrides?: CallOverrides): Promise<BigNumber>
  }

  populateTransaction: {
    CP_ARRAY_LENGTH_UNMATCHED(overrides?: CallOverrides): Promise<PopulatedTransaction>

    CP_CALLER_IS_NOT_FACTORY_OWNER(overrides?: CallOverrides): Promise<PopulatedTransaction>

    CP_CAN_NOT_OPEN_CALL(overrides?: CallOverrides): Promise<PopulatedTransaction>

    CP_DID_NOT_SEND_ENOUGHT_ETH(overrides?: CallOverrides): Promise<PopulatedTransaction>

    CP_GAP_OR_DURATION_OUT_OF_INDEX(overrides?: CallOverrides): Promise<PopulatedTransaction>

    CP_INVALID_AMOUNT(overrides?: CallOverrides): Promise<PopulatedTransaction>

    CP_INVALID_RECEIVER(overrides?: CallOverrides): Promise<PopulatedTransaction>

    CP_NFT_ON_MARKET_OR_UNABAILABLE(overrides?: CallOverrides): Promise<PopulatedTransaction>

    CP_NOT_ENOUGH_BALANCE(overrides?: CallOverrides): Promise<PopulatedTransaction>

    CP_NOT_IN_THE_EXERCISE_PERIOD(overrides?: CallOverrides): Promise<PopulatedTransaction>

    CP_NOT_THE_OWNER(overrides?: CallOverrides): Promise<PopulatedTransaction>
  }
}
