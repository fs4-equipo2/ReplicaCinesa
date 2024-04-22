import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.footerColumns}>
      <div className={styles.footerColumn}>
        <h3>Quienes somos</h3>
        <p>Contenido de la columna 1</p>
      </div>
      <div className={styles.footerColumn}>
        <h3>Eventos</h3>
        <p>Contenido de la columna 2</p>
      </div>
      <div className={styles.footerColumn}>
        <h3>Aviso Legal</h3>
        <p>Contenido de la columna 3</p>
      </div>
      <div className={styles.footerColumn}>
        <h3>Apps</h3>
        <p>Contenido de la columna 4</p>
      </div>
      </div>
    
      <div className={styles.footerSocialMedia}>
     
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">Instagram</a>
      </div>
    </footer>
  );
}

export default Footer;
