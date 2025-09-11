const Counter = () => {
  return (
    <>
      <div className='mt-[30px] md:mt-[50px] text-[30px] md:text-[36px] font-extrabold text-center'>
        <span>
          FEST{"'"}
          <span className='text-[#ff583e]'>24 </span>Stats
        </span>
      </div>

      <div className=' flex flex-wrap justify-evenly mb-[30px] mt-[40px]'>
        <div className='flex bg-[#e5e5e5]  rounded-[20px] py-[15px] px-[25px] text-left max-[320px]:min-w-[100px] min-w-[140px]'>
          <div>
            <div className=''>
              <span className='text-[24px] lg:text-[36px] font-extrabold text-[#ff583e] leading-none'>
                25+
              </span>
            </div>
            <div className=''>
              <span className='text-[16px] lg:text-[22px] font-semibold text-black leading-5  '>
                Events
              </span>
            </div>
          </div>
        </div>

        <div className='flex bg-[#e5e5e5]  rounded-[20px] py-[15px] px-[25px] text-left max-[320px]:min-w-[100px] min-w-[140px]'>
          <div>
            <div className=''>
              <span className='text-[24px] lg:text-[36px] font-extrabold text-[#ff583e] leading-none'>
                3400+
              </span>
            </div>
            <div className=''>
              <span className='text-[16px] lg:text-[22px] font-semibold text-black leading-5  '>
                Registration
              </span>
            </div>
          </div>
        </div>

        <div className='hidden md:flex bg-[#e5e5e5]  rounded-[20px] py-[15px] px-[25px]  min-w-[140px] '>
          <div className=''>
            <div className=''>
              <span className='text-[24px]  lg:text-[36px] font-extrabold text-[#ff583e] leading-none '>
                450+
              </span>
            </div>
            <div className=''>
              <span className='text-[16px] lg:text-[22px] font-semibold text-black leading-5  '>
                Teams
              </span>
            </div>
          </div>
        </div>

        <div className='flex  bg-[#e5e5e5] max-[320px]:mt-[20px]  mt-[20px] md:mt-0 rounded-[20px] py-[15px] px-[25px] text-left max-[320px]:min-w-[100px] min-w-[140px]'>
          <div>
            <div className=''>
              <span className='text-[24px] lg:text-[36px] font-extrabold text-[#ff583e] leading-none'>
                4000+
              </span>
            </div>
            <div className=''>
              <span className='text-[16px] lg:text-[22px] font-semibold text-black leading-5  '>
                Footfall
              </span>
            </div>
          </div>
        </div>

        <div className='flex  mt-[20px] sm:mt-0 bg-[#e5e5e5]  rounded-[20px] py-[15px] px-[25px] text-left max-[320px]:min-w-[100px] min-w-[140px]'>
          <div>
            <div className=''>
              <span className='text-[24px] lg:text-[36px] font-extrabold text-[#ff583e] leading-none'>
                120+
              </span>
            </div>
            <div className=''>
              <span className='text-[16px] lg:text-[22px] font-semibold text-black leading-5  '>
                Winners
              </span>
            </div>
          </div>
        </div>

        <div className='flex md:hidden  mt-[20px] sm:mt-0 bg-[#e5e5e5]  rounded-[20px] py-[15px] px-[25px] text-left'>
          <div>
            <div className=''>
              <span className='text-[24px] lg:text-[36px] font-extrabold text-[#ff583e] leading-none'>
                250+
              </span>
            </div>
            <div className=''>
              <span className='text-[16px] lg:text-[22px] font-semibold text-black leading-5  '>
                {' '}
                Teams
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
