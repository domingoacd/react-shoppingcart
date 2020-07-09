import React from 'react';
import styles from '../assets/css/modal.module.css';
import Button from './Button';

const Modal = () => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2 className={styles.modalTitle}>Thanks!</h2>  
        <p className={styles.modalText}>
          This is a mockup site, if you like my work, feel free to check on my Github @domingoacd, or contact me on Linkedin @
        </p>
        <Button content="Close" style="closeBtn"/>
      </div>
    </div>
  );
}

export default Modal;