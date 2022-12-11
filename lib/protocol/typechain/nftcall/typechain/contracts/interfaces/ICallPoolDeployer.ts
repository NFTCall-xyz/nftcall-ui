/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from 'ethers'
import type { FunctionFragment, Result } from '@ethersproject/abi'
import type { Listener, Provider } from '@ethersproject/providers'
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from '../../common'

export interface ICallPoolDeployerInterface extends utils.Interface {
  functions: {
    'parameters()': FunctionFragment
  }

  getFunction(nameOrSignatureOrTopic: 'parameters'): FunctionFragment

  encodeFunctionData(functionFragment: 'parameters', values?: undefined): string

  decodeFunctionResult(functionFragment: 'parameters', data: BytesLike): Result

  events: {}
}

export interface ICallPoolDeployer extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  interface: ICallPoolDeployerInterface

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
  }

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

  callStatic: {
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
  }

  filters: {}

  estimateGas: {
    parameters(overrides?: CallOverrides): Promise<BigNumber>
  }

  populateTransaction: {
    parameters(overrides?: CallOverrides): Promise<PopulatedTransaction>
  }
}