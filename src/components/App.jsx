import React, {useState} from 'react';
import Navbar from './Nav';
import ProductInfo from './ProductInfo';
import Product from './Product';
import Cart from './Cart';
import Modal from './Modal';
import styles from '../assets/css/main.module.css';

const App = () => {
  const [currentProduct, changeCurrentProduct] = useState(false);
  const [showCart, handleCart] = useState(false);
  const [showModal, handleModal] = useState(false);

  function goBack() {
    if (showModal) {
      handleModal(false);
    } else if (showCart) {
      handleCart(false);
    } else if (currentProduct) {
      changeCurrentProduct(false);
    }
  }

  return (
    <div className={styles.mainContainer}>
      <Navbar openCart={handleCart} clickBack={goBack}/>
      <section className={styles.main}>
        <Product showProductInfo={changeCurrentProduct}/>
        <Product showProductInfo={changeCurrentProduct}/>
        <ProductInfo />
        <Cart show={showCart}/>
      </section>
        <Modal />
    </div>
  );
}

export default App;