import React from "react";

// Estilos
import styles from "./SwiperMain.module.scss";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination,Autoplay } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'


export const SwiperMain = ({ swiperInfo }) => {
  return (
    <div className={styles.swiperMain}>
      <Swiper
        loop={true}
        slidesPerView={1}
        centeredSlides={true}
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        // autoplay={{ delay: 3000 }}
      >
        {swiperInfo &&
          swiperInfo.map((data, index) => (
            <SwiperSlide key={index} className={styles.swiperSlide}>
              <div className={styles.imgCont}>
                <img src={data.imgPath} alt={data.title} />
              </div>
              <div className={styles.slideText}>
                <p>{data.title}</p>
                <a role="button">{data.boton}</a>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};
