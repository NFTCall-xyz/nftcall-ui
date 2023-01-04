/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import type { Provider, TransactionRequest } from '@ethersproject/providers'
import type { PromiseOrValue } from '../../../../common'
import type { MockCloneX, MockCloneXInterface } from '../../../../contracts/mocked/Tokens.sol/MockCloneX'

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
    inputs: [] as any,
    name: 'MAX_SUPPLY',
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
    name: 'approve',
    outputs: [] as any,
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
    inputs: [] as any,
    name: 'mint',
    outputs: [] as any,
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
    outputs: [] as any,
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
    outputs: [] as any,
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
    outputs: [] as any,
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
    outputs: [] as any,
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
    outputs: [] as any,
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
    outputs: [] as any,
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

const _bytecode =
  '0x60806040523480156200001157600080fd5b50604080518082018252600a81526909adec6d686d8dedccab60b31b602080830191825283518085019094526006845265086989e9c8ab60d31b9084015281519192916200006291600091620000f1565b50805162000078906001906020840190620000f1565b505050620000956200008f6200009b60201b60201c565b6200009f565b620001d4565b3390565b600a80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b828054620000ff9062000197565b90600052602060002090601f0160209004810192826200012357600085556200016e565b82601f106200013e57805160ff19168380011785556200016e565b828001600101855582156200016e579182015b828111156200016e57825182559160200191906001019062000151565b506200017c92915062000180565b5090565b5b808211156200017c576000815560010162000181565b600181811c90821680620001ac57607f821691505b60208210811415620001ce57634e487b7160e01b600052602260045260246000fd5b50919050565b6118d780620001e46000396000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c80634f6ccce7116100b857806395d89b411161007c57806395d89b4114610267578063a22cb4651461026f578063b88d4fde14610282578063c87b56dd14610295578063e985e9c5146102a8578063f2fde38b146102e457600080fd5b80634f6ccce7146102155780636352211e1461022857806370a082311461023b578063715018a61461024e5780638da5cb5b1461025657600080fd5b806318160ddd116100ff57806318160ddd146101c157806323b872dd146101d35780632f745c59146101e657806332cb6b0c146101f957806342842e0e1461020257600080fd5b806301ffc9a71461013c57806306fdde0314610164578063081812fc14610179578063095ea7b3146101a45780631249c58b146101b9575b600080fd5b61014f61014a3660046113d4565b6102f7565b60405190151581526020015b60405180910390f35b61016c610308565b60405161015b9190611449565b61018c61018736600461145c565b61039a565b6040516001600160a01b03909116815260200161015b565b6101b76101b2366004611491565b6103c1565b005b6101b76104dc565b6008545b60405190815260200161015b565b6101b76101e13660046114bb565b610500565b6101c56101f4366004611491565b610531565b6101c561271081565b6101b76102103660046114bb565b6105c7565b6101c561022336600461145c565b6105e2565b61018c61023636600461145c565b610675565b6101c56102493660046114f7565b6106d5565b6101b761075b565b600a546001600160a01b031661018c565b61016c61076f565b6101b761027d366004611512565b61077e565b6101b7610290366004611564565b61078d565b61016c6102a336600461145c565b6107c5565b61014f6102b6366004611640565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b6101b76102f23660046114f7565b610839565b6000610302826108af565b92915050565b60606000805461031790611673565b80601f016020809104026020016040519081016040528092919081815260200182805461034390611673565b80156103905780601f1061036557610100808354040283529160200191610390565b820191906000526020600020905b81548152906001019060200180831161037357829003601f168201915b5050505050905090565b60006103a5826108d4565b506000908152600460205260409020546001600160a01b031690565b60006103cc82610675565b9050806001600160a01b0316836001600160a01b0316141561043f5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084015b60405180910390fd5b336001600160a01b038216148061045b575061045b81336102b6565b6104cd5760405162461bcd60e51b815260206004820152603e60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c00006064820152608401610436565b6104d78383610933565b505050565b60006104e760085490565b90506104fd336104f88360016116c4565b6109a1565b50565b61050a33826109bb565b6105265760405162461bcd60e51b8152600401610436906116dc565b6104d7838383610a3a565b600061053c836106d5565b821061059e5760405162461bcd60e51b815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201526a74206f6620626f756e647360a81b6064820152608401610436565b506001600160a01b03919091166000908152600660209081526040808320938352929052205490565b6104d78383836040518060200160405280600081525061078d565b60006105ed60085490565b82106106505760405162461bcd60e51b815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201526b7574206f6620626f756e647360a01b6064820152608401610436565b600882815481106106635761066361172a565b90600052602060002001549050919050565b6000818152600260205260408120546001600160a01b0316806103025760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b6044820152606401610436565b60006001600160a01b03821661073f5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b6064820152608401610436565b506001600160a01b031660009081526003602052604090205490565b610763610be1565b61076d6000610c3b565b565b60606001805461031790611673565b610789338383610c8d565b5050565b61079733836109bb565b6107b35760405162461bcd60e51b8152600401610436906116dc565b6107bf84848484610d5c565b50505050565b60606107d0826108d4565b60006107e760408051602081019091526000815290565b905060008151116108075760405180602001604052806000815250610832565b8061081184610d8f565b604051602001610822929190611740565b6040516020818303038152906040525b9392505050565b610841610be1565b6001600160a01b0381166108a65760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610436565b6104fd81610c3b565b60006001600160e01b0319821663780e9d6360e01b1480610302575061030282610e8d565b6000818152600260205260409020546001600160a01b03166104fd5760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b6044820152606401610436565b600081815260046020526040902080546001600160a01b0319166001600160a01b038416908117909155819061096882610675565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b610789828260405180602001604052806000815250610edd565b6000806109c783610675565b9050806001600160a01b0316846001600160a01b03161480610a0e57506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b80610a325750836001600160a01b0316610a278461039a565b6001600160a01b0316145b949350505050565b826001600160a01b0316610a4d82610675565b6001600160a01b031614610ab15760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b6064820152608401610436565b6001600160a01b038216610b135760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610436565b610b1e838383610f10565b610b29600082610933565b6001600160a01b0383166000908152600360205260408120805460019290610b5290849061176f565b90915550506001600160a01b0382166000908152600360205260408120805460019290610b809084906116c4565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b600a546001600160a01b0316331461076d5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610436565b600a80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b816001600160a01b0316836001600160a01b03161415610cef5760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610436565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b610d67848484610a3a565b610d7384848484610f1b565b6107bf5760405162461bcd60e51b815260040161043690611786565b606081610db35750506040805180820190915260018152600360fc1b602082015290565b8160005b8115610ddd5780610dc7816117d8565b9150610dd69050600a83611809565b9150610db7565b60008167ffffffffffffffff811115610df857610df861154e565b6040519080825280601f01601f191660200182016040528015610e22576020820181803683370190505b5090505b8415610a3257610e3760018361176f565b9150610e44600a8661181d565b610e4f9060306116c4565b60f81b818381518110610e6457610e6461172a565b60200101906001600160f81b031916908160001a905350610e86600a86611809565b9450610e26565b60006001600160e01b031982166380ac58cd60e01b1480610ebe57506001600160e01b03198216635b5e139f60e01b145b8061030257506301ffc9a760e01b6001600160e01b0319831614610302565b610ee78383611028565b610ef46000848484610f1b565b6104d75760405162461bcd60e51b815260040161043690611786565b6104d7838383611176565b60006001600160a01b0384163b1561101d57604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290610f5f903390899088908890600401611831565b602060405180830381600087803b158015610f7957600080fd5b505af1925050508015610fa9575060408051601f3d908101601f19168201909252610fa69181019061186e565b60015b611003573d808015610fd7576040519150601f19603f3d011682016040523d82523d6000602084013e610fdc565b606091505b508051610ffb5760405162461bcd60e51b815260040161043690611786565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610a32565b506001949350505050565b6001600160a01b03821661107e5760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610436565b6000818152600260205260409020546001600160a01b0316156110e35760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610436565b6110ef60008383610f10565b6001600160a01b03821660009081526003602052604081208054600192906111189084906116c4565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6001600160a01b0383166111d1576111cc81600880546000838152600960205260408120829055600182018355919091527ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee30155565b6111f4565b816001600160a01b0316836001600160a01b0316146111f4576111f4838261122e565b6001600160a01b03821661120b576104d7816112cb565b826001600160a01b0316826001600160a01b0316146104d7576104d7828261137a565b6000600161123b846106d5565b611245919061176f565b600083815260076020526040902054909150808214611298576001600160a01b03841660009081526006602090815260408083208584528252808320548484528184208190558352600790915290208190555b5060009182526007602090815260408084208490556001600160a01b039094168352600681528383209183525290812055565b6008546000906112dd9060019061176f565b600083815260096020526040812054600880549394509092849081106113055761130561172a565b9060005260206000200154905080600883815481106113265761132661172a565b600091825260208083209091019290925582815260099091526040808220849055858252812055600880548061135e5761135e61188b565b6001900381819060005260206000200160009055905550505050565b6000611385836106d5565b6001600160a01b039093166000908152600660209081526040808320868452825280832085905593825260079052919091209190915550565b6001600160e01b0319811681146104fd57600080fd5b6000602082840312156113e657600080fd5b8135610832816113be565b60005b8381101561140c5781810151838201526020016113f4565b838111156107bf5750506000910152565b600081518084526114358160208601602086016113f1565b601f01601f19169290920160200192915050565b602081526000610832602083018461141d565b60006020828403121561146e57600080fd5b5035919050565b80356001600160a01b038116811461148c57600080fd5b919050565b600080604083850312156114a457600080fd5b6114ad83611475565b946020939093013593505050565b6000806000606084860312156114d057600080fd5b6114d984611475565b92506114e760208501611475565b9150604084013590509250925092565b60006020828403121561150957600080fd5b61083282611475565b6000806040838503121561152557600080fd5b61152e83611475565b91506020830135801515811461154357600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b6000806000806080858703121561157a57600080fd5b61158385611475565b935061159160208601611475565b925060408501359150606085013567ffffffffffffffff808211156115b557600080fd5b818701915087601f8301126115c957600080fd5b8135818111156115db576115db61154e565b604051601f8201601f19908116603f011681019083821181831017156116035761160361154e565b816040528281528a602084870101111561161c57600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b6000806040838503121561165357600080fd5b61165c83611475565b915061166a60208401611475565b90509250929050565b600181811c9082168061168757607f821691505b602082108114156116a857634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b600082198211156116d7576116d76116ae565b500190565b6020808252602e908201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560408201526d1c881b9bdc88185c1c1c9bdd995960921b606082015260800190565b634e487b7160e01b600052603260045260246000fd5b600083516117528184602088016113f1565b8351908301906117668183602088016113f1565b01949350505050565b600082821015611781576117816116ae565b500390565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b60006000198214156117ec576117ec6116ae565b5060010190565b634e487b7160e01b600052601260045260246000fd5b600082611818576118186117f3565b500490565b60008261182c5761182c6117f3565b500690565b6001600160a01b03858116825284166020820152604081018390526080606082018190526000906118649083018461141d565b9695505050505050565b60006020828403121561188057600080fd5b8151610832816113be565b634e487b7160e01b600052603160045260246000fdfea2646970667358221220d3e9528394cccdce3d45806520171e12ba11a98a88dbb91b5d9c933b4a07f72864736f6c63430008090033'

type MockCloneXConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>

const isSuperArgs = (xs: MockCloneXConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
  xs.length > 1

export class MockCloneX__factory extends ContractFactory {
  constructor(...args: MockCloneXConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args)
    } else {
      super(_abi, _bytecode, args[0])
    }
  }

  override deploy(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<MockCloneX> {
    return super.deploy(overrides || {}) as Promise<MockCloneX>
  }
  override getDeployTransaction(overrides?: Overrides & { from?: PromiseOrValue<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  override attach(address: string): MockCloneX {
    return super.attach(address) as MockCloneX
  }
  override connect(signer: Signer): MockCloneX__factory {
    return super.connect(signer) as MockCloneX__factory
  }

  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): MockCloneXInterface {
    return new utils.Interface(_abi) as MockCloneXInterface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): MockCloneX {
    return new Contract(address, _abi, signerOrProvider) as MockCloneX
  }
}
