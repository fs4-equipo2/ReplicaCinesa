import React, { useRef, useEffect } from "react";
import { slidesTopMovies } from "./SliderData";
//Aux components
import { Slide } from "./Slide";
import { SliderNavButtons } from "./SliderNavButtons";
//Styles
import styles from "./SliderTopMovies.module.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// import required modules
import { Navigation } from "swiper/modules";

export const SliderTopMovies = () => {

  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.update();
    }
  });

  const changePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const changeNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className={styles.topSection}>
      <div className={styles.topTitle}>
        <h2>TOP PELÍCULAS</h2>
        <hr className={styles.underline} />
        <hr className={styles.underline} />
      </div>
      <div className={styles.sliderWrapper}>
        <Swiper
          loop={true}
          slidesPerView={4}
          spaceBetween={60}
          className={styles.swiperTopMovies}
          ref={swiperRef}
        >
          {slidesTopMovies.map((movie, index) => {
            return (
              <SwiperSlide key={index}>
                <Slide title={movie.title} imgSource={movie.imgPath} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className={styles.btnsWrapper}>
        <SliderNavButtons prevFunc={changePrev} nextFunc={changeNext} />
      </div>
    </div>
  );
};
