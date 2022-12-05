import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import { Col, Row } from 'react-bootstrap';
import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/Footer';
import NavBar from '../components/Menu';
import Leaves from '../components/Leaves';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { MerkleTree } from "merkletreejs";
import axios from 'axios';
import keccak256 from "keccak256";
import loadinggif from '../styles/images/loadinggif.gif';
import { error } from 'console';
import Propose from '../hooks/Propose';

type AddressWeight = {
  address: string;
  amount: number;
}

const Home: NextPage = () => {

  let [userWeights, setUserWeights] = useState([]);
  let [tokenAddress, setTokenAddress] = useState('');
  let [blockNumber, setBlockNumber] = useState("");
  let [merkleRoot, setMerkleRoot] = useState("");
  let [snapshotStatus, setSnapshotStatus] = useState('');
  let [isMerkleRootLoading, setIsMerkleRootLoading] = useState(false);
  let [hGeneratorMessage, setHGeneratorMessage] = useState('');
  let [renderProposalSubmission, setRenderProposalSubmission] = useState(false);




  const merkleRootGenerator = async() =>{
    setIsMerkleRootLoading(true);
    setSnapshotStatus("Making snapshot, please wait.")
    setHGeneratorMessage('');
    const callUrl = `/api/token_balances_at_block/?blockNumber=${blockNumber}&tokenAddress=${tokenAddress}`;
    console.log({callUrl})
    console.log(1)
    try{
    let response = await axios.get(callUrl);
    let data = response.data.av;
    const dataMapping = data.map((x:any) => 
      ethers.utils.solidityKeccak256(
        ["address", "uint256"], [x.address, x.balance]));
        
      const merkleTree = new MerkleTree(dataMapping, keccak256, { sort: true });

      // Generate the root 
      const root = merkleTree.getHexRoot();
      
      setMerkleRoot(root);
      setIsMerkleRootLoading(false);
      setSnapshotStatus('');
      setHGeneratorMessage('Block snapshot succesfull. Proceed to proposal creation by clicking the submit button')
      console.log(7)


      }
    catch(error:any){

      setIsMerkleRootLoading(false);
      setSnapshotStatus("Snapshot failed. Please try again")
      setHGeneratorMessage(error.message);
    }
  }


  const hashGenerator = (e: { preventDefault: () => void; }) =>{
    e.preventDefault();
    console.log(2)
    merkleRootGenerator();
    console.log(3)
    
    
  }

  const proposalSubmissionOn = async () => {
    setRenderProposalSubmission(true);
    
  }

  const proposalSubmissionOff = async () => {
    setRenderProposalSubmission(false);
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
        <NavBar/>
        <Leaves/>
        <h1 className={styles.title}>
          Snapshot
        </h1>
        

        <Row className='container-home loader'>
        
        <Col className='homeBox p-5 m-2'>
          <h2>
            Start a proposal
          </h2>
          {
            isMerkleRootLoading &&

            <div>
              <Row>
            
      
            
            
            </Row>
            </div>

          }
          
        <form>
        <div className='loader'>
        
        </div>
        <hr/>
  <div className="mb-4">
    <label className="form-label fw-bold text-black">DAO Token address</label>
    <input type="text" className="form-control form-input-bg text-black fw-bold" id="inputAddress" aria-describedby="tokenAddressHelp" placeholder="0x" value={tokenAddress} 
           onChange={(e) => setTokenAddress(e.target.value)}/>
    <div id="tokenAddressHelp" className="form-text text-secondary fw-bold">Address of the governance ERC-20 token.</div>
  </div>
  <div className="mb-4">
    <label className="form-label fw-bold text-black">BlockNumber</label>
    <input type="text" className="form-control form-input-bg text-black fw-bold" id="inputBlockNumber" aria-describedby='blockNumberHelp' placeholder="1111" value={blockNumber} 
           onChange={(e) => setBlockNumber(e.target.value)}/>
    <div id="blockNumberHelp" className="form-text text-secondary fw-bold">Block Number to generate token balances snapshot.</div>
  </div>
  <button type="submit" className="kk fw-bold text-white my-3 mb-4" onClick={hashGenerator}>Generate Hash</button>
  <h6>{hGeneratorMessage}</h6>
  <hr/>
  <div className="mb-4">
    <label className="form-label fw-bold text-black"  ></label>
    <input type="text" placeholder='Please generate a hash' className="form-control form-input-bg text-black fw-bold" id="inputRootHash"  value={merkleRoot} disabled />
    <h3>{snapshotStatus}</h3>
  </div>

  
</form>
<button  className="kk fw-bold text-white" onClick={proposalSubmissionOn}>Proposal Submission</button>
<label className="form-label fw-bold text-secondary" >Click this button to start a new proposal based on the snapshot</label>
{ renderProposalSubmission &&
   <div>
    <h1 className={styles.title}>
     Proposal
   </h1>
    <button  className="kk fw-bold text-danger ms-auto" onClick={proposalSubmissionOff}>Cancel Proposal</button>
   
   
   <Propose snapshotBlockNumber={blockNumber} merkleRoot={merkleRoot}/>
   
</div>}
        </Col>
        </Row>

      </main>
      
      <Footer/>
    </div>
  );
};

export default Home;
