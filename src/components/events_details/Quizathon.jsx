import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const QAT = () => {
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
               Quiz-A-Thon
              </span>
            </div>
            <div className='flex justify-center'>
              <div className='w-[100px] h-[4px] bg-[#ff583e]  ' />
            </div>
            <div className='mt-[15px] font-bold  text-[16px] md:text-[18px]'>
              <div>
                <span>Date -</span>
              </div>
              <div className='mt-[10px]'>
                <span>Time -</span>
              </div>
              <div className='mt-[10px]'>
                <span>Venue -</span>
              </div>
            </div>
            <div className='font-bold text-[22px] md:text-[28px] leading-none  mt-[10px] '>
              <span>Registration Fee - ₹50 per individual</span>
            </div>
            {/* <div className="mt-[10px]">
              <span className="font-semibold text-[18px]">
                All the teams must have 4 members each.
              </span>
            </div> */}
            <Link
              to={`https://erp.skit.ac.in/register/r/quiz_a_thon`}
              target='_blank'
            >
              <div className='mt-[10px] font-semibold'>
                <button className='bg-[#ff583e] hover:bg-white text-white hover:text-[#ff583e] duration-300 hover:ring-1 ring-[#ff583e] pt-[9px] pb-[9px] pl-[18px] pr-[18px] lg:pt-[11px] lg:pb-[11px] lg:pl-[20px] lg:pr-[20px] rounded-[8px] text-[14px] lg:text-[16px]  self-center'>
                  Register Now
                </button>
              </div>
            </Link>
            <div className='mt-[10px]'>
              <span>
                <b>
                  {' '}
                  For more details - Rudraksh Dusad:{' '}
                  <a
                   
                    target='blank'
                    className='underline'
                  >
                    {' '}
                    +91 9828072482
                  </a>
                </b>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-center mt-[30px] md:mt-[50px]'>
        <div>
          <div className='flex flex-wrap justify-center  gap-3 md:gap-5'>
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
          </div>

          <div className='flex justify-center mt-[20px]'>
            <div className={activeButton === 0 ? 'active-div' : 'deactive-div'}>
              <div className='text-center  mb-[50px] font-semibold'>
                <div className=' mb-[10px] '>
                  <span className='font-bold  text-[20px] underline  '>
                    PROBLEM STATEMENT
                  </span>
                </div>
                <div className='mx-[20px] md:mx-[120px] xl:mx-[220px] '>
                  <span className='text-[17px]'>
                    Your task is to design a residential house using AutoCAD
                    software.Design a residential house with a footprint of 30'
                    by 60' using AutoCAD, incorporating essential elements to
                    meet the basic residential requirements. The design should
                    ensure optimal space utilization, functionality, and a
                    balanced integration of indoor and outdoor spaces.
                  </span>
                </div>

                <div className='text-center my-[30px] '>
                  <div className=' mb-[10px] underline'>
                    <span className='font-bold  text-[20px]'>
                      PARTICIPATION
                    </span>
                  </div>
                  <div>
                    <span className='font-semibold text-[17px]'>
                      Participate Individually.
                    </span>
                  </div>
                </div>

                <div className='mx-[10px] flex justify-center'>
                  <div>
                    <div className='mt-[10px] '>
                      <span className='font-bold text-[18px] '>
                        Basic Requirements
                      </span>
                    </div>
                    <div className='flex justify-center  '>
                      <span>
                        Living room, Dining room, Kitchen with adequate
                        countertop space and storage, Master bedroom with
                        attached bathroom,
                        <br className='hidden lg:block' /> Additional bedrooms
                        with shared bathrooms, Home office/study room, Utility
                        room
                      </span>
                    </div>
                    <div>
                      <span className='font-bold text-[18px] '>NOTE: </span>
                      <span>Computers will be provided</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${
              activeButton === 1 ? 'active-div' : 'deactive-div'
            } text-[18px] `}
          >
            <div className='flex justify-center mt-[10px] text-center'>
              <div>
                <span>
                  This is the single round event. Participant will be given{' '}
                  <b>1 hour</b> to complete their task. No submissions are
                  allowed after 1 hour.
                </span>
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
            <div className=''>
              <span className='font-bold text-[18px] '>
                You will be judged based on the following criterias:-
              </span>
            </div>
            <div className='flex justify-center  text-[17px]'>
              <ul>
                <li>
                  1. Adherence to the specified dimensions and requirements
                </li>
                <li>2. Logical and efficient layout of rooms</li>
                <li>3. Proper allocation of spaces for different functions.</li>
                <li>
                  4. Adequate consideration for ventilation, lighting, safety,
                  and privacy
                </li>
                <li>
                  5. Clear and professional presentation of the design using
                  AutoCAD tools.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QAT;
