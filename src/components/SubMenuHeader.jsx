import React from 'react';
import styles from '../styles/StylesSubMenuHeader.module.css';
import { SubMenuSolutionsTi } from './SubMenuSolutionsTi';

export const SubMenuHeader = () => {

const aux = ()=>{
    console.log('aqui');
}

  return (
    <div className={styles.mainContent}>
        <ul className={styles.list}>
            <li className={styles.listItem}><span onMouseOver={(e)=>{ }}>Soluciones TI</span></li>
            <li className={styles.listItem}><span>Sobre Nosotros</span></li>
            <li className={styles.listItem}><span>Contactanos</span></li>
            <button className={styles.buttonHeader}>Conversemos</button>
                <SubMenuSolutionsTi/>
        </ul>
        
    </div>
  )
}
