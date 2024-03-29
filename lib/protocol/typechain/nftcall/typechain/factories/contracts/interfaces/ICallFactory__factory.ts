/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { Provider } from '@ethersproject/providers'
import { Contract, Signer, utils } from 'ethers'

import type { ICallFactory, ICallFactoryInterface } from '../../../contracts/interfaces/ICallFactory'

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'erc721token',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'oracle',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'pool',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'premium',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'ntoken',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'calltoken',
        type: 'address',
      },
    ],
    name: 'PoolCreated',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'erc721token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'oracle',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'premium',
        type: 'address',
      },
    ],
    name: 'createPool',
    outputs: [
      {
        internalType: 'address',
        name: 'pool',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'erc721token',
        type: 'address',
      },
    ],
    name: 'getPool',
    outputs: [
      {
        internalType: 'address',
        name: 'pool',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]

export class ICallFactory__factory {
  static readonly abi = _abi
  static createInterface(): ICallFactoryInterface {
    return new utils.Interface(_abi) as ICallFactoryInterface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ICallFactory {
    return new Contract(address, _abi, signerOrProvider) as ICallFactory
  }
}
