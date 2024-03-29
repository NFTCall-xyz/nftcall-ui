/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { Provider } from '@ethersproject/providers'
import { Contract, Signer, utils } from 'ethers'

import type { IPriceOracle, IPriceOracleInterface } from '../../../contracts/interfaces/IPriceOracle'

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'asset',
        type: 'address',
      },
    ],
    name: 'getAssetPrice',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'asset',
        type: 'address',
      },
    ],
    name: 'getAssetVol',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'asset',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'price',
        type: 'uint256',
      },
    ],
    name: 'setAssetPrice',
    outputs: [] as any,
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

export class IPriceOracle__factory {
  static readonly abi = _abi
  static createInterface(): IPriceOracleInterface {
    return new utils.Interface(_abi) as IPriceOracleInterface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IPriceOracle {
    return new Contract(address, _abi, signerOrProvider) as IPriceOracle
  }
}
