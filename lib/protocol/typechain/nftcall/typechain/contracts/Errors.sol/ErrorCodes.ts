/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { FunctionFragment, Result } from '@ethersproject/abi'
import type { Listener, Provider } from '@ethersproject/providers'
import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from 'ethers'

import type { OnEvent, PromiseOrValue, TypedEvent, TypedEventFilter, TypedListener } from '../../common'

export interface ErrorCodesInterface extends utils.Interface {
  functions: {
    'CP_ACTIVATED()': FunctionFragment
    'CP_ARRAY_LENGTH_UNMATCHED()': FunctionFragment
    'CP_CALLER_IS_NOT_FACTORY_OWNER()': FunctionFragment
    'CP_CAN_NOT_OPEN_A_POSITION_ON_SELF_OWNED_NFT()': FunctionFragment
    'CP_CAN_NOT_OPEN_CALL()': FunctionFragment
    'CP_DEACTIVATED()': FunctionFragment
    'CP_DID_NOT_SEND_ENOUGHT_ETH()': FunctionFragment
    'CP_DURATION_TOO_LONG()': FunctionFragment
    'CP_GAP_OR_DURATION_OUT_OF_INDEX()': FunctionFragment
    'CP_INVALID_AMOUNT()': FunctionFragment
    'CP_INVALID_RECEIVER()': FunctionFragment
    'CP_NFT_ON_MARKET_OR_UNABAILABLE()': FunctionFragment
    'CP_NOT_ENOUGH_BALANCE()': FunctionFragment
    'CP_NOT_IN_THE_EXERCISE_PERIOD()': FunctionFragment
    'CP_NOT_THE_OWNER()': FunctionFragment
    'CP_PREMIUM_AND_ETH_UNEQUAL()': FunctionFragment
    'CP_PRICE_TOO_HIGH()': FunctionFragment
    'CP_STRIKE_GAP_TOO_LOW()': FunctionFragment
    'CP_STRIKE_PRICE_TOO_LOW()': FunctionFragment
    'CP_TOO_LITTLE_PREMIUM_TO_OWNER()': FunctionFragment
  }

  getFunction(
    nameOrSignatureOrTopic:
      | 'CP_ACTIVATED'
      | 'CP_ARRAY_LENGTH_UNMATCHED'
      | 'CP_CALLER_IS_NOT_FACTORY_OWNER'
      | 'CP_CAN_NOT_OPEN_A_POSITION_ON_SELF_OWNED_NFT'
      | 'CP_CAN_NOT_OPEN_CALL'
      | 'CP_DEACTIVATED'
      | 'CP_DID_NOT_SEND_ENOUGHT_ETH'
      | 'CP_DURATION_TOO_LONG'
      | 'CP_GAP_OR_DURATION_OUT_OF_INDEX'
      | 'CP_INVALID_AMOUNT'
      | 'CP_INVALID_RECEIVER'
      | 'CP_NFT_ON_MARKET_OR_UNABAILABLE'
      | 'CP_NOT_ENOUGH_BALANCE'
      | 'CP_NOT_IN_THE_EXERCISE_PERIOD'
      | 'CP_NOT_THE_OWNER'
      | 'CP_PREMIUM_AND_ETH_UNEQUAL'
      | 'CP_PRICE_TOO_HIGH'
      | 'CP_STRIKE_GAP_TOO_LOW'
      | 'CP_STRIKE_PRICE_TOO_LOW'
      | 'CP_TOO_LITTLE_PREMIUM_TO_OWNER'
  ): FunctionFragment

  encodeFunctionData(functionFragment: 'CP_ACTIVATED', values?: undefined): string
  encodeFunctionData(functionFragment: 'CP_ARRAY_LENGTH_UNMATCHED', values?: undefined): string
  encodeFunctionData(functionFragment: 'CP_CALLER_IS_NOT_FACTORY_OWNER', values?: undefined): string
  encodeFunctionData(functionFragment: 'CP_CAN_NOT_OPEN_A_POSITION_ON_SELF_OWNED_NFT', values?: undefined): string
  encodeFunctionData(functionFragment: 'CP_CAN_NOT_OPEN_CALL', values?: undefined): string
  encodeFunctionData(functionFragment: 'CP_DEACTIVATED', values?: undefined): string
  encodeFunctionData(functionFragment: 'CP_DID_NOT_SEND_ENOUGHT_ETH', values?: undefined): string
  encodeFunctionData(functionFragment: 'CP_DURATION_TOO_LONG', values?: undefined): string
  encodeFunctionData(functionFragment: 'CP_GAP_OR_DURATION_OUT_OF_INDEX', values?: undefined): string
  encodeFunctionData(functionFragment: 'CP_INVALID_AMOUNT', values?: undefined): string
  encodeFunctionData(functionFragment: 'CP_INVALID_RECEIVER', values?: undefined): string
  encodeFunctionData(functionFragment: 'CP_NFT_ON_MARKET_OR_UNABAILABLE', values?: undefined): string
  encodeFunctionData(functionFragment: 'CP_NOT_ENOUGH_BALANCE', values?: undefined): string
  encodeFunctionData(functionFragment: 'CP_NOT_IN_THE_EXERCISE_PERIOD', values?: undefined): string
  encodeFunctionData(functionFragment: 'CP_NOT_THE_OWNER', values?: undefined): string
  encodeFunctionData(functionFragment: 'CP_PREMIUM_AND_ETH_UNEQUAL', values?: undefined): string
  encodeFunctionData(functionFragment: 'CP_PRICE_TOO_HIGH', values?: undefined): string
  encodeFunctionData(functionFragment: 'CP_STRIKE_GAP_TOO_LOW', values?: undefined): string
  encodeFunctionData(functionFragment: 'CP_STRIKE_PRICE_TOO_LOW', values?: undefined): string
  encodeFunctionData(functionFragment: 'CP_TOO_LITTLE_PREMIUM_TO_OWNER', values?: undefined): string

