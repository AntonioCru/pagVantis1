import React from 'react';
import img from '../img/desarrollosoft.jpeg';
import styles from '../styles/StylesAside6.module.css';

export const Aside6 = () => {
  return (
    <div className={styles.containerAside6}>
        <h2 className={styles.titleAside6}>DESARROLLO DE SOFTWARE</h2>
        <p className={styles.pa1Aside6}>Todo se reduce a la forma en que administras tu información. Tiene que estar disponible al instante y ser cuidadosamente custodiada.</p>
        <p className={styles.pa2Aside6}>Tu inteligencia comercial depende de la información que puedes recopilar y de tu capacidad para manejarlos e interpretarlos de manera efectiva.
        <br />
        <br />
        Haciendo un buen uso de esos datos durante el ciclo de vida de tu industria, puedes evitar pérdidas y maximizar tu productividad. Nosotros te ayudamos a hacerlo de manera sencilla, accesible y segura.</p>
        <button className={styles.btnAside6}>Contacta a un eperto en TI</button>
        <img className={styles.imgAside6} src={img} alt="Desarrolo de Software" />
    </div>
  )
}
