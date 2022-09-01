import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper";

function SpecialPromo() {
  return (
    <div className='container'>
      <div>
        <h4 className='m-0 p-0 fw-bold mb-3'>Promo Special Untukmu</h4>
      </div>
      <Swiper
        style={{
          "--swiper-navigation-color": "#000",
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
          <div className='specialPromo1'></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='specialPromo2'></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='specialPromo3'></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='specialPromo1'></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='specialPromo2'></div>          
        </SwiperSlide>
        <SwiperSlide>
          <div className='specialPromo3'></div>          
        </SwiperSlide>
      </Swiper>

    </div>
  )
}

export default SpecialPromo