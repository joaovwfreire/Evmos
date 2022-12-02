import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import { Col, Row } from 'react-bootstrap';
import Head from 'next/head';
import Footer from '../components/Footer';
import NavBar from '../components/Menu';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { MerkleTree } from "merkletreejs";
import keccak256 from "keccak256";

type AddressWeight = {
  address: string;
  amount: number;
}

const Home: NextPage = () => {

  let [userWeights, setUserWeights] = useState([]);

  const merkleRootGenerator = async(users: AddressWeight[] )=> {

    // Encode the datastructure 
    const elements = users.map((x) =>     
      ethers.utils.solidityKeccak256(
        ["address", "uint256"], [x.address, x.amount]));
    const merkleTree = 
      new MerkleTree(elements, keccak256, { sort: true });
    // Generate the root 
    const root = merkleTree.getHexRoot();
    return root;
  }


  return (
    <div className={styles.container}>
      <Head>
      <title>Leaf DAO - Snapshot</title>
        <meta
          name="description"
          content="DAO made for the EVMOS ecosystem"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <NavBar />

        <h1 className={styles.title}>
          Snapshot
        </h1>
        

        <Row className='container-home '>
        <Col className='homeBox p-5 m-2'>
          <h2>
            Start a proposal
          </h2>
          
        <form>
        <hr/>
  <div className="mb-4">
    <label for="inputAddress" className="form-label fw-bold text-black">DAO Token address</label>
    <input type="text" className="form-control form-input-bg text-black fw-bold" id="inputAddress" aria-describedby="tokenAddressHelp"/>
    <div id="tokenAddressHelp" className="form-text text-secondary fw-bold">Address of the governance ERC-20 token.</div>
  </div>
  <div className="mb-4">
    <label for="inputBlockNumber" className="form-label fw-bold text-black">BlockNumber</label>
    <input type="text" className="form-control form-input-bg text-black fw-bold" id="inputBlockNumber" aria-describedby='blockNumberHelp'/>
    <div id="blockNumberHelp" className="form-text text-secondary fw-bold">Block Number to generate token balances snapshot.</div>
  </div>
  <button type="submit" className="kk fw-bold text-white my-3 mb-5">Generate Hash</button>
  <div className="mb-4">
    <label for="inputRootHash" className="form-label fw-bold text-black" >Merkle Tree root hash</label>
    <input type="text" placeholder='Please generate a hash' className="form-control form-input-bg text-black fw-bold" id="inputRootHash"disabled />
  </div>

  <button type="submit" className="kk fw-bold text-white">Submit</button>
  <label for="inputRootHash" className="form-label fw-bold text-secondary" >Click the submit button to start a new proposal based on the snapshot</label>
   
</form>
        </Col>
        </Row>
      </main>

      <Footer/>
    </div>
  );
};

export default Home;
