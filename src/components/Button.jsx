import React from 'react';
import styles from '../assets/css/button.module.css';

const Button = ({style, content, clickEvent, productId}) => {
  
  function launchClick(e) {
    clickEvent(productId);
  }
  return (
    <button className={styles[style] + " " + styles.button} onClick={launchClick}>
      {content}
    </button>
  );
}

export default Button;