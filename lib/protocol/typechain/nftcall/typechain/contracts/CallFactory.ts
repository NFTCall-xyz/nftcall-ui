/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { EventFragment, FunctionFragment, Result } from '@ethersproject/abi'
import type { Listener, Provider } from '@ethersproject/providers'
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers'

import type { OnEvent, PromiseOrValue, TypedEvent, TypedEventFilter, TypedListener } from '../common'

export interface CallFactoryInterface extends utils.Interface {
  functions: {
    'createPool(address,address,address)': FunctionFragment
    'getPool(address)': FunctionFragment
    'owner()': FunctionFragment
    'parameters()': FunctionFragment
    'renounceOwnership()': FunctionFragment
    'transferOwnership(address)': FunctionFragment
  }

  getFunction(
    nameOrSignatureOrTopic:
      | 'createPool'
      | 'getPool'
      | 'owner'
      | 'parameters'
      | 'renounceOwnership'
      | 'transferOwnership'
  ): FunctionFragment

  encodeFunctionData(
    functionFragment: 'createPool',
    values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<string>]
  ): string
  encodeFunctionData(functionFragment: 'getPool', values: [PromiseOrValue<string>]): string
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string
  encodeFunctionData(functionFragment: 'parameters', values?: undefined): string
  encodeFunctionData(functionFragment: 'renounceOwnership', values?: undefined): string
  encodeFunctionData(functionFragment: 'transferOwnership', values: [PromiseOrValue<string>]): string

  decodeFunctionResult(functionFragment: 'createPool', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getPool', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'parameters', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'renounceOwnership', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result

  events: {
    'OwnershipTransferred(address,address)': EventFragment
    'PoolCreated(address,address,address,address,address,address)': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'PoolCreated'): EventFragment
}

export interface OwnershipTransferredEventObject {
  previousOwner: string
  newOwner: string
}
export type OwnershipTransferredEvent = TypedEvent<[string, string], OwnershipTransferredEventObject>

export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>

export interface PoolCreatedEventObject {
  erc721token: string
  oracle: string
  pool: string
  premium: string
  ntoken: string
  calltoken: string
}
export type PoolCreatedEvent = TypedEvent<[string, string, string, string, string, string], PoolCreatedEventObject>

export type PoolCreatedEventFilter = TypedEventFilter<PoolCreatedEvent>

export interface CallFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  interface: CallFactoryInterface

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
    createPool(
      erc721token: PromiseOrValue<string>,
      oracle: PromiseOrValue<string>,
      premium: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    getPool(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>

    owner(overrides?: CallOverrides): Promise<[string]>

    parameters(overrides?: CallOverrides): Promise<
      [string, string, string, string, string, string] & {
        factory: string
        erc721token: string
        ntoken: string
        calltoken: string
        oracle: string
        premium: string
      }
    >

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>
  }

  createPool(
    erc721token: PromiseOrValue<string>,
    oracle: PromiseOrValue<string>,
    premium: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  getPool(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>

  owner(overrides?: CallOverrides): Promise<string>

  parameters(overrides?: CallOverrides): Promise<
    [string, string, string, string, string, string] & {
      factory: string
      erc721token: string
      ntoken: string
      calltoken: string
      oracle: string
      premium: string
    }
  >

  renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  callStatic: {
    createPool(
      erc721token: PromiseOrValue<string>,
      oracle: PromiseOrValue<string>,
      premium: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>

    getPool(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>

    owner(overrides?: CallOverrides): Promise<string>

    parameters(overrides?: CallOverrides): Promise<
      [string, string, string, string, string, string] & {
        factory: string
        erc721token: string
        ntoken: string
        calltoken: string
        oracle: string
        premium: string
      }
    >

    renounceOwnership(overrides?: CallOverrides): Promise<void>

    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>
  }

  filters: {
    'OwnershipTransferred(address,address)'(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter

    'PoolCreated(address,address,address,address,address,address)'(
      erc721token?: PromiseOrValue<string> | null,
      oracle?: null,
      pool?: null,
      premium?: null,
      ntoken?: null,
      calltoken?: null
    ): PoolCreatedEventFilter
    PoolCreated(
      erc721token?: PromiseOrValue<string> | null,
      oracle?: null,
      pool?: null,
      premium?: null,
      ntoken?: null,
      calltoken?: null
    ): PoolCreatedEventFilter
  }

  estimateGas: {
    createPool(
      erc721token: PromiseOrValue<string>,
      oracle: PromiseOrValue<string>,
      premium: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    getPool(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>

    owner(overrides?: CallOverrides): Promise<BigNumber>

    parameters(overrides?: CallOverrides): Promise<BigNumber>

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>
  }

  populateTransaction: {
    createPool(
      erc721token: PromiseOrValue<string>,
      oracle: PromiseOrValue<string>,
      premium: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    getPool(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>

    parameters(overrides?: CallOverrides): Promise<PopulatedTransaction>

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>
  }
}
