import React, {useState} from 'react';
import styles from '../assets/css/purchase.module.css';
import trashCan from '../assets/images/delete.png';
import totoro from '../assets/images/totoro.jpg';

const Purchase = ({purchaseData, deleteProduct}) => {
  const [hide, hidePurchase] = useState(false);
  const imageUrl = {
    backgroundImage: `url(${totoro})`
  } 

  function handleClick(e) {
    if (purchaseData.amount === 1) {
      hidePurchase(true);
    }
    deleteProduct(purchaseData.id);
  }

  return (
    <div className={`${styles.purchase} ${hide ? styles.hide : ''}`}>
      <div className={styles.left} style={imageUrl}></div>
      <div className={styles.right}>
        <div className={styles.topWrapper}>
          <div className={styles.row}>
            <h3 className={styles.name}>{purchaseData.title}</h3>
            <div className={styles.delete}>
              <img 
                src={trashCan} 
                className={styles.image} 
                alt="Click here to remove item"
                onClick={handleClick}
              />
            </div>
          </div>
          <div className={styles.row}>
            <p className={styles.quantity}>Quantity</p>
            <p className={styles.number}>{purchaseData.amount}</p>
          </div>
        </div>
        <div className={`${styles.row} ${styles.lastRow}`}>
          <p className={styles.subTotal}>Subtotal</p>
          <p className={styles.subTotalNumber}>
            ${purchaseData.amount * purchaseData.cost} 
          </p>
        </div>
      </div>
    </div>
  )
}

export default Purchase;