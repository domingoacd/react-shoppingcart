import React from 'react';
import styles from '../assets/css/product.module.css';
import totoro from '../assets/images/totoro.jpg';
import chihiro from '../assets/images/chihiro.jpg';
import Button from './Button';

const Product = () => {
  return (
    <div className={styles.product}>
      <div className={styles.leftSide}>
        <h3 className={styles.productName}>Totoro</h3>
        <p className={styles.productPrice}>$1</p>
        <Button style="productBtn" content="Add to cart"/>
      </div>
      <img src={totoro} alt="" className={styles.image}/>
    </div>
  );
};

export default Product; 