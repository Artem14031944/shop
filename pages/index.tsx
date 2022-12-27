import React from 'react';
import Head from 'next/head';
import Comfort from '../components/Comfort/Comfort';
import Products from '../components/Products/Products';
import styles from '../styles/Home.module.scss';


export default function Home() {
  return (
    <>
      <Head>
        <title>Shop</title>
        <meta name='shop'></meta>
      </Head>
      <Products/>
    </>
  )
};
