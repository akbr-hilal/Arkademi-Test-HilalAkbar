import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Autoplay, Pagination, Navigation } from 'swiper'

import ItemLg from '../assets/lg/carousel/1.png'
import ItemMd from '../assets/md/carousel/1.png'

function Carousel() {
  return (
    <div className='container'>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          {/* For >=LG */}
          <img src={ItemLg} alt="" className='d-none d-lg-block' /> 

          {/* For <=MD */} 
          <img src={ItemMd} alt='' className='d-md-block d-lg-none' />
        </SwiperSlide>
        <SwiperSlide>
          {/* For >=LG */}
          <img src={ItemLg} alt="" className='d-none d-lg-block' /> 

          {/* For <=MD */}
          <img src={ItemMd} alt='' className='d-md-block d-lg-none' />
        </SwiperSlide>
        <SwiperSlide>
          {/* For >=LG */}
          <img src={ItemLg} alt="" className='d-none d-lg-block' /> 

          {/* For <=MD */}
          <img src={ItemMd} alt='' className='d-md-block d-lg-none' />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Carousel