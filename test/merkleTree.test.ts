import { expect } from "chai";
import { ethers } from 'hardhat'
import { utils } from "ethers";

import { MerkleTree } from "merkletreejs";
import keccak256 from "keccak256";

describe("LeafDao", function () {
  const users = [
    { address: "0xD08c8e6d78a1f64B1796d6DC3137B19665cb6F1F", amount: 10 },
    { address: "0xb7D15753D3F76e7C892B63db6b4729f700C01298", amount: 15 },
    { address: "0xf69Ca530Cd4849e3d1329FBEC06787a96a3f9A68", amount: 20 },
    { address: "0xa8532aAa27E9f7c3a96d754674c99F1E2f824800", amount: 30 },
  ];

  // equal to MerkleDistributor.sol #keccak256(abi.encodePacked(account, amount));
  const elements = users.map((x) =>
    utils.solidityKeccak256(["address", "uint256"], [x.address, x.amount])
  );

  const merkleTree = new MerkleTree(elements, keccak256, { sort: true });

  const root = merkleTree.getHexRoot();

  const leaf = elements[3];
  const proof = merkleTree.getHexProof(leaf);
  
  beforeEach(async () => {

    // Deploy contract
    const leafDaoFactory = await ethers.getContractFactory("LeafDao");
    const leafDao = await leafDaoFactory.deploy(root);
    await leafDao.deployed();

  });

  it("should snapshot certain blockheight", async () => {
    

    
  });

  it("should propose successfully with snapshot", async () => {
    

    
  });

  it("should vote successfully for valid proof", async () => {
    

    
  });

  it("should throw for invalid amount or address", async () => {
    const merkleTree = new MerkleTree(elements, keccak256, { sort: true });

    const root = merkleTree.getHexRoot();

    const leaf = elements[3];
    const proof = merkleTree.getHexProof(leaf);

    // Deploy contract
    const Distributor = await ethers.getContractFactory("LeafDao");
    const distributor = await Distributor.deploy(root);
    await distributor.deployed();

    // random amount
    await expect(
      distributor.claim(users[3].address, 10000, proof)
    ).to.be.rejectedWith("MerkleDistributor: Invalid proof.");

    // random address
    await expect(
      distributor.claim(
        "0x94069d197c64D831fdB7C3222Dd512af5339bd2d",
        users[3].amount,
        proof
      )
    ).to.be.rejectedWith("MerkleDistributor: Invalid proof.");
  });

  it("should throw for invalid proof", async () => {
    const merkleTree = new MerkleTree(elements, keccak256, { sort: true });

    const root = merkleTree.getHexRoot();

    // Deploy contract
    const Distributor = await ethers.getContractFactory("LeafDao");
    const distributor = await Distributor.deploy(root);
    await distributor.deployed();

    // Attempt to claim and verify success
    await expect(
      distributor.claim(users[3].address, users[3].amount, [])
    ).to.be.rejectedWith("MerkleDistributor: Invalid proof.");
  });
});