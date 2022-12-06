/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type { BaseContract, BigNumber, BigNumberish, Signer, utils } from 'ethers'
import type { EventFragment } from '@ethersproject/abi'
import type { Listener, Provider } from '@ethersproject/providers'
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from '../../../common'

export interface ICallPoolEventsInterface extends utils.Interface {
  functions: {}

  events: {
    'CallClosed(address,address,address,uint256,uint256)': EventFragment
    'CallOpened(address,address,uint256,uint256,uint256)': EventFragment
    'CollectProtocol(address,address,uint256)': EventFragment
    'Deposit(address,address,address,uint256)': EventFragment
    'DepositETH(address,address,uint256)': EventFragment
    'OffMarket(address,address,uint256)': EventFragment
    'OnMarket(address,address,uint256)': EventFragment
    'PremiumReceived(address,address,uint256,uint256,uint256)': EventFragment
    'Withdraw(address,address,address,uint256)': EventFragment
    'WithdrawETH(address,address,uint256)': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'CallClosed'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'CallOpened'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'CollectProtocol'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'Deposit'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'DepositETH'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'OffMarket'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'OnMarket'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'PremiumReceived'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'Withdraw'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'WithdrawETH'): EventFragment
}

export interface CallClosedEventObject {
  nft: string
  user: string
  owner: string
  tokenId: BigNumber
  price: BigNumber
}
export type CallClosedEvent = TypedEvent<[string, string, string, BigNumber, BigNumber], CallClosedEventObject>

export type CallClosedEventFilter = TypedEventFilter<CallClosedEvent>

export interface CallOpenedEventObject {
  nft: string
  user: string
  tokenId: BigNumber
  strikePriceGap: BigNumber
  duration: BigNumber
}
export type CallOpenedEvent = TypedEvent<[string, string, BigNumber, BigNumber, BigNumber], CallOpenedEventObject>

export type CallOpenedEventFilter = TypedEventFilter<CallOpenedEvent>

export interface CollectProtocolEventObject {
  sender: string
  recipient: string
  amount: BigNumber
}
export type CollectProtocolEvent = TypedEvent<[string, string, BigNumber], CollectProtocolEventObject>

export type CollectProtocolEventFilter = TypedEventFilter<CollectProtocolEvent>

export interface DepositEventObject {
  nft: string
  user: string
  onBehalfOf: string
  tokenId: BigNumber
}
export type DepositEvent = TypedEvent<[string, string, string, BigNumber], DepositEventObject>

export type DepositEventFilter = TypedEventFilter<DepositEvent>

export interface DepositETHEventObject {
  user: string
  receiver: string
  amount: BigNumber
}
export type DepositETHEvent = TypedEvent<[string, string, BigNumber], DepositETHEventObject>

export type DepositETHEventFilter = TypedEventFilter<DepositETHEvent>

export interface OffMarketEventObject {
  nft: string
  owner: string
  tokenId: BigNumber
}
export type OffMarketEvent = TypedEvent<[string, string, BigNumber], OffMarketEventObject>

export type OffMarketEventFilter = TypedEventFilter<OffMarketEvent>

export interface OnMarketEventObject {
  nft: string
  owner: string
  tokenId: BigNumber
}
export type OnMarketEvent = TypedEvent<[string, string, BigNumber], OnMarketEventObject>

export type OnMarketEventFilter = TypedEventFilter<OnMarketEvent>

export interface PremiumReceivedEventObject {
  nft: string
  owner: string
  tokenId: BigNumber
  premiumToOwner: BigNumber
  premiumToReserve: BigNumber
}
export type PremiumReceivedEvent = TypedEvent<
  [string, string, BigNumber, BigNumber, BigNumber],
  PremiumReceivedEventObject
>

export type PremiumReceivedEventFilter = TypedEventFilter<PremiumReceivedEvent>

export interface WithdrawEventObject {
  nft: string
  user: string
  to: string
  tokenId: BigNumber
}
export type WithdrawEvent = TypedEvent<[string, string, string, BigNumber], WithdrawEventObject>

export type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>

export interface WithdrawETHEventObject {
  user: string
  to: string
  amount: BigNumber
}
export type WithdrawETHEvent = TypedEvent<[string, string, BigNumber], WithdrawETHEventObject>

