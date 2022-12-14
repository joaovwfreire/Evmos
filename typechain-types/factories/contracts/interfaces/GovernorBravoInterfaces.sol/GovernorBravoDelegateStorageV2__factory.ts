/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  GovernorBravoDelegateStorageV2,
  GovernorBravoDelegateStorageV2Interface,
} from "../../../../contracts/interfaces/GovernorBravoInterfaces.sol/GovernorBravoDelegateStorageV2";

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
    name: "initialProposalId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "latestProposalIds",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ldao",
    outputs: [
      {
        internalType: "contract CompInterface",
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
  {
    inputs: [],
    name: "proposalCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proposalThreshold",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "proposals",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "proposer",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "startBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "forVotes",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "againstVotes",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "abstainVotes",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "canceled",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "executed",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "snapshotBlockNumber",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "merkleRoot",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "timelock",
    outputs: [
      {
        internalType: "contract TimelockInterface",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "votingDelay",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "votingPeriod",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "whitelistAccountExpirations",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "whitelistGuardian",
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
  "0x608060405234801561001057600080fd5b5061035c806100206000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80635c60da1b1161008c578063d33219b411610066578063d33219b4146102a5578063da35c664146102b8578063f851a440146102c1578063fc4eee42146102d457600080fd5b80635c60da1b14610276578063b58131b014610289578063c5a8425d1461029257600080fd5b806317977c61116100c857806317977c611461021a578063267822471461023a57806338bd0dda1461024d5780633932abb11461026d57600080fd5b8063013cf08b146100ef57806302a251a3146101d85780630cc89a07146101ef575b600080fd5b61016e6100fd3660046102dd565b600a60208190526000918252604090912080546001820154600283015460078401546008850154600986015496860154600b870154600c880154600d890154600e9099015497996001600160a01b039097169895979496939593949293919260ff808316936101009093041691908c565b604080519c8d526001600160a01b03909b1660208d0152998b019890985260608a0196909652608089019490945260a088019290925260c087015260e086015215156101008501521515610120840152610140830152610160820152610180015b60405180910390f35b6101e160045481565b6040519081526020016101cf565b600954610202906001600160a01b031681565b6040516001600160a01b0390911681526020016101cf565b6101e16102283660046102f6565b600b6020526000908152604090205481565b600154610202906001600160a01b031681565b6101e161025b3660046102f6565b600c6020526000908152604090205481565b6101e160035481565b600254610202906001600160a01b031681565b6101e160055481565b600d54610202906001600160a01b031681565b600854610202906001600160a01b031681565b6101e160075481565b600054610202906001600160a01b031681565b6101e160065481565b6000602082840312156102ef57600080fd5b5035919050565b60006020828403121561030857600080fd5b81356001600160a01b038116811461031f57600080fd5b939250505056fea26469706673582212206988cf57b837dbfbde72014c38bebf658ebeca54130c8d5e8372af3b34ce8a3464736f6c63430008110033";

type GovernorBravoDelegateStorageV2ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GovernorBravoDelegateStorageV2ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GovernorBravoDelegateStorageV2__factory extends ContractFactory {
  constructor(...args: GovernorBravoDelegateStorageV2ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<GovernorBravoDelegateStorageV2> {
    return super.deploy(
      overrides || {}
    ) as Promise<GovernorBravoDelegateStorageV2>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): GovernorBravoDelegateStorageV2 {
    return super.attach(address) as GovernorBravoDelegateStorageV2;
  }
  override connect(signer: Signer): GovernorBravoDelegateStorageV2__factory {
    return super.connect(signer) as GovernorBravoDelegateStorageV2__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GovernorBravoDelegateStorageV2Interface {
    return new utils.Interface(_abi) as GovernorBravoDelegateStorageV2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GovernorBravoDelegateStorageV2 {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as GovernorBravoDelegateStorageV2;
  }
}
