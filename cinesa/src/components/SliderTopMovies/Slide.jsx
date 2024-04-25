import React from "react";
import styles from "./Slide.module.scss";
import { FiBookmark } from "react-icons/fi";
import { IoMdPlay } from "react-icons/io";

export const Slide = ({ title, imgSource }) => {
  return (
    <div className={styles.slideCont}>
      <div className={styles.imgCont}>
        <div className={styles.playCont}>
          <IoMdPlay className={styles.playIcon} />
        </div>
        <div className={styles.bookCont}>
          <FiBookmark className={styles.bookIcon} />
        </div>
        <img src={imgSource} alt={`Image from:  ${title}`} />
      </div>
      <div className={styles.text}>
        <h2>{title.toUpperCase()}</h2>
      </div>
    </div>
  );
};
