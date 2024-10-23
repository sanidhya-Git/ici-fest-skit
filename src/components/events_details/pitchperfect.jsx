import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ThePitchPerfect = () => {
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
        <div className='mx-[10px] md:mx-[60px] lg:mx-[200px] w-full'>
          <div className='bg-[#ffb4a7] px-[20px] md:px-[40px] py-[30px] rounded-[30px] text-center'>
            <div>
              <span className='font-extrabold text-[38px] md:text-[50px] uppercase'>
                The Pitch Perfect
              </span>
            </div>
            <div className='flex justify-center'>
              <div className='w-[100px] h-[4px] bg-[#ff583e]' />
            </div>
            <div className='mt-[15px] font-bold text-[16px] md:text-[18px]'>
              <div>
                <span>Date - To Be Announced</span>
              </div>
              <div className='mt-[10px]'>
                <span>Time - To Be Announced</span>
              </div>
            </div>
            <div className='font-bold text-[22px] md:text-[28px] leading-none mt-[10px]'>
              <span>Registration Fee - ₹200 per team</span>
            </div>
            <div className='mt-[10px]'>
              <span className='font-semibold text-[18px]'>
                Each team can have up to 4 members.
              </span>
            </div>
            <a href='https://erp.skit.ac.in/register/r/pitch_perfect'>
              <div className='mt-[10px] font-semibold'>
                <button className='bg-[#ff583e] hover:bg-white text-white hover:text-[#ff583e] duration-300 hover:ring-1 ring-[#ff583e] pt-[9px] pb-[9px] pl-[18px] pr-[18px] lg:pt-[11px] lg:pb-[11px] lg:pl-[20px] lg:pr-[20px] rounded-[8px] text-[14px] lg:text-[16px] self-center'>
                  Register Now
                </button>
              </div>
            </a>
            <div className='mt-[10px]'>
              <span>
                <b>
                  For more details - Onish Nimiwal:{' '}
                  <a
                    href='https://wa.me/8058659528'
                    target='blank'
                    className='underline'
                  >
                    +91 8058659528
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
                RULES
              </button>
            </div>

            <div>
              <button
                className={`${
                  activeButton === 2 ? 'btn_active' : 'btn_deactive'
                } tracking-wide px-[35px] py-[18px] font-extrabold text-[14px] rounded-full`}
                onClick={() => handleButtonClick(2)}
              >
                JUDGING CRITERIA
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
                    The Pitch Perfect is an exciting event at SKIT where student
                    entrepreneurs pitch their innovative business ideas to a
                    panel of judges. Teams are evaluated on innovation, market
                    potential, and business model strength. This is not just a
                    competition, but a valuable opportunity to gain feedback and
                    network with industry leaders.
                  </span>
                </div>
              </div>
              <div className='text-center mb-[50px]'>
                <div className='mb-[10px] underline'>
                  <span className='font-bold text-[20px]'>PARTICIPATION</span>
                </div>
                <div>
                  <span className='font-semibold text-[17px]'>
                    Teams must have a maximum of 4 members, and the registration
                    fee is ₹200 per team.
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
              <span className='font-bold text-[18px]'>
                Disqualification Criteria
              </span>
              <ul className='mt-[10px] text-left'>
                <li>1. Plagiarism of ideas will result in disqualification.</li>
                <li>
                  2. Offensive content leads to immediate disqualification.
                </li>
                <li>
                  3. Time violations (exceeding the 10-minute limit) result in
                  disqualification.
                </li>
                <li>
                  4. Tampering with other participants’ materials is prohibited.
                </li>
                <li>
                  5. External team involvement or collaboration will lead to
                  disqualification.
                </li>
              </ul>
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
            <div className='flex justify-center text-[17px] text-center '>
              <div>
                <div>
                  <ul>
                    <li>
                      <span className='font-bold'>Innovation and Originality (30%)</span>: Uniqueness
                      of the startup idea.
                    </li>
                    <li>
                      <span className='font-bold'>Market Feasibility (20%)</span>: How practical and
                      marketable the idea is.
                    </li>
                    <li>
                      <span className='font-bold'>Business Model (20%)</span>: Clarity of the business
                      and revenue model.
                    </li>
                    <li>
                      <span className='font-bold'>Presentation Skills (20%)</span>: Ability to
                      effectively communicate the idea.
                    </li>
                    <li>
                      <span className='font-bold'>Scalability and Impact (10%)</span>: Growth
                      potential and impact in the market.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThePitchPerfect;
