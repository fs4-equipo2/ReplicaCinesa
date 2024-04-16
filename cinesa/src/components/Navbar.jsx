import React from "react";
import styles from "./Navbar.module.scss"
import Tipografia from "./Tipografia";

function 
Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <a href="#"><img src="https://www.cinesa.es/media/rynf4t5q/logo-cinesa-blanco.png"/></a>
            </div>
            <ul className={styles.navLeft}> 
                <li><a href="#">Cines</a></li>
                <li><a href="#">Películas</a></li>
                <li><a href="#">Promociones</a></li>
                <li><a href="#">Experiencias</a></li>
                <li><a href="#">Programas</a></li>            
                <li><a href="#">Bonos</a></li>
            </ul>
            <ul className={styles.navRight}>
            <li><a href="#">Inicia sesión</a></li>
            <li><a href="#">Regístrate</a></li>
            </ul>
    </div>

    )
}

export default Navbar;