import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const POSTER_MAKING = () => {
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
                POSTER MAKING
              </span>
            </div>
            <div className='flex justify-center'>
              <div className='w-[100px] h-[4px] bg-[#ff583e]' />
            </div>
            <div className='mt-[15px] font-bold text-[16px] md:text-[18px]'>
              <div>
                <span>
                  Date - 8<sup>th</sup> November 2024
                </span>
              </div>
              <div>
                <span>Time - ??</span>
              </div>
              <div>
                <span>Venue - 1F1, Civil Block</span>
              </div>
            </div>
            <div className='font-bold text-[22px] md:text-[28px] leading-none mt-[10px]'>
              <span>Registration Fee - ₹100 per individual</span>
            </div>
            <Link
              to={`https://erp.skit.ac.in/register/r/ici_mun`}
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
                  For more details - Jagrati Pareek:
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
                    Create an original and engaging poster on the theme "Make in
                    India, Make with Quality." The poster should reflect the
                    importance of quality in products and services, emphasizing
                    how standards, like those of BIS, ensure product excellence
                    and reliability.
                  </span>
                </div>
                <div className='mt-[30px]'>
                  <span className='font-bold text-[20px] underline'>THEME</span>
                </div>
                <div className='mx-[20px] md:mx-[120px] xl:mx-[220px]'>
                  <span className='text-[17px]'>
                    Posters must highlight the significance of "Make in India"
                    and promote the value of quality standards in products and
                    services, showcasing the role of BIS (Bureau of Indian
                    Standards) in ensuring product quality.
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
                    <span className='font-semibold'> Theme</span>
                    <li>
                      Posters must highlight "Make in India" and promote quality
                      standards in products and services.
                    </li>
                    <li className='mt-4'>
                      <span className='font-semibold'>
                        Content Requirements
                      </span>
                      <ul>
                        <li>
                          Posters should be informative, family-friendly, and
                          contain no offensive language or imagery.
                        </li>
                        <li>
                          Originality is essential; all content must be created
                          specifically for this competition. Plagiarism will
                          lead to immediate disqualification.
                        </li>
                      </ul>
                    </li>
                    <li className='mt-4'>
                      <span className='font-semibold'>
                        Format & Specifications
                      </span>
                      <ul>
                        <li>Created on A3-sized paper.</li>
                        <li>
                          Participants can use any medium (digital art,
                          painting, sketching, etc.), but entries must be
                          submitted in printed or hard-copy format.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Submission Deadline All entries must be submitted in IF1
                      by 8:00 am on 8th November 2024.
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
                <li>1. Theme Relevance: 25 points</li>
                <li>2. Creativity and Originality: 30 points</li>
                <li>3. Visual Appeal: 20 points</li>
                <li>4. Clarity and Organization: 15 points</li>
                <li>5. Compliance with Guidelines: 10 points</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default POSTER_MAKING;
