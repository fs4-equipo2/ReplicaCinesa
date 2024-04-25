import React, { useRef, useState, useEffect } from "react";
import { slidesTopMovies } from "./SliderData";
import { Slide } from "./Slide";
import { SliderNavButtons } from "./SliderNavButtons";
import styles from "./SliderTopMovies.module.scss";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip } from "swiper/modules";

export const SliderTopMovies = () => {
  const swiperRef = useRef(null);
  const [isReturning, setIsReturning] = useState(false);
  const [isEndReached, setIsEndReached] = useState(false);

  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;
    swiperInstance.on("reachEnd", handleReachEnd);
    swiperInstance.on("fromEdge", handleFromEdge);
    return () => {
      swiperInstance.off("reachEnd", handleReachEnd);
      swiperInstance.off("fromEdge", handleFromEdge);
    };
  }, []);

  const handleReachEnd = () => {
    setIsEndReached(true);
  };

  const handleFromEdge = () => {
    setIsEndReached(false);
  };

  const changePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiperInstance = swiperRef.current.swiper;
      if (swiperInstance.isBeginning) {
        setIsReturning(true);
        setTimeout(() => {
          setIsReturning(false);
          swiperInstance.slideTo(swiperInstance.slides.length - 1, 1000, false);
          swiperInstance.loop = false;
        }, 1000);
      } else {
        swiperInstance.slidePrev();
        if (swiperInstance.isEnd) {
          swiperInstance.loop = true;
        }
      }
    }
  };

  const changeNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiperInstance = swiperRef.current.swiper;
      if (isEndReached && !isReturning) {
        setIsReturning(true);
        setTimeout(() => {
          setIsReturning(false);
          swiperInstance.slideTo(0, 1000, false);
          swiperInstance.loop = true;
        }, 1000);
      } else {
        setIsReturning(false);
        swiperInstance.slideNext();
      }
    }
  };

  return (
    <div className={styles.topSection}>
      <div className={styles.topTitle}>
        <h2 className={styles.mainText}>TOP PELÍCULAS</h2>
        <hr className={styles.underline} />
        <hr className={styles.underline} />
      </div>
      <div className={styles.sliderWrapper}>
        <Swiper
          modules={[EffectFlip]}
          loop={true}
          slidesPerView={4}
          spaceBetween={30}
          className={`${styles.swiperTopMovies} ${
            isReturning ? styles.returning : ""
          }`}
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