  decodeFunctionResult(functionFragment: 'CP_ACTIVATED', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'CP_ARRAY_LENGTH_UNMATCHED', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'CP_CALLER_IS_NOT_FACTORY_OWNER', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'CP_CAN_NOT_OPEN_A_POSITION_ON_SELF_OWNED_NFT', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'CP_CAN_NOT_OPEN_CALL', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'CP_DEACTIVATED', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'CP_DID_NOT_SEND_ENOUGHT_ETH', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'CP_DURATION_TOO_LONG', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'CP_GAP_OR_DURATION_OUT_OF_INDEX', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'CP_INVALID_AMOUNT', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'CP_INVALID_RECEIVER', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'CP_NFT_ON_MARKET_OR_UNABAILABLE', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'CP_NOT_ENOUGH_BALANCE', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'CP_NOT_IN_THE_EXERCISE_PERIOD', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'CP_NOT_THE_OWNER', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'CP_PREMIUM_AND_ETH_UNEQUAL', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'CP_PRICE_TOO_HIGH', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'CP_STRIKE_GAP_TOO_LOW', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'CP_STRIKE_PRICE_TOO_LOW', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'CP_TOO_LITTLE_PREMIUM_TO_OWNER', data: BytesLike): Result

  events: {}
}

export interface ErrorCodes extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  interface: ErrorCodesInterface

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
    CP_ACTIVATED(overrides?: CallOverrides): Promise<[BigNumber]>

    CP_ARRAY_LENGTH_UNMATCHED(overrides?: CallOverrides): Promise<[BigNumber]>

    CP_CALLER_IS_NOT_FACTORY_OWNER(overrides?: CallOverrides): Promise<[BigNumber]>

    CP_CAN_NOT_OPEN_A_POSITION_ON_SELF_OWNED_NFT(overrides?: CallOverrides): Promise<[BigNumber]>

    CP_CAN_NOT_OPEN_CALL(overrides?: CallOverrides): Promise<[BigNumber]>

    CP_DEACTIVATED(overrides?: CallOverrides): Promise<[BigNumber]>

    CP_DID_NOT_SEND_ENOUGHT_ETH(overrides?: CallOverrides): Promise<[BigNumber]>

    CP_DURATION_TOO_LONG(overrides?: CallOverrides): Promise<[BigNumber]>

    CP_GAP_OR_DURATION_OUT_OF_INDEX(overrides?: CallOverrides): Promise<[BigNumber]>

    CP_INVALID_AMOUNT(overrides?: CallOverrides): Promise<[BigNumber]>

    CP_INVALID_RECEIVER(overrides?: CallOverrides): Promise<[BigNumber]>

    CP_NFT_ON_MARKET_OR_UNABAILABLE(overrides?: CallOverrides): Promise<[BigNumber]>

    CP_NOT_ENOUGH_BALANCE(overrides?: CallOverrides): Promise<[BigNumber]>

    CP_NOT_IN_THE_EXERCISE_PERIOD(overrides?: CallOverrides): Promise<[BigNumber]>

    CP_NOT_THE_OWNER(overrides?: CallOverrides): Promise<[BigNumber]>

    CP_PREMIUM_AND_ETH_UNEQUAL(overrides?: CallOverrides): Promise<[BigNumber]>

    CP_PRICE_TOO_HIGH(overrides?: CallOverrides): Promise<[BigNumber]>

    CP_STRIKE_GAP_TOO_LOW(overrides?: CallOverrides): Promise<[BigNumber]>

    CP_STRIKE_PRICE_TOO_LOW(overrides?: CallOverrides): Promise<[BigNumber]>

    CP_TOO_LITTLE_PREMIUM_TO_OWNER(overrides?: CallOverrides): Promise<[BigNumber]>
  }

  CP_ACTIVATED(overrides?: CallOverrides): Promise<BigNumber>

  CP_ARRAY_LENGTH_UNMATCHED(overrides?: CallOverrides): Promise<BigNumber>

  CP_CALLER_IS_NOT_FACTORY_OWNER(overrides?: CallOverrides): Promise<BigNumber>

  CP_CAN_NOT_OPEN_A_POSITION_ON_SELF_OWNED_NFT(overrides?: CallOverrides): Promise<BigNumber>

  CP_CAN_NOT_OPEN_CALL(overrides?: CallOverrides): Promise<BigNumber>

  CP_DEACTIVATED(overrides?: CallOverrides): Promise<BigNumber>

  CP_DID_NOT_SEND_ENOUGHT_ETH(overrides?: CallOverrides): Promise<BigNumber>

  CP_DURATION_TOO_LONG(overrides?: CallOverrides): Promise<BigNumber>

  CP_GAP_OR_DURATION_OUT_OF_INDEX(overrides?: CallOverrides): Promise<BigNumber>

  CP_INVALID_AMOUNT(overrides?: CallOverrides): Promise<BigNumber>

  CP_INVALID_RECEIVER(overrides?: CallOverrides): Promise<BigNumber>

  CP_NFT_ON_MARKET_OR_UNABAILABLE(overrides?: CallOverrides): Promise<BigNumber>

  CP_NOT_ENOUGH_BALANCE(overrides?: CallOverrides): Promise<BigNumber>

  CP_NOT_IN_THE_EXERCISE_PERIOD(overrides?: CallOverrides): Promise<BigNumber>

  CP_NOT_THE_OWNER(overrides?: CallOverrides): Promise<BigNumber>

  CP_PREMIUM_AND_ETH_UNEQUAL(overrides?: CallOverrides): Promise<BigNumber>

  CP_PRICE_TOO_HIGH(overrides?: CallOverrides): Promise<BigNumber>

  CP_STRIKE_GAP_TOO_LOW(overrides?: CallOverrides): Promise<BigNumber>

  CP_STRIKE_PRICE_TOO_LOW(overrides?: CallOverrides): Promise<BigNumber>

  CP_TOO_LITTLE_PREMIUM_TO_OWNER(overrides?: CallOverrides): Promise<BigNumber>

  callStatic: {
    CP_ACTIVATED(overrides?: CallOverrides): Promise<BigNumber>

    CP_ARRAY_LENGTH_UNMATCHED(overrides?: CallOverrides): Promise<BigNumber>

    CP_CALLER_IS_NOT_FACTORY_OWNER(overrides?: CallOverrides): Promise<BigNumber>

    CP_CAN_NOT_OPEN_A_POSITION_ON_SELF_OWNED_NFT(overrides?: CallOverrides): Promise<BigNumber>

    CP_CAN_NOT_OPEN_CALL(overrides?: CallOverrides): Promise<BigNumber>

    CP_DEACTIVATED(overrides?: CallOverrides): Promise<BigNumber>

    CP_DID_NOT_SEND_ENOUGHT_ETH(overrides?: CallOverrides): Promise<BigNumber>

    CP_DURATION_TOO_LONG(overrides?: CallOverrides): Promise<BigNumber>

    CP_GAP_OR_DURATION_OUT_OF_INDEX(overrides?: CallOverrides): Promise<BigNumber>

    CP_INVALID_AMOUNT(overrides?: CallOverrides): Promise<BigNumber>

    CP_INVALID_RECEIVER(overrides?: CallOverrides): Promise<BigNumber>

    CP_NFT_ON_MARKET_OR_UNABAILABLE(overrides?: CallOverrides): Promise<BigNumber>

    CP_NOT_ENOUGH_BALANCE(overrides?: CallOverrides): Promise<BigNumber>

    CP_NOT_IN_THE_EXERCISE_PERIOD(overrides?: CallOverrides): Promise<BigNumber>

    CP_NOT_THE_OWNER(overrides?: CallOverrides): Promise<BigNumber>

    CP_PREMIUM_AND_ETH_UNEQUAL(overrides?: CallOverrides): Promise<BigNumber>

    CP_PRICE_TOO_HIGH(overrides?: CallOverrides): Promise<BigNumber>

    CP_STRIKE_GAP_TOO_LOW(overrides?: CallOverrides): Promise<BigNumber>

    CP_STRIKE_PRICE_TOO_LOW(overrides?: CallOverrides): Promise<BigNumber>

    CP_TOO_LITTLE_PREMIUM_TO_OWNER(overrides?: CallOverrides): Promise<BigNumber>
  }

  filters: {}

  estimateGas: {
    CP_ACTIVATED(overrides?: CallOverrides): Promise<BigNumber>

    CP_ARRAY_LENGTH_UNMATCHED(overrides?: CallOverrides): Promise<BigNumber>

    CP_CALLER_IS_NOT_FACTORY_OWNER(overrides?: CallOverrides): Promise<BigNumber>

    CP_CAN_NOT_OPEN_A_POSITION_ON_SELF_OWNED_NFT(overrides?: CallOverrides): Promise<BigNumber>

    CP_CAN_NOT_OPEN_CALL(overrides?: CallOverrides): Promise<BigNumber>

    CP_DEACTIVATED(overrides?: CallOverrides): Promise<BigNumber>

    CP_DID_NOT_SEND_ENOUGHT_ETH(overrides?: CallOverrides): Promise<BigNumber>

    CP_DURATION_TOO_LONG(overrides?: CallOverrides): Promise<BigNumber>

    CP_GAP_OR_DURATION_OUT_OF_INDEX(overrides?: CallOverrides): Promise<BigNumber>

    CP_INVALID_AMOUNT(overrides?: CallOverrides): Promise<BigNumber>

    CP_INVALID_RECEIVER(overrides?: CallOverrides): Promise<BigNumber>

    CP_NFT_ON_MARKET_OR_UNABAILABLE(overrides?: CallOverrides): Promise<BigNumber>

    CP_NOT_ENOUGH_BALANCE(overrides?: CallOverrides): Promise<BigNumber>

    CP_NOT_IN_THE_EXERCISE_PERIOD(overrides?: CallOverrides): Promise<BigNumber>

    CP_NOT_THE_OWNER(overrides?: CallOverrides): Promise<BigNumber>

    CP_PREMIUM_AND_ETH_UNEQUAL(overrides?: CallOverrides): Promise<BigNumber>

    CP_PRICE_TOO_HIGH(overrides?: CallOverrides): Promise<BigNumber>

    CP_STRIKE_GAP_TOO_LOW(overrides?: CallOverrides): Promise<BigNumber>

    CP_STRIKE_PRICE_TOO_LOW(overrides?: CallOverrides): Promise<BigNumber>

    CP_TOO_LITTLE_PREMIUM_TO_OWNER(overrides?: CallOverrides): Promise<BigNumber>
  }

  populateTransaction: {
    CP_ACTIVATED(overrides?: CallOverrides): Promise<PopulatedTransaction>

    CP_ARRAY_LENGTH_UNMATCHED(overrides?: CallOverrides): Promise<PopulatedTransaction>

    CP_CALLER_IS_NOT_FACTORY_OWNER(overrides?: CallOverrides): Promise<PopulatedTransaction>

    CP_CAN_NOT_OPEN_A_POSITION_ON_SELF_OWNED_NFT(overrides?: CallOverrides): Promise<PopulatedTransaction>

    CP_CAN_NOT_OPEN_CALL(overrides?: CallOverrides): Promise<PopulatedTransaction>

    CP_DEACTIVATED(overrides?: CallOverrides): Promise<PopulatedTransaction>

    CP_DID_NOT_SEND_ENOUGHT_ETH(overrides?: CallOverrides): Promise<PopulatedTransaction>

    CP_DURATION_TOO_LONG(overrides?: CallOverrides): Promise<PopulatedTransaction>

    CP_GAP_OR_DURATION_OUT_OF_INDEX(overrides?: CallOverrides): Promise<PopulatedTransaction>

    CP_INVALID_AMOUNT(overrides?: CallOverrides): Promise<PopulatedTransaction>

    CP_INVALID_RECEIVER(overrides?: CallOverrides): Promise<PopulatedTransaction>

    CP_NFT_ON_MARKET_OR_UNABAILABLE(overrides?: CallOverrides): Promise<PopulatedTransaction>

    CP_NOT_ENOUGH_BALANCE(overrides?: CallOverrides): Promise<PopulatedTransaction>

    CP_NOT_IN_THE_EXERCISE_PERIOD(overrides?: CallOverrides): Promise<PopulatedTransaction>

    CP_NOT_THE_OWNER(overrides?: CallOverrides): Promise<PopulatedTransaction>

    CP_PREMIUM_AND_ETH_UNEQUAL(overrides?: CallOverrides): Promise<PopulatedTransaction>

    CP_PRICE_TOO_HIGH(overrides?: CallOverrides): Promise<PopulatedTransaction>

    CP_STRIKE_GAP_TOO_LOW(overrides?: CallOverrides): Promise<PopulatedTransaction>

    CP_STRIKE_PRICE_TOO_LOW(overrides?: CallOverrides): Promise<PopulatedTransaction>

    CP_TOO_LITTLE_PREMIUM_TO_OWNER(overrides?: CallOverrides): Promise<PopulatedTransaction>
  }
}
