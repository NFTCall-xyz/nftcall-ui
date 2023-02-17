/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { EventFragment, FunctionFragment, Result } from '@ethersproject/abi'
import type { Listener, Provider } from '@ethersproject/providers'
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers'

import type { OnEvent, PromiseOrValue, TypedEvent, TypedEventFilter, TypedListener } from '../../common'

export interface ICallTokenInterface extends utils.Interface {
  functions: {
    'burn(uint256)': FunctionFragment
    'mint(address,uint256)': FunctionFragment
    'nft()': FunctionFragment
    'open(address,uint256)': FunctionFragment
  }

  getFunction(nameOrSignatureOrTopic: 'burn' | 'mint' | 'nft' | 'open'): FunctionFragment

  encodeFunctionData(functionFragment: 'burn', values: [PromiseOrValue<BigNumberish>]): string
  encodeFunctionData(functionFragment: 'mint', values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string
  encodeFunctionData(functionFragment: 'nft', values?: undefined): string
  encodeFunctionData(functionFragment: 'open', values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string

  decodeFunctionResult(functionFragment: 'burn', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'mint', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'nft', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'open', data: BytesLike): Result

  events: {
    'Burn(address,uint256)': EventFragment
    'Mint(address,uint256)': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'Burn'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'Mint'): EventFragment
}

export interface BurnEventObject {
  user: string
  tokenId: BigNumber
}
export type BurnEvent = TypedEvent<[string, BigNumber], BurnEventObject>

export type BurnEventFilter = TypedEventFilter<BurnEvent>

export interface MintEventObject {
  user: string
  tokenId: BigNumber
}
export type MintEvent = TypedEvent<[string, BigNumber], MintEventObject>

export type MintEventFilter = TypedEventFilter<MintEvent>

export interface ICallToken extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  interface: ICallTokenInterface

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
    burn(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    mint(
      user: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    nft(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>

    open(
      user: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>
  }

  burn(
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  mint(
    user: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  nft(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>

  open(
    user: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  callStatic: {
    burn(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>

    mint(user: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>

    nft(overrides?: CallOverrides): Promise<string>

    open(user: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>
  }

  filters: {
    'Burn(address,uint256)'(
      user?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null
    ): BurnEventFilter
    Burn(user?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null): BurnEventFilter

    'Mint(address,uint256)'(
      user?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null
    ): MintEventFilter
    Mint(user?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null): MintEventFilter
  }

  estimateGas: {
    burn(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    mint(
      user: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    nft(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>

    open(
      user: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>
  }

  populateTransaction: {
    burn(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    mint(
      user: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    nft(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>

    open(
      user: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>
  }
}
