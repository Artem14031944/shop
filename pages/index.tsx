import React, { useState, useEffect } from 'react';
import Comfort from '../components/Comfort/Comfort';
import Products from '../components/Products/Products';
import styles from '../styles/Home.module.scss';


export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Comfort/>
      <Products/>
    </div>
  )
};
