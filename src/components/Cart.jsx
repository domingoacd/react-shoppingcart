import React, {useState} from 'react';
import Purchase from './Purchase';
import Button from './Button';
import styles from '../assets/css/cart.module.css';

const Cart = () => {
  return(
    <div className={styles.cart}>
      <h2 className={styles.title}>Your cart</h2>
      <div className={styles.purchaseContainer}>
        <Purchase />
      </div>
      <div className={styles.totalContainer}>
        <p className={styles.totalTitle}>Total</p>
        <p className={styles.totalAmount}>$4</p>
      </div>
      <Button content={"Buy"} style={'buyBtn'}/>
    </div>
  );
}

export default Cart;