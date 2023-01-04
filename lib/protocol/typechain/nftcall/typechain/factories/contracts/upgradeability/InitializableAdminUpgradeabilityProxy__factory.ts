/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import type { Provider, TransactionRequest } from '@ethersproject/providers'
import type { PromiseOrValue } from '../../../common'
import type {
  InitializableAdminUpgradeabilityProxy,
  InitializableAdminUpgradeabilityProxyInterface,
} from '../../../contracts/upgradeability/InitializableAdminUpgradeabilityProxy'

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'previousAdmin',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'newAdmin',
        type: 'address',
      },
    ],
    name: 'AdminChanged',
    type: 'event',
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
    inputs: [
      {
        internalType: 'address',
        name: 'newAdmin',
        type: 'address',
      },
    ],
    name: 'changeAdmin',
    outputs: [] as any,
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
        name: 'logic',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'admin',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'data',
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
    outputs: [] as any,
    stateMutability: 'payable',
    type: 'function',
  },
]

const _bytecode =
  '0x608060405234801561001057600080fd5b506109fe806100206000396000f3fe6080604052600436106100705760003560e01c80638f2839701161004e5780638f283970146100de578063cf7a1d77146100fe578063d1f5789414610111578063f851a4401461012457610070565b80633659cfe61461007a5780634f1ef2861461009a5780635c60da1b146100ad575b610078610139565b005b34801561008657600080fd5b5061007861009536600461070e565b610161565b6100786100a8366004610730565b61019e565b3480156100b957600080fd5b506100c261024d565b6040516001600160a01b03909116815260200160405180910390f35b3480156100ea57600080fd5b506100786100f936600461070e565b61029d565b61007861010c366004610856565b6103af565b61007861011f3660046108b4565b610441565b34801561013057600080fd5b506100c261052f565b610141610574565b61015f61015a6000805160206109a98339815191525490565b61057c565b565b600080516020610989833981519152546001600160a01b0316336001600160a01b0316141561019657610193816105a0565b50565b610193610139565b600080516020610989833981519152546001600160a01b0316336001600160a01b03161415610240576101d0836105a0565b6000836001600160a01b031683836040516101ec929190610902565b600060405180830381855af49150503d8060008114610227576040519150601f19603f3d011682016040523d82523d6000602084013e61022c565b606091505b505090508061023a57600080fd5b50505050565b610248610139565b505050565b60006102656000805160206109898339815191525490565b6001600160a01b0316336001600160a01b0316141561029257506000805160206109a98339815191525490565b61029a610139565b90565b600080516020610989833981519152546001600160a01b0316336001600160a01b03161415610196576001600160a01b0381166103405760405162461bcd60e51b815260206004820152603660248201527f43616e6e6f74206368616e6765207468652061646d696e206f6620612070726f604482015275787920746f20746865207a65726f206164647265737360501b60648201526084015b60405180910390fd5b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f6103776000805160206109898339815191525490565b604080516001600160a01b03928316815291841660208301520160405180910390a16101938160008051602061098983398151915255565b60006103c76000805160206109a98339815191525490565b6001600160a01b0316146103da57600080fd5b6103e48382610441565b61040f60017fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6104610912565b6000805160206109898339815191521461042b5761042b610937565b6102488260008051602061098983398151915255565b60006104596000805160206109a98339815191525490565b6001600160a01b03161461046c57600080fd5b61049760017f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbd610912565b6000805160206109a9833981519152146104b3576104b3610937565b6104bc826105e0565b80511561052b576000826001600160a01b0316826040516104dd919061094d565b600060405180830381855af49150503d8060008114610518576040519150601f19603f3d011682016040523d82523d6000602084013e61051d565b606091505b505090508061024857600080fd5b5050565b60006105476000805160206109898339815191525490565b6001600160a01b0316336001600160a01b0316141561029257506000805160206109898339815191525490565b61015f610666565b3660008037600080366000845af43d6000803e80801561059b573d6000f35b3d6000fd5b6105a9816105e0565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b803b6106545760405162461bcd60e51b815260206004820152603b60248201527f43616e6e6f742073657420612070726f787920696d706c656d656e746174696f60448201527f6e20746f2061206e6f6e2d636f6e7472616374206164647265737300000000006064820152608401610337565b6000805160206109a983398151915255565b600080516020610989833981519152546001600160a01b0316336001600160a01b0316141561015f5760405162461bcd60e51b815260206004820152603260248201527f43616e6e6f742063616c6c2066616c6c6261636b2066756e6374696f6e20667260448201527137b6903a343290383937bc3c9030b236b4b760711b6064820152608401610337565b80356001600160a01b038116811461070957600080fd5b919050565b60006020828403121561072057600080fd5b610729826106f2565b9392505050565b60008060006040848603121561074557600080fd5b61074e846106f2565b9250602084013567ffffffffffffffff8082111561076b57600080fd5b818601915086601f83011261077f57600080fd5b81358181111561078e57600080fd5b8760208285010111156107a057600080fd5b6020830194508093505050509250925092565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126107da57600080fd5b813567ffffffffffffffff808211156107f5576107f56107b3565b604051601f8301601f19908116603f0116810190828211818310171561081d5761081d6107b3565b8160405283815286602085880101111561083657600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008060006060848603121561086b57600080fd5b610874846106f2565b9250610882602085016106f2565b9150604084013567ffffffffffffffff81111561089e57600080fd5b6108aa868287016107c9565b9150509250925092565b600080604083850312156108c757600080fd5b6108d0836106f2565b9150602083013567ffffffffffffffff8111156108ec57600080fd5b6108f8858286016107c9565b9150509250929050565b8183823760009101908152919050565b60008282101561093257634e487b7160e01b600052601160045260246000fd5b500390565b634e487b7160e01b600052600160045260246000fd5b6000825160005b8181101561096e5760208186018101518583015201610954565b8181111561097d576000828501525b50919091019291505056feb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbca26469706673582212201e39d2b542f0a2fbffb3fb6027784fadc23e7d598573a4106bc2296a5c224ca964736f6c63430008090033'

type InitializableAdminUpgradeabilityProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>

const isSuperArgs = (
  xs: InitializableAdminUpgradeabilityProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1

export class InitializableAdminUpgradeabilityProxy__factory extends ContractFactory {
  constructor(...args: InitializableAdminUpgradeabilityProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args)
    } else {
      super(_abi, _bytecode, args[0])
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<InitializableAdminUpgradeabilityProxy> {
    return super.deploy(overrides || {}) as Promise<InitializableAdminUpgradeabilityProxy>
  }
  override getDeployTransaction(overrides?: Overrides & { from?: PromiseOrValue<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  override attach(address: string): InitializableAdminUpgradeabilityProxy {
    return super.attach(address) as InitializableAdminUpgradeabilityProxy
  }
  override connect(signer: Signer): InitializableAdminUpgradeabilityProxy__factory {
    return super.connect(signer) as InitializableAdminUpgradeabilityProxy__factory
  }

  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): InitializableAdminUpgradeabilityProxyInterface {
    return new utils.Interface(_abi) as InitializableAdminUpgradeabilityProxyInterface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): InitializableAdminUpgradeabilityProxy {
    return new Contract(address, _abi, signerOrProvider) as InitializableAdminUpgradeabilityProxy
  }
}
