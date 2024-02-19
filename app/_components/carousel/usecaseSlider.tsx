'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const UsecaseSlider = async () => {

  return (
    <div className="flex items-center justify-center w-[50%] h-auto">
      <Swiper
        slidesPerView={1}
        effect='fade'
        loop={true}
        autoplay={{
          delay: 2000
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex flex-col items-center cursor-pointer w-[50px]">
            <img src="/images/website-builder.png" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center cursor-pointer">
            <img src="/images/website-builder.png" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center cursor-pointer">
            <img src="/images/website-builder.png" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center cursor-pointer">
            <img src="/images/website-builder.png" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center cursor-pointer">
            <img src="/images/website-builder.png" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center cursor-pointer">
            <img src="/images/website-builder.png" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center cursor-pointer">
            <img src="/images/website-builder.png" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center cursor-pointer">
            <img src="/images/website-builder.png" />
          </div>
        </SwiperSlide>
      </Swiper>
      <div className='flex items-center justify-center absolute top-auto bottom-auto left-auto right-auto'>
        <div className="relative">
          <img
            src="/images/gradient-purple.png"
            alt="Background Image"
            className="object-cover max-w-7xl z-1"
            draggable="false"
            style={{ filter: "blue(10px)", width: "120vw" }}
          />
        </div>
      </div>
    </div>

  );
};
export default UsecaseSlider;
