import React from 'react';
import styles from '../assets/css/navbar.module.css';
import shopCart from '../assets/images/cart.png';
import backArrow from '../assets/images/back.png';

const Navbar = () => {
  return (
    <nav className={styles.nav}> 
      <button className={styles.btnBack}>
        <img className={styles.image} src={backArrow} alt="Click here to go back"/>
      </button>
      <h1 className={styles.mainTitle}>Ghibli</h1>
      <button className={styles.btnOpenCart}>
        <img className={styles.image} src={shopCart} alt="Click here to open shopping cart"/>
      </button>
    </nav>
  )
}

export default Navbar;