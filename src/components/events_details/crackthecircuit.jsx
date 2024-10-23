import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const crackthecircuit = () => {
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
                Crack The Circuit
              </span>
            </div>
            <div className='flex justify-center'>
              <div className='w-[100px] h-[4px] bg-[#ff583e]  ' />
            </div>
            <div className='mt-[15px] font-bold  text-[16px] md:text-[18px]'>
              <div>
                <span>
                  Date - 9<sup>th </sup>November 2024
                </span>
              </div>
              <div>
                <span>Time - 10:00 AM - 11:00 AM</span>
              </div>
              <div>
                <span>Venue - 4F4, Civil Block</span>
              </div>
            </div>
            <div className='font-bold text-[22px] md:text-[28px] leading-none  mt-[10px] '>
              <span>Registration Fee - ₹200 per team</span>
            </div>
            <div className='mt-[10px]'>
              <span className='font-semibold text-[18px]'>
                All the teams must have 4 members each.
              </span>
            </div>
            <Link
              to={`https://erp.skit.ac.in/register/r/crackthecircuit`}
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
                  For more details - Nainika Agrawal:{' '}
                  <a target='blank' className='underline'>
                    {' '}
                    +91 9116017683
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
                    Participants will be provided with an electronic circuit
                    that contains deliberate faults or incorrect connections.
                    The objective is to analyze the given circuit, identify the
                    issues, and fix them so that it functions according to the
                    predefined specification.
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
                        Rules and Regulations:
                      </span>
                    </div>
                    <div className='flex justify-center  '>
                      <span>
                        Participants must follow instructions given by
                        coordinators.
                        <br />
                        Teams will be given a specific time to decode the
                        circuit.
                        <br />
                        Mobile phones are not allowed during the competition
                        <br />
                        Helping other teams is not allowed
                        <br />
                        Asking for external help is not allowed
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
                  This is the single round event. Participant will be given{' '}
                  <b>2 hour</b> to complete their task. No submissions are
                  allowed after 2 hour.
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
                  The tam to solve to clear all rounds first and press the
                  buzzer will be the winner.
                  <br />
                  Damaging material provided will lead to disqualification.
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
                  Participants will be disqualified for late arrival, disruptive
                  behavior, safety violations.
                  <br />
                  Participants will be disqualified if they found using external
                  help and using any extra material other than those provided.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default crackthecircuit;
