import React from 'react';
import styles from '../styles/StylesAside7.module.css';
import img from '../img/quality.webp';

export const Aside7 = () => {
  return (
    <div className={styles.containerAside7}>
        <img className={styles.imgAside7} src={img} alt="QUALITY ASSURANCE" />
        <h2 className={styles.titleAside7}>QUALITY ASSURANCE</h2>
        <strong className={styles.p1Aside7}><p >Te ayudamos a garantizar el cumplimiento de todas las especificaciones contractuales, la normativa legal y las normas de calidad.</p></strong>
        <p className={styles.p2Aside7}>Evaluamos la calidad mediante pruebas funcionales, no funcionales y automatizadas que aseguren la excelencia en cada uno de los procesos del producto.</p>
        <h5 className={styles.sTitle1Aside7}>Dale Seguimiento a todo</h5>
        <p className={styles.p3Aside7}>¿Necesitas gestionar los requisitos, los defectos y los casos de prueba con una trazabilidad completa e informes en tiempo real? Te ayudamos de manera, sencilla, flexible y rápida.</p>
        <h5 className={styles.sTitle2Aside7}>Visualiza todo</h5>
        <p className={styles.p4Aside7}>Seguimiento de defectos y resolución de impedimentos. Los informes detallados y personalizables te permiten comprobar la salud de sus proyectos y de tus pruebas en un vistazo.</p>
        <button className={styles.btnAside7}>Contacta a un experto en QA</button>
    </div>
  )
}
