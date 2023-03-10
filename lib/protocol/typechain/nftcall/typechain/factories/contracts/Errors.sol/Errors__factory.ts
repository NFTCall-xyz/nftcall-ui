/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { Provider, TransactionRequest } from '@ethersproject/providers'
import { Contract, ContractFactory, Overrides, Signer, utils } from 'ethers'

import type { PromiseOrValue } from '../../../common'
import type { Errors, ErrorsInterface } from '../../../contracts/Errors.sol/Errors'

const _abi = [
  {
    inputs: [] as any,
    name: 'CP_ACTIVATED',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [] as any,
    name: 'CP_ARRAY_LENGTH_UNMATCHED',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [] as any,
    name: 'CP_CALLER_IS_NOT_FACTORY_OWNER',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [] as any,
    name: 'CP_CAN_NOT_OPEN_A_POSITION_ON_SELF_OWNED_NFT',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [] as any,
    name: 'CP_CAN_NOT_OPEN_CALL',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [] as any,
    name: 'CP_DEACTIVATED',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [] as any,
    name: 'CP_DID_NOT_SEND_ENOUGH_ETH',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [] as any,
    name: 'CP_DURATION_TOO_LONG',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [] as any,
    name: 'CP_GAP_OR_DURATION_OUT_OF_INDEX',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [] as any,
    name: 'CP_INVALID_AMOUNT',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [] as any,
    name: 'CP_INVALID_RECEIVER',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [] as any,
    name: 'CP_NFT_ON_MARKET_OR_UNAVAILABLE',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [] as any,
    name: 'CP_NOT_ENOUGH_BALANCE',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [] as any,
    name: 'CP_NOT_IN_THE_EXERCISE_PERIOD',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [] as any,
    name: 'CP_NOT_THE_OWNER',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [] as any,
    name: 'CP_PREMIUM_AND_ETH_UNEQUAL',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [] as any,
    name: 'CP_PRICE_TOO_HIGH',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [] as any,
    name: 'CP_STRIKE_GAP_TOO_LOW',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [] as any,
    name: 'CP_STRIKE_PRICE_TOO_LOW',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [] as any,
    name: 'CP_TOO_LITTLE_PREMIUM_TO_OWNER',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [] as any,
    name: 'CP_UNABLE_TO_TRANSFER_ETH',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [] as any,
    name: 'CP_ZERO_SIZED_ARRAY',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]

const _bytecode =
  '0x6104bf61003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061014c5760003560e01c806395168aa5116100c2578063da38f4d111610086578063da38f4d114610370578063df2aef4514610390578063e016ebfe146103b0578063e81c8408146103d1578063e95389da146103f2578063ed5f7fb81461041357600080fd5b806395168aa5146102cf57806395400248146102ef578063b15bc5f61461030f578063ba6f6fff1461032f578063d979da051461034f57600080fd5b8063558c0e9a11610114578063558c0e9a1461020a5780635bbaa0c11461022b5780636add4c0b1461024b5780636ea0eb471461026c5780638b7a2e6b1461028d57806391eabf36146102ae57600080fd5b80630c73f720146101515780631741c9f4146101885780632290440d146101a95780633fabcc6a146101c957806351c42457146101e9575b600080fd5b61017260405180604001604052806002815260200161313760f01b81525081565b60405161017f9190610434565b60405180910390f35b61017260405180604001604052806002815260200161323160f01b81525081565b610172604051806040016040528060018152602001603160f81b81525081565b610172604051806040016040528060018152602001601960f91b81525081565b61017260405180604001604052806002815260200161031360f41b81525081565b61017260405180604001604052806002815260200161313360f01b81525081565b610172604051806040016040528060018152602001603360f81b81525081565b61017260405180604001604052806002815260200161313160f01b81525081565b61017260405180604001604052806002815260200161189960f11b81525081565b610172604051806040016040528060028152602001610c4d60f21b81525081565b61017260405180604001604052806002815260200161313560f01b81525081565b610172604051806040016040528060018152602001600760fb1b81525081565b610172604051806040016040528060018152602001603760f81b81525081565b610172604051806040016040528060018152602001603960f81b81525081565b610172604051806040016040528060018152602001600d60fa1b81525081565b61017260405180604001604052806002815260200161032360f41b81525081565b610172604051806040016040528060018152602001601b60f91b81525081565b610172604051806040016040528060018152602001603560f81b81525081565b61017260405180604001604052806002815260200161313960f01b81525081565b61017260405180604001604052806002815260200161191960f11b81525081565b61017260405180604001604052806002815260200161062760f31b81525081565b61017260405180604001604052806002815260200161189b60f11b81525081565b600060208083528351808285015260005b8181101561046157858101830151858201604001528201610445565b81811115610473576000604083870101525b50601f01601f191692909201604001939250505056fea2646970667358221220f70ad2b3ae58ef53166fc7931668d26bccb1a1dedb63944336401054de8bbb9a64736f6c63430008090033'

type ErrorsConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>

const isSuperArgs = (xs: ErrorsConstructorParams): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1

export class Errors__factory extends ContractFactory {
  constructor(...args: ErrorsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args)
    } else {
      super(_abi, _bytecode, args[0])
    }
  }

  override deploy(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<Errors> {
    return super.deploy(overrides || {}) as Promise<Errors>
  }
  override getDeployTransaction(overrides?: Overrides & { from?: PromiseOrValue<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  override attach(address: string): Errors {
    return super.attach(address) as Errors
  }
  override connect(signer: Signer): Errors__factory {
    return super.connect(signer) as Errors__factory
  }

  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): ErrorsInterface {
    return new utils.Interface(_abi) as ErrorsInterface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Errors {
    return new Contract(address, _abi, signerOrProvider) as Errors
  }
}
