import React from 'react';
import styles from '../styles/StylesAside3.module.css';
import imgCode1 from '../img/code.jpeg';

export const Aside3 = () => {
  return (
    <div className={styles.containerAside3}>
        <img className={styles.imgCode} src={imgCode1} alt="Code" />
        <h2 className={styles.titleAside3}>NUESTROS SERVICIOS TI</h2>
    </div>
  )
}
