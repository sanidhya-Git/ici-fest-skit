import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { bob_img, next } from '../../assets';

const materialData = [
  { material: 'Bricks', quantity: '27' },
  { material: 'Cement', quantity: '3 Kg' },
  { material: 'Trowel', quantity: '2' },
  { material: 'Sand', quantity: '15 Kg' },
  { material: 'Water', quantity: '4 Liters' },
  { material: 'Hand Pan', quantity: '2' },
];

const EBGMI = () => {
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
        <div className=' mx-[10px] md:mx-[60px] lg:mx-[200px] w-full'>
          <div className='bg-[#ffb4a7] px-[20px] md:px-[40px] py-[30px] rounded-[30px] text-center'>
            <div>
              <span className='font-extrabold text-[38px] md:text-[50px]'>
                E-Gaming BGMI
              </span>
            </div>
            <div className='flex justify-center'>
              <div className='w-[100px] h-[4px] bg-[#ff583e]  ' />
            </div>
            <div className='mt-[15px] font-bold  text-[16px] md:text-[18px]'>
              <div>
                <span>
                  Date - 10<sup>th </sup>November 2024
                </span>
              </div>
              <div>
                <span>Time - 12:00 NOON - 02:00 PM</span>
              </div>
              <div>
                <span>Venue - CRT Lab</span>
              </div>
            </div>
            <div className='font-bold text-[22px] md:text-[28px] leading-none mt-[10px] md:mt-0 '>
              <span>Registration Fee - ₹200 per team</span>
            </div>
            <div className='mt-[10px]'>
              <span className='font-semibold text-[18px]'>
                All the teams must have 4 members each.
              </span>
            </div>
            <Link
              to={`https://erp.skit.ac.in/register/r/egamingbgmi`}
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
                  For more details - Somya Roy:{' '}
                  <a target='blank' className='underline'>
                    {' '}
                    +91 9829571129
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
              <div className='text-center  mb-[50px]'>
                <div className=' mb-[10px] '>
                  <span className='font-bold  text-[20px] underline  '>
                    PROBLEM STATEMENT
                  </span>
                </div>
                <div className='mx-[20px] md:mx-[120px] xl:mx-[220px] '>
                  <span className='text-[17px] font-semibold'>
                    To promote e-sports and teamspirit among players and
                    showcase extraordinary skills. Our e-gaming event provides a
                    platform for top players to compete in <b>BGMI</b>, while
                    offering brands unique opportunities to engage with a
                    growing, tech-savvy audience in the e- sports community.
                  </span>
                </div>
              </div>

              <div className='text-center  mb-[50px]'>
                <div className=' mb-[10px] underline'>
                  <span className='font-bold  text-[20px]'>PARTICIPATION</span>
                </div>
                <div>
                  <span className='font-semibold text-[17px]'>
                    All the teams must have 4 members each.
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
              <span className='font-bold underline text-[20px] uppercase '>
                Time Limits
              </span>
            </div>
            <div className='text-center mt-[10px]'>
              <div>
                <span>Event timing - 1hrs</span>
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
                Code of Conduct:
              </span>
            </div>
            <div></div>
            <div className=' flex justify-center text-[17px]'>
              <div>
                <div>
                  <span>
                    o Players must behave respectfully towards other
                    participants, organizers, and officials.
                    <br />
                    o Toxic behaviour, offensive language, or unsportsmanlike
                    conduct will result in disqualification.
                    <br />
                    o Cheating, hacking, or exploiting game bugs is strictly
                    prohibited and will result in an immediate ban.
                    <br />o Players cannot get up from their place while in
                    game.
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

export default EBGMI;
