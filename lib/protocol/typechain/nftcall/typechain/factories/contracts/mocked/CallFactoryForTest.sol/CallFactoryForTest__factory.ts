/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import type { Provider, TransactionRequest } from '@ethersproject/providers'
import type { PromiseOrValue } from '../../../../common'
import type {
  CallFactoryForTest,
  CallFactoryForTestInterface,
} from '../../../../contracts/mocked/CallFactoryForTest.sol/CallFactoryForTest'

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'nTokenFactory',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'callTokenFactory',
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
        name: 'erc721token',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'oracle',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'pool',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'premium',
        type: 'address',
      },
    ],
    name: 'PoolCreated',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'erc721token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'oracle',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'premium',
        type: 'address',
      },
    ],
    name: 'createPool',
    outputs: [
      {
        internalType: 'address',
        name: 'pool',
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
        name: '',
        type: 'address',
      },
    ],
    name: 'getPool',
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
    name: 'parameters',
    outputs: [
      {
        internalType: 'address',
        name: 'factory',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'erc721token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'ntoken',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'calltoken',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'oracle',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'premium',
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
  '0x60e060405234801561001057600080fd5b5060405161415438038061415483398101604081905261002f916100c4565b6001600160a01b03828116608052811660a0523060c05261004f33610056565b50506100f7565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b80516001600160a01b03811681146100bf57600080fd5b919050565b600080604083850312156100d757600080fd5b6100e0836100a8565b91506100ee602084016100a8565b90509250929050565b60805160a05160c05161402e610126600039600061016f01526000610524015260006103ed015261402e6000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c8063236aea2e14610067578063715018a61461009757806389035730146100a15780638da5cb5b14610115578063bbe4f6db14610126578063f2fde38b1461014f575b600080fd5b61007a610075366004610838565b610162565b6040516001600160a01b0390911681526020015b60405180910390f35b61009f610289565b005b6000546001546002546003546004546005546100d3956001600160a01b03908116958116948116938116928116911686565b604080516001600160a01b03978816815295871660208701529386169385019390935290841660608401528316608083015290911660a082015260c00161008e565b6006546001600160a01b031661007a565b61007a610134366004610883565b6007602052600090815260409020546001600160a01b031681565b61009f61015d366004610883565b61029d565b6000306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461019957600080fd5b6101a161031b565b6001600160a01b0384166101b457600080fd5b6001600160a01b0383166101c757600080fd5b6001600160a01b0382166101da57600080fd5b6001600160a01b0384811660009081526007602052604090205416156101ff57600080fd5b600061020d30868686610375565b6001600160a01b0386811660008181526007602090815260409182902080546001600160a01b03191686861690811790915582518a8616815291820152928716908301529192507f55b6e041bb1679bf2b32c9252ad372f3459868b982e77a0ae577d59c947e37579060600160405180910390a2509392505050565b61029161031b565b61029b60006107c3565b565b6102a561031b565b6001600160a01b03811661030f5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b610318816107c3565b50565b6006546001600160a01b0316331461029b5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610306565b600080546001600160a01b03199081166001600160a01b03878116919091178355600180548316878316908117909155600480548416878416179055600580549093168583161790925560408051602081018290526006606082015265373a37b5b2b760d11b608082015290810192909252829182917f0000000000000000000000000000000000000000000000000000000000000000169060a00160408051601f19818403018152908290528051602090910120602482015260440160408051601f198184030181529181526020820180516001600160e01b031663052aa60960e51b1790525161046791906108a7565b600060405180830381855af49150503d80600081146104a2576040519150601f19603f3d011682016040523d82523d6000602084013e6104a7565b606091505b5091509150816104b657600080fd5b6000818060200190518101906104cc91906108e2565b600280546001600160a01b0319166001600160a01b03838116919091179091556040805160208101829052600960608201526831b0b6363a37b5b2b760b91b60808201528a83169181019190915291925060009182917f0000000000000000000000000000000000000000000000000000000000000000169060a00160408051601f19818403018152908290528051602090910120602482015260440160408051601f198184030181529181526020820180516001600160e01b03166396f3806960e01b1790525161059e91906108a7565b600060405180830381855af49150503d80600081146105d9576040519150601f19603f3d011682016040523d82523d6000602084013e6105de565b606091505b5091509150816105ed57600080fd5b60008180602001905181019061060391906108e2565b600380546001600160a01b0319166001600160a01b038381169182179092556040805160c060208201819052600860e08301526718d85b1b1c1bdbdb60c21b6101008301528f851692820192909252888416606082015260808101929092528c831660a0830152918b1691810191909152909150610120016040516020818303038152906040528051906020012060405161069d90610815565b8190604051809103906000f59050801580156106bd573d6000803e3d6000fd5b5060405163f2fde38b60e01b81526001600160a01b0380831660048301529198509085169063f2fde38b90602401600060405180830381600087803b15801561070557600080fd5b505af1158015610719573d6000803e3d6000fd5b505060405163f2fde38b60e01b81526001600160a01b038a811660048301528416925063f2fde38b9150602401600060405180830381600087803b15801561076057600080fd5b505af1158015610774573d6000803e3d6000fd5b5050600080546001600160a01b0319908116909155600180548216905560028054821690556003805482169055600480548216905560058054909116905550969b9a5050505050505050505050565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6136f9806200090083390190565b6001600160a01b038116811461031857600080fd5b60008060006060848603121561084d57600080fd5b833561085881610823565b9250602084013561086881610823565b9150604084013561087881610823565b809150509250925092565b60006020828403121561089557600080fd5b81356108a081610823565b9392505050565b6000825160005b818110156108c857602081860181015185830152016108ae565b818111156108d7576000828501525b509190910192915050565b6000602082840312156108f457600080fd5b81516108a08161082356fe610200604052600061014090815261271061016052614e20610180526175306101a05261c3506101c052620186a06101e0526200004190600190600662000170565b50604051806080016040528060a86203f4806200005f919062000202565b81526020016200007460a862093a8062000202565b81526020016200008960a86212750062000202565b81526020016200009e60a86224ea0062000202565b9052620000b0906007906004620001ba565b50348015620000be57600080fd5b506000805460ff19169055336001600160a01b031663890357306040518163ffffffff1660e01b815260040160c06040518083038186803b1580156200010357600080fd5b505afa15801562000118573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200013e919062000242565b6001600160a01b039081166101205290811660c0529081166101005290811660e05290811660a05216608052620002c3565b8260068101928215620001a8579160200282015b82811115620001a8578251829062ffffff1690559160200191906001019062000184565b50620001b6929150620001eb565b5090565b8260048101928215620001a8579160200282015b82811115620001a8578251825591602001919060010190620001ce565b5b80821115620001b65760008155600101620001ec565b6000826200022057634e487b7160e01b600052601260045260246000fd5b500490565b80516001600160a01b03811681146200023d57600080fd5b919050565b60008060008060008060c087890312156200025c57600080fd5b620002678762000225565b9550620002776020880162000225565b9450620002876040880162000225565b9350620002976060880162000225565b9250620002a76080880162000225565b9150620002b760a0880162000225565b90509295509295509295565b60805160a05160c05160e05161010051610120516132dc6200041d6000396000818161060a01526128c40152600081816105d601528181611b7601528181611c2d01528181611e1a01528181611fc4015281816120ba015281816121c9015281816126510152612b3b0152600081816103b0015281816106ea01528181610a8301528181610dbd015281816110f5015281816114170152818161167601528181611d4701528181611e9d015281816122630152818161236a01528181612b0c01528181612c4f0152612d0901526000818161044401526127a40152600081816102b40152818161093701528181610998015281816111d001528181611500015281816117510152818161181001528181611f510152818161240b0152818161277c0152818161283a01528181612caf0152612d790152600081816104c001528181610c21015281816112230152611a5501526132dc6000f3fe6080604052600436106101b75760003560e01c80637d462b1f116100ec578063c8541f3b1161008a578063de93166211610064578063de931662146105c4578063e0a73a93146105f8578063f3fef3a31461062c578063fc6ebd4a1461064c57600080fd5b8063c8541f3b146104e2578063c88388e8146104fd578063d468e2a9146105af57600080fd5b80638342ea42116100c65780638342ea42146104665780638456cb59146104795780639acc4dd81461048e578063c45a0155146104ae57600080fd5b80637d462b1f146103f25780637d4b4a6f146104125780637dc0d1d01461043257600080fd5b806347e7ef24116101595780636d6a2d2f116101335780636d6a2d2f1461034857806370a082311461036857806374baa6551461039e578063754e2a8f146103d257600080fd5b806347e7ef24146102ee5780634bf39cba1461030e5780635c975abb1461032457600080fd5b80633f4ba83a116101955780633f4ba83a1461023f578063418e7d63146102545780634782f7791461027457806347ccca02146102a257600080fd5b806308f79412146101bc578063283f7a7f146101ea5780632fdd5ee0146101ff575b600080fd5b3480156101c857600080fd5b506101d261138881565b60405161ffff90911681526020015b60405180910390f35b6101fd6101f8366004612e71565b61065f565b005b34801561020b57600080fd5b5061021f61021a366004612e71565b610a0f565b6040805194855260208501939093529183015260608201526080016101e1565b34801561024b57600080fd5b506101fd610c1f565b34801561026057600080fd5b506101fd61026f366004612eae565b610d07565b34801561028057600080fd5b5061029461028f366004612f0a565b610f2b565b6040519081526020016101e1565b3480156102ae57600080fd5b506102d67f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016101e1565b3480156102fa57600080fd5b506101fd610309366004612f0a565b6110b6565b34801561031a57600080fd5b5061029460001981565b34801561033057600080fd5b5060005460ff165b60405190151581526020016101e1565b34801561035457600080fd5b506101fd610363366004612f36565b6110d2565b34801561037457600080fd5b50610294610383366004612f4f565b6001600160a01b03166000908152600d602052604090205490565b3480156103aa57600080fd5b506102d67f000000000000000000000000000000000000000000000000000000000000000081565b3480156103de57600080fd5b506102946103ed366004612f0a565b61121f565b3480156103fe57600080fd5b506101fd61040d366004612f73565b6113d8565b34801561041e57600080fd5b506101fd61042d366004612f36565b6113f4565b34801561043e57600080fd5b506102d67f000000000000000000000000000000000000000000000000000000000000000081565b6101fd610474366004613016565b611557565b34801561048557600080fd5b506101fd611a53565b34801561049a57600080fd5b506103386104a9366004612f36565b611b39565b3480156104ba57600080fd5b506102d67f000000000000000000000000000000000000000000000000000000000000000081565b3480156104ee57600080fd5b5061029466038d7ea4c6800081565b34801561050957600080fd5b5061057f610518366004612f36565b6000908152600b6020908152604091829020825160a081018452815460ff8082161515808452610100830482161515958401869052620100008304821696840187905263010000009092041660608301819052600190930154608090920182905294929392565b604080519515158652931515602086015260ff92831693850193909352166060830152608082015260a0016101e1565b3480156105bb57600080fd5b50610294611c29565b3480156105d057600080fd5b506102d67f000000000000000000000000000000000000000000000000000000000000000081565b34801561060457600080fd5b506102d67f000000000000000000000000000000000000000000000000000000000000000081565b34801561063857600080fd5b506101fd610647366004612f0a565b611cc1565b6101fd61065a366004612f36565b611fa3565b610667612489565b600080600080610678878787610a0f565b935093509350935080600014604051806040016040528060018152602001600760fb1b815250906106c55760405162461bcd60e51b81526004016106bc91906130e0565b60405180910390fd5b506106d18785876124cf565b6040516331a9108f60e11b8152600481018890526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636352211e9060240160206040518083038186803b15801561073457600080fd5b505afa158015610748573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061076c9190613113565b6001600160a01b0381166000908152600d6020526040812080549293508692909190610799908490613146565b90915550506001600160a01b0381166000818152600d6020908152604091829020549151918252600080516020613287833981519152910160405180910390a2306000818152600d6020526040812080548692906107f8908490613146565b90915550506001600160a01b0381166000818152600d6020908152604091829020549151918252600080516020613287833981519152910160405180910390a23360006108458688613146565b9050803414610923576001600160a01b0382166000908152600d6020526040902054610872903490613146565b811115604051806040016040528060018152602001603960f81b815250906108ad5760405162461bcd60e51b81526004016106bc91906130e0565b506001600160a01b0382166000908152600d602052604090205481906108d4903490613146565b6108de919061315e565b6001600160a01b0383166000818152600d6020526040908190208390555190916000805160206132878339815191529161091a91815260200190565b60405180910390a25b604080518b8152602081018b90528c9133917f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316917f252ed0454ff19898024627b65fcabea092e1767157a1e98dd8f4d03220552b03910160405180910390a48a846001600160a01b03167f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03167f672c61a502a1bce86eb1b38154a3ca316135108ee29ae167b9becb498dcdd4ce8a8a6040516109fa929190918252602082015260400190565b60405180910390a45050505050505050505050565b6000838152600b60209081526040808320815160a081018352815460ff8082161515835261010082048116151595830195909552620100008104851682850152630100000090049093166060840152600101546080830152516331a9108f60e11b81526004810186905260001992839283927f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636352211e9060240160206040518083038186803b158015610acd57600080fd5b505afa158015610ae1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b059190613113565b6001600160a01b0316336001600160a01b03161415610b275760119150610c14565b80511580610b3b5750610b3988611b39565b155b15610b495760039150610c14565b806040015160ff16871015610b6157600c9150610c14565b806060015160ff16861115610b7957600d9150610c14565b6000610b858888612715565b96509450905066038d7ea4c680008511610bb15760001980600019600f95509550955095505050610c16565b620186a060018960068110610bc857610bc8613175565b0154610bd4908361318b565b610bde91906131aa565b610be89082613146565b95508160800151861015610c0e5760001980600019600e95509550955095505050610c16565b60009250505b505b93509350935093565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638da5cb5b6040518163ffffffff1660e01b815260040160206040518083038186803b158015610c7857600080fd5b505afa158015610c8c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cb09190613113565b6001600160a01b0316336001600160a01b031614604051806040016040528060018152602001603160f81b81525090610cfc5760405162461bcd60e51b81526004016106bc91906130e0565b50610d056129d3565b565b60058360ff1611158015610d1f575060038260ff1611155b604051806040016040528060018152602001601960f91b81525090610d575760405162461bcd60e51b81526004016106bc91906130e0565b50610d6184611b39565b604051806040016040528060018152602001603360f81b81525090610d995760405162461bcd60e51b81526004016106bc91906130e0565b50336040516331a9108f60e11b8152600481018690526001600160a01b03918216917f00000000000000000000000000000000000000000000000000000000000000001690636352211e9060240160206040518083038186803b158015610dff57600080fd5b505afa158015610e13573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e379190613113565b6001600160a01b031614604051806040016040528060018152602001600d60fa1b81525090610e795760405162461bcd60e51b81526004016106bc91906130e0565b506040805160a0810182526000868152600b6020818152848320805460ff80821615158752610100808304821615158589019081529b82169888019889529981166060880190815260808801998a529b90955292909152925196519351975161ffff1990911696151561ff001916969096179215159094029190911763ffff00001916620100009584169590950263ff0000001916949094176301000000939092169290920217825551600190910155565b6000610f35612489565b6040805180820190915260018152603560f81b602082015282610f6b5760405162461bcd60e51b81526004016106bc91906130e0565b506040805180820190915260018152601b60f91b60208201526001600160a01b038416610fab5760405162461bcd60e51b81526004016106bc91906130e0565b50336000908152600d6020526040902054600019831415610fca578092505b6040805180820190915260018152603760f81b6020820152818411156110035760405162461bcd60e51b81526004016106bc91906130e0565b503361100f848361315e565b6001600160a01b0382166000908152600d60205260409020556110328585612a25565b6040518481526001600160a01b0386169033907f6b1f4ce962fec27598edceab6195c77516c3df32025eaf0c38d0d4009ac3bd489060200160405180910390a36001600160a01b0381166000818152600d6020908152604091829020549151918252600080516020613287833981519152910160405180910390a250919392505050565b6110be612489565b6110ce8282600160036000612aa4565b5050565b336040516331a9108f60e11b8152600481018390526001600160a01b03918216917f00000000000000000000000000000000000000000000000000000000000000001690636352211e9060240160206040518083038186803b15801561113757600080fd5b505afa15801561114b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061116f9190613113565b6001600160a01b031614604051806040016040528060018152602001600d60fa1b815250906111b15760405162461bcd60e51b81526004016106bc91906130e0565b506000818152600b6020526040808220805460ff1916905551829133917f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316917fda8987232bc52f83703b2538fb90581021fb0ffa1af52df2f73b377515f0a52391a450565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638da5cb5b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561127a57600080fd5b505afa15801561128e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112b29190613113565b6001600160a01b0316336001600160a01b031614604051806040016040528060018152602001603160f81b815250906112fe5760405162461bcd60e51b81526004016106bc91906130e0565b50306000908152600d602052604090205480831161131c578261131e565b805b915081156113d157306000818152600d60205260408120805485929061134590849061315e565b90915550506001600160a01b0381166000818152600d6020908152604091829020549151918252600080516020613287833981519152910160405180910390a261138f8584612a25565b6040518381526001600160a01b0386169033907f4a18654a5039b989ca382f52bbf82bcdde698ffc4c11fe6c59652a4d1fe70f489060200160405180910390a3505b5092915050565b6113e0612489565b6113ed8585858585612aa4565b5050505050565b336040516331a9108f60e11b8152600481018390526001600160a01b03918216917f00000000000000000000000000000000000000000000000000000000000000001690636352211e9060240160206040518083038186803b15801561145957600080fd5b505afa15801561146d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114919190613113565b6001600160a01b031614604051806040016040528060018152602001600d60fa1b815250906114d35760405162461bcd60e51b81526004016106bc91906130e0565b506000818152600b60205260409020805460ff19166001179055806114f53390565b6001600160a01b03167f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03167f91036b03023f31b593b219152006e3c6dfc13aef5396b6a87a8f0df1613bdb0d60405160405180910390a450565b61155f612489565b848314801561156d57508481145b60405180604001604052806002815260200161031360f41b815250906115a65760405162461bcd60e51b81526004016106bc91906130e0565b5060008060005b878110156118f95760008060008061160e8d8d878181106115d0576115d0613175565b905060200201358c8c888181106115e9576115e9613175565b905060200201358b8b8981811061160257611602613175565b90506020020135610a0f565b935093509350935080600014156118e45761165a8d8d8781811061163457611634613175565b90506020020135858b8b8981811061164e5761164e613175565b905060200201356124cf565b6116648287613146565b95506116708388613146565b965060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316636352211e8f8f898181106116b5576116b5613175565b905060200201356040518263ffffffff1660e01b81526004016116da91815260200190565b60206040518083038186803b1580156116f257600080fd5b505afa158015611706573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061172a9190613113565b90508d8d8781811061173e5761173e613175565b90506020020135816001600160a01b03167f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03167f252ed0454ff19898024627b65fcabea092e1767157a1e98dd8f4d03220552b038f8f8b8181106117ac576117ac613175565b905060200201358e8e8c8181106117c5576117c5613175565b905060200201356040516117e3929190918252602082015260400190565b60405180910390a48d8d878181106117fd576117fd613175565b90506020020135816001600160a01b03167f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03167f672c61a502a1bce86eb1b38154a3ca316135108ee29ae167b9becb498dcdd4ce8787604051611872929190918252602082015260400190565b60405180910390a46001600160a01b0381166000908152600d6020526040812080548692906118a2908490613146565b90915550506001600160a01b0381166000818152600d6020908152604091829020549151918252600080516020613287833981519152910160405180910390a2505b50505050806118f2906131cc565b90506115ad565b506119048183613146565b306000818152600d602052604081208054939550919284929190611929908490613146565b90915550506001600160a01b0381166000818152600d6020908152604091829020549151918252600080516020613287833981519152910160405180910390a233348414611a47576001600160a01b0381166000908152600d60205260409020548490611997903490613146565b1015604051806040016040528060018152602001603960f81b815250906119d15760405162461bcd60e51b81526004016106bc91906130e0565b506001600160a01b0381166000908152600d602052604090205484906119f8903490613146565b611a02919061315e565b6001600160a01b0382166000818152600d60205260409081902083905551909160008051602061328783398151915291611a3e91815260200190565b60405180910390a25b50505050505050505050565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638da5cb5b6040518163ffffffff1660e01b815260040160206040518083038186803b158015611aac57600080fd5b505afa158015611ac0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ae49190613113565b6001600160a01b0316336001600160a01b031614604051806040016040528060018152602001603160f81b81525090611b305760405162461bcd60e51b81526004016106bc91906130e0565b50610d05612deb565b6000818152600b6020526040812054610100900460ff1615611b5d57506001919050565b604051635fd286eb60e01b8152600481018390526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690635fd286eb9060240160606040518083038186803b158015611bc057600080fd5b505afa158015611bd4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611bf891906131e7565b602001519050600081118015611c0d57504281105b15611c1b5750600192915050565b50600092915050565b919050565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b158015611c8457600080fd5b505afa158015611c98573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611cbc9190613251565b905090565b611cc9612489565b6000818152600b602052604090205460ff161580611ceb5750611ceb81611b39565b604051806040016040528060018152602001603360f81b81525090611d235760405162461bcd60e51b81526004016106bc91906130e0565b50336040516331a9108f60e11b8152600481018390526001600160a01b03918216917f00000000000000000000000000000000000000000000000000000000000000001690636352211e9060240160206040518083038186803b158015611d8957600080fd5b505afa158015611d9d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611dc19190613113565b6001600160a01b031614604051806040016040528060018152602001600d60fa1b81525090611e035760405162461bcd60e51b81526004016106bc91906130e0565b50604051630852cd8d60e31b8152600481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906342966c6890602401600060405180830381600087803b158015611e6657600080fd5b505af1158015611e7a573d6000803e3d6000fd5b5050506000828152600b60205260408120805463ffffffff1916815560010155507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f6b911bc336040516001600160e01b031960e084901b1681526001600160a01b039182166004820152908516602482015260448101849052606401600060405180830381600087803b158015611f1b57600080fd5b505af1158015611f2f573d6000803e3d6000fd5b5050505080611f3b3390565b6040516001600160a01b038581168252918216917f000000000000000000000000000000000000000000000000000000000000000016907f3115d1449a7b732c986cba18244e897a450f61e1bb8d589cd2e69e6c8924f9f79060200160405180910390a45050565b611fab612489565b604051635fd286eb60e01b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690635fd286eb9060240160606040518083038186803b15801561200e57600080fd5b505afa158015612022573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061204691906131e7565b90504281602001511015801561205d575080514210155b60405180604001604052806002815260200161313160f01b815250906120965760405162461bcd60e51b81526004016106bc91906130e0565b50336040516331a9108f60e11b8152600481018490526001600160a01b03918216917f00000000000000000000000000000000000000000000000000000000000000001690636352211e9060240160206040518083038186803b1580156120fc57600080fd5b505afa158015612110573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121349190613113565b6001600160a01b031614604051806040016040528060018152602001600d60fa1b815250906121765760405162461bcd60e51b81526004016106bc91906130e0565b50604080820151815180830190925260018252603960f81b602083015234146121b25760405162461bcd60e51b81526004016106bc91906130e0565b50604051630852cd8d60e31b8152600481018390527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906342966c6890602401600060405180830381600087803b15801561221557600080fd5b505af1158015612229573d6000803e3d6000fd5b5050506000838152600b6020526040808220805463ffffffff19168155600101829055516331a9108f60e11b8152600481018590529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636352211e9060240160206040518083038186803b1580156122ad57600080fd5b505afa1580156122c1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122e59190613113565b90508160400151600d6000836001600160a01b03166001600160a01b0316815260200190815260200160002060008282546123209190613146565b90915550506001600160a01b0381166000818152600d6020908152604091829020549151918252600080516020613287833981519152910160405180910390a26001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001663f6b911bc82336040516001600160e01b031960e085901b1681526001600160a01b0392831660048201529116602482015260448101869052606401600060405180830381600087803b1580156123e057600080fd5b505af11580156123f4573d6000803e3d6000fd5b50505050826124003390565b6001600160a01b03167f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03167f37d966bbb67d561696ff0fc9975de248c3b36f7343a946bb79b5f25d0709df3484866040015160405161247c9291906001600160a01b03929092168252602082015260400190565b60405180910390a4505050565b60005460ff1615610d055760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016106bc565b6000600b60008581526020019081526020016000206040518060a00160405290816000820160009054906101000a900460ff161515151581526020016000820160019054906101000a900460ff161515151581526020016000820160029054906101000a900460ff1660ff1660ff1681526020016000820160039054906101000a900460ff1660ff1660ff16815260200160018201548152505090506040518060a00160405280826000015115158152602001600015158152602001826040015160ff168152602001826060015160ff1681526020018260800151815250600b600086815260200190815260200160002060008201518160000160006101000a81548160ff02191690831515021790555060208201518160000160016101000a81548160ff02191690831515021790555060408201518160000160026101000a81548160ff021916908360ff16021790555060608201518160000160036101000a81548160ff021916908360ff160217905550608082015181600101559050507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166378745e1c6126853390565b86866007876004811061269a5761269a613175565b01546040516001600160e01b031960e087901b1681526001600160a01b039094166004850152602484019290925260448301526064820152611388608482015260a401600060405180830381600087803b1580156126f757600080fd5b505af115801561270b573d6000803e3d6000fd5b5050505050505050565b60008060006005851115801561272c575060038411155b604051806040016040528060018152602001601960f91b815250906127645760405162461bcd60e51b81526004016106bc91906130e0565b50604051631285599360e31b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811660048301527f00000000000000000000000000000000000000000000000000000000000000009160009183169063942acc989060240160206040518083038186803b1580156127eb57600080fd5b505afa1580156127ff573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906128239190613251565b60405163b3596f0760e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811660048301529192509083169063b3596f079060240160206040518083038186803b15801561288857600080fd5b505afa15801561289c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906128c09190613251565b94507f000000000000000000000000000000000000000000000000000000000000000060006001600160a01b0382166382275208896129008c600461318b565b61290a9190613146565b856040518363ffffffff1660e01b8152600401612931929190918252602082015260400190565b60206040518083038186803b15801561294957600080fd5b505afa15801561295d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906129819190613251565b90506000620186a0612993838a61318b565b61299d91906131aa565b9050620186a06129af6127108361318b565b6129b991906131aa565b96506129c5878261315e565b955050505050509250925092565b6129db612e28565b6000805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b604080516000808252602082019092526001600160a01b038416908390604051612a4f919061326a565b60006040518083038185875af1925050503d8060008114612a8c576040519150601f19603f3d011682016040523d82523d6000602084013e612a91565b606091505b5050905080612a9f57600080fd5b505050565b60058360ff1611158015612abc575060038260ff1611155b604051806040016040528060018152602001601960f91b81525090612af45760405162461bcd60e51b81526004016106bc91906130e0565b506040516340c10f1960e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081166004830152602482018690527f000000000000000000000000000000000000000000000000000000000000000016906340c10f1990604401600060405180830381600087803b158015612b7f57600080fd5b505af1158015612b93573d6000803e3d6000fd5b50506040805160a0810182526001808252602080830182815260ff8a81168587019081528a821660608701908152608087018b815260008f8152600b9096529488902096518754945192519151841663010000000263ff000000199290941662010000029190911663ffff0000199215156101000261ff00199215159290921661ffff199095169490941717169190911717835551910155516340c10f1960e01b81526001600160a01b038881166004830152602482018890527f00000000000000000000000000000000000000000000000000000000000000001692506340c10f199150604401600060405180830381600087803b158015612c9557600080fd5b505af1158015612ca9573d6000803e3d6000fd5b505050507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166323b872dd612ce33390565b60405160e083901b6001600160e01b03191681526001600160a01b0391821660048201527f0000000000000000000000000000000000000000000000000000000000000000909116602482015260448101879052606401600060405180830381600087803b158015612d5457600080fd5b505af1158015612d68573d6000803e3d6000fd5b5050505083856001600160a01b03167f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03167f7cfff908a4b583f36430b25d75964c458d8ede8a99bd61be750e97ee1b2f3a96612dc93390565b6040516001600160a01b03909116815260200160405180910390a45050505050565b612df3612489565b6000805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258612a083390565b60005460ff16610d055760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b60448201526064016106bc565b600080600060608486031215612e8657600080fd5b505081359360208301359350604090920135919050565b803560ff81168114611c2457600080fd5b60008060008060808587031215612ec457600080fd5b84359350612ed460208601612e9d565b9250612ee260408601612e9d565b9396929550929360600135925050565b6001600160a01b0381168114612f0757600080fd5b50565b60008060408385031215612f1d57600080fd5b8235612f2881612ef2565b946020939093013593505050565b600060208284031215612f4857600080fd5b5035919050565b600060208284031215612f6157600080fd5b8135612f6c81612ef2565b9392505050565b600080600080600060a08688031215612f8b57600080fd5b8535612f9681612ef2565b945060208601359350612fab60408701612e9d565b9250612fb960608701612e9d565b949793965091946080013592915050565b60008083601f840112612fdc57600080fd5b50813567ffffffffffffffff811115612ff457600080fd5b6020830191508360208260051b850101111561300f57600080fd5b9250929050565b6000806000806000806060878903121561302f57600080fd5b863567ffffffffffffffff8082111561304757600080fd5b6130538a838b01612fca565b9098509650602089013591508082111561306c57600080fd5b6130788a838b01612fca565b9096509450604089013591508082111561309157600080fd5b5061309e89828a01612fca565b979a9699509497509295939492505050565b60005b838110156130cb5781810151838201526020016130b3565b838111156130da576000848401525b50505050565b60208152600082518060208401526130ff8160408501602087016130b0565b601f01601f19169190910160400192915050565b60006020828403121561312557600080fd5b8151612f6c81612ef2565b634e487b7160e01b600052601160045260246000fd5b6000821982111561315957613159613130565b500190565b60008282101561317057613170613130565b500390565b634e487b7160e01b600052603260045260246000fd5b60008160001904831182151516156131a5576131a5613130565b500290565b6000826131c757634e487b7160e01b600052601260045260246000fd5b500490565b60006000198214156131e0576131e0613130565b5060010190565b6000606082840312156131f957600080fd5b6040516060810181811067ffffffffffffffff8211171561322a57634e487b7160e01b600052604160045260246000fd5b80604052508251815260208301516020820152604083015160408201528091505092915050565b60006020828403121561326357600080fd5b5051919050565b6000825161327c8184602087016130b0565b919091019291505056fe2275067fa05a30bdf67bf0c9038eb835058bed2252af91f1724039e3e222dde7a2646970667358221220f89f4a66926b0300f5c02d2f930932b56c0b175c267d2490869470d12fe350c164736f6c63430008090033a2646970667358221220a466efb42c1278ab069f424aa310cf5c9319c704715b9081a5e8384b4b7d6bc764736f6c63430008090033'

type CallFactoryForTestConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>

const isSuperArgs = (xs: CallFactoryForTestConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
  xs.length > 1

export class CallFactoryForTest__factory extends ContractFactory {
  constructor(...args: CallFactoryForTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args)
    } else {
      super(_abi, _bytecode, args[0])
    }
  }

  override deploy(
    nTokenFactory: PromiseOrValue<string>,
    callTokenFactory: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<CallFactoryForTest> {
    return super.deploy(nTokenFactory, callTokenFactory, overrides || {}) as Promise<CallFactoryForTest>
  }
  override getDeployTransaction(
    nTokenFactory: PromiseOrValue<string>,
    callTokenFactory: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(nTokenFactory, callTokenFactory, overrides || {})
  }
  override attach(address: string): CallFactoryForTest {
    return super.attach(address) as CallFactoryForTest
  }
  override connect(signer: Signer): CallFactoryForTest__factory {
    return super.connect(signer) as CallFactoryForTest__factory
  }

  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): CallFactoryForTestInterface {
    return new utils.Interface(_abi) as CallFactoryForTestInterface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): CallFactoryForTest {
    return new Contract(address, _abi, signerOrProvider) as CallFactoryForTest
  }
}