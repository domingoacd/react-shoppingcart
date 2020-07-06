import React from 'react';
import styles from '../assets/css/button.module.css';

const Button = ({style, content}) => {
  
  return (
    <button className={styles[style] + " " + styles.button} >
      {content}
    </button>
  );
}

export default Button;