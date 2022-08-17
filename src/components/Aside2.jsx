import React from 'react';
import styles from '../styles/StylesAside2.module.css';

export const Aside2 = () => {
  return (
    <div className={styles.containerAside2}>
        <h2 className={styles.titleASide1}>COMPRENDEMOS</h2>
            <h3 className={styles.subtitleASide1}>La logica de tu negocio
            Tus necesidades
            Tu realidad</h3>
        

        <h2 className={styles.titleASide2}>
            RECOMENDAMOS</h2>
            <h3 className={styles.subtitleASide2}>El enfoque estrategico y la solucion tecnologica que realmente funciona mejor para ti</h3>
        

        <h2 className={styles.titleASide3}>
            DAMOS FORMA</h2>
            <h3 className={styles.subtitleASide3}>A tus ideas digitales para transformarlas en la base de tu crecimiento</h3>
        

        <h2 className={styles.titleASide4}>
            PROGRAMAMOS</h2>
            <h3 className={styles.subtitleASide4}>Tu ventaja estrategica</h3>
        
    </div>
  )
}
