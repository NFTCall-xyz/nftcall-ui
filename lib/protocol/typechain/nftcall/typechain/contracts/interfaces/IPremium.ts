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

import type { OnEvent, PromiseOrValue, TypedEvent, TypedEventFilter, TypedListener } from '../../common'

export interface IPremiumInterface extends utils.Interface {
  functions: {
    'getPremium(uint256,uint256)': FunctionFragment
  }

  getFunction(nameOrSignatureOrTopic: 'getPremium'): FunctionFragment

  encodeFunctionData(
    functionFragment: 'getPremium',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string

  decodeFunctionResult(functionFragment: 'getPremium', data: BytesLike): Result

  events: {}
}

export interface IPremium extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  interface: IPremiumInterface

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
    getPremium(
      curveIdx: PromiseOrValue<BigNumberish>,
      vol: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>
  }

  getPremium(
    curveIdx: PromiseOrValue<BigNumberish>,
    vol: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>

  callStatic: {
    getPremium(
      curveIdx: PromiseOrValue<BigNumberish>,
      vol: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>
  }

  filters: {}

  estimateGas: {
    getPremium(
      curveIdx: PromiseOrValue<BigNumberish>,
      vol: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>
  }

  populateTransaction: {
    getPremium(
      curveIdx: PromiseOrValue<BigNumberish>,
      vol: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>
  }
}
