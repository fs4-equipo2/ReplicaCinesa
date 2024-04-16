import React from "react";
import styles from "./SliderNavButtons.module.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const SliderNavButtons = ({ prevFunc, nextFunc}) => {

  return (
    <div className={styles.swiperBtns}>
      <div className={styles.btnsCont} >
        <div className={styles.btnIcon}>
          <IoIosArrowBack onClick={prevFunc} />
        </div>
      </div>
      <div className={styles.btnsCont} >
        <div className={styles.btnIcon}>
          <IoIosArrowForward onClick={nextFunc} />
        </div>
      </div>
    </div>
  );
};
