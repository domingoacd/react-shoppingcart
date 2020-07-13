import React, {useState} from 'react';
import Purchase from './Purchase';
import Button from './Button';
import styles from '../assets/css/cart.module.css';

const Cart = ({show, productsInCart, removeProduct}) => {
  const [total, changeTotal] = useState(0);

  function getTotal() {
    let total = 0;
    if (productsInCart.length > 0) {
      productsInCart.forEach(product => total = total + product.amount * product.cost);
    } 
    return total;
  }
  return(
    <div className={`${styles.cart} ${show ? styles.show : ''}`}>
      <h2 className={styles.title}>Your cart</h2>
      <div className={styles.purchaseContainer}>
        {
          productsInCart.map(product => {
            return (
              <Purchase 
                key={`P-${product.id}`} 
                purchaseData={product} 
                deleteProduct={removeProduct}
              />
            )
          })
        }
      </div>
      <div className={styles.totalContainer}>
        <p className={styles.totalTitle}>Total</p>
        <p className={styles.totalAmount}>${getTotal()}</p>
      </div>
      <Button content={"Buy"} style={'buyBtn'}/>
    </div>
  );
}

export default Cart;