import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper";

import { dataTestimonial } from '../data/dataTestimonial'
import CardTestimonial from './card/CardTestimonial';




function Testimonial() {
  return (
    <div className='container mt-5'>
      <div className="py-5">
        <h1 className="fw-bold text-muted text-center m-0 p-0">Testimoni</h1>
      </div>
      <Swiper
        style={{
          "--swiper-navigation-color": "#000",
        }}
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        centeredSlides={false}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
            centeredSlides: true
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      > 
        {dataTestimonial.map(item => (
          <SwiperSlide className='rounded'>
            <CardTestimonial item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      
    </div>
  )
}

export default Testimonial