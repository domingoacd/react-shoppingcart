import React from 'react';
import styles from '../assets/css/productInfo.module.css';
import totoro from '../assets/images/totoro.jpg';
import Button from './Button';

const ProductInfo = ({product, close}) => {

  return (
    <div className={`${styles.container}`}>
      <div className={styles.imageContainer}>
        <img src={totoro} alt="" className={styles.image}/>
        <div className={styles.titleContainer}>
          <div className={styles.leftSide}>
            <h2 className={styles.title}>Mi vecino Totoro</h2>
            <p className={styles.price}>$1</p>
          </div>
          <div className={styles.rightSide}>
            <Button content="Add to cart" style="productInfoBtn"/>
          </div>
        </div>
      </div>

      <div className={styles.info}>
        <p className={styles.year}>Year: 1998</p>
        <p className={styles.director}>Director: Hayao Miyazaki</p>
        <h3 className={styles.infoTitle}>Synopsis</h3>
        <p className={styles.infoText}>
          Ipsum velit anim non minim exercitation est. Esse laboris non eiusmod duis est eiusmod dolor dolore Lorem aute consequat pariatur voluptate. Reprehenderit voluptate consectetur et non excepteur dolor. 
        </p>
      </div>
    </div>
  );
}

export default ProductInfo;