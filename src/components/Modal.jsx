import React from 'react';
import styles from '../assets/css/modal.module.css';
import Button from './Button';

const Modal = ({show, hide}) => {
  return (
    <div className={`${styles.modal} ${show ? styles.show : ''}`}>
      <div className={styles.modalContent}>
        <h2 className={styles.modalTitle}>Thanks!</h2>  
        <p className={styles.modalText}>
          This is a mockup site, if you like my work, feel free to check on my Github @domingoacd, or contact me on Linkedin @domingoacd
        </p>
        <Button content="Close" style="closeBtn" clickEvent={hide}/>
      </div>
    </div>
  );
}

export default Modal;