/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { Provider, TransactionRequest } from '@ethersproject/providers'
import { Contract, ContractFactory, Overrides, Signer, utils } from 'ethers'

import type { ERC20, ERC20Interface } from './IERC20Detailed'

const _abi = [
  {
    inputs: [
      {
        internalType: 'string',
        name: 'name_',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'symbol_',
        type: 'string',
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
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
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
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
    ],
    name: 'allowance',
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
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'approve',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
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
    name: 'decimals',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'subtractedValue',
        type: 'uint256',
      },
    ],
    name: 'decreaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'addedValue',
        type: 'uint256',
      },
    ],
    name: 'increaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [] as any,
    name: 'name',
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
    name: 'symbol',
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
    name: 'totalSupply',
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
        name: 'recipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transfer',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transferFrom',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

const _bytecode =
  '0x60806040523480156200001157600080fd5b5060405162000b6938038062000b698339810160408190526200003491620001e8565b81516200004990600390602085019062000075565b5080516200005f90600490602084019062000075565b50506005805460ff19166012179055506200028f565b828054620000839062000252565b90600052602060002090601f016020900481019282620000a75760008555620000f2565b82601f10620000c257805160ff1916838001178555620000f2565b82800160010185558215620000f2579182015b82811115620000f2578251825591602001919060010190620000d5565b506200010092915062000104565b5090565b5b8082111562000100576000815560010162000105565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200014357600080fd5b81516001600160401b03808211156200016057620001606200011b565b604051601f8301601f19908116603f011681019082821181831017156200018b576200018b6200011b565b81604052838152602092508683858801011115620001a857600080fd5b600091505b83821015620001cc5785820183015181830184015290820190620001ad565b83821115620001de5760008385830101525b9695505050505050565b60008060408385031215620001fc57600080fd5b82516001600160401b03808211156200021457600080fd5b620002228683870162000131565b935060208501519150808211156200023957600080fd5b50620002488582860162000131565b9150509250929050565b600181811c908216806200026757607f821691505b602082108114156200028957634e487b7160e01b600052602260045260246000fd5b50919050565b6108ca806200029f6000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80633950935111610071578063395093511461012957806370a082311461013c57806395d89b4114610165578063a457c2d71461016d578063a9059cbb14610180578063dd62ed3e1461019357600080fd5b806306fdde03146100ae578063095ea7b3146100cc57806318160ddd146100ef57806323b872dd14610101578063313ce56714610114575b600080fd5b6100b66101cc565b6040516100c39190610707565b60405180910390f35b6100df6100da366004610778565b61025e565b60405190151581526020016100c3565b6002545b6040519081526020016100c3565b6100df61010f3660046107a2565b610274565b60055460405160ff90911681526020016100c3565b6100df610137366004610778565b610323565b6100f361014a3660046107de565b6001600160a01b031660009081526020819052604090205490565b6100b661035f565b6100df61017b366004610778565b61036e565b6100df61018e366004610778565b610407565b6100f36101a1366004610800565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6060600380546101db90610833565b80601f016020809104026020016040519081016040528092919081815260200182805461020790610833565b80156102545780601f1061022957610100808354040283529160200191610254565b820191906000526020600020905b81548152906001019060200180831161023757829003601f168201915b5050505050905090565b600061026b338484610414565b50600192915050565b6000610281848484610538565b6001600160a01b03841660009081526001602090815260408083203384529091529020548281101561030b5760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b6103188533858403610414565b506001949350505050565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909161026b91859061035a90869061086e565b610414565b6060600480546101db90610833565b3360009081526001602090815260408083206001600160a01b0386168452909152812054828110156103f05760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610302565b6103fd3385858403610414565b5060019392505050565b600061026b338484610538565b6001600160a01b0383166104765760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610302565b6001600160a01b0382166104d75760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610302565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b03831661059c5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610302565b6001600160a01b0382166105fe5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610302565b6001600160a01b038316600090815260208190526040902054818110156106765760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610302565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906106ad90849061086e565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516106f991815260200190565b60405180910390a350505050565b600060208083528351808285015260005b8181101561073457858101830151858201604001528201610718565b81811115610746576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b038116811461077357600080fd5b919050565b6000806040838503121561078b57600080fd5b6107948361075c565b946020939093013593505050565b6000806000606084860312156107b757600080fd5b6107c08461075c565b92506107ce6020850161075c565b9150604084013590509250925092565b6000602082840312156107f057600080fd5b6107f98261075c565b9392505050565b6000806040838503121561081357600080fd5b61081c8361075c565b915061082a6020840161075c565b90509250929050565b600181811c9082168061084757607f821691505b6020821081141561086857634e487b7160e01b600052602260045260246000fd5b50919050565b6000821982111561088f57634e487b7160e01b600052601160045260246000fd5b50019056fea2646970667358221220ccbcc0c7e2e0986e07322687b6c6f5a51763c4170c507a8f5bc6c79b8c4d3e3664736f6c634300080b0033'

type ERC20ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>

const isSuperArgs = (xs: ERC20ConstructorParams): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1

export class ERC20__factory extends ContractFactory {
  constructor(...args: ERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args)
    } else {
      super(_abi, _bytecode, args[0])
    }
  }

  deploy(name_: string, symbol_: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ERC20> {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<ERC20>
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {})
  }
  attach(address: string): ERC20 {
    return super.attach(address) as ERC20
  }
  connect(signer: Signer): ERC20__factory {
    return super.connect(signer) as ERC20__factory
  }
  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): ERC20Interface {
    return new utils.Interface(_abi) as ERC20Interface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC20 {
    return new Contract(address, _abi, signerOrProvider) as ERC20
  }
}
