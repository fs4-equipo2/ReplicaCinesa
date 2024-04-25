import React from "react";
import styles from "./SliderNavButtons.module.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const SliderNavButtons = ({ prevFunc, nextFunc}) => {

  return (
    <div className={styles.swiperBtns}>
      <div className={styles.btnsCont} >
        <div className={styles.btnIconCont}>
          <IoIosArrowBack className={styles.arrowIcon} onClick={prevFunc} />
        </div>
      </div>
      <div className={styles.btnsCont} >
        <div className={styles.btnIconCont}>
          <IoIosArrowForward className={styles.arrowIcon} onClick={nextFunc} />
        </div>
      </div>
    </div>
  );
};
