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

const BYC_WORKSHOP = () => {
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
                Beyond The Canvas Workshop
              </span>
            </div>
            <div className='flex justify-center'>
              <div className='w-[100px] h-[4px] bg-[#ff583e]  ' />
            </div>
            <div className='mt-[15px] font-bold  text-[16px] md:text-[18px]'>
              <div>
                <span>
                  Date - 9<sup>th </sup>November 2024 (workshop)
                </span>
              </div>
              <div>
                <span>Time - 12:00 PM - 01:30 PM</span> 
              </div>
              {/* <div>
                <span>
                  Date - 9<sup>th </sup>November 2024 (workshop)
                </span>
              </div>
              <div>
                <span>Time - 12:00 NOON - 01:30 PM</span>
              </div> */}
              <div>
                <span>Venue - BD Lab</span>
              </div>
            </div>
            <div className='font-bold text-[22px] md:text-[28px] leading-none mt-[10px] md:mt-0 '>
              <span>Registration Fee - ₹50 per individual</span>
            </div>
            <div className='mt-[10px]'>
              {/* <span className="font-semibold text-[18px]">
                All the teams must have 4 members each.
              </span> */}
            </div>
            <Link
              to={`https://erp.skit.ac.in/register/r/btc_worskhop`}
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
                  For more details - Anuj Tomar{' '}
                  <a target='blank' className='underline'>
                    {' '}
                    +91 7737008369
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
                    ”Beyond the Canvas” is an immersive two-day art exhibition
                    aimed at providing a plat- form for artists to showcase
                    their diverse range of artwork. The event will feature
                    multiple.
                    <br />
                    forms of art, such as:
                    <br />
                    • Mandala Art
                    <br />
                    • Origami
                    <br />
                    • Sketches
                    <br />
                    • Portraits
                    <br />
                    • Watercolor Painting
                    <br />
                    • Charcoal Art
                    <br />
                    • Calligraphy
                    <br />
                    • Digital Art
                    <br />
                    In addition to the exhibition, workshops will be conducted
                    on Day 2 to teach partic- ipants the skills required for
                    various art forms.
                  </span>
                </div>
              </div>

              <div className='text-center  mb-[50px]'>
                <div className=' mb-[10px] underline'>
                  <span className='font-bold  text-[20px]'>PARTICIPATION</span>
                </div>
                <div>
                  <span className='font-semibold text-[17px]'>
                    Participate Individually.
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
                <span>
                  • There is no maximum limit to the number of artworks an
                  artist can submit for consideration.
                  <br />
                  • Artworks must be original, and the artist should have full
                  ownership of the piece.
                  <br />• The submission period for artworks is 2 days from the
                  date of notification.
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
            <div>
              <span className='text-[17px] '>
                • The organizing committee will evaluate the submissions based
                on creativity, originality, and relevance to the event.
                <br />• Selected artists will be notified via call/email..
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BYC_WORKSHOP;
