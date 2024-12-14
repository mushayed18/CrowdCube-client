import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import business from "../assets/business.jpg"
import coding from "../assets/coding.jpg"
import creative from "../assets/creative.jpg"
import donate from "../assets/donate.jpg"
import medical from "../assets/medical.jpg"
import startup from "../assets/startup.jpg"

const SwiperLayout = () => {
  return (
    <div className='w-full mx-auto h-[25rem] mt-6'>
      <Swiper
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
        className="mySwiper md:w-[90%] mx-auto"
      >
        <SwiperSlide>
          <img className='w-full h-[25rem] object-cover' src={business} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full h-[25rem] object-cover' src={coding} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full h-[25rem] object-cover' src={creative} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full h-[25rem] object-cover' src={donate} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full h-[25rem] object-cover' src={medical} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full h-[25rem] object-cover' src={startup} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperLayout;
