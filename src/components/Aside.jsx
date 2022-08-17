import React from 'react';
import styles from '../styles/StylesAside.module.css';
import person1 from '../img/person1.png';

export const Aside = () => {
  return (
    <div className={styles.containerAside}>
      
        <img className={styles.person1} src={person1} alt="Person1" />
        <h1>EXPERTOS EN TEGNOLOGÌA E INOVACIÒN DIGITAL</h1>
        <button className={styles.botomSolutionsTi}>Soluciones TI</button>
    </div>
  )
}
