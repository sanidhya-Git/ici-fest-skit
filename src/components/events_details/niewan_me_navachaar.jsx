import React, { useState } from 'react';

const NIRMAN_SE_NAVACHAAR = () => {
  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  return (
    <div>
      <br />
      <br />
      <br />

      <div className='flex justify-center'>
        <div className=' mx-[10px] md:mx-[60px] lg:mx-[200px] w-full'>
          <div className='bg-[#ffb4a7] px-[20px] md:px-[40px] py-[30px] rounded-[30px] text-center'>
            <div>
              <span className='font-extrabold text-[38px] md:text-[50px] uppercase'>
                निर्माण मे नवाचार
              </span>
            </div>
            <div className='mb-[10px]'>
              <span className='font-bold text-[18px] uppercase'>
                The Era of Sustainability
              </span>
            </div>
            <div className='flex justify-center'>
              <div className='w-[100px] h-[4px] bg-[#ff583e]  ' />
            </div>
            <div className='mt-[15px] font-bold  text-[16px] md:text-[18px]'>
              <div>
                <span>
                  Date - 08<sup>th </sup>November 2024
                </span>
              </div>
              <div className='mt-[10px]'>
                <span>Time - 11:00 AM to 01:00 PM</span>
              </div>
              <div className='mt-[10px]'>
                <span>Venue - Gyan Mandir Auditorium</span>
              </div>
            </div>
            <div className='font-bold text-[22px] md:text-[28px] leading-none  mt-[10px] '>
              <span>Registration Fee - free for all</span>
            </div>
            {/* <div className='mt-[10px]'>
              <span className='font-semibold text-[18px]'>
                All the teams must have 4 members each.
              </span>
            </div> */}
            <a href='https://forms.gle/ack6FNuTy4PbQa2U8'>
              <div className='mt-[10px] font-semibold'>
                <button className='bg-[#ff583e] hover:bg-white text-white hover:text-[#ff583e] duration-300 hover:ring-1 ring-[#ff583e] pt-[9px] pb-[9px] pl-[18px] pr-[18px] lg:pt-[11px] lg:pb-[11px] lg:pl-[20px] lg:pr-[20px] rounded-[8px] text-[14px] lg:text-[16px]  self-center'>
                  Register Now
                </button>
              </div>
            </a>
            {/* <div className='mt-[10px]'>
              <span>
                <b>
                  {' '}
                  For more details - Akshita Agarwal:{' '}
                  <a
                    href='https://wa.me/8824948314'
                    target='blank'
                    className='underline'
                  >
                    {' '}
                    +91 8824948314
                  </a>
                </b>
              </span>
            </div> */}
          </div>
        </div>
      </div>

      <div className='flex justify-center mt-[30px] md:mt-[50px]'>
        <div>
          {/* <div className='flex flex-wrap justify-center  gap-3 md:gap-5'>
            <div>
              <button
                className={`${
                  activeButton === 0 ? 'btn_active' : 'btn_deactive'
                } 'btn_active' : 'btn_deactive'} tracking-wide px-[35px] py-[18px] btn_active font-extrabold text-[14px] rounded-full `}
                onClick={() => handleButtonClick(0)}
              >
                ABOUT
              </button>
            </div>

            <div>
              <button
                className={`${
                  activeButton === 1 ? 'btn_active' : 'btn_deactive'
                } 'btn_active' : 'btn_deactive'} tracking-wide px-[35px] py-[18px] btn_active font-extrabold text-[14px] rounded-full `}
                onClick={() => handleButtonClick(1)}
              >
                STRUCTURE
              </button>
            </div>

            <div>
              <button
                className={`${
                  activeButton === 2 ? 'btn_active' : 'btn_deactive'
                } 'btn_active' : 'btn_deactive'} tracking-wide px-[35px] py-[18px] btn_active font-extrabold text-[14px] rounded-full `}
                onClick={() => handleButtonClick(2)}
              >
                JUDGEMENT CRITERIA
              </button>
            </div>
          </div> */}

          {/* <div className='flex justify-center mt-[20px]'>
            <div className={activeButton === 0 ? 'active-div' : 'deactive-div'}>
              <div className='text-center  mb-[50px] font-semibold'>
                <div className=' mb-[10px] '>
                  <span className='font-bold  text-[20px] underline  '>
                    PROBLEM STATEMENT
                  </span>
                </div>
                <div className='mx-[20px] md:mx-[120px] xl:mx-[220px] '>
                  <span className='text-[17px] '>
                    This event focusing on crafting excellence out of waste
                    materials. This event seeks to redefine how waste is
                    perceived and utilized, paving the way for a greener and
                    more responsible future in engineering.
                  </span>
                </div>
              </div>

              <div className='text-center  mb-[50px]'>
                <div className=' mb-[10px] underline'>
                  <span className='font-bold  text-[20px]'>PARTICIPATION</span>
                </div>
                <div>
                  <span className='font-semibold text-[17px]'>
                    A team should consist of only of 2 participants.
                  </span>
                </div>
              </div>

              <div className='  mb-[50px] font-semibold'>
                <div className=' mb-[10px] text-center '>
                  <span className='font-bold  text-[20px] underline  '>
                    RULES
                  </span>
                </div>
                <div className='mx-[20px] md:mx-[120px] xl:mx-[220px] mt-[10px]'>
                  <span>
                    1. Participant are suppose to bring materials by themselfs.
                    Waste materials could be anything like tetra packs, bottles,
                    newspaper, old utensils, jute materials or any second hand
                    items that otherwise would be thrown away.
                  </span>
                </div>

                <div className='mx-[20px] md:mx-[120px] xl:mx-[220px] mt-[10px]'>
                  <span>
                    2. The item would be rejected if not found to be a waste
                    product or second hand item.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${
              activeButton === 1 ? 'active-div' : 'deactive-div'
            } text-[18px] `}
          >
            <div className='text-center'>
              <span className='font-bold  text-[18px] '>
                The event will be conducted in <span> 2 rounds</span>
              </span>
            </div>
            <div className='flex justify-center mt-[10px] mx-[10px] text-left md:text-center text-[17px]'>
              <div>
                <div>
                  <span className='font-bold'>
                    Round 1 - Making the Structure
                  </span>
                </div>
                <div>
                  <span>
                    Team will be given <b>1 hr 30 minutes </b>to mould their
                    structures
                  </span>
                </div>

                <div className='mt-[10px] '>
                  <span className='font-bold'>
                    Round 2 - Judging the Structure
                  </span>
                </div>
                <div className='mx-[0px] md:mx-[120px] xl:mx-[220px] '>
                  <span>
                    The structure will be then judged based on{' '}
                    <span className='font-bold'>
                      creativity, utilization of resources, artistic composition
                      & design, ecofriendly rating utility of the product and
                      overall presentation
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${
              activeButton === 2 ? 'active-div' : 'deactive-div'
            } mx-[20px]`}
          >
            <div className='text-center mb-[10px]'>
              <span className='font-bold text-[20px] underline'>
                JUDGING CRITERIA
              </span>
            </div>
            <div className='flex justify-center text-[17px] text-center font-semibold'>
              <div>
                <div>
                  <span>
                    Participants will be judged on creativity, utilization of
                    resources, artistic composition & design, ecofriendly rating
                    utility of the product and overall presentation.
                  </span>
                </div>
              </div>
            </div>
          </div> */}
          <div className='text-center  mb-[50px] font-semibold'>
            <div className=' mb-[10px] '>
              <span className='font-bold  text-[20px] underline  '>About</span>
            </div>
            <div className='mx-[20px] md:mx-[120px] xl:mx-[220px] '>
              <span className='text-[17px] '>
                Explore cutting-edge topics like energy-efficient techniques,
                green construction, and advanced engineering technology
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NIRMAN_SE_NAVACHAAR;
