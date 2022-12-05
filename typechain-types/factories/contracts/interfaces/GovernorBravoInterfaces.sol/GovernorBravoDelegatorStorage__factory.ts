/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  GovernorBravoDelegatorStorage,
  GovernorBravoDelegatorStorageInterface,
} from "../../../../contracts/interfaces/GovernorBravoInterfaces.sol/GovernorBravoDelegatorStorage";

const _abi = [
  {
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "implementation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingAdmin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060fd8061001f6000396000f3fe6080604052348015600f57600080fd5b5060043610603c5760003560e01c8063267822471460415780635c60da1b146089578063f851a4401460a8575b600080fd5b60015460609073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b60025460609073ffffffffffffffffffffffffffffffffffffffff1681565b60005460609073ffffffffffffffffffffffffffffffffffffffff168156fea26469706673582212202b771756c5280e71306b560cf46d624129b8100e303d35685e7f07a6df735cf264736f6c63430008110033";

type GovernorBravoDelegatorStorageConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GovernorBravoDelegatorStorageConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GovernorBravoDelegatorStorage__factory extends ContractFactory {
  constructor(...args: GovernorBravoDelegatorStorageConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<GovernorBravoDelegatorStorage> {
    return super.deploy(
      overrides || {}
    ) as Promise<GovernorBravoDelegatorStorage>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): GovernorBravoDelegatorStorage {
    return super.attach(address) as GovernorBravoDelegatorStorage;
  }
  override connect(signer: Signer): GovernorBravoDelegatorStorage__factory {
    return super.connect(signer) as GovernorBravoDelegatorStorage__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GovernorBravoDelegatorStorageInterface {
    return new utils.Interface(_abi) as GovernorBravoDelegatorStorageInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GovernorBravoDelegatorStorage {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as GovernorBravoDelegatorStorage;
  }
}