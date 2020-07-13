import React from 'react';
import styles from '../assets/css/button.module.css';

const Button = ({style, content, clickEvent, parentProduct}) => {
  
  function launchClick(e) {
    clickEvent(parentProduct);
  }
  return (
    <button className={styles[style] + " " + styles.button} onClick={launchClick}>
      {content}
    </button>
  );
}

export default Button;