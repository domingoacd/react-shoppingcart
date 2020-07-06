import React from 'react';
import styles from '../assets/css/product.module.css';
import totoro from '../assets/images/totoro.jpg';
import chihiro from '../assets/images/chihiro.jpg';
import Button from './Button';

const Product = ({showProductInfo}) => {
  const imageUrl = {
    backgroundImage: `url(${totoro})`
  } 

  const handleClick = () => showProductInfo('productId');
  return (
    <div className={styles.product} onClick={handleClick}>
      <div className={styles.leftSide}>
        <h3 className={styles.productName}>Totoro</h3>
        <p className={styles.productPrice}>$1</p>
        <Button style="productBtn" content="Add to cart" />
      </div>
      <div className={styles.image} style={imageUrl}></div>
    </div>
  );
};

export default Product; 