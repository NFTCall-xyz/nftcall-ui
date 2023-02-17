/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { FunctionFragment, Result } from '@ethersproject/abi'
import type { Listener, Provider } from '@ethersproject/providers'
import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from 'ethers'

import type { OnEvent, PromiseOrValue, TypedEvent, TypedEventFilter, TypedListener } from '../common'

export interface DataTypesInterface extends utils.Interface {
  functions: {
    'MAXIMUM_STRIKE_PRICE()': FunctionFragment
    'MAXIMUM_VALID_DURATION_IDX()': FunctionFragment
    'MAXIMUM_VALID_STRIKE_PRICE_GAP_IDX()': FunctionFragment
    'NFT_STATUS_MAP_INIT_VALUE()': FunctionFragment
    'STRIKE_PRICE_DECIMALS()': FunctionFragment
  }

  getFunction(
    nameOrSignatureOrTopic:
      | 'MAXIMUM_STRIKE_PRICE'
      | 'MAXIMUM_VALID_DURATION_IDX'
      | 'MAXIMUM_VALID_STRIKE_PRICE_GAP_IDX'
      | 'NFT_STATUS_MAP_INIT_VALUE'
      | 'STRIKE_PRICE_DECIMALS'
  ): FunctionFragment

  encodeFunctionData(functionFragment: 'MAXIMUM_STRIKE_PRICE', values?: undefined): string
  encodeFunctionData(functionFragment: 'MAXIMUM_VALID_DURATION_IDX', values?: undefined): string
  encodeFunctionData(functionFragment: 'MAXIMUM_VALID_STRIKE_PRICE_GAP_IDX', values?: undefined): string
  encodeFunctionData(functionFragment: 'NFT_STATUS_MAP_INIT_VALUE', values?: undefined): string
  encodeFunctionData(functionFragment: 'STRIKE_PRICE_DECIMALS', values?: undefined): string

  decodeFunctionResult(functionFragment: 'MAXIMUM_STRIKE_PRICE', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'MAXIMUM_VALID_DURATION_IDX', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'MAXIMUM_VALID_STRIKE_PRICE_GAP_IDX', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'NFT_STATUS_MAP_INIT_VALUE', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'STRIKE_PRICE_DECIMALS', data: BytesLike): Result

  events: {}
}

export interface DataTypes extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  interface: DataTypesInterface

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
    MAXIMUM_STRIKE_PRICE(overrides?: CallOverrides): Promise<[BigNumber]>

    MAXIMUM_VALID_DURATION_IDX(overrides?: CallOverrides): Promise<[BigNumber]>

    MAXIMUM_VALID_STRIKE_PRICE_GAP_IDX(overrides?: CallOverrides): Promise<[BigNumber]>

    NFT_STATUS_MAP_INIT_VALUE(overrides?: CallOverrides): Promise<[BigNumber]>

    STRIKE_PRICE_DECIMALS(overrides?: CallOverrides): Promise<[BigNumber]>
  }

  MAXIMUM_STRIKE_PRICE(overrides?: CallOverrides): Promise<BigNumber>

  MAXIMUM_VALID_DURATION_IDX(overrides?: CallOverrides): Promise<BigNumber>

  MAXIMUM_VALID_STRIKE_PRICE_GAP_IDX(overrides?: CallOverrides): Promise<BigNumber>

  NFT_STATUS_MAP_INIT_VALUE(overrides?: CallOverrides): Promise<BigNumber>

  STRIKE_PRICE_DECIMALS(overrides?: CallOverrides): Promise<BigNumber>

  callStatic: {
    MAXIMUM_STRIKE_PRICE(overrides?: CallOverrides): Promise<BigNumber>

    MAXIMUM_VALID_DURATION_IDX(overrides?: CallOverrides): Promise<BigNumber>

    MAXIMUM_VALID_STRIKE_PRICE_GAP_IDX(overrides?: CallOverrides): Promise<BigNumber>

    NFT_STATUS_MAP_INIT_VALUE(overrides?: CallOverrides): Promise<BigNumber>

    STRIKE_PRICE_DECIMALS(overrides?: CallOverrides): Promise<BigNumber>
  }

  filters: {}

  estimateGas: {
    MAXIMUM_STRIKE_PRICE(overrides?: CallOverrides): Promise<BigNumber>

    MAXIMUM_VALID_DURATION_IDX(overrides?: CallOverrides): Promise<BigNumber>

    MAXIMUM_VALID_STRIKE_PRICE_GAP_IDX(overrides?: CallOverrides): Promise<BigNumber>

    NFT_STATUS_MAP_INIT_VALUE(overrides?: CallOverrides): Promise<BigNumber>

    STRIKE_PRICE_DECIMALS(overrides?: CallOverrides): Promise<BigNumber>
  }

  populateTransaction: {
    MAXIMUM_STRIKE_PRICE(overrides?: CallOverrides): Promise<PopulatedTransaction>

    MAXIMUM_VALID_DURATION_IDX(overrides?: CallOverrides): Promise<PopulatedTransaction>

    MAXIMUM_VALID_STRIKE_PRICE_GAP_IDX(overrides?: CallOverrides): Promise<PopulatedTransaction>

    NFT_STATUS_MAP_INIT_VALUE(overrides?: CallOverrides): Promise<PopulatedTransaction>

    STRIKE_PRICE_DECIMALS(overrides?: CallOverrides): Promise<PopulatedTransaction>
  }
}
