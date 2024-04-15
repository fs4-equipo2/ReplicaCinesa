import React, { useState, useEffect } from "react";
import styles from "./SliderTopMovies.module.scss";
import { slidesTopMovies } from "./SliderData";
import { Slide } from "./Slide";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const SliderTopMovies = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedSlide, setSelectedSlide] = useState(slidesTopMovies[0]);
  const [pagination, setPagination] = useState(selectedIndex);

  const selectNewImg = (index, slidesTopMovies, next) => {
    const condition = next
      ? selectedIndex < slidesTopMovies.length - 1
      : selectedIndex > 0;
    const nextIndex = next
      ? condition
        ? selectedIndex + 1
        : 0
      : condition
      ? selectedIndex - 1
      : slidesTopMovies.length - 1;
    setSelectedSlide(slidesTopMovies[nextIndex]);
    setSelectedIndex(nextIndex);
    setPagination(nextIndex);
  };

  const prevSlide = () => {
    selectNewImg(selectedIndex, slidesTopMovies, false);
  };

  const nextSlide = () => {
    selectNewImg(selectedIndex, slidesTopMovies, true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      selectNewImg(selectedSlide, slidesTopMovies, true);
    }, 3500);
    return () => clearInterval(interval);
  }, [selectedSlide]);

  return (
    <>
      <div className={styles.swiperWrapper}>
        <div className={styles.swiperTop}>
          <div className={styles.swiperSlides}>
            <div></div>
            <div>
              <Slide
                title={selectedSlide.title}
                imgSource={selectedSlide.imgPath}
              />
            </div>
            <div></div>
          </div>
          <div className={styles.swiperBtns}>
            <div className={styles.btnsCont} onClick={prevSlide}>
              <div className={styles.btnIcon}>
                <IoIosArrowBack />
              </div>
            </div>
            <div className={styles.btnsCont} onClick={nextSlide}>
              <div className={styles.btnIcon}>
                <IoIosArrowForward />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.swiperBottom}>
          {slidesTopMovies.map((movie, index) => {
            return (
              <div
                key={movie.title}
                className={pagination !== index ? styles.swiperPagination : `${styles.swiperPagination} ${styles.selected}`}
                onClick={() => {
                  setSelectedIndex(index);
                  setSelectedSlide(movie);
                  setPagination(index);
                }}
              ></div>
            );
          })}
        </div>
      </div>
    </>
  );
};
