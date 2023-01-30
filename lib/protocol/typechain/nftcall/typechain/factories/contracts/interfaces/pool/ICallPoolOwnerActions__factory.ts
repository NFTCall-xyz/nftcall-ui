/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { Provider } from '@ethersproject/providers'
import { Contract, Signer, utils } from 'ethers'

import type {
  ICallPoolOwnerActions,
  ICallPoolOwnerActionsInterface,
} from '../../../../contracts/interfaces/pool/ICallPoolOwnerActions'

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amountRequested',
        type: 'uint256',
      },
    ],
    name: 'collectProtocol',
    outputs: [
      {
        internalType: 'uint256',
        name: 'amountSent',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

export class ICallPoolOwnerActions__factory {
  static readonly abi = _abi
  static createInterface(): ICallPoolOwnerActionsInterface {
    return new utils.Interface(_abi) as ICallPoolOwnerActionsInterface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ICallPoolOwnerActions {
    return new Contract(address, _abi, signerOrProvider) as ICallPoolOwnerActions
  }
}
