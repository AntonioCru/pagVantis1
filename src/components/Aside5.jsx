import React from "react";
import styles from "../styles/StylesAside5.module.css";
import fintech from "../img/fintech.jpeg";

export const Aside5 = () => {
  return (
    <div className={styles.containerAside5}>
      <img className={styles.imgAside5} src={fintech} alt="Fintech" />
      <h1 className={styles.titleAside5}>FINTECH</h1>
      <p className={styles.p1Aside5}>
        Servicios financieros utilizando la tecnología de manera eficiente,
        ágil, cómoda y confiable.
      </p>
      <p className={styles.p2Aside5}>
        La aceleración de la transformación digital en el sector bancario aporta
        importantes beneficios en términos de accesibilidad, gestión, eficiencia
        y sobre todo seguridad. 
       <br /><br /> El entorno mas reciente en aplicaciones web &
        apps móviles para:
        <ul>
          <li>Pagos y transacciones</li>
          <li>Banca online </li>
          <li>Negociación de mercados </li>
          <li>Gestión de materias primas </li>
          <li>Financiación colectiva</li>
          <li>Desarrollo de sistemas de seguridad financiera </li>
          <li>Asesoramiento online </li>
          <li>Monederos digitales</li>
          <li>Y el resto de tus innovadoras ideas…</li>
        </ul>
      </p>
      <button className={styles.buttonAside5}>Contacta a un experto en FINTECH</button>
    </div>
  );
};
