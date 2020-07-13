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
  const [cartProducts, setCartProducts] = useState([]);

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
    let allProducts = [];
    if (products.length > 0) {
      allProducts = products.map(product => 
         <Product 
          key={product.id} 
          showProductInfo={changeCurrentProduct} 
          info={product}
          addProduct={addProductToCart}
        />
      );
    } else {
      allProducts = "No movies available.";
    }
    return allProducts;
  }

  function addProductToCart(productId) {
    const productAlreadyExists = cartProducts.some(product => product.id === productId);
    let productsList = cartProducts.slice();

    
    if (productsList.length > 0 && productAlreadyExists) {
      productsList.forEach(product => {
        if (product.id === productId) {
          product.amount++;
        }
      });
      setCartProducts(productsList);
    } else {
      productsList.push({
        id: productId,
        amount: 1
      });
      setCartProducts(productsList);
    }
  }

  return (
    <div className={styles.mainContainer}>
      <Modal />
      <Navbar openCart={handleCart} clickBack={goBack}/>
      <section className={`${styles.main}`}>
        <div className={`${styles.productsContainer} ${currentProduct || showCart ? styles.hide : ''}`}>
          {getProducts()}
        </div>
        <ProductInfo product={currentProduct}/>
        <Cart show={showCart}/>
      </section>
    </div>
  );
}

export default App;