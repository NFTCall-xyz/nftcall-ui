/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { Provider } from '@ethersproject/providers'
import { Contract, Signer, utils } from 'ethers'

import type { ICallPool, ICallPoolInterface } from '../../../contracts/interfaces/ICallPool'

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'Activate',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newBalance',
        type: 'uint256',
      },
    ],
    name: 'BalanceChangedETH',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'nft',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'price',
        type: 'uint256',
      },
    ],
    name: 'CallClosed',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'nft',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint8',
        name: 'strikePriceGapIdx',
        type: 'uint8',
      },
      {
        indexed: false,
        internalType: 'uint8',
        name: 'durationIdx',
        type: 'uint8',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'exercisePrice',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint40',
        name: 'exercisePeriodBegin',
        type: 'uint40',
      },
      {
        indexed: false,
        internalType: 'uint40',
        name: 'exercisePeriodEnd',
        type: 'uint40',
      },
    ],
    name: 'CallOpened',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'CollectProtocol',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'Deactivate',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'nft',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'onBehalfOf',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'Deposit',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'receiver',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'DepositETH',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'nft',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'OffMarket',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'nft',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'OnMarket',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'nft',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint8',
        name: 'lowerStrikePriceGapIdx',
        type: 'uint8',
      },
      {
        indexed: false,
        internalType: 'uint8',
        name: 'upperDurationIdx',
        type: 'uint8',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'minimumStrikePrice',
        type: 'uint256',
      },
    ],
    name: 'PreferenceUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'nft',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'premiumToOwner',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'premiumToReserve',
        type: 'uint256',
      },
    ],
    name: 'PremiumReceived',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'nft',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'Withdraw',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'WithdrawETH',
    type: 'event',
  },
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
    inputs: [] as any,
    name: 'callToken',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
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
        name: 'lowerStrikePriceGapIdx',
        type: 'uint8',
      },
      {
        internalType: 'uint8',
        name: 'upperDurationIdx',
        type: 'uint8',
      },
      {
        internalType: 'uint256',
        name: 'minimumStrikePrice',
        type: 'uint256',
      },
    ],
    name: 'changePreference',
    outputs: [] as any,
    stateMutability: 'nonpayable',
    type: 'function',
  },
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
  {
    inputs: [
      {
        internalType: 'address',
        name: 'onBehalfOf',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'deposit',
    outputs: [] as any,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'onBehalfOf',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
      {
        internalType: 'uint8',
        name: 'lowerStrikePriceGapIdx',
        type: 'uint8',
      },
      {
        internalType: 'uint8',
        name: 'upperDurationIdx',
        type: 'uint8',
      },
      {
        internalType: 'uint256',
        name: 'minimumStrikePrice',
        type: 'uint256',
      },
    ],
    name: 'depositWithPreference',
    outputs: [] as any,
    stateMutability: 'nonpayable',
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
    name: 'exerciseCall',
    outputs: [] as any,
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [] as any,
    name: 'factory',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
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
    inputs: [] as any,
    name: 'nToken',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [] as any,
    name: 'nft',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
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
        name: 'strikePriceIdx',
        type: 'uint8',
      },
      {
        internalType: 'uint8',
        name: 'durationIdx',
        type: 'uint8',
      },
    ],
    name: 'openCall',
    outputs: [] as any,
    stateMutability: 'payable',
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
        name: 'strikePrices',
        type: 'uint8[]',
      },
      {
        internalType: 'uint8[]',
        name: 'durations',
        type: 'uint8[]',
      },
    ],
    name: 'openCallBatch',
    outputs: [] as any,
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [] as any,
    name: 'oracle',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [] as any,
    name: 'premium',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
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
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'relistNFT',
    outputs: [] as any,
    stateMutability: 'nonpayable',
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
    name: 'takeNFTOffMarket',
    outputs: [] as any,
    stateMutability: 'nonpayable',
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
  {
    inputs: [
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'withdraw',
    outputs: [] as any,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'withdrawETH',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

export class ICallPool__factory {
  static readonly abi = _abi
  static createInterface(): ICallPoolInterface {
    return new utils.Interface(_abi) as ICallPoolInterface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ICallPool {
    return new Contract(address, _abi, signerOrProvider) as ICallPool
  }
}
