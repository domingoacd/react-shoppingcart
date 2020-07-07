import React from 'react';
import styles from '../assets/css/purchase.module.css';
import trashCan from '../assets/images/delete.png';
import totoro from '../assets/images/totoro.jpg';

const Purchase = () => {
  const imageUrl = {
    backgroundImage: `url(${totoro})`
  } 
  return (
    <div className={styles.purchase}>
      <div className={styles.left} style={imageUrl}></div>
      <div className={styles.right}>
        <div className={styles.row}>
          <h3 className={styles.name}>Totoro</h3>
          <div className={styles.delete}>
            <img src={trashCan} className={styles.image} alt="Click here to remove item"/>
          </div>
        </div>
        <div className={styles.row}>
          <p className={styles.quantity}>Quantity</p>
          <p className={styles.number}>2</p>
        </div>
        <div className={`${styles.row} ${styles.lastRow}`}>
          <p className={styles.subTotal}>Subtotal</p>
          <p className={styles.subTotalNumber}>$2</p>
        </div>
      </div>
    </div>
  )
}

export default Purchase;