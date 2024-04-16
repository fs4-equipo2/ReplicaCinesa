import React from "react";
import styles from "./Slide.module.scss";

export const Slide = ({ title, imgSource }) => {
  return (
    <div className={styles.slideCont}>
      <div className={styles.imgCont}>
        <img src={imgSource} alt={`Image from:  ${title}`} />
      </div>
      <div className={styles.text}>
        <h2>{title.toUpperCase()}</h2>
      </div>
    </div>
  );
};
