/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from 'ethers'
import { FactoryOptions, HardhatEthersHelpers as HardhatEthersHelpersBase } from '@nomiclabs/hardhat-ethers/types'

import * as Contracts from '.'

declare module 'hardhat/types/runtime' {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: 'Ownable',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>
    getContractFactory(
      name: 'Pausable',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Pausable__factory>
    getContractFactory(
      name: 'ERC20',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>
    getContractFactory(
      name: 'IERC20Metadata',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>
    getContractFactory(
      name: 'IERC20',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>
    getContractFactory(
      name: 'ERC721',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721__factory>
    getContractFactory(
      name: 'ERC721Enumerable',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Enumerable__factory>
    getContractFactory(
      name: 'IERC721Enumerable',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Enumerable__factory>
    getContractFactory(
      name: 'IERC721Metadata',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Metadata__factory>
    getContractFactory(
      name: 'IERC721',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721__factory>
    getContractFactory(
      name: 'IERC721Receiver',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Receiver__factory>
    getContractFactory(
      name: 'ERC165',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>
    getContractFactory(
      name: 'IERC165',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>
    getContractFactory(
      name: 'CallFactory',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CallFactory__factory>
    getContractFactory(
      name: 'CallPool',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CallPool__factory>
    getContractFactory(
      name: 'CallPoolDeployer',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CallPoolDeployer__factory>
    getContractFactory(
      name: 'CallToken',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CallToken__factory>
    getContractFactory(
      name: 'CallTokenFactory',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CallTokenFactory__factory>
    getContractFactory(
      name: 'ErrorCodes',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ErrorCodes__factory>
    getContractFactory(
      name: 'Errors',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Errors__factory>
    getContractFactory(
      name: 'ICallFactory',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ICallFactory__factory>
    getContractFactory(
      name: 'ICallPool',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ICallPool__factory>
    getContractFactory(
      name: 'ICallPoolDeployer',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ICallPoolDeployer__factory>
    getContractFactory(
      name: 'ICallToken',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ICallToken__factory>
    getContractFactory(
      name: 'INToken',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.INToken__factory>
    getContractFactory(
      name: 'IPremium',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPremium__factory>
    getContractFactory(
      name: 'IPriceOracle',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPriceOracle__factory>
    getContractFactory(
      name: 'IPriceOracleGetter',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPriceOracleGetter__factory>
    getContractFactory(
      name: 'ICallPoolActions',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ICallPoolActions__factory>
    getContractFactory(
      name: 'ICallPoolEvents',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ICallPoolEvents__factory>
    getContractFactory(
      name: 'ICallPoolImmutables',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ICallPoolImmutables__factory>
    getContractFactory(
      name: 'ICallPoolOwnerActions',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ICallPoolOwnerActions__factory>
    getContractFactory(
      name: 'MockedOracle',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockedOracle__factory>
    getContractFactory(
      name: 'NFTOracleTestUpgrade',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.NFTOracleTestUpgrade__factory>
    getContractFactory(
      name: 'MockAzuki',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockAzuki__factory>
    getContractFactory(
      name: 'MockCloneX',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockCloneX__factory>
    getContractFactory(name: 'USDT', signerOrOptions?: ethers.Signer | FactoryOptions): Promise<Contracts.USDT__factory>
    getContractFactory(
      name: 'NFTOracle',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.NFTOracle__factory>
    getContractFactory(
      name: 'NToken',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.NToken__factory>
    getContractFactory(
      name: 'NTokenFactory',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.NTokenFactory__factory>
    getContractFactory(
      name: 'Premium',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Premium__factory>
    getContractFactory(
      name: 'BaseAdminUpgradeabilityProxy',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BaseAdminUpgradeabilityProxy__factory>
    getContractFactory(
      name: 'BaseImmutableAdminUpgradeabilityProxy',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BaseImmutableAdminUpgradeabilityProxy__factory>
    getContractFactory(
      name: 'BaseUpgradeabilityProxy',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BaseUpgradeabilityProxy__factory>
    getContractFactory(
      name: 'InitializableAdminUpgradeabilityProxy',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.InitializableAdminUpgradeabilityProxy__factory>
    getContractFactory(
      name: 'InitializableImmutableAdminUpgradeabilityProxy',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.InitializableImmutableAdminUpgradeabilityProxy__factory>
    getContractFactory(
      name: 'InitializableUpgradeabilityProxy',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.InitializableUpgradeabilityProxy__factory>
    getContractFactory(
      name: 'Proxy',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Proxy__factory>
    getContractFactory(
      name: 'UpgradeabilityProxy',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UpgradeabilityProxy__factory>

    getContractAt(name: 'Ownable', address: string, signer?: ethers.Signer): Promise<Contracts.Ownable>
    getContractAt(name: 'Pausable', address: string, signer?: ethers.Signer): Promise<Contracts.Pausable>
    getContractAt(name: 'ERC20', address: string, signer?: ethers.Signer): Promise<Contracts.ERC20>
    getContractAt(name: 'IERC20Metadata', address: string, signer?: ethers.Signer): Promise<Contracts.IERC20Metadata>
    getContractAt(name: 'IERC20', address: string, signer?: ethers.Signer): Promise<Contracts.IERC20>
    getContractAt(name: 'ERC721', address: string, signer?: ethers.Signer): Promise<Contracts.ERC721>
    getContractAt(
      name: 'ERC721Enumerable',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721Enumerable>
    getContractAt(
      name: 'IERC721Enumerable',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Enumerable>
    getContractAt(name: 'IERC721Metadata', address: string, signer?: ethers.Signer): Promise<Contracts.IERC721Metadata>
    getContractAt(name: 'IERC721', address: string, signer?: ethers.Signer): Promise<Contracts.IERC721>
    getContractAt(name: 'IERC721Receiver', address: string, signer?: ethers.Signer): Promise<Contracts.IERC721Receiver>
    getContractAt(name: 'ERC165', address: string, signer?: ethers.Signer): Promise<Contracts.ERC165>
    getContractAt(name: 'IERC165', address: string, signer?: ethers.Signer): Promise<Contracts.IERC165>
    getContractAt(name: 'CallFactory', address: string, signer?: ethers.Signer): Promise<Contracts.CallFactory>
    getContractAt(name: 'CallPool', address: string, signer?: ethers.Signer): Promise<Contracts.CallPool>
    getContractAt(
      name: 'CallPoolDeployer',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CallPoolDeployer>
    getContractAt(name: 'CallToken', address: string, signer?: ethers.Signer): Promise<Contracts.CallToken>
    getContractAt(
      name: 'CallTokenFactory',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CallTokenFactory>
    getContractAt(name: 'ErrorCodes', address: string, signer?: ethers.Signer): Promise<Contracts.ErrorCodes>
    getContractAt(name: 'Errors', address: string, signer?: ethers.Signer): Promise<Contracts.Errors>
    getContractAt(name: 'ICallFactory', address: string, signer?: ethers.Signer): Promise<Contracts.ICallFactory>
    getContractAt(name: 'ICallPool', address: string, signer?: ethers.Signer): Promise<Contracts.ICallPool>
    getContractAt(
      name: 'ICallPoolDeployer',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ICallPoolDeployer>
    getContractAt(name: 'ICallToken', address: string, signer?: ethers.Signer): Promise<Contracts.ICallToken>
    getContractAt(name: 'INToken', address: string, signer?: ethers.Signer): Promise<Contracts.INToken>
    getContractAt(name: 'IPremium', address: string, signer?: ethers.Signer): Promise<Contracts.IPremium>
    getContractAt(name: 'IPriceOracle', address: string, signer?: ethers.Signer): Promise<Contracts.IPriceOracle>
    getContractAt(
      name: 'IPriceOracleGetter',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPriceOracleGetter>
    getContractAt(
      name: 'ICallPoolActions',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ICallPoolActions>
    getContractAt(name: 'ICallPoolEvents', address: string, signer?: ethers.Signer): Promise<Contracts.ICallPoolEvents>
    getContractAt(
      name: 'ICallPoolImmutables',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ICallPoolImmutables>
    getContractAt(
      name: 'ICallPoolOwnerActions',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ICallPoolOwnerActions>
    getContractAt(name: 'MockedOracle', address: string, signer?: ethers.Signer): Promise<Contracts.MockedOracle>
    getContractAt(
      name: 'NFTOracleTestUpgrade',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.NFTOracleTestUpgrade>
    getContractAt(name: 'MockAzuki', address: string, signer?: ethers.Signer): Promise<Contracts.MockAzuki>
    getContractAt(name: 'MockCloneX', address: string, signer?: ethers.Signer): Promise<Contracts.MockCloneX>
    getContractAt(name: 'USDT', address: string, signer?: ethers.Signer): Promise<Contracts.USDT>
    getContractAt(name: 'NFTOracle', address: string, signer?: ethers.Signer): Promise<Contracts.NFTOracle>
    getContractAt(name: 'NToken', address: string, signer?: ethers.Signer): Promise<Contracts.NToken>
    getContractAt(name: 'NTokenFactory', address: string, signer?: ethers.Signer): Promise<Contracts.NTokenFactory>
    getContractAt(name: 'Premium', address: string, signer?: ethers.Signer): Promise<Contracts.Premium>
    getContractAt(
      name: 'BaseAdminUpgradeabilityProxy',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BaseAdminUpgradeabilityProxy>
    getContractAt(
      name: 'BaseImmutableAdminUpgradeabilityProxy',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BaseImmutableAdminUpgradeabilityProxy>
    getContractAt(
      name: 'BaseUpgradeabilityProxy',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BaseUpgradeabilityProxy>
    getContractAt(
      name: 'InitializableAdminUpgradeabilityProxy',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.InitializableAdminUpgradeabilityProxy>
    getContractAt(
      name: 'InitializableImmutableAdminUpgradeabilityProxy',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.InitializableImmutableAdminUpgradeabilityProxy>
    getContractAt(
      name: 'InitializableUpgradeabilityProxy',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.InitializableUpgradeabilityProxy>
    getContractAt(name: 'Proxy', address: string, signer?: ethers.Signer): Promise<Contracts.Proxy>
    getContractAt(
      name: 'UpgradeabilityProxy',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.UpgradeabilityProxy>

    // default types
    getContractFactory(name: string, signerOrOptions?: ethers.Signer | FactoryOptions): Promise<ethers.ContractFactory>
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>
    getContractAt(nameOrAbi: string | any[], address: string, signer?: ethers.Signer): Promise<ethers.Contract>
  }
}
