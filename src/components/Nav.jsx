import React from 'react';
import styles from '../assets/css/navbar.module.css';
import shopCart from '../assets/images/cart.png';
import backArrow from '../assets/images/back.png';

const Navbar = ({openCart, clickBack, productsInCart}) => {

  const showCounter = () => productsInCart.length > 0 ? true : false ;
  
  function showCart() {
    openCart(true);
  }
  
  function getAmountOfProducts() {
    let amount = 0;
    productsInCart.forEach(product => {
      amount = amount + product.amount;
    });
    return amount
  }

  return (
    <nav className={styles.nav}> 
    <div className={styles.navWrapper}>
      <button className={styles.btnBack} onClick={clickBack}>
        <img className={styles.image} src={backArrow} alt="Click here to go back"/>
      </button>
      <h1 className={styles.mainTitle}>Ghibli</h1>
      <button className={styles.btnOpenCart} onClick={showCart}>
        <img className={styles.image} src={shopCart} alt="Click here to open shopping cart"/>
        <span className={`${styles.itemsAmount} ${showCounter() ? styles.show : ''}`}>
          {getAmountOfProducts()}
        </span>
      </button>
    </div>
    </nav>
  )
}

export default Navbar;