import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const REEL_MAKING = () => {
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
                REEL MAKING COMPETITION
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
                <span>Time - 11:59 PM Submission Deadline</span>
              </div>
              <div>
                <span>Venue - Online Submission</span>
              </div>
            </div>
            <div className='font-bold text-[22px] md:text-[28px] leading-none mt-[10px]'>
              <span>Registration Fee - ₹50 per entry</span>
            </div>
            <Link
              to={`https://erp.skit.ac.in/register/r/ici24_ReelComp`}
              target='_blank'
            >
              <div className='mt-[10px] font-semibold'>
                <button className='bg-[#ff583e] hover:bg-white text-white hover:text-[#ff583e] duration-300 hover:ring-1 ring-[#ff583e] pt-[9px] pb-[9px] pl-[18px] pr-[18px] lg:pt-[11px] lg:pb-[11px] lg:pl-[20px] lg:pr-[20px] rounded-[8px] text-[14px] lg:text-[16px] self-center'>
                  Register Now
                </button>
              </div>
            </Link>
            {/* <div className='mt-[10px]'>
              <span>
                <b>
                  For more details - Aniket Rajput:
                  <a target='blank' className='underline'>
                    {' '}
                    9772111651
                  </a>
                </b>
              </span>
            </div> */}
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
              <div className='text-center mb-[50px] font-semibold'>
                <div className='mb-[10px]'>
                  <span className='font-bold text-[20px] underline'>
                    PROBLEM STATEMENT
                  </span>
                </div>
                <div className='mx-[20px] md:mx-[120px] xl:mx-[220px]'>
                  <span className='text-[17px]'>
                    Create an engaging reel that demonstrates a variety of
                    products – from food to electronics – with and without the
                    ISI mark. Highlight how BIS certification assures consumers
                    of the quality, safety, and reliability of the products they
                    purchase.
                  </span>
                </div>

                <div className='mt-[30px]'>
                  <span className='font-bold text-[20px] underline'>THEME</span>
                </div>
                <div className='mx-[20px] md:mx-[120px] xl:mx-[220px]'>
                  <span className='text-[17px]'>
                    Reels must focus on the importance of the ISI mark
                    and BIS certification in ensuring product quality, safety,
                    and reliability.
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
            <div className='flex justify-center mt-[10px] text-center'>
              <div>
                <div className='mb-[10px] underline'>
                  <span className='font-bold text-[20px]'>
                    RULES AND REGULATIONS
                  </span>
                </div>
                <div className='text-[17px]'>
                  <ul>
                    <li>
                      <span className='font-semibold'>Theme:</span> Reels must
                      focus on the importance of the ISI mark and BIS
                      certification in ensuring product quality, safety, and
                      reliability.
                    </li>
                    <li className='mt-4'>
                      <span className='font-semibold'>
                        Content Requirements:
                      </span>
                      <ul>
                        <li>
                          Showcase a minimum of 3 different products, both with
                          and without the ISI mark.
                        </li>
                        <li>
                          Content must be informative, family-friendly, and free
                          from offensive language or imagery.
                        </li>
                        <li>Reels must not exceed 60 seconds in length.</li>
                      </ul>
                    </li>
                    <li className='mt-4'>
                      <span className='font-semibold'>Originality:</span> All
                      content must be original and created specifically for this
                      competition. Plagiarism will lead to immediate
                      disqualification.
                    </li>
                    <li>
                      Deadline: All entries must be submitted by 9th November,
                      11:59 PM.
                    </li>
                  </ul>
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
            <div className='text-[17px]'>
              <ul>
                <li>
                  1. Unique approach and creative storytelling to convey the
                  importance of the ISI mark.
                </li>
                <li>
                  2. Effective communication of the ISI mark’s significance in
                  product quality and safety.
                </li>
                <li>
                  3. High-quality visuals, smooth transitions, and cohesive
                  editing.
                </li>
                <li>
                  4. Accurate depiction of products with and without the ISI
                  mark.
                </li>
                <li>
                  5. Ability to engage and inspire viewers to understand the
                  value of BIS certification.
                </li>
                <li>
                  6. Staying on topic and meeting the requirements outlined in
                  the competition guidelines.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default REEL_MAKING;
