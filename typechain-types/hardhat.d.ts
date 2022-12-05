/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "GovernorCompatibilityBravoUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GovernorCompatibilityBravoUpgradeable__factory>;
    getContractFactory(
      name: "IGovernorCompatibilityBravoUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IGovernorCompatibilityBravoUpgradeable__factory>;
    getContractFactory(
      name: "IGovernorTimelockUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IGovernorTimelockUpgradeable__factory>;
    getContractFactory(
      name: "GovernorUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GovernorUpgradeable__factory>;
    getContractFactory(
      name: "IGovernorUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IGovernorUpgradeable__factory>;
    getContractFactory(
      name: "Initializable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Initializable__factory>;
    getContractFactory(
      name: "IERC1155ReceiverUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155ReceiverUpgradeable__factory>;
    getContractFactory(
      name: "IERC721ReceiverUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721ReceiverUpgradeable__factory>;
    getContractFactory(
      name: "ContextUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ContextUpgradeable__factory>;
    getContractFactory(
      name: "EIP712Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.EIP712Upgradeable__factory>;
    getContractFactory(
      name: "ERC165Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165Upgradeable__factory>;
    getContractFactory(
      name: "IERC165Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165Upgradeable__factory>;
    getContractFactory(
      name: "DoubleEndedQueueUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DoubleEndedQueueUpgradeable__factory>;
    getContractFactory(
      name: "Comp",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Comp__factory>;
    getContractFactory(
      name: "Initializable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Initializable__factory>;
    getContractFactory(
      name: "ReentrancyGuardUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ReentrancyGuardUpgradeable__factory>;
    getContractFactory(
      name: "CompInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CompInterface__factory>;
    getContractFactory(
      name: "GovernorAlpha",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GovernorAlpha__factory>;
    getContractFactory(
      name: "GovernorBravoDelegateStorageV1",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GovernorBravoDelegateStorageV1__factory>;
    getContractFactory(
      name: "GovernorBravoDelegateStorageV2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GovernorBravoDelegateStorageV2__factory>;
    getContractFactory(
      name: "GovernorBravoDelegatorStorage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GovernorBravoDelegatorStorage__factory>;
    getContractFactory(
      name: "GovernorBravoEvents",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GovernorBravoEvents__factory>;
    getContractFactory(
      name: "TimelockInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TimelockInterface__factory>;
    getContractFactory(
      name: "LeafDAOGovernorBravoDelegate",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LeafDAOGovernorBravoDelegate__factory>;

    getContractAt(
      name: "GovernorCompatibilityBravoUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GovernorCompatibilityBravoUpgradeable>;
    getContractAt(
      name: "IGovernorCompatibilityBravoUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IGovernorCompatibilityBravoUpgradeable>;
    getContractAt(
      name: "IGovernorTimelockUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IGovernorTimelockUpgradeable>;
    getContractAt(
      name: "GovernorUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GovernorUpgradeable>;
    getContractAt(
      name: "IGovernorUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IGovernorUpgradeable>;
    getContractAt(
      name: "Initializable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Initializable>;
    getContractAt(
      name: "IERC1155ReceiverUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155ReceiverUpgradeable>;
    getContractAt(
      name: "IERC721ReceiverUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721ReceiverUpgradeable>;
    getContractAt(
      name: "ContextUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ContextUpgradeable>;
    getContractAt(
      name: "EIP712Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.EIP712Upgradeable>;
    getContractAt(
      name: "ERC165Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165Upgradeable>;
    getContractAt(
      name: "IERC165Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165Upgradeable>;
    getContractAt(
      name: "DoubleEndedQueueUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DoubleEndedQueueUpgradeable>;
    getContractAt(
      name: "Comp",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Comp>;
    getContractAt(
      name: "Initializable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Initializable>;
    getContractAt(
      name: "ReentrancyGuardUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ReentrancyGuardUpgradeable>;
    getContractAt(
      name: "CompInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CompInterface>;
    getContractAt(
      name: "GovernorAlpha",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GovernorAlpha>;
    getContractAt(
      name: "GovernorBravoDelegateStorageV1",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GovernorBravoDelegateStorageV1>;
    getContractAt(
      name: "GovernorBravoDelegateStorageV2",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GovernorBravoDelegateStorageV2>;
    getContractAt(
      name: "GovernorBravoDelegatorStorage",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GovernorBravoDelegatorStorage>;
    getContractAt(
      name: "GovernorBravoEvents",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GovernorBravoEvents>;
    getContractAt(
      name: "TimelockInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TimelockInterface>;
    getContractAt(
      name: "LeafDAOGovernorBravoDelegate",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LeafDAOGovernorBravoDelegate>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
