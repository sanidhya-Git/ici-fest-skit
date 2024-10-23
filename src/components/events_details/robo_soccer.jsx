import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ROBO_SOCCER = () => {
  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  return (
    <div className='w-full min-h-screen'>
      <br />
      <br />
      <br />

      <div className='flex justify-center'>
        <div className='mx-[10px] md:mx-[60px] lg:mx-[200px] w-full'>
          <div className='bg-[#ffb4a7] px-[20px] md:px-[40px] py-[30px] rounded-[30px] text-center'>
            <div>
              <span className='font-extrabold text-[38px] md:text-[50px]'>
                Robo Soccer
              </span>
            </div>
            <div className='flex justify-center'>
              <div className='w-[100px] h-[4px] bg-[#ff583e]' />
            </div>
            <div className='mt-[15px] font-bold text-[16px] md:text-[18px]'>
              <div>
                <span>
                  Date - 9<sup>th</sup> November 2024
                </span>
              </div>
              <div>
                <span>Time - 9:00 AM - 11:00 AM</span>
              </div>
              <div>
                <span>Venue - Front Side, Civil Block</span>
              </div>
            </div>
            <div className='font-bold text-[22px] md:text-[28px] leading-none mt-[10px] md:mt-0'>
              <span>Registration Fee - ₹100 per individual</span>
            </div>
            <Link
              to={`https://erp.skit.ac.in/register/r/grab_and_go`}
              target='_blank'
            >
              <div className='mt-[10px] font-semibold'>
                <button className='bg-[#ff583e] hover:bg-white text-white hover:text-[#ff583e] duration-300 hover:ring-1 ring-[#ff583e] pt-[9px] pb-[9px] pl-[18px] pr-[18px] lg:pt-[11px] lg:pb-[11px] lg:pl-[20px] lg:pr-[20px] rounded-[8px] text-[14px] lg:text-[16px]'>
                  Register Now
                </button>
              </div>
            </Link>
            <div className='mt-[10px]'>
              <span>
                <b>
                  For more details - Utkarsh Jindal{' '}
                  <a target='_blank' className='underline'>
                    +91 9468543620
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
                } tracking-wide px-[35px] py-[18px] btn_active font-extrabold text-[14px] rounded-full`}
                onClick={() => handleButtonClick(0)}
              >
                ABOUT
              </button>
            </div>

            <div>
              <button
                className={`${
                  activeButton === 1 ? 'btn_active' : 'btn_deactive'
                } tracking-wide px-[35px] py-[18px] btn_active font-extrabold text-[14px] rounded-full`}
                onClick={() => handleButtonClick(1)}
              >
                STRUCTURE
              </button>
            </div>

            <div>
              <button
                className={`${
                  activeButton === 2 ? 'btn_active' : 'btn_deactive'
                } tracking-wide px-[35px] py-[18px] btn_active font-extrabold text-[14px] rounded-full`}
                onClick={() => handleButtonClick(2)}
              >
                JUDGEMENT CRITERIA
              </button>
            </div>
          </div>

          {/* About Section */}
          <div className='flex justify-center mt-[20px]'>
            <div className={activeButton === 0 ? 'active-div' : 'deactive-div'}>
              <div className='text-center mb-[50px]'>
                <div className='mb-[10px]'>
                  <span className='font-bold text-[20px] underline'>
                    ABOUT ROBO SOCCER
                  </span>
                </div>
                <div className='mx-[20px] md:mx-[120px] xl:mx-[220px]'>
                  <span className='text-[17px] font-semibold'>
                    Robo Soccer is a college-level competition where two manually controlled small robots compete to score the most goals within the game duration. It aims to enhance engineering and problem-solving skills among college students.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Structure Section */}
          <div
            className={`${
              activeButton === 1 ? 'active-div' : 'deactive-div'
            } text-[18px]`}
          >
            <div className='text-center'>
              <span className='font-bold underline text-[20px] uppercase'>
                MATCH STRUCTURE
              </span>
            </div>
            <div className='text-center mt-[10px]'>
              <span>
                • Matches are 5 minutes per half, with a 2-minute break between halves.
                <br />• Robots must stay within the field (3m x 2m), with boundary walls to prevent them from leaving.
                <br />• The goal dimensions are 30cm wide and 15cm high. Teams will try to score by manually controlling their robots with remotes.
                <br />• Fouls or penalties may lead to disqualification.
              </span>
            </div>
          </div>

          {/* Judgement Criteria Section */}
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
            <div>
              <span className='text-[17px]'>
                • A goal is scored when the entire ball crosses the goal line.
                <br />• Penalties will be awarded for violations like pushing the opposing robot or damaging the field.
                <br />• The referee's decision is final.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ROBO_SOCCER;
