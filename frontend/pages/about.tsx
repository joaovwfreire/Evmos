import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from '../components/Footer';
import NavBar from '../components/Menu';
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
        <h1 className={styles.title}>
          About the project
        </h1>
        <div className='about-container bg-transparent'>
        
        <div className=''>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Leaf DAO </h2>
            <p>was built in 10 days for the <br/> Encode X Evmos Hackathon.</p>
          </div>

          <a href="https://github.com/joaovwfreire" target='_blank' className={styles.card}>
            <h2>JoVi</h2>
            <p>This project has been solo developed by Joao Freire (JoVi) - <br/> a 24-year-old brazilian developer.</p>
          </a>

          <a
            href="https://github.com/rainbow-me/rainbowkit/tree/main/examples"
            target='_blank'
            className={styles.card}
          >
            <h2>Merkle tree</h2>
            <p>This project stores wallet addresses' voting power snapshots by utilizing Merkle Trees </p>
          </a>

          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Next.js &rarr;</h2>
            <p>was the go-to framework for <br/>this frontend.</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Rainbow Kit</h2>
            <p>Was used to enable wallet connection.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>OpenZeppelin GovernorBravo </h2>
            <p>
              Was used as the framework for this DAO's voting system and governance logic.
            </p>
          </a>
        </div>
        </div>
        </div>
      </main>

      <Footer/>
    </div>
  );
};

export default Home;
