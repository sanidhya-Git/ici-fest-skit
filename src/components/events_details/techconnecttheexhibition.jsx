import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Exhibition = () => {
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
                TechConnect: The Exhibition
              </span>
            </div>
            <div className='flex justify-center'>
              <div className='w-[100px] h-[4px] bg-[#ff583e]' />
            </div>
            <div className='mt-[15px] font-bold  text-[16px] md:text-[18px]'>
              <div>
                <span>
                  Date - 9<sup>th </sup>November 2024
                </span>
              </div>
              <div>
                <span>Time - 09:00 AM - 12:00 NOON</span>
              </div>
              <div>
                <span>Venue - Ground</span>
              </div>
            </div>
            <div className='font-bold text-[22px] md:text-[28px] leading-none mt-[10px]'>
              <span>Registration Fee - Free for all teams</span>
            </div>
            <div className='mt-[10px]'>
              <span className='font-semibold text-[18px]'>
                Teams of 2-4 members from undergraduate and postgraduate
                programs.
              </span>
            </div>
            <a href='https://erp.skit.ac.in/register/r/techconnect'>
              <div className='mt-[10px] font-semibold'>
                <button className='bg-[#ff583e] hover:bg-white text-white hover:text-[#ff583e] duration-300 hover:ring-1 ring-[#ff583e] pt-[9px] pb-[9px] pl-[18px] pr-[18px] lg:pt-[11px] lg:pb-[11px] lg:pl-[20px] lg:pr-[20px] rounded-[8px] text-[14px] lg:text-[16px] self-center'>
                  Register Now
                </button>
              </div>
            </a>
            <div className='mt-[10px]'>
              <span>
                <b>
                  For more details - Gaurav Gupta:{' '}
                  <a
                    href='https://wa.me/7062878958'
                    target='blank'
                    className='underline'
                  >
                    +91 7062878958
                  </a>
                </b>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-center mt-[30px] md:mt-[50px]'>
        <div>
          <div className='flex flex-wrap justify-center gap-3 md:gap-5'>
            <div>
              <button
                className={`${
                  activeButton === 0 ? 'btn_active' : 'btn_deactive'
                } tracking-wide px-[35px] py-[18px] font-extrabold text-[14px] rounded-full`}
                onClick={() => handleButtonClick(0)}
              >
                ABOUT
              </button>
            </div>

            <div>
              <button
                className={`${
                  activeButton === 1 ? 'btn_active' : 'btn_deactive'
                } tracking-wide px-[35px] py-[18px] font-extrabold text-[14px] rounded-full`}
                onClick={() => handleButtonClick(1)}
              >
                STRUCTURE
              </button>
            </div>

            <div>
              <button
                className={`${
                  activeButton === 2 ? 'btn_active' : 'btn_deactive'
                } tracking-wide px-[35px] py-[18px] font-extrabold text-[14px] rounded-full`}
                onClick={() => handleButtonClick(2)}
              >
                JUDGEMENT CRITERIA
              </button>
            </div>
          </div>

          <div className='flex justify-center mt-[20px]'>
            <div className={activeButton === 0 ? 'active-div' : 'deactive-div'}>
              <div className='text-center mb-[50px]'>
                <div className='mb-[10px] underline'>
                  <span className='font-bold text-[20px]'>
                    EVENT DESCRIPTION
                  </span>
                </div>
                <div className='mx-[20px] md:mx-[120px] xl:mx-[220px]'>
                  <span className='text-[17px] font-semibold'>
                    The exhibition provides a platform for students to showcase
                    their innovative projects across various domains like smart
                    cities, healthcare, agriculture, and automation. Teams will
                    present solutions to real-world problems and demonstrate how
                    their technology can be applied to solve societal
                    challenges.
                  </span>
                </div>
              </div>
              <div className='text-center mb-[50px]'>
                <div className='mb-[10px] underline'>
                  <span className='font-bold text-[20px]'>PARTICIPATION</span>
                </div>
                <div>
                  <span className='font-semibold text-[17px]'>
                    Open to undergraduate and postgraduate students. Teams must
                    have 2-4 members.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`${
              activeButton === 1 ? 'active-div' : 'deactive-div'
            } text-[18px]`}
          >
            <div className='text-center'>
              <span>
                Each team will be allocated a booth/station to set up and
                demonstrate their project. Teams must present their solution to
                the audience and judges, explaining the problem addressed, the
                technologies used, and showcasing the working of the project.
              </span>
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
                    Projects will be judged on Innovation, Technical
                    Feasibility, Practicality, Presentation, and Team
                    Collaboration. Points will be distributed based on
                    creativity, technical complexity, real-world impact, and
                    teamwork.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exhibition;