export type WithdrawETHEventFilter = TypedEventFilter<WithdrawETHEvent>

export interface ICallPoolEvents extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  interface: ICallPoolEventsInterface

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

  functions: {}

  callStatic: {}

  filters: {
    'CallClosed(address,address,address,uint256,uint256)'(
      nft?: PromiseOrValue<string> | null,
      user?: PromiseOrValue<string> | null,
      owner?: null,
      tokenId?: PromiseOrValue<BigNumberish> | null,
      price?: null
    ): CallClosedEventFilter
    CallClosed(
      nft?: PromiseOrValue<string> | null,
      user?: PromiseOrValue<string> | null,
      owner?: null,
      tokenId?: PromiseOrValue<BigNumberish> | null,
      price?: null
    ): CallClosedEventFilter

    'CallOpened(address,address,uint256,uint256,uint256)'(
      nft?: PromiseOrValue<string> | null,
      user?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null,
      strikePriceGap?: null,
      duration?: null
    ): CallOpenedEventFilter
    CallOpened(
      nft?: PromiseOrValue<string> | null,
      user?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null,
      strikePriceGap?: null,
      duration?: null
    ): CallOpenedEventFilter

    'CollectProtocol(address,address,uint256)'(
      sender?: PromiseOrValue<string> | null,
      recipient?: PromiseOrValue<string> | null,
      amount?: null
    ): CollectProtocolEventFilter
    CollectProtocol(
      sender?: PromiseOrValue<string> | null,
      recipient?: PromiseOrValue<string> | null,
      amount?: null
    ): CollectProtocolEventFilter

    'Deposit(address,address,address,uint256)'(
      nft?: PromiseOrValue<string> | null,
      user?: null,
      onBehalfOf?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null
    ): DepositEventFilter
    Deposit(
      nft?: PromiseOrValue<string> | null,
      user?: null,
      onBehalfOf?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null
    ): DepositEventFilter

    'DepositETH(address,address,uint256)'(
      user?: PromiseOrValue<string> | null,
      receiver?: PromiseOrValue<string> | null,
      amount?: null
    ): DepositETHEventFilter
    DepositETH(
      user?: PromiseOrValue<string> | null,
      receiver?: PromiseOrValue<string> | null,
      amount?: null
    ): DepositETHEventFilter

    'OffMarket(address,address,uint256)'(
      nft?: PromiseOrValue<string> | null,
      owner?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null
    ): OffMarketEventFilter
    OffMarket(
      nft?: PromiseOrValue<string> | null,
      owner?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null
    ): OffMarketEventFilter

    'OnMarket(address,address,uint256)'(
      nft?: PromiseOrValue<string> | null,
      owner?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null
    ): OnMarketEventFilter
    OnMarket(
      nft?: PromiseOrValue<string> | null,
      owner?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null
    ): OnMarketEventFilter

    'PremiumReceived(address,address,uint256,uint256,uint256)'(
      nft?: PromiseOrValue<string> | null,
      owner?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null,
      premiumToOwner?: null,
      premiumToReserve?: null
    ): PremiumReceivedEventFilter
    PremiumReceived(
      nft?: PromiseOrValue<string> | null,
      owner?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null,
      premiumToOwner?: null,
      premiumToReserve?: null
    ): PremiumReceivedEventFilter

    'Withdraw(address,address,address,uint256)'(
      nft?: PromiseOrValue<string> | null,
      user?: PromiseOrValue<string> | null,
      to?: null,
      tokenId?: PromiseOrValue<BigNumberish> | null
    ): WithdrawEventFilter
    Withdraw(
      nft?: PromiseOrValue<string> | null,
      user?: PromiseOrValue<string> | null,
      to?: null,
      tokenId?: PromiseOrValue<BigNumberish> | null
    ): WithdrawEventFilter

    'WithdrawETH(address,address,uint256)'(
      user?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      amount?: null
    ): WithdrawETHEventFilter
    WithdrawETH(
      user?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      amount?: null
    ): WithdrawETHEventFilter
  }

  estimateGas: {}

  populateTransaction: {}
}
