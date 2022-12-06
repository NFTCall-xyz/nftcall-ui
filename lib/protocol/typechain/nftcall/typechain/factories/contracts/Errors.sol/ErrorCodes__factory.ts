/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import type { Provider, TransactionRequest } from '@ethersproject/providers'
import type { PromiseOrValue } from '../../../common'
import type { ErrorCodes, ErrorCodesInterface } from '../../../contracts/Errors.sol/ErrorCodes'

const _abi = [
  {
    inputs: [],
    name: 'CP_ARRAY_LENGTH_UNMATCHED',
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
    inputs: [],
    name: 'CP_CALLER_IS_NOT_FACTORY_OWNER',
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
    inputs: [],
    name: 'CP_CAN_NOT_OPEN_CALL',
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
    inputs: [],
    name: 'CP_DID_NOT_SEND_ENOUGHT_ETH',
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
    inputs: [],
    name: 'CP_DURATION_TOO_LONG',
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
    inputs: [],
    name: 'CP_GAP_OR_DURATION_OUT_OF_INDEX',
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
    inputs: [],
    name: 'CP_INVALID_AMOUNT',
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
    inputs: [],
    name: 'CP_INVALID_RECEIVER',
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
    inputs: [],
    name: 'CP_NFT_ON_MARKET_OR_UNABAILABLE',
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
    inputs: [],
    name: 'CP_NOT_ENOUGH_BALANCE',
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
    inputs: [],
    name: 'CP_NOT_IN_THE_EXERCISE_PERIOD',
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
    inputs: [],
    name: 'CP_NOT_THE_OWNER',
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
    inputs: [],
    name: 'CP_STRIKE_GAP_TOO_LOW',
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
    inputs: [],
    name: 'CP_STRIKE_PRICE_TOO_LOW',
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
    inputs: [],
    name: 'CP_TOO_LITTLE_PREMIUM_TO_OWNER',
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

const _bytecode =
  '0x6101c461003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100ff5760003560e01c80638b7a2e6b116100a1578063ba6f6fff11610070578063ba6f6fff1461016e578063bf480ec414610176578063da38f4d11461017e578063df2aef451461018657600080fd5b80638b7a2e6b1461014e57806391eabf361461015657806395168aa51461015e578063954002481461016657600080fd5b806351c42457116100dd57806351c424571461012e578063558c0e9a146101365780636add4c0b1461013e5780636ea0eb471461014657600080fd5b80632290440d1461010457806327aa65fd1461011e5780633fabcc6a14610126575b600080fd5b61010c600181565b60405190815260200160405180910390f35b61010c600381565b61010c600281565b61010c600a81565b61010c600d81565b61010c600b81565b61010c600c81565b61010c600e81565b61010c600f81565b61010c600881565b61010c600781565b61010c600481565b61010c600981565b61010c600681565b61010c60058156fea2646970667358221220270fbb972b4a2caacb4b9807bd002bbd3213422743f3fc19af48dbff29066b7064736f6c63430008090033'

type ErrorCodesConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>

const isSuperArgs = (xs: ErrorCodesConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
  xs.length > 1

export class ErrorCodes__factory extends ContractFactory {
  constructor(...args: ErrorCodesConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args)
    } else {
      super(_abi, _bytecode, args[0])
    }
  }

  override deploy(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ErrorCodes> {
    return super.deploy(overrides || {}) as Promise<ErrorCodes>
  }
  override getDeployTransaction(overrides?: Overrides & { from?: PromiseOrValue<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  override attach(address: string): ErrorCodes {
    return super.attach(address) as ErrorCodes
  }
  override connect(signer: Signer): ErrorCodes__factory {
    return super.connect(signer) as ErrorCodes__factory
  }

  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): ErrorCodesInterface {
    return new utils.Interface(_abi) as ErrorCodesInterface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ErrorCodes {
    return new Contract(address, _abi, signerOrProvider) as ErrorCodes
  }
}
