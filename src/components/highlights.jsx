import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { new_a, new_d, new_f, new_g, new_i } from '../assets';

const Highlight = () => {
  const image_list = [new_a, new_d, new_f, new_g, new_i];
  return (
    <>
      <div className='w-full xl:w-[800px] flex justify-center items-end overflow-hidden my-[10px] '>
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          className='-mt-[60px] hidden md:block lg:hidden xl:block'
          modules={[Pagination, Navigation, Autoplay]}
        >
          {image_list.map((image, index) => (
            <SwiperSlide
              key={index}
              className=' overflow-hidden rounded-[10px]'
            >
              <div className='oevrflow-hidden'>
                <img
                  src={image}
                  alt={index}
                  className='w-[400px] h-[220px] rounded-[10px] hover:scale-110 duration-300 object-cover'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          className='-mt-[60px] hidden lg:block xl:hidden'
          modules={[Pagination, Navigation, Autoplay]}
        >
          {image_list.map((image, index) => (
            <SwiperSlide
              key={index}
              className=' overflow-hidden rounded-[10px]'
            >
              <div className='oevrflow-hidden'>
                <img
                  src={image}
                  alt={index}
                  className='w-[400px] h-[220px] rounded-[10px] hover:scale-110 duration-300'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          className='-mt-[60px] block md:hidden'
          modules={[Pagination, Navigation, Autoplay]}
        >
          {image_list.map((image, index) => (
            <SwiperSlide
              key={index}
              className=' overflow-hidden rounded-[20px]'
            >
              <div className='overflow-hidden'>
                <img
                  src={image}
                  alt={index}
                  className='w-[400px] min-[320px]:h-[180px] min-[425px]:h-[220px] h-[220px] rounded-[20px] hover:scale-110 duration-300'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Highlight;
