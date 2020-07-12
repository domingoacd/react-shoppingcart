import React, {useState, useEffect} from 'react';
import Navbar from './Nav';
import ProductInfo from './ProductInfo';
import Product from './Product';
import Cart from './Cart';
import Modal from './Modal';
import api from '../api.js';
import styles from '../assets/css/main.module.css';

const App = () => {
  const [currentProduct, changeCurrentProduct] = useState(false);
  const [showCart, handleCart] = useState(false);
  const [showModal, handleModal] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.getMovies().then(movies => {
      if (movies.length > 0) {
        setProducts(movies.slice(0, 11));
      }
    });
  }, []);
  
  function goBack() {
    if (showModal) {
      handleModal(false);
    } else if (showCart) {
      handleCart(false);
    } else if (currentProduct) {
      changeCurrentProduct(false);
    }
  }
  function getProducts() {
    if (products.length > 0) {
      return products.map(product => {
        return <Product 
          key={product.id} 
          showProductInfo={changeCurrentProduct} 
          info={product}
        />
      });
    }
  }
  return (
    <div className={styles.mainContainer}>
      <Navbar openCart={handleCart} clickBack={goBack}/>
      <section className={styles.main}>
        {getProducts()}
        <ProductInfo product={currentProduct}/>
        <Cart show={showCart}/>
      </section>
        <Modal />
    </div>
  );
}

export default App;