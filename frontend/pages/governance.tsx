import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import { Col, Row } from 'react-bootstrap';
import Head from 'next/head';
import Footer from '../components/Footer';
import NavBar from '../components/Menu';
import Leaves from '../components/Leaves';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';
import Select from 'react-select';

const Home: NextPage = () => {

  const Countries = [
    { label: "Proposal #001", value: 1 },
    { label: "Proposal #002", value: 2 },
    { label: "Proposal #003", value: 3 },
    { label: "Proposal #004", value: 4 },
    { label: "Proposal #005", value: 5 },
    { label: "Proposal #006", value: 6 },
    { label: "Proposal #007", value: 7 },
    { label: "Proposal #008", value: 8 },,
    { label: "Proposal #009", value: 9 },
  ];

  let [proposal, setProposal] = useState("Proposal list")

  const registrationModal = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
  }

  const accessButton = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
  }

  const changeProposal = async (proposalNumber: number) =>{
    setProposal(`Proposal #00${proposalNumber}`)
  }

  return (
    <div className={styles.container}>
      <Head>
      <title>Leaf DAO - Governance</title>
        <meta
          name="description"
          content="DAO made for the EVMOS ecosystem"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <NavBar />
        <Leaves/>
        <h1 className={styles.title}>
          Governance
        </h1>
        <h2 className='text-danger'>
          Not currently built
        </h2>
        

        <Row>
        
        <Col className='about-container  p-5 m-5'>
          <h2>Proposals</h2>
          <hr/>
        <form>

  <label className="form-label fw-bold text-black">Find all proposals by number</label>
        
  <select  aria-label="Default select example" className=" form-select text-dark  fw-bold  border-round form-input-bg">
  <option value="0" selected>Proposal #001</option>
  <option value="1">Proposal #002</option>
  <option value="2">Proposal #003</option>
  <option value="3">Proposal #004</option>
  <option value="4">Proposal #005</option>
  <option value="5">Proposal #006</option>
  <option value="6">Proposal #007</option>
  <option value="7">Proposal #008</option>
  <option value="8">Proposal #009</option>

</select>
<div id="tokenAddressHelp" className="form-text text-dark fw-bold">Ordered from first to last.</div>

  <button type="submit" className="kk fw-bold text-white my-2" onClick={accessButton}>Access</button>
</form>
        
      

        </Col>
   
        <Col className='about-container  p-5 m-5'>
          <h2 >Governors</h2>
          <hr/>
        <form>
        <table className="table table-secondary border border-success border-1  table-striped">
        <thead>
    <tr>
      <th scope="col">Address</th>

      <th scope="col">End </th>
    </tr>
  </thead>
  <tbody>
    <tr>

      <td>0xB...D7b</td>

      <td>01/24/22</td>
    </tr>
    <tr>

      <td>0xB...D7b</td>

      <td>01/24/22</td>
    </tr>
    <tr>

      <td>0xB...D7b</td>

      <td>01/24/22</td>
    </tr>
    <tr>

      <td>0xB...D7b</td>

      <td>01/24/22</td>
    </tr>
    <tr>

      <td>0xB...D7b</td>

      <td>01/24/22</td>
    </tr>
    <tr>

      <td>0xB...D7b</td>

      <td>01/24/22</td>
    </tr>
  </tbody>
</table>

  <button type="submit" className="kk fw-bold text-white my-2" id='registrationButton' onClick={registrationModal}>Apply</button>
</form>
        
       
        </Col>
        </Row>
        

        
      </main>

      <Footer/>
    </div>
  );
};

export default Home;
