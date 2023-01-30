/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { Provider, TransactionRequest } from '@ethersproject/providers'
import { Contract, ContractFactory, Overrides, Signer, utils } from 'ethers'

import type { PromiseOrValue } from '../../common'
import type { CallToken, CallTokenInterface } from '../../contracts/CallToken'

const _abi = [
  {
    inputs: [] as any,
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
        name: 'approved',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
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
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'approved',
        type: 'bool',
      },
    ],
    name: 'ApprovalForAll',
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
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'Burn',
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
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'Mint',
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
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'exercisePrice',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'exercisePeriodBegin',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'exercisePeriodEnd',
        type: 'uint256',
      },
    ],
    name: 'Open',
    type: 'event',
  },
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
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
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
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
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
    name: 'burn',
    outputs: [],
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
    name: 'getApproved',
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
    name: 'getCallInfo',
    outputs: [
      {
        components: [
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
            name: 'strikePrice',
            type: 'uint256',
          },
        ],
        internalType: 'struct CallInfo',
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
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
    ],
    name: 'isApprovedForAll',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'mint',
    outputs: [],
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
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'strikePrice',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'duration',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'exercisePeriodProportion',
        type: 'uint256',
      },
    ],
    name: 'open',
    outputs: [],
    stateMutability: 'nonpayable',
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
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'ownerOf',
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
        name: 'from',
        type: 'address',
      },
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
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
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
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: 'approved',
        type: 'bool',
      },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'interfaceId',
        type: 'bytes4',
      },
    ],
    name: 'supportsInterface',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
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
    inputs: [
      {
        internalType: 'uint256',
        name: 'index',
        type: 'uint256',
      },
    ],
    name: 'tokenByIndex',
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
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'index',
        type: 'uint256',
      },
    ],
    name: 'tokenOfOwnerByIndex',
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
    name: 'tokenURI',
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
        name: 'from',
        type: 'address',
      },
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
    name: 'transferFrom',
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
  '0x60a06040523480156200001157600080fd5b50604080518082018252600981526821b0b6362a37b5b2b760b91b60208083019182528351808501909452600284526110d560f21b9084015281519192916200005d9160009162000172565b5080516200007390600190602084019062000172565b505050620000906200008a6200011c60201b60201c565b62000120565b336001600160a01b031663890357306040518163ffffffff1660e01b815260040160c06040518083038186803b158015620000ca57600080fd5b505afa158015620000df573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000105919062000235565b505050506001600160a01b031660805250620002f3565b3390565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b8280546200018090620002b6565b90600052602060002090601f016020900481019282620001a45760008555620001ef565b82601f10620001bf57805160ff1916838001178555620001ef565b82800160010185558215620001ef579182015b82811115620001ef578251825591602001919060010190620001d2565b50620001fd92915062000201565b5090565b5b80821115620001fd576000815560010162000202565b80516001600160a01b03811681146200023057600080fd5b919050565b60008060008060008060c087890312156200024f57600080fd5b6200025a8762000218565b95506200026a6020880162000218565b94506200027a6040880162000218565b93506200028a6060880162000218565b92506200029a6080880162000218565b9150620002aa60a0880162000218565b90509295509295509295565b600181811c90821680620002cb57607f821691505b60208210811415620002ed57634e487b7160e01b600052602260045260246000fd5b50919050565b608051611fa66200032460003960008181610254015281816103d701528181610c4d0152610d690152611fa66000f3fe608060405234801561001057600080fd5b50600436106101585760003560e01c80635fd286eb116100c357806395d89b411161007c57806395d89b4114610310578063a22cb46514610318578063b88d4fde1461032b578063c87b56dd1461033e578063e985e9c514610351578063f2fde38b1461038d57600080fd5b80635fd286eb146102895780636352211e146102be57806370a08231146102d1578063715018a6146102e457806378745e1c146102ec5780638da5cb5b146102ff57600080fd5b80632f745c59116101155780632f745c591461020357806340c10f191461021657806342842e0e1461022957806342966c681461023c57806347ccca021461024f5780634f6ccce71461027657600080fd5b806301ffc9a71461015d57806306fdde0314610185578063081812fc1461019a578063095ea7b3146101c557806318160ddd146101da57806323b872dd146101f0575b600080fd5b61017061016b366004611959565b6103a0565b60405190151581526020015b60405180910390f35b61018d6103cb565b60405161017c91906119ce565b6101ad6101a83660046119e1565b61048f565b6040516001600160a01b03909116815260200161017c565b6101d86101d3366004611a16565b6104b6565b005b6101e26105d1565b60405190815260200161017c565b6101d86101fe366004611a40565b610647565b6101e2610211366004611a16565b610695565b6101d8610224366004611a16565b6107cc565b6101d8610237366004611a40565b610854565b6101d861024a3660046119e1565b61089c565b6101ad7f000000000000000000000000000000000000000000000000000000000000000081565b6101e26102843660046119e1565b610910565b61029c6102973660046119e1565b6109ed565b604080518251815260208084015190820152918101519082015260600161017c565b6101ad6102cc3660046119e1565b610a4a565b6101e26102df366004611a7c565b610a97565b6101d8610b30565b6101d86102fa366004611a97565b610b44565b6006546001600160a01b03166101ad565b61018d610c41565b6101d8610326366004611ad9565b610cf1565b6101d8610339366004611b84565b610d00565b61018d61034c3660046119e1565b610d50565b61017061035f366004611c2f565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b6101d861039b366004611a7c565b610def565b60006001600160e01b0319821663780e9d6360e01b14806103c557506103c582610e68565b92915050565b60606103d5610eb8565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166306fdde036040518163ffffffff1660e01b815260040160006040518083038186803b15801561042e57600080fd5b505afa158015610442573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261046a9190810190611c62565b60405160200161047b929190611cd9565b604051602081830303815290604052905090565b600061049a82610f4a565b506000908152600460205260409020546001600160a01b031690565b60006104c182610fa9565b9050806001600160a01b0316836001600160a01b031614156105345760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084015b60405180910390fd5b336001600160a01b03821614806105505750610550813361035f565b6105c25760405162461bcd60e51b815260206004820152603e60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c0000606482015260840161052b565b6105cc8383611009565b505050565b60008042815b60085481101561063f576000600882815481106105f6576105f6611d15565b906000526020600020015490506007600082815260200190815260200160002060010154831161062e5761062b600185611d41565b93505b5061063881611d59565b90506105d7565b509092915050565b60008181526007602052604090206001015480158015906106685750804211155b6106845760405162461bcd60e51b815260040161052b90611d74565b61068f848484611077565b50505050565b60085460009082106106e55760405162461bcd60e51b81526020600482015260196024820152786f776e657220696e646578206f7574206f6620626f756e647360381b604482015260640161052b565b426000805b6008548110156107875760006008828154811061070957610709611d15565b90600052602060002001549050866001600160a01b031661072982610fa9565b6001600160a01b031614801561075057506000818152600760205260409020600101548411155b1561077657858314156107685793506103c592505050565b610773600184611d41565b92505b5061078081611d59565b90506106ea565b5060405162461bcd60e51b81526020600482015260196024820152786f776e657220696e646578206f7574206f6620626f756e647360381b604482015260640161052b565b6107d46110a8565b60408051606081018252600080825260208083018281528385018381528684526007909252939091209151825591516001820155905160029091015561081a8282611102565b60405181906001600160a01b038416907f0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d412139688590600090a35050565b60008181526007602052604090206001015480158015906108755750804211155b6108915760405162461bcd60e51b815260040161052b90611d74565b61068f84848461111c565b6108a46110a8565b60006108af82610fa9565b6000838152600760205260408120818155600181018290556002015590506108d682611137565b60405182906001600160a01b038316907fcc16f5dbb4873280815c1ee09dbd06736cffcc184412cf7a71a0fdb75d397ca590600090a35050565b60008042815b60085481101561098f5760006008828154811061093557610935611d15565b906000526020600020015490506007600082815260200190815260200160002060010154831161097e57858414156109705795945050505050565b61097b600185611d41565b93505b5061098881611d59565b9050610916565b5060405162461bcd60e51b815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201526b7574206f6620626f756e647360a01b606482015260840161052b565b610a1160405180606001604052806000815260200160008152602001600081525090565b50600090815260076020908152604091829020825160608101845281548152600182015492810192909252600201549181019190915290565b6000818152600760205260408120600101548015801590610a6b5750804211155b610a875760405162461bcd60e51b815260040161052b90611d74565b610a9083610fa9565b9392505050565b60008042815b600854811015610b2757600060088281548110610abc57610abc611d15565b90600052602060002001549050856001600160a01b0316610adc82610fa9565b6001600160a01b0316148015610b0357506000818152600760205260409020600101548311155b15610b1657610b13600185611d41565b93505b50610b2081611d59565b9050610a9d565b50909392505050565b610b386110a8565b610b4260006111de565b565b610b4c6110a8565b6000848152600760205260409020600101544211610b6957600080fd5b6000610b758342611d41565b90506000612710610b868486611d9e565b610b909190611dbd565b610b9a9083611ddf565b6040805160608101825282815260208082018681528284018a815260008c81526007909352939091209151825551600182015590516002909101559050610bea610be387610fa9565b8888611230565b604080518681526020810183905290810183905286906001600160a01b038916907f86b71d373e8d15f7c924340f2b1c55729b133d62d8fd4a7bbefd7fe0fbe38db89060600160405180910390a350505050505050565b6060610c4b6113d7565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166395d89b416040518163ffffffff1660e01b815260040160006040518083038186803b158015610ca457600080fd5b505afa158015610cb8573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610ce09190810190611c62565b60405160200161047b929190611df6565b610cfc3383836113e6565b5050565b6000828152600760205260409020600101548015801590610d215750804211155b610d3d5760405162461bcd60e51b815260040161052b90611d74565b610d49858585856114b5565b5050505050565b60405163c87b56dd60e01b8152600481018290526060907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063c87b56dd9060240160006040518083038186803b158015610db357600080fd5b505afa158015610dc7573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526103c59190810190611c62565b610df76110a8565b6001600160a01b038116610e5c5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161052b565b610e65816111de565b50565b60006001600160e01b031982166380ac58cd60e01b1480610e9957506001600160e01b03198216635b5e139f60e01b145b806103c557506301ffc9a760e01b6001600160e01b03198316146103c5565b606060008054610ec790611e25565b80601f0160208091040260200160405190810160405280929190818152602001828054610ef390611e25565b8015610f405780601f10610f1557610100808354040283529160200191610f40565b820191906000526020600020905b815481529060010190602001808311610f2357829003601f168201915b5050505050905090565b6000818152600260205260409020546001600160a01b0316610e655760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b604482015260640161052b565b6000818152600260205260408120546001600160a01b0316806103c55760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b604482015260640161052b565b600081815260046020526040902080546001600160a01b0319166001600160a01b038416908117909155819061103e82610fa9565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b61108133826114e7565b61109d5760405162461bcd60e51b815260040161052b90611e60565b6105cc838383611230565b6006546001600160a01b03163314610b425760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161052b565b610cfc828260405180602001604052806000815250611566565b6105cc83838360405180602001604052806000815250610d00565b600061114282610fa9565b905061115081600084611599565b61115b600083611009565b6001600160a01b0381166000908152600360205260408120805460019290611184908490611ddf565b909155505060008281526002602052604080822080546001600160a01b0319169055518391906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b826001600160a01b031661124382610fa9565b6001600160a01b0316146112a75760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b606482015260840161052b565b6001600160a01b0382166113095760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b606482015260840161052b565b611314838383611599565b61131f600082611009565b6001600160a01b0383166000908152600360205260408120805460019290611348908490611ddf565b90915550506001600160a01b0382166000908152600360205260408120805460019290611376908490611d41565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b606060018054610ec790611e25565b816001600160a01b0316836001600160a01b031614156114485760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604482015260640161052b565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6114bf33836114e7565b6114db5760405162461bcd60e51b815260040161052b90611e60565b61068f84848484611606565b6000806114f383610fa9565b9050806001600160a01b0316846001600160a01b0316148061153a57506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b8061155e5750836001600160a01b03166115538461048f565b6001600160a01b0316145b949350505050565b6115708383611639565b61157d6000848484611787565b6105cc5760405162461bcd60e51b815260040161052b90611eae565b6001600160a01b0383166115ef576115ef81600880546000838152600960205260408120829055600182018355919091527ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee30155565b6001600160a01b0382166105cc576105cc81611894565b611611848484611230565b61161d84848484611787565b61068f5760405162461bcd60e51b815260040161052b90611eae565b6001600160a01b03821661168f5760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604482015260640161052b565b6000818152600260205260409020546001600160a01b0316156116f45760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604482015260640161052b565b61170060008383611599565b6001600160a01b0382166000908152600360205260408120805460019290611729908490611d41565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b60006001600160a01b0384163b1561188957604051630a85bd0160e11b81526001600160a01b0385169063150b7a02906117cb903390899088908890600401611f00565b602060405180830381600087803b1580156117e557600080fd5b505af1925050508015611815575060408051601f3d908101601f1916820190925261181291810190611f3d565b60015b61186f573d808015611843576040519150601f19603f3d011682016040523d82523d6000602084013e611848565b606091505b5080516118675760405162461bcd60e51b815260040161052b90611eae565b805181602001fd5b6001600160e01b031916630a85bd0160e11b14905061155e565b506001949350505050565b6008546000906118a690600190611ddf565b600083815260096020526040812054600880549394509092849081106118ce576118ce611d15565b9060005260206000200154905080600883815481106118ef576118ef611d15565b600091825260208083209091019290925582815260099091526040808220849055858252812055600880548061192757611927611f5a565b6001900381819060005260206000200160009055905550505050565b6001600160e01b031981168114610e6557600080fd5b60006020828403121561196b57600080fd5b8135610a9081611943565b60005b83811015611991578181015183820152602001611979565b8381111561068f5750506000910152565b600081518084526119ba816020860160208601611976565b601f01601f19169290920160200192915050565b602081526000610a9060208301846119a2565b6000602082840312156119f357600080fd5b5035919050565b80356001600160a01b0381168114611a1157600080fd5b919050565b60008060408385031215611a2957600080fd5b611a32836119fa565b946020939093013593505050565b600080600060608486031215611a5557600080fd5b611a5e846119fa565b9250611a6c602085016119fa565b9150604084013590509250925092565b600060208284031215611a8e57600080fd5b610a90826119fa565b600080600080600060a08688031215611aaf57600080fd5b611ab8866119fa565b97602087013597506040870135966060810135965060800135945092505050565b60008060408385031215611aec57600080fd5b611af5836119fa565b915060208301358015158114611b0a57600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715611b5457611b54611b15565b604052919050565b600067ffffffffffffffff821115611b7657611b76611b15565b50601f01601f191660200190565b60008060008060808587031215611b9a57600080fd5b611ba3856119fa565b9350611bb1602086016119fa565b925060408501359150606085013567ffffffffffffffff811115611bd457600080fd5b8501601f81018713611be557600080fd5b8035611bf8611bf382611b5c565b611b2b565b818152886020838501011115611c0d57600080fd5b8160208401602083013760006020838301015280935050505092959194509250565b60008060408385031215611c4257600080fd5b611c4b836119fa565b9150611c59602084016119fa565b90509250929050565b600060208284031215611c7457600080fd5b815167ffffffffffffffff811115611c8b57600080fd5b8201601f81018413611c9c57600080fd5b8051611caa611bf382611b5c565b818152856020838501011115611cbf57600080fd5b611cd0826020830160208601611976565b95945050505050565b60008351611ceb818460208801611976565b600160fd1b9083019081528351611d09816001840160208801611976565b01600101949350505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60008219821115611d5457611d54611d2b565b500190565b6000600019821415611d6d57611d6d611d2b565b5060010190565b60208082526010908201526f1d1bdad95b881a5cc8195e1c1a5c995960821b604082015260600190565b6000816000190483118215151615611db857611db8611d2b565b500290565b600082611dda57634e487b7160e01b600052601260045260246000fd5b500490565b600082821015611df157611df1611d2b565b500390565b60008351611e08818460208801611976565b835190830190611e1c818360208801611976565b01949350505050565b600181811c90821680611e3957607f821691505b60208210811415611e5a57634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252602e908201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560408201526d1c881b9bdc88185c1c1c9bdd995960921b606082015260800190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090611f33908301846119a2565b9695505050505050565b600060208284031215611f4f57600080fd5b8151610a9081611943565b634e487b7160e01b600052603160045260246000fdfea26469706673582212205dd3b2f8629cdfb1dd6204f740587581431442aaeebddc5186e445b7042010da64736f6c63430008090033'

type CallTokenConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>

const isSuperArgs = (xs: CallTokenConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
  xs.length > 1

export class CallToken__factory extends ContractFactory {
  constructor(...args: CallTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args)
    } else {
      super(_abi, _bytecode, args[0])
    }
  }

  override deploy(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<CallToken> {
    return super.deploy(overrides || {}) as Promise<CallToken>
  }
  override getDeployTransaction(overrides?: Overrides & { from?: PromiseOrValue<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  override attach(address: string): CallToken {
    return super.attach(address) as CallToken
  }
  override connect(signer: Signer): CallToken__factory {
    return super.connect(signer) as CallToken__factory
  }

  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): CallTokenInterface {
    return new utils.Interface(_abi) as CallTokenInterface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): CallToken {
    return new Contract(address, _abi, signerOrProvider) as CallToken
  }
}
