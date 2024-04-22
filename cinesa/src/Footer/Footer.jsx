import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerColumns}>
        <div className={styles.footerColumn}>
          <a href="/quienes-somos">
            <h3>Quienes somos</h3>
          </a>

          <ul>
            <li>
              <a href="/equipo">Trabaja con nosotros</a>
            </li>
            <li>
              <a href="/mision">Cinesa Business</a>
            </li>
            <li>
              <a href="/vision">Atención al cliente</a>
            </li>
            <li>
              <a href="/vision">Apoyo Institucional</a>
            </li>
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <a href="/eventos">
            <h3>Eventos</h3>
          </a>

          <ul>
            <li>
              <a href="/proximos">Cinesa LUXE</a>
            </li>
            <li>
              <a href="/pasados">Salas Premium</a>
            </li>
            <li>
              <a href="/pasados">Infantil y Colegios</a>
            </li>
            <li>
              <a href="/pasados">Ciclos</a>
            </li>
            <li>
              <a href="/pasados">Blog de Cinesa</a>
            </li>
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <a href="/aviso-legal">
            <h3>Aviso Legal</h3>
          </a>

          <ul>
            <li>
              <a href="/terminos-condiciones">Condiciones de compra</a>
            </li>
            <li>
              <a href="/politica-privacidad">
                Condiciones del programa UNLIMITED CARD
              </a>
            </li>
            <li>
              <a href="/politica-privacidad">Política de privacidad</a>
            </li>
            <li>
              <a href="/politica-privacidad">Política de Cookies</a>
            </li>
            <li>
              <a href="/politica-privacidad">
                Odeon Cinemas Group Statement on Modern Slavery
              </a>
            </li>
            <li>
              <a href="/politica-privacidad">
                Declaración de ODEON Cinemas Group sobre la Esclavitud Moderna
              </a>
            </li>
            <li>
              <a href="/politica-privacidad">
                Código de conducta y ética empresariales
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <a href="/apps">
            <h3>Apps</h3>
          </a>
          <ul>
            <li>
              <a href="/android">Descarga la app Móvil para Android</a>
            </li>
            <li>
              <a href="/ios">Descarga la app Móvil para Apple</a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.footerSocialMedia}>
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;
