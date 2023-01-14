/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import type { Provider, TransactionRequest } from '@ethersproject/providers'
import type { PromiseOrValue } from '../../common'
import type { NTokenFactory, NTokenFactoryInterface } from '../../contracts/NTokenFactory'

const _abi = [
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'salt',
        type: 'bytes32',
      },
    ],
    name: 'deployNToken',
    outputs: [
      {
        internalType: 'address',
        name: 'nToken',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

const _bytecode =
  '0x608060405234801561001057600080fd5b50611cc5806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063a554c12014610030575b600080fd5b61004361003e3660046100a2565b61005f565b6040516001600160a01b03909116815260200160405180910390f35b60008160405161006e90610095565b8190604051809103906000f590508015801561008e573d6000803e3d6000fd5b5092915050565b611bd4806100bc83390190565b6000602082840312156100b457600080fd5b503591905056fe60a06040523480156200001157600080fd5b506040805180820182526006815265272a37b5b2b760d11b6020808301918252835180850190945260018452602760f91b90840152815191929162000059916000916200016e565b5080516200006f9060019060208401906200016e565b5050506200008c620000866200011860201b60201c565b6200011c565b336001600160a01b031663890357306040518163ffffffff1660e01b815260040160c06040518083038186803b158015620000c657600080fd5b505afa158015620000db573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000101919062000231565b505050506001600160a01b031660805250620002ef565b3390565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b8280546200017c90620002b2565b90600052602060002090601f016020900481019282620001a05760008555620001eb565b82601f10620001bb57805160ff1916838001178555620001eb565b82800160010185558215620001eb579182015b82811115620001eb578251825591602001919060010190620001ce565b50620001f9929150620001fd565b5090565b5b80821115620001f95760008155600101620001fe565b80516001600160a01b03811681146200022c57600080fd5b919050565b60008060008060008060c087890312156200024b57600080fd5b620002568762000214565b9550620002666020880162000214565b9450620002766040880162000214565b9350620002866060880162000214565b9250620002966080880162000214565b9150620002a660a0880162000214565b90509295509295509295565b600181811c90821680620002c757607f821691505b60208210811415620002e957634e487b7160e01b600052602260045260246000fd5b50919050565b6080516118ad620003276000396000818161022401528181610353015281816106f8015281816107fc015261093801526118ad6000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c806370a08231116100ad578063b88d4fde11610071578063b88d4fde146102ae578063c87b56dd146102c1578063e985e9c5146102d4578063f2fde38b14610310578063f6b911bc1461032357600080fd5b806370a0823114610259578063715018a61461027a5780638da5cb5b1461028257806395d89b4114610293578063a22cb4651461029b57600080fd5b806323b872dd116100f457806323b872dd146101e657806340c10f19146101f957806342842e0e1461020c57806347ccca021461021f5780636352211e1461024657600080fd5b806301ffc9a71461013157806306fdde0314610159578063081812fc1461016e578063095ea7b314610199578063150b7a02146101ae575b600080fd5b61014461013f3660046112b2565b610336565b60405190151581526020015b60405180910390f35b610161610347565b604051610150919061132e565b61018161017c366004611341565b61040b565b6040516001600160a01b039091168152602001610150565b6101ac6101a7366004611376565b610432565b005b6101cd6101bc3660046113a0565b630a85bd0160e11b95945050505050565b6040516001600160e01b03199091168152602001610150565b6101ac6101f436600461143b565b61054d565b6101ac610207366004611376565b61057e565b6101ac61021a36600461143b565b6105d7565b6101817f000000000000000000000000000000000000000000000000000000000000000081565b610181610254366004611341565b6105f2565b61026c610267366004611477565b610652565b604051908152602001610150565b6101ac6106d8565b6006546001600160a01b0316610181565b6101616106ec565b6101ac6102a9366004611492565b61079c565b6101ac6102bc36600461153d565b6107ab565b6101616102cf366004611341565b6107e3565b6101446102e23660046115e8565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b6101ac61031e366004611477565b610882565b6101ac61033136600461143b565b6108fb565b6000610341826109e6565b92915050565b6060610351610a36565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166306fdde036040518163ffffffff1660e01b815260040160006040518083038186803b1580156103aa57600080fd5b505afa1580156103be573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526103e6919081019061161b565b6040516020016103f7929190611692565b604051602081830303815290604052905090565b600061041682610ac8565b506000908152600460205260409020546001600160a01b031690565b600061043d826105f2565b9050806001600160a01b0316836001600160a01b031614156104b05760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084015b60405180910390fd5b336001600160a01b03821614806104cc57506104cc81336102e2565b61053e5760405162461bcd60e51b815260206004820152603e60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c000060648201526084016104a7565b6105488383610b27565b505050565b6105573382610b95565b6105735760405162461bcd60e51b81526004016104a7906116ce565b610548838383610c14565b610586610db0565b6105908282610e0a565b816001600160a01b03167f0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d4121396885826040516105cb91815260200190565b60405180910390a25050565b610548838383604051806020016040528060008152506107ab565b6000818152600260205260408120546001600160a01b0316806103415760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b60448201526064016104a7565b60006001600160a01b0382166106bc5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b60648201526084016104a7565b506001600160a01b031660009081526003602052604090205490565b6106e0610db0565b6106ea6000610e24565b565b60606106f6610e76565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166395d89b416040518163ffffffff1660e01b815260040160006040518083038186803b15801561074f57600080fd5b505afa158015610763573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261078b919081019061161b565b6040516020016103f792919061171c565b6107a7338383610e85565b5050565b6107b53383610b95565b6107d15760405162461bcd60e51b81526004016104a7906116ce565b6107dd84848484610f4c565b50505050565b60405163c87b56dd60e01b8152600481018290526060907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063c87b56dd9060240160006040518083038186803b15801561084657600080fd5b505afa15801561085a573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610341919081019061161b565b61088a610db0565b6001600160a01b0381166108ef5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016104a7565b6108f881610e24565b50565b610903610db0565b61090c81610f7f565b604051632142170760e11b81523060048201526001600160a01b038381166024830152604482018390527f000000000000000000000000000000000000000000000000000000000000000016906342842e0e90606401600060405180830381600087803b15801561097c57600080fd5b505af1158015610990573d6000803e3d6000fd5b50505050816001600160a01b0316836001600160a01b03167fbac40739b0d4ca32fa2d82fc91630465ba3eddd1598da6fca393b26fb63b9453836040516109d991815260200190565b60405180910390a3505050565b60006001600160e01b031982166380ac58cd60e01b1480610a1757506001600160e01b03198216635b5e139f60e01b145b8061034157506301ffc9a760e01b6001600160e01b0319831614610341565b606060008054610a459061174b565b80601f0160208091040260200160405190810160405280929190818152602001828054610a719061174b565b8015610abe5780601f10610a9357610100808354040283529160200191610abe565b820191906000526020600020905b815481529060010190602001808311610aa157829003601f168201915b5050505050905090565b6000818152600260205260409020546001600160a01b03166108f85760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b60448201526064016104a7565b600081815260046020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610b5c826105f2565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610ba1836105f2565b9050806001600160a01b0316846001600160a01b03161480610be857506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b80610c0c5750836001600160a01b0316610c018461040b565b6001600160a01b0316145b949350505050565b826001600160a01b0316610c27826105f2565b6001600160a01b031614610c8b5760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b60648201526084016104a7565b6001600160a01b038216610ced5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b60648201526084016104a7565b610cf8600082610b27565b6001600160a01b0383166000908152600360205260408120805460019290610d2190849061179c565b90915550506001600160a01b0382166000908152600360205260408120805460019290610d4f9084906117b3565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6006546001600160a01b031633146106ea5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104a7565b6107a782826040518060200160405280600081525061101a565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b606060018054610a459061174b565b816001600160a01b0316836001600160a01b03161415610ee75760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016104a7565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3191016109d9565b610f57848484610c14565b610f638484848461104d565b6107dd5760405162461bcd60e51b81526004016104a7906117cb565b6000610f8a826105f2565b9050610f97600083610b27565b6001600160a01b0381166000908152600360205260408120805460019290610fc090849061179c565b909155505060008281526002602052604080822080546001600160a01b0319169055518391906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b611024838361115a565b611031600084848461104d565b6105485760405162461bcd60e51b81526004016104a7906117cb565b60006001600160a01b0384163b1561114f57604051630a85bd0160e11b81526001600160a01b0385169063150b7a029061109190339089908890889060040161181d565b602060405180830381600087803b1580156110ab57600080fd5b505af19250505080156110db575060408051601f3d908101601f191682019092526110d89181019061185a565b60015b611135573d808015611109576040519150601f19603f3d011682016040523d82523d6000602084013e61110e565b606091505b50805161112d5760405162461bcd60e51b81526004016104a7906117cb565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610c0c565b506001949350505050565b6001600160a01b0382166111b05760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064016104a7565b6000818152600260205260409020546001600160a01b0316156112155760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016104a7565b6001600160a01b038216600090815260036020526040812080546001929061123e9084906117b3565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6001600160e01b0319811681146108f857600080fd5b6000602082840312156112c457600080fd5b81356112cf8161129c565b9392505050565b60005b838110156112f15781810151838201526020016112d9565b838111156107dd5750506000910152565b6000815180845261131a8160208601602086016112d6565b601f01601f19169290920160200192915050565b6020815260006112cf6020830184611302565b60006020828403121561135357600080fd5b5035919050565b80356001600160a01b038116811461137157600080fd5b919050565b6000806040838503121561138957600080fd5b6113928361135a565b946020939093013593505050565b6000806000806000608086880312156113b857600080fd5b6113c18661135a565b94506113cf6020870161135a565b935060408601359250606086013567ffffffffffffffff808211156113f357600080fd5b818801915088601f83011261140757600080fd5b81358181111561141657600080fd5b89602082850101111561142857600080fd5b9699959850939650602001949392505050565b60008060006060848603121561145057600080fd5b6114598461135a565b92506114676020850161135a565b9150604084013590509250925092565b60006020828403121561148957600080fd5b6112cf8261135a565b600080604083850312156114a557600080fd5b6114ae8361135a565b9150602083013580151581146114c357600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561150d5761150d6114ce565b604052919050565b600067ffffffffffffffff82111561152f5761152f6114ce565b50601f01601f191660200190565b6000806000806080858703121561155357600080fd5b61155c8561135a565b935061156a6020860161135a565b925060408501359150606085013567ffffffffffffffff81111561158d57600080fd5b8501601f8101871361159e57600080fd5b80356115b16115ac82611515565b6114e4565b8181528860208385010111156115c657600080fd5b8160208401602083013760006020838301015280935050505092959194509250565b600080604083850312156115fb57600080fd5b6116048361135a565b91506116126020840161135a565b90509250929050565b60006020828403121561162d57600080fd5b815167ffffffffffffffff81111561164457600080fd5b8201601f8101841361165557600080fd5b80516116636115ac82611515565b81815285602083850101111561167857600080fd5b6116898260208301602086016112d6565b95945050505050565b600083516116a48184602088016112d6565b600160fd1b90830190815283516116c28160018401602088016112d6565b01600101949350505050565b6020808252602e908201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560408201526d1c881b9bdc88185c1c1c9bdd995960921b606082015260800190565b6000835161172e8184602088016112d6565b8351908301906117428183602088016112d6565b01949350505050565b600181811c9082168061175f57607f821691505b6020821081141561178057634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b6000828210156117ae576117ae611786565b500390565b600082198211156117c6576117c6611786565b500190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6001600160a01b038581168252841660208201526040810183905260806060820181905260009061185090830184611302565b9695505050505050565b60006020828403121561186c57600080fd5b81516112cf8161129c56fea26469706673582212209c851052e514f9c5c202db7a37f70e5a2105d6ad6ff137b24843f874eb1aa00164736f6c63430008090033a2646970667358221220e4f51e530e64e53ade006119c1c5add96923dfd8de5c9d93b7af2989dd4aab5f64736f6c63430008090033'

type NTokenFactoryConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>

const isSuperArgs = (xs: NTokenFactoryConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
  xs.length > 1

export class NTokenFactory__factory extends ContractFactory {
  constructor(...args: NTokenFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args)
    } else {
      super(_abi, _bytecode, args[0])
    }
  }

  override deploy(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<NTokenFactory> {
    return super.deploy(overrides || {}) as Promise<NTokenFactory>
  }
  override getDeployTransaction(overrides?: Overrides & { from?: PromiseOrValue<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  override attach(address: string): NTokenFactory {
    return super.attach(address) as NTokenFactory
  }
  override connect(signer: Signer): NTokenFactory__factory {
    return super.connect(signer) as NTokenFactory__factory
  }

  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): NTokenFactoryInterface {
    return new utils.Interface(_abi) as NTokenFactoryInterface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): NTokenFactory {
    return new Contract(address, _abi, signerOrProvider) as NTokenFactory
  }
}
