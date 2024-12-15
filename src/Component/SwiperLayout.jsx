import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import business from "../assets/business.jpg";
import coding from "../assets/coding.jpg";
import creative from "../assets/creative.jpg";
import donate from "../assets/donate.jpg";
import medical from "../assets/medical.jpg";
import startup from "../assets/startup.jpg";

const SwiperLayout = () => {
  return (
    <div className="w-full mx-auto h-[25rem] mt-16">
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
          <img
            className="w-full h-[25rem] object-cover"
            src={business}
            alt=""
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h2 className="text-white text-2xl md:text-4xl font-bold text-center px-4">
              <span className="text-my-red">Empowering Dreams,</span> One
              Contribution at a Time
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-[25rem] object-cover" src={coding} alt="" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h2 className="text-white text-2xl md:text-4xl font-bold text-center px-4">
              Funding the Future, <span className="text-my-red">Together</span>
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[25rem] object-cover"
            src={creative}
            alt=""
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h2 className="text-white text-2xl md:text-4xl font-bold text-center px-4">
            <span className="text-my-red">Your Vision,</span> Our Platform
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-[25rem] object-cover" src={donate} alt="" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h2 className="text-white text-2xl md:text-4xl font-bold text-center px-4">
              Small Contributions, <span className="text-my-red">Big Impact</span>
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-[25rem] object-cover" src={medical} alt="" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h2 className="text-white text-2xl md:text-4xl font-bold text-center px-4">
              A Platform for <span className="text-my-red">Change</span>
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-[25rem] object-cover" src={startup} alt="" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h2 className="text-white text-2xl md:text-4xl font-bold text-center px-4">
              Find<span className="text-my-red"> Inspire, Support, Transform</span> here
            </h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperLayout;
