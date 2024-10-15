/* eslint-disable no-unused-vars */

import { bg_video_desktop, bg_video_mobile } from '../assets';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <>
      <div className='relative flex items-center justify-center'>
        <video
          playsInline
          autoPlay
          muted
          className='-mt-[250px] w-full h-full hidden md:block'
        >
          <source
            src='https://res.cloudinary.com/dm2pha7cn/video/upload/v1728706723/ici-fest-24/scc6bisgml9cdnojwrqh.mp4'
            type='video/mp4'
          />
        </video>
        <div className='flex flex-col items-center justify-center absolute mt-[250px] animate-bounce'>
          {' '}
          <div>
            <span className='text-[#1a1a1a] font-extrabold text-xl'>
              Scroll Down
            </span>{' '}
          </div>
          <div>
            <svg
              className='w-8 h-8 text-violet-500'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='5'
              viewBox='0 0 24 24'
              stroke='#ff583e'
            >
              <path d='M19 14l-7 7m0 0l-7-7m7 7V3'></path>
            </svg>
          </div>
        </div>
      </div>

      <div className='flex items-center justify-center relative'>
        <video
          playsInline
          autoPlay
          muted
          className='-mt-[40%] w-full h-full block md:hidden'
        >
          <source
            src='https://res.cloudinary.com/dm2pha7cn/video/upload/v1728706816/ici-fest-24/j8ssacfea5dvudpwb21m.mp4'
            type='video/mp4'
          />
        </video>
        {/* <div className='absolute -mt-[400px] md:hidden'>
          <Link to='/events'>
            <button className=' bg-[#ff583e] text-white text-xl font-bold py-[9px] px-[18px] lg:py-[11px] lg:px-[20px] rounded-[8px] text-[12px] lg:text-[14px] self-center'>
              Register Now
            </button>
          </Link>
        </div> */}
        <div className='flex flex-col items-center justify-center absolute mt-[300px] animate-bounce md:hidden '>
          {' '}
          <div>
            <span className='text-[#1a1a1a] font-extrabold text-xl'>
              Scroll Down
            </span>{' '}
          </div>
          <div>
            <svg
              className='w-8 h-8 text-violet-500'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='5'
              viewBox='0 0 24 24'
              stroke='#ff583e'
            >
              <path d='M19 14l-7 7m0 0l-7-7m7 7V3'></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
