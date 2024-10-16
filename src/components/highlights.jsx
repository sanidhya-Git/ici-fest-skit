import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



const Highlight = () => {
  const image_list = [
    // 'https://res.cloudinary.com/dm2pha7cn/image/upload/v1728638081/ici-fest-24/tpvxkni3jqindhpgxnhw.png',
    // 'https://res.cloudinary.com/dm2pha7cn/image/upload/v1728636254/ici-fest-24/ixdrtk4q0yfn9xdaud0o.jpg',
    'https://res.cloudinary.com/dm2pha7cn/image/upload/v1728632099/ici-fest-24/pjkbjksgcw6vdgsrr0ll.jpg',
    'https://res.cloudinary.com/dm2pha7cn/image/upload/v1728632093/ici-fest-24/ocfau0wcst35wx1wbpru.jpg',
    'https://res.cloudinary.com/dm2pha7cn/image/upload/v1728632090/ici-fest-24/lb11nmfbpl987x8kfosm.jpg',
    'https://res.cloudinary.com/dm2pha7cn/image/upload/v1728632090/ici-fest-24/f7s1gh112cldcesckxon.jpg',
    'https://res.cloudinary.com/dm2pha7cn/image/upload/v1728806945/ici-fest-24/f5kukhb4pwhn8m5gjfza.png',
    'https://res.cloudinary.com/dm2pha7cn/image/upload/v1728632090/ici-fest-24/vsshq6x2dpaq13bcickf.jpg',
    'https://res.cloudinary.com/dm2pha7cn/image/upload/v1728806945/ici-fest-24/zllvarfp5uhjuy1mr99t.png',
    'https://res.cloudinary.com/dm2pha7cn/image/upload/v1728806945/ici-fest-24/qn0l1iwigsl6zxxrhac4.png',
    'https://res.cloudinary.com/dm2pha7cn/image/upload/v1728632090/ici-fest-24/ycofwy9hmkpqvedo8khr.jpg',
  ];
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
