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
    const fetchMovies = async () => {
      setProducts(await api.getMovies());
    }

    fetchMovies();
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
  function removeProductFromCart(productId) {
    const newCartProducts = cartProducts.slice();
    const productIndex = newCartProducts.findIndex(product => product.id === productId);
    
    if (newCartProducts[productIndex].amount === 1) {
      setTimeout(() => {
        newCartProducts.splice(productIndex, 1);
        setCartProducts(newCartProducts);
      }, 500);
    } else {
      newCartProducts[productIndex].amount--;
      setCartProducts(newCartProducts);
    }

  }

  function addProductToCart(product) {
    const productAlreadyExists = 
      cartProducts.some(carProduct => carProduct.id === product.id);
    let productsList = cartProducts.slice();
    if (productsList.length > 0 && productAlreadyExists) {
      productsList.forEach(cartProduct => {
        if (cartProduct.id === product.id) {
          cartProduct.amount++;
        }
      });
      setCartProducts(productsList);
    } else {
      productsList.push({
        id: product.id,
        title: product.title,
        cost: product.cost,
        image: product.image,
        amount: 1
      });
      setCartProducts(productsList);
    }
  }

  return (
    <div className={styles.mainContainer}>
      <Modal />
      <Navbar 
        openCart={handleCart} 
        clickBack={goBack} 
        productsInCart={cartProducts}
      />
      <section className={`${styles.main}`}>
        <div className={`${styles.productsContainer} ${currentProduct || showCart ? styles.hide : ''}`}>
          {getProducts()}
        </div>
        <ProductInfo product={currentProduct} addProduct={addProductToCart}/>
        <Cart 
          show={showCart} 
          productsInCart={cartProducts} 
          removeProduct={removeProductFromCart}
        />
      </section>
    </div>
  );
}

export default App;