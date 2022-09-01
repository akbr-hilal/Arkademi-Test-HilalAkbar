import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper";

// Import asset
import Spesialis1 from '../assets/lg/spesialis/1.png'
import Spesialis2 from '../assets/lg/spesialis/2.png'
import Spesialis3 from '../assets/lg/spesialis/3.png'

export default function Spesialis() {
  return (
    <div className='container'>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Spesialis1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Spesialis2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Spesialis3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Spesialis1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Spesialis2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Spesialis3} alt="" />
        </SwiperSlide>
      </Swiper>
      <div className='my-3 text-center'>
        <button className='btn btn-outline-spesialis fw-bold'>Lihat Semua Spesialisasi</button>
      </div>
    </div>
  );
}