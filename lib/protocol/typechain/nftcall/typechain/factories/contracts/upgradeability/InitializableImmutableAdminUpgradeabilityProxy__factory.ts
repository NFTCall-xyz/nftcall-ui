/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import type { Provider, TransactionRequest } from '@ethersproject/providers'
import type { PromiseOrValue } from '../../../common'
import type {
  InitializableImmutableAdminUpgradeabilityProxy,
  InitializableImmutableAdminUpgradeabilityProxyInterface,
} from '../../../contracts/upgradeability/InitializableImmutableAdminUpgradeabilityProxy'

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'admin',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'implementation',
        type: 'address',
      },
    ],
    name: 'Upgraded',
    type: 'event',
  },
  {
    stateMutability: 'payable',
    type: 'fallback',
  },
  {
    inputs: [] as any,
    name: 'admin',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [] as any,
    name: 'implementation',
    outputs: [
      {
        internalType: 'address',
        name: '',
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
        name: '_logic',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'initialize',
    outputs: [] as any,
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newImplementation',
        type: 'address',
      },
    ],
    name: 'upgradeTo',
    outputs: [] as any,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newImplementation',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'upgradeToAndCall',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
]

const _bytecode =
  '0x60a060405234801561001057600080fd5b5060405161084a38038061084a83398101604081905261002f91610040565b6001600160a01b0316608052610070565b60006020828403121561005257600080fd5b81516001600160a01b038116811461006957600080fd5b9392505050565b60805161079c6100ae600039600081816101130152818161015801528181610211015281816103510152818161037a015261049e015261079c6000f3fe60806040526004361061004a5760003560e01c80633659cfe6146100545780634f1ef286146100745780635c60da1b14610087578063d1f57894146100b8578063f851a440146100cb575b6100526100e0565b005b34801561006057600080fd5b5061005261006f366004610543565b610108565b610052610082366004610565565b61014d565b34801561009357600080fd5b5061009c610204565b6040516001600160a01b03909116815260200160405180910390f35b6100526100c63660046105fe565b610256565b3480156100d757600080fd5b5061009c610344565b6100e861039c565b6101066101016000805160206107478339815191525490565b6103a4565b565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016141561014557610142816103c8565b50565b6101426100e0565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614156101f757610187836103c8565b6000836001600160a01b031683836040516101a39291906106c0565b600060405180830381855af49150503d80600081146101de576040519150601f19603f3d011682016040523d82523d6000602084013e6101e3565b606091505b50509050806101f157600080fd5b50505050565b6101ff6100e0565b505050565b6000336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016141561024b57506000805160206107478339815191525490565b6102536100e0565b90565b600061026e6000805160206107478339815191525490565b6001600160a01b03161461028157600080fd5b6102ac60017f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbd6106d0565b600080516020610747833981519152146102c8576102c86106f5565b6102d182610408565b805115610340576000826001600160a01b0316826040516102f2919061070b565b600060405180830381855af49150503d806000811461032d576040519150601f19603f3d011682016040523d82523d6000602084013e610332565b606091505b50509050806101ff57600080fd5b5050565b6000336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016141561024b57507f000000000000000000000000000000000000000000000000000000000000000090565b610106610493565b3660008037600080366000845af43d6000803e8080156103c3573d6000f35b3d6000fd5b6103d181610408565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b803b6104815760405162461bcd60e51b815260206004820152603b60248201527f43616e6e6f742073657420612070726f787920696d706c656d656e746174696f60448201527f6e20746f2061206e6f6e2d636f6e74726163742061646472657373000000000060648201526084015b60405180910390fd5b60008051602061074783398151915255565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614156101065760405162461bcd60e51b815260206004820152603260248201527f43616e6e6f742063616c6c2066616c6c6261636b2066756e6374696f6e20667260448201527137b6903a343290383937bc3c9030b236b4b760711b6064820152608401610478565b80356001600160a01b038116811461053e57600080fd5b919050565b60006020828403121561055557600080fd5b61055e82610527565b9392505050565b60008060006040848603121561057a57600080fd5b61058384610527565b9250602084013567ffffffffffffffff808211156105a057600080fd5b818601915086601f8301126105b457600080fd5b8135818111156105c357600080fd5b8760208285010111156105d557600080fd5b6020830194508093505050509250925092565b634e487b7160e01b600052604160045260246000fd5b6000806040838503121561061157600080fd5b61061a83610527565b9150602083013567ffffffffffffffff8082111561063757600080fd5b818501915085601f83011261064b57600080fd5b81358181111561065d5761065d6105e8565b604051601f8201601f19908116603f01168101908382118183101715610685576106856105e8565b8160405282815288602084870101111561069e57600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b8183823760009101908152919050565b6000828210156106f057634e487b7160e01b600052601160045260246000fd5b500390565b634e487b7160e01b600052600160045260246000fd5b6000825160005b8181101561072c5760208186018101518583015201610712565b8181111561073b576000828501525b50919091019291505056fe360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbca26469706673582212205da0da878c704f579fd78dbb626d1dc7517aa7bd8aece5269cdd1c80c9bac91864736f6c63430008090033'

type InitializableImmutableAdminUpgradeabilityProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>

const isSuperArgs = (
  xs: InitializableImmutableAdminUpgradeabilityProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1

export class InitializableImmutableAdminUpgradeabilityProxy__factory extends ContractFactory {
  constructor(...args: InitializableImmutableAdminUpgradeabilityProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args)
    } else {
      super(_abi, _bytecode, args[0])
    }
  }

  override deploy(
    admin: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<InitializableImmutableAdminUpgradeabilityProxy> {
    return super.deploy(admin, overrides || {}) as Promise<InitializableImmutableAdminUpgradeabilityProxy>
  }
  override getDeployTransaction(
    admin: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(admin, overrides || {})
  }
  override attach(address: string): InitializableImmutableAdminUpgradeabilityProxy {
    return super.attach(address) as InitializableImmutableAdminUpgradeabilityProxy
  }
  override connect(signer: Signer): InitializableImmutableAdminUpgradeabilityProxy__factory {
    return super.connect(signer) as InitializableImmutableAdminUpgradeabilityProxy__factory
  }

  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): InitializableImmutableAdminUpgradeabilityProxyInterface {
    return new utils.Interface(_abi) as InitializableImmutableAdminUpgradeabilityProxyInterface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): InitializableImmutableAdminUpgradeabilityProxy {
    return new Contract(address, _abi, signerOrProvider) as InitializableImmutableAdminUpgradeabilityProxy
  }
}
