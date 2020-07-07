import React, {useState} from 'react';
import Purchase from './Purchase';
import styles from '../assets/css/cart.module.css';

const Cart = () => {
  return(
    <div className={styles.cart}>
      <h2 className={styles.title}>Your cart</h2>
      <div className={styles.purchaseContainer}>
        <Purchase />
      </div>
      <div className={styles.totalContainer}>

      </div>
      
    </div>
  );
}

export default Cart;