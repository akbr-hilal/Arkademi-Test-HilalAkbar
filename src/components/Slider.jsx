import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper";

// Import Component
import CardComponent from './card/CardComponent';

function Slider() {
  return (
    <div>
      <Swiper
        style={{
          "--swiper-navigation-color": "#000",
        }}
        slidesPerView={2}
        spaceBetween={10}
        navigation={true}
        centeredSlides={false}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
            centeredSlides: true
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <CardComponent />
        </SwiperSlide>
        <SwiperSlide>
          <CardComponent />
        </SwiperSlide>
        <SwiperSlide>
          <CardComponent />
        </SwiperSlide>
        <SwiperSlide>
          <CardComponent />
        </SwiperSlide>
        <SwiperSlide>
          <CardComponent />
        </SwiperSlide>
        <SwiperSlide>
          <CardComponent />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Slider