import React, {useState} from 'react';
import Navbar from './Nav';
import ProductInfo from './ProductInfo';
import Product from './Product';
import Cart from './Cart';
import Modal from './Modal';
import styles from '../assets/css/main.module.css';

const App = () => {
  const [currentProduct, changeCurrentProduct] = useState(false);
  return (
    <div className={styles.mainContainer}>
      <Navbar />
      <section className={styles.main}>
        <Product showProductInfo={changeCurrentProduct}/>
        <Product showProductInfo={changeCurrentProduct}/>
        <ProductInfo />
        <Cart />
      </section>
        <Modal />
    </div>
  );
}

export default App;