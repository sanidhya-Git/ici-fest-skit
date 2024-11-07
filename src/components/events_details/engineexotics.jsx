import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ES = () => {
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
                Engine Exotics
              </span>
            </div>
            <div className='flex justify-center'>
              <div className='w-[100px] h-[4px] bg-[#ff583e]  ' />
            </div>
            <div className='mt-[15px] font-bold  text-[16px] md:text-[18px]'>
              <div>
                <span>Date - 8<sup>th </sup>November 2024</span>
              </div>
              <div className='mt-[10px]'>
                <span>Time - 01:00 PM - 02:30 PM</span>
              </div>
              <div className='mt-[10px]'>
                <span>Venue - 1F3, Civil Block</span>
              </div>
            </div>
            <div className='font-bold text-[22px] md:text-[28px] leading-none  mt-[10px] '>
              <span>Registration Fee - ₹100 per Team</span>
            </div>
            <div className='mt-[10px]'>
              <span className='font-semibold text-[18px]'>
                All the teams must have 2 members each.
              </span>
            </div>
            <Link
              to={`https://erp.skit.ac.in/register/r/ici24_rapidfire`}
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
                  For more details - Yuvraj Singh Jadaun:{' '}
                  <a target='blank' className='underline' >
                    {' '}
                    +91 7742014101
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
                    A team of 4 members will be made and each will play in rapid
                    fire round in which slides of car parts and logo will be
                    displayed on screen and teams have to guess the BRAND AND
                    NAME OF THE CAR.
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
                      In teams. Must have 2 members each.
                    </span>
                  </div>
                </div>

                <div className='mx-[10px] flex justify-center'>
                  <div>
                    <div className='mt-[10px] '>
                      <span className='font-bold text-[18px] '>
                        Description:
                      </span>
                    </div>
                    <div className='flex justify-center  '>
                      <span>
                        1) <b>ROUND 1 (LEVEL-EASY):</b>
                        <br />
                        In round 1, 15 questions would be asked related to car’s
                        logo and parts. Time limit: 8 seconds.
                        <br />
                        Note: After ROUND 1, 25 teams will be selected for next
                        round.
                        <br />
                        2) <b>ROUND 2 (LEVEL-MEDIUM):</b>
                        <br />
                        In round 2, 10 questions would be asked related to car’s
                        logo and parts. Time limit: 15 seconds.
                        <br />
                        Note: After ROUND 2, 10 teams will be selected for final
                        round.
                        <br />
                        3) <b>ROUND 3 (LEVEL-HARD):</b>
                        <br />
                        In round 3, 5 questions would be asked related to car’s
                        logo and parts. Time limit: 20 seconds.
                        <br />
                        Note: After ROUND 3, Winner, 1st runner up and 2nd
                        runner up will be decided.
                      </span>
                    </div>
                    <div></div>
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
                  This is the three round event. Participant will be given{' '}
                  <b>1.5 hour</b> to complete their task.
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
                  1) After the 1st Round, 25 teams will be selected on the basis
                  of how many answers did they <br />
                  answered correct from the 15 questions and time taken to
                  submit the response sheet.
                  <br />
                  2) After the 2nd Round, 10 teams will be selected on the basis
                  of how many answers did they <br />
                  answered correct from the 10 questions and time taken to
                  submit the response sheet.
                  <br />
                  3) After the 3rd Round, 3 teams will be declared as the
                  Winner, 1st Runner Up and 2nd Runner Up on the
                  <br /> basis of how many answers did they answered correct in
                  the last 5 questions and with how much accuracy.
                </li>
              </ul>
            </div>
            <div className='text-center mb-[10px]'>
              <span className='font-bold text-[20px] underline'>
                DISQUALIFICATION CRITERIA
              </span>
            </div>
            <div className=''></div>
            <div className='flex justify-center  text-[17px]'>
              <ul>
                <li>
                  1) No peeking in other’s answer sheet.
                  <br />
                  2) No use of unfair means (Mobile, electronic devices, etc).
                  <br />
                  3) Team causing disturbance in the event will be disqualified.
                  <br />
                  4) If team’s name is not written on sheet then response sheet
                  won’t be considered.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ES;
