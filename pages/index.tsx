/* eslint-disable react/function-component-definition */
import type { NextPage } from 'next';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Layout from '../components/layout';
import NextImages from '../public/images/next.png'

const Home: NextPage = () => (
  <>
  <div className={styles.container}>
    <Layout pageTitle="Home Page">
      <div className='flex justify-center'>
        <Image src={NextImages} height={500} />
      </div>
    </Layout>
  </div>
  </>
);

export default Home;
