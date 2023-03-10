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

import type { OnEvent, PromiseOrValue, TypedEvent, TypedEventFilter, TypedListener } from '../../common'

export interface ICallFactoryInterface extends utils.Interface {
  functions: {
    'createPool(address,address,address)': FunctionFragment
    'getPool(address)': FunctionFragment
  }

  getFunction(nameOrSignatureOrTopic: 'createPool' | 'getPool'): FunctionFragment

  encodeFunctionData(
    functionFragment: 'createPool',
    values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<string>]
  ): string
  encodeFunctionData(functionFragment: 'getPool', values: [PromiseOrValue<string>]): string

  decodeFunctionResult(functionFragment: 'createPool', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getPool', data: BytesLike): Result

  events: {
    'PoolCreated(address,address,address,address,address,address)': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'PoolCreated'): EventFragment
}

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

export interface ICallFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  interface: ICallFactoryInterface

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

    getPool(erc721token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string] & { pool: string }>
  }

  createPool(
    erc721token: PromiseOrValue<string>,
    oracle: PromiseOrValue<string>,
    premium: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  getPool(erc721token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>

  callStatic: {
    createPool(
      erc721token: PromiseOrValue<string>,
      oracle: PromiseOrValue<string>,
      premium: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>

    getPool(erc721token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>
  }

  filters: {
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

    getPool(erc721token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>
  }

  populateTransaction: {
    createPool(
      erc721token: PromiseOrValue<string>,
      oracle: PromiseOrValue<string>,
      premium: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    getPool(erc721token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>
  }
}
