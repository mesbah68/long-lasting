'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ChatIcon from '../icons/chat';
import TodoListIcon from '../icons/todo';
import BuilderIcon from '../icons/builder';

const CategorySlider = async () => {

  return (
    <div className="flex w-full mt-20">
      <Swiper
        slidesPerView={7}
        spaceBetween={5}
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
          <div className="flex flex-col items-center cursor-pointer border-2 border-transparent p-4 hover:border-2 hover:border-gray-200 hover:rounded-3xl">
            <ChatIcon width={30} height={30} />
            <div className='text-gray-600 py-2 text-base font-semibold'>Block edior</div>
            <div className="batch-outline">Planned</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center cursor-pointer border-2 border-transparent p-4 hover:border-2 hover:border-gray-200 hover:rounded-3xl">
            <ChatIcon width={30} height={30} />
            <div className='text-gray-600 py-2 text-base font-semibold'>AI copywriter</div>
            <div className="batch-outline">In Development</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center cursor-pointer border-2 border-transparent p-4 hover:border-2 hover:border-gray-200 hover:rounded-3xl">
            <ChatIcon width={30} height={30} />
            <div className='text-gray-600 py-2 text-base font-semibold'>Synced whiteboard</div>
            <div className="batch-outline">Planned</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center cursor-pointer border-2 border-transparent p-4 hover:border-2 hover:border-gray-200 hover:rounded-3xl">
            <ChatIcon width={30} height={30} />
            <div className='text-gray-600 py-2 text-base font-semibold'>Notion like editor</div>
            <div className="batch-outline">Launched</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center cursor-pointer border-2 border-transparent p-4 hover:border-2 hover:border-gray-200 hover:rounded-3xl">
            <ChatIcon width={30} height={30} />
            <div className='text-gray-600 py-2 text-base font-semibold'>Chat interface</div>
            <div className="batch-outline">Planned</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center cursor-pointer border-2 border-transparent p-4 hover:border-2 hover:border-gray-200 hover:rounded-3xl">
            <BuilderIcon width={30} height={30} />
            <div className='text-gray-600 py-2 text-base font-semibold'>Website builder</div>
            <div className="batch-outline">Planned</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center cursor-pointer border-2 border-transparent p-4 hover:border-2 hover:border-gray-200 hover:rounded-3xl">
            <TodoListIcon width={30} height={30} />
            <div className='text-gray-600 py-2 text-base font-semibold'>Collaborative todo list</div>
            <div className="batch-outline">Planned</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center cursor-pointer border-2 border-transparent p-4 hover:border-2 hover:border-gray-200 hover:rounded-3xl">
            <ChatIcon width={30} height={30} />
            <div className='text-gray-600 py-2 text-base font-semibold'>Block edior</div>
            <div className="batch-outline">Planned</div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>

  );
};
export default CategorySlider;
