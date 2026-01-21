import React from 'react';
import slider1 from '../../assets/artifySlide1.jpg';
import slider2 from '../../assets/artifySlide2.jpg';
import slider3 from '../../assets/artifySlide3.jpg';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";


const Slider = () => {
    return (
        <div className=''>
        <Swiper navigation={true} loop={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide><img className='w-full h-[500px] object-cover' src={slider1} alt="" /></SwiperSlide>
            <SwiperSlide><img className='w-full h-[500px] object-cover' src={slider2} alt="" /></SwiperSlide>
            <SwiperSlide><img className='w-full h-[500px] object-cover' src={slider3} alt="" /></SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Slider;