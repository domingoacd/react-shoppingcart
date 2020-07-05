import React from 'react';
import styles from '../assets/css/main.module.css';
import Product from './Product';

const Main = () => {
  return (
    <section className={styles.main}>
      <Product />      
      <Product />      
    </section>
  );
}

export default Main;