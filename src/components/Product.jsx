import React, {useState} from 'react';
import styles from '../assets/css/product.module.css';
import totoro from '../assets/images/totoro.jpg';
import chihiro from '../assets/images/chihiro.jpg';
import Button from './Button';

const Product = ({showProductInfo, info}) => {
  const handleClick = () => showProductInfo(info);
  const imageUrl = {
    backgroundImage: `url(${totoro})`
  } 
  return (
    <div className={styles.product} onClick={handleClick}>
      <div className={styles.leftSide}>
        <h3 className={styles.productName}>{info.title}</h3>
        <p className={styles.productPrice}>$1</p>
        <Button style="productBtn" content="Add to cart" />
      </div>
      <div className={styles.image} style={imageUrl}></div>
    </div>
  );
};

export default Product; 