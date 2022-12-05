import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/Footer';
import NavBar from '../components/Menu';
import Leaves from '../components/Leaves';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
      <title>Leaf DAO - About</title>
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
          About the project
        </h1>
        <div className='about-container '>
        
        <div className=''>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Leaf DAO </h2>
            <p>was built in 10 days for the <br/> Evmos-Covalent Hackathon.</p>
          </div>

          <div className={styles.card}>
          <h2>
          <Link href="https://github.com/joaovwfreire" target='_blank' rel='noreferrer'>

            JoVi

          </Link>
          </h2>
          <p>This project has been solo developed by Joao Freire (JoVi) - <br/> a 24-year-old brazilian developer.</p>
          </div>

          <div
           
            className={styles.card}
          >
            <h2>Merkle tree</h2>
            <p>This project stores wallet addresses` voting power snapshots by utilizing Merkle Trees </p>
          </div>
          <div className={styles.card}>
          <h2>
          <Link href="https://nextjs.org/docs" target='_blank' rel='noreferrer'>
            Next.js
            
          </Link>
          </h2>
          <p>is the go-to framework for <br/>this frontend.</p>
          </div>
          <div className={styles.card}>
          <h2>
          <Link
            href="https://www.rainbowkit.com/"
            
            target='_blank' rel='noreferrer'
          >
            Rainbow Kit
            
          </Link>
          </h2>
          <p>Was used to enable wallet connection.</p>
          </div>
          <div className={styles.card}>
          <h2>
          <Link
            href="https://github.com/compound-finance/compound-protocol/tree/master/contracts/Governance"
            target='_blank' rel='noreferrer'
          >
            GovernorBravo 
            
          </Link>
          </h2>
          <p>
              Was used as the framework for this DAO`s voting system and governance logic.
            </p>
            </div>

        </div>
        </div>
        </div>
      </main>

      <Footer/>
    </div>
  );
};

export default Home;
