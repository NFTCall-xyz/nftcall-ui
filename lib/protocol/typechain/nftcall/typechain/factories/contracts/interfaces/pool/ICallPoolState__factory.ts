/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { Provider } from '@ethersproject/providers'
import { Contract, Signer, utils } from 'ethers'

import type { ICallPoolState, ICallPoolStateInterface } from '../../../../contracts/interfaces/pool/ICallPoolState'

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
    ],
    name: 'balanceOf',
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
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'getEndTime',
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
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'getNFTStatus',
    outputs: [
      {
        components: [
          {
            internalType: 'bool',
            name: 'ifOnMarket',
            type: 'bool',
          },
          {
            internalType: 'uint8',
            name: 'minimumStrikeGapIdx',
            type: 'uint8',
          },
          {
            internalType: 'uint8',
            name: 'maximumDurationIdx',
            type: 'uint8',
          },
          {
            internalType: 'uint256',
            name: 'exerciseTime',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'endTime',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'minimumStrikePrice',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'strikePrice',
            type: 'uint256',
          },
        ],
        internalType: 'struct DataTypes.NFTStatusOutput',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256[]',
        name: 'tokenIds',
        type: 'uint256[]',
      },
    ],
    name: 'getNFTStatusBatch',
    outputs: [
      {
        components: [
          {
            internalType: 'bool',
            name: 'ifOnMarket',
            type: 'bool',
          },
          {
            internalType: 'uint8',
            name: 'minimumStrikeGapIdx',
            type: 'uint8',
          },
          {
            internalType: 'uint8',
            name: 'maximumDurationIdx',
            type: 'uint8',
          },
          {
            internalType: 'uint256',
            name: 'exerciseTime',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'endTime',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'minimumStrikePrice',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'strikePrice',
            type: 'uint256',
          },
        ],
        internalType: 'struct DataTypes.NFTStatusOutput[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
      {
        internalType: 'uint8',
        name: 'strikePriceGapIdx',
        type: 'uint8',
      },
      {
        internalType: 'uint8',
        name: 'durationIdx',
        type: 'uint8',
      },
    ],
    name: 'previewOpenCall',
    outputs: [
      {
        internalType: 'uint256',
        name: 'strikePrice',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'premiumToOwner',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'premiumToReserve',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'errorCode',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256[]',
        name: 'tokenIds',
        type: 'uint256[]',
      },
      {
        internalType: 'uint8[]',
        name: 'strikePriceGaps',
        type: 'uint8[]',
      },
      {
        internalType: 'uint8[]',
        name: 'durations',
        type: 'uint8[]',
      },
    ],
    name: 'previewOpenCallBatch',
    outputs: [
      {
        internalType: 'uint256[]',
        name: 'strikePrices',
        type: 'uint256[]',
      },
      {
        internalType: 'uint256[]',
        name: 'premiumsToOwner',
        type: 'uint256[]',
      },
      {
        internalType: 'uint256[]',
        name: 'premiumsToReserve',
        type: 'uint256[]',
      },
      {
        internalType: 'uint256[]',
        name: 'errorCodes',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [] as any,
    name: 'totalOpenInterest',
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
]

export class ICallPoolState__factory {
  static readonly abi = _abi
  static createInterface(): ICallPoolStateInterface {
    return new utils.Interface(_abi) as ICallPoolStateInterface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ICallPoolState {
    return new Contract(address, _abi, signerOrProvider) as ICallPoolState
  }
}
