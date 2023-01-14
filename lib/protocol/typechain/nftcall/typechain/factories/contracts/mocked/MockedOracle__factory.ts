/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import type { Provider, TransactionRequest } from '@ethersproject/providers'
import type { PromiseOrValue } from '../../../common'
import type { MockedOracle, MockedOracleInterface } from '../../../contracts/mocked/MockedOracle'

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
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
    inputs: [] as any,
    name: 'owner',
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
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
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
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

const _bytecode =
  '0x608060405234801561001057600080fd5b5061001a3361001f565b61006f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b61030b8061007e6000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806351323f7214610067578063715018a61461007c5780638da5cb5b14610084578063942acc98146100a4578063b3596f07146100c7578063f2fde38b146100f0575b600080fd5b61007a610075366004610289565b610103565b005b61007a610131565b6000546040516001600160a01b0390911681526020015b60405180910390f35b6100b96100b23660046102b3565b506103e890565b60405190815260200161009b565b6100b96100d53660046102b3565b6001600160a01b031660009081526001602052604090205490565b61007a6100fe3660046102b3565b610145565b61010b6101c3565b8061011557600080fd5b6001600160a01b03909116600090815260016020526040902055565b6101396101c3565b610143600061021d565b565b61014d6101c3565b6001600160a01b0381166101b75760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b6101c08161021d565b50565b6000546001600160a01b031633146101435760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016101ae565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80356001600160a01b038116811461028457600080fd5b919050565b6000806040838503121561029c57600080fd5b6102a58361026d565b946020939093013593505050565b6000602082840312156102c557600080fd5b6102ce8261026d565b939250505056fea26469706673582212202492dc2d9e99d6d0370cdd5f2db2edf8f6afe623bcdf0e3e3c49f60e9d2d0d0864736f6c63430008090033'

type MockedOracleConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>

const isSuperArgs = (xs: MockedOracleConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
  xs.length > 1

export class MockedOracle__factory extends ContractFactory {
  constructor(...args: MockedOracleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args)
    } else {
      super(_abi, _bytecode, args[0])
    }
  }

  override deploy(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<MockedOracle> {
    return super.deploy(overrides || {}) as Promise<MockedOracle>
  }
  override getDeployTransaction(overrides?: Overrides & { from?: PromiseOrValue<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  override attach(address: string): MockedOracle {
    return super.attach(address) as MockedOracle
  }
  override connect(signer: Signer): MockedOracle__factory {
    return super.connect(signer) as MockedOracle__factory
  }

  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): MockedOracleInterface {
    return new utils.Interface(_abi) as MockedOracleInterface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): MockedOracle {
    return new Contract(address, _abi, signerOrProvider) as MockedOracle
  }
}
