/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { Provider, TransactionRequest } from '@ethersproject/providers'
import { Contract, ContractFactory, Overrides, Signer, utils } from 'ethers'

import type { PromiseOrValue } from '../../common'
import type { DataTypes, DataTypesInterface } from '../../contracts/DataTypes'

const _abi = [
  {
    inputs: [] as any,
    name: 'MAXIMUM_STRIKE_PRICE',
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
    name: 'MAXIMUM_VALID_DURATION_IDX',
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
    name: 'MAXIMUM_VALID_STRIKE_PRICE_GAP_IDX',
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
    name: 'NFT_STATUS_MAP_INIT_VALUE',
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
    name: 'STRIKE_PRICE_DECIMALS',
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
  '0x60d1610039600b82828239805160001a60731461002c57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe7300000000000000000000000000000000000000003014608060405260043610605a5760003560e01c8062bd347c14605f5780636a677dc31460785780636b387c3314607f578063b9cc8f1614608d578063d85dc698146094575b600080fd5b6066608081565b60405190815260200160405180910390f35b6066600381565b606667ffffffffffffffff81565b6066600981565b606660058156fea26469706673582212202c73bb35541668ef9a890935458bd3f11419533df0a47f60d4c60f3b7313e64864736f6c63430008090033'

type DataTypesConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>

const isSuperArgs = (xs: DataTypesConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
  xs.length > 1

export class DataTypes__factory extends ContractFactory {
  constructor(...args: DataTypesConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args)
    } else {
      super(_abi, _bytecode, args[0])
    }
  }

  override deploy(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<DataTypes> {
    return super.deploy(overrides || {}) as Promise<DataTypes>
  }
  override getDeployTransaction(overrides?: Overrides & { from?: PromiseOrValue<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  override attach(address: string): DataTypes {
    return super.attach(address) as DataTypes
  }
  override connect(signer: Signer): DataTypes__factory {
    return super.connect(signer) as DataTypes__factory
  }

  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): DataTypesInterface {
    return new utils.Interface(_abi) as DataTypesInterface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): DataTypes {
    return new Contract(address, _abi, signerOrProvider) as DataTypes
  }
}
