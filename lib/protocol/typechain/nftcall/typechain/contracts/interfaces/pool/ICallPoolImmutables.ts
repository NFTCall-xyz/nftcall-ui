/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from 'ethers'
import type { FunctionFragment, Result } from '@ethersproject/abi'
import type { Listener, Provider } from '@ethersproject/providers'
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from '../../../common'

export interface ICallPoolImmutablesInterface extends utils.Interface {
  functions: {
    'callToken()': FunctionFragment
    'factory()': FunctionFragment
    'nToken()': FunctionFragment
    'nft()': FunctionFragment
    'oracle()': FunctionFragment
    'premium()': FunctionFragment
  }

  getFunction(
    nameOrSignatureOrTopic: 'callToken' | 'factory' | 'nToken' | 'nft' | 'oracle' | 'premium'
  ): FunctionFragment

  encodeFunctionData(functionFragment: 'callToken', values?: undefined): string
  encodeFunctionData(functionFragment: 'factory', values?: undefined): string
  encodeFunctionData(functionFragment: 'nToken', values?: undefined): string
  encodeFunctionData(functionFragment: 'nft', values?: undefined): string
  encodeFunctionData(functionFragment: 'oracle', values?: undefined): string
  encodeFunctionData(functionFragment: 'premium', values?: undefined): string

  decodeFunctionResult(functionFragment: 'callToken', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'factory', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'nToken', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'nft', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'oracle', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'premium', data: BytesLike): Result

  events: {}
}

export interface ICallPoolImmutables extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  interface: ICallPoolImmutablesInterface

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
    callToken(overrides?: CallOverrides): Promise<[string]>

    factory(overrides?: CallOverrides): Promise<[string]>

    nToken(overrides?: CallOverrides): Promise<[string]>

    nft(overrides?: CallOverrides): Promise<[string]>

    oracle(overrides?: CallOverrides): Promise<[string]>

    premium(overrides?: CallOverrides): Promise<[string]>
  }

  callToken(overrides?: CallOverrides): Promise<string>

  factory(overrides?: CallOverrides): Promise<string>

  nToken(overrides?: CallOverrides): Promise<string>

  nft(overrides?: CallOverrides): Promise<string>

  oracle(overrides?: CallOverrides): Promise<string>

  premium(overrides?: CallOverrides): Promise<string>

  callStatic: {
    callToken(overrides?: CallOverrides): Promise<string>

    factory(overrides?: CallOverrides): Promise<string>

    nToken(overrides?: CallOverrides): Promise<string>

    nft(overrides?: CallOverrides): Promise<string>

    oracle(overrides?: CallOverrides): Promise<string>

    premium(overrides?: CallOverrides): Promise<string>
  }

  filters: {}

  estimateGas: {
    callToken(overrides?: CallOverrides): Promise<BigNumber>

    factory(overrides?: CallOverrides): Promise<BigNumber>

    nToken(overrides?: CallOverrides): Promise<BigNumber>

    nft(overrides?: CallOverrides): Promise<BigNumber>

    oracle(overrides?: CallOverrides): Promise<BigNumber>

    premium(overrides?: CallOverrides): Promise<BigNumber>
  }

  populateTransaction: {
    callToken(overrides?: CallOverrides): Promise<PopulatedTransaction>

    factory(overrides?: CallOverrides): Promise<PopulatedTransaction>

    nToken(overrides?: CallOverrides): Promise<PopulatedTransaction>

    nft(overrides?: CallOverrides): Promise<PopulatedTransaction>

    oracle(overrides?: CallOverrides): Promise<PopulatedTransaction>

    premium(overrides?: CallOverrides): Promise<PopulatedTransaction>
  }
}
