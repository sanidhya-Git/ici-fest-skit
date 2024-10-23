import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CC = () => {
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
                Coordination Clash
              </span>
            </div>
            <div className='flex justify-center'>
              <div className='w-[100px] h-[4px] bg-[#ff583e]  ' />
            </div>
            <div className="mt-[15px] font-bold  text-[16px] md:text-[18px]">
              <div>
                <span>
                  Date - 10<sup>th </sup>November 2024
                </span>
              </div>
              <div>
                <span>Time - 12:00 NOON - 02:00 PM</span>
              </div>
              <div>
                <span>Venue - Ground</span>
              </div>
            </div>
            <div className='font-bold text-[22px] md:text-[28px] leading-none  mt-[10px] '>
              <span>Registration Fee - ₹200 per team</span>
            </div>
            <div className="mt-[10px]">
              <span className="font-semibold text-[18px]">
                All the teams must have 4 members each.
              </span>
            </div>
            <Link
              to={`https://erp.skit.ac.in/register/r/coordination_clash`}
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
                  For more details - Anjali Choudhary:{' '}
                  <a
                    
                    target='blank'
                    className='underline'
                  >
                    {' '}
                    +91 8491866517
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
                  Teams of four must demonstrate their coordination, communication, and
                  precision in a two-part challenge. In the first round, participants will balance a ball
                  on the tip of a pen while walking to the finish line , qualifying the team based on
                  time and balance control.
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
                    In teams. Must have 4 members each.
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
                      Sketch Pens ,Soft Tennis Balls ,Threads ,Pens, Bottles ,Blindfolds, Stopwatch
                      </span>
                    </div>
                    <div>
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
                Event requires 2:00 Hours.
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
                You will be judged based on the following criteria:-
              </span>
            </div>
            <div className='flex justify-center  text-[17px]'>
              <ul>
                <li>
                1. <b>Performance:</b>  Rank and time taken , with penalties applied for any drops.<br/>
                2. <b>Team Coordination:</b> Effective communication and movement during both
                rounds.<br/>
                3. <b>Adherence to Rules:</b> Compliance with all event rules and regulations.
                </li>
              </ul>
            </div>
            <div className='text-center mb-[10px]'>
              <span className='font-bold text-[20px] underline'>
                DISQUALIFICATION CRITERIA
              </span>
            </div>
            <div className='flex justify-center  text-[17px]'>
              <ul>
                <li>
                1.Reckless actions endangering participants.<br/>
                2. Consistently ignoring rules or penalties.<br/>
                3. Disrespectful or disruptive behavior.<br/>
                4. Modifying or mishandling event equipment.<br/>
                5. If your Team not coming on time you may get disqualified from the
                Event.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CC;
