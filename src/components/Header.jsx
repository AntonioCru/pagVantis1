import React from 'react';
import styles from '../styles/StylesHeader.module.css';
import logo from '../img/vantislogo.png';
import { SubMenuHeader } from './SubMenuHeader';

export const Header = () => {
  return (
    <div className={styles.containerHeader}>
        <img src={logo} alt="Logo Vantis" width='190' height='60'/>
        <SubMenuHeader/>
    </div>
  )
}
