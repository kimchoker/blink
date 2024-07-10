import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Cards from '../pages/Card'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './styles.css';

// import required modules
import { EffectCards } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
				style={{ borderRadius:'10px' }}
      >
        <SwiperSlide style={{ overflow: 'visible', borderRadius:'10px' }}><Cards/></SwiperSlide>
        <SwiperSlide style={{ overflow: 'visible', borderRadius:'10px' }}><Cards/></SwiperSlide>
        <SwiperSlide style={{ overflow: 'visible', borderRadius:'10px' }}><Cards/></SwiperSlide>
        <SwiperSlide style={{ overflow: 'visible', borderRadius:'10px' }}><Cards/></SwiperSlide>
        <SwiperSlide style={{ overflow: 'visible', borderRadius:'10px' }}><Cards/></SwiperSlide>
        <SwiperSlide style={{ overflow: 'visible', borderRadius:'10px' }}><Cards/></SwiperSlide> 
        <SwiperSlide style={{ overflow: 'visible', borderRadius:'10px' }}><Cards/></SwiperSlide>
        <SwiperSlide style={{ overflow: 'visible', borderRadius:'10px' }}><Cards/></SwiperSlide>
        <SwiperSlide style={{ overflow: 'visible', borderRadius:'10px' }}><Cards/></SwiperSlide>
      </Swiper>
    </>
  );
}
