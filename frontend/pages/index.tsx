import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/Footer';
import NavBar from '../components/Menu';
import Leaves from '../components/Leaves';
import { Col, Row } from 'react-bootstrap';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
      <title>Leaf DAO - Home</title>
        <meta
          name="description"
          content="DAO made for the EVMOS ecosystem"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <NavBar />
        <Leaves/>
        <h1 className='fw-bold mt-5'>Decentralized autonomous organizations tools</h1>
        <h4 className='text-secondary '>Governance tooling deployed at EVMOS testnet  </h4>
        <div className='d-inline-block'><h4 className='text-success '> An EVMOS - Covalent - Encode Hackathon submission. </h4> </div>
        <div className='about-container p-3'>
        <Row className='container-home'>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
    <svg xmlns="http://www.w3.org/2000/svg" width="350" height="350" fill="#132b04" className="bi bi-ticket-fill" viewBox="0 0 16 16">
  <path d="M1.5 3A1.5 1.5 0 0 0 0 4.5V6a.5.5 0 0 0 .5.5 1.5 1.5 0 1 1 0 3 .5.5 0 0 0-.5.5v1.5A1.5 1.5 0 0 0 1.5 13h13a1.5 1.5 0 0 0 1.5-1.5V10a.5.5 0 0 0-.5-.5 1.5 1.5 0 0 1 0-3A.5.5 0 0 0 16 6V4.5A1.5 1.5 0 0 0 14.5 3h-13Z"/>
</svg>
      <div className="carousel-caption d-md-block text-white fw-bold">
        <h4 className=' pb-5 fw-bold fix-margin'><Link href="/governance" className='text-white'>Governance</Link></h4>
        <div className='
        mb-3'></div>
      </div>
    </div>
    <div className="carousel-item">
    <svg xmlns="http://www.w3.org/2000/svg" width="350" height="350" fill="#132b04" className="bi bi-record-btn-fill" viewBox="0 0 16 16">
  <path d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm8-1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg>
      <div className="carousel-caption d-md-block text-white  fw-bold">
        <h4 className='mb-4 fw-bold'><Link href="/snapshot" className='text-white'>Snapshots</Link></h4>
        
      </div>  
    </div>
    <div  className="carousel-item">

    <svg xmlns="http://www.w3.org/2000/svg" width="350" height="300" fill="#132b04" className="bi bi-chat-square-fill mt-5" viewBox="0 0 16 16">
  <path d="M2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
</svg>

      <div className="carousel-caption d-md-block text-white mb-5 pb-5 fw-bold">
        <h4 className='fw-bold'><Link href="/contact" className='text-white'>Improve</Link></h4>
        <p>Your DAO`s representativity with easy to use and cost-effective tooling!</p>
      </div>
    </div>
  </div>
  
  
  
</div>
        
        </Row>
        </div>
      </main>

      <Footer/>
    </div>
  );
};

export default Home;
