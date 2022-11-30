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
      <title>Leaf DAO - Contact</title>
        <meta
          name="description"
          content="DAO made for the EVMOS ecosystem"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <NavBar />

        <h1 className={styles.title}>
          Contact
        </h1>
        <div className='about-container bg-transparent p-3 fw-bold'>
        <p className={styles.description}>
          Reach out to me via <br/>
          <a href='https://www.linkedin.com/in/joaovwfreire/' className='text-dark'> LinkedIn</a> <br/>
          <a>Discord: JoVi#6132</a> <br/>
          <a href='mailto:jvwfreire@gmail.com' className='text-dark'>E-Mail</a>
          <p>I'm happy to answer any questions and <br/> would love to read feedback! 😊 </p>
        </p>
        </div>
      </main>

      <Footer/>
    </div>
  );
};

export default Home;
