import React from 'react';
import styles from './Slide.module.scss';

export const Slide = ({ title, imgSource }) => {
  return (
    <div className={styles.slideCont}>
        <div className={styles.text}>
        <h2>{title}</h2>
        <p>Compra</p>
        </div>
        <div className={styles.imgCont}>
        <img
          src={imgSource}
          alt={`Image from:  ${title}`}
        />
        </div>
    </div>
  )
}
