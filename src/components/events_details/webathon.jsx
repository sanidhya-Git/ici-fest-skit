import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const WEBATHON = () => {
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
                WEB-A-THON
              </span>
            </div>
            <div className='flex justify-center'>
              <div className='w-[100px] h-[4px] bg-[#ff583e]' />
            </div>
            <div className='mt-[15px] font-bold  text-[16px] md:text-[18px]'>
              <div>
                <span>
                  Date - 9<sup>th </sup>November 2024
                </span>
              </div>
              <div>
                <span>Time - 09:00 AM - 03:00 PM</span>
              </div>
              <div>
                <span>Venue - CRT Lab</span>
              </div>
            </div>
            <div className='font-bold text-[22px] md:text-[28px] leading-none mt-[10px]'>
              <span>Registration Fee - ₹250 per team</span>
            </div>
            <div className='mt-[10px]'>
              <span className='font-semibold text-[18px]'>
                All teams must have 4 members each.
              </span>
            </div>
            <a href='https://erp.skit.ac.in/register/r/webathon'>
              <div className='mt-[10px] font-semibold'>
                <button className='bg-[#ff583e] hover:bg-white text-white hover:text-[#ff583e] duration-300 hover:ring-1 ring-[#ff583e] pt-[9px] pb-[9px] pl-[18px] pr-[18px] lg:pt-[11px] lg:pb-[11px] lg:pl-[20px] lg:pr-[20px] rounded-[8px] text-[14px] lg:text-[16px] self-center'>
                  Register Now
                </button>
              </div>
            </a>
            <div className='mt-[10px]'>
              <span>
                <b>
                  For more details - Sanskar Chaturvedi :{' '}
                  <a
                    href='https://wa.me/6377829943'
                    target='blank'
                    className='underline'
                  >
                    +91 6377829943
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
              <div className='text-center mb-[50px]'>
                <div className='mb-[10px] underline'>
                  <span className='font-bold text-[20px]'>
                    EVENT DESCRIPTION
                  </span>
                </div>
                <div className='mx-[20px] md:mx-[120px] xl:mx-[220px]'>
                  <span className='text-[17px] font-semibold'>
                    A Webathon is a competitive event where participants build
                    websites or web applications within a limited time frame. It
                    encourages creativity, innovation, and collaboration among
                    web developers and designers, often focusing on solving
                    real-world challenges using web technologies.
                  </span>
                </div>
                <div className='text-left flex justify-center'>
                  <div>
                    <div className='mt-[20px]'>
                      <span className='font-bold text-[18px]'>
                        Rules & Regulations
                      </span>
                    </div>
                    <div className='text-[18px]'>
                      <ul>
                        <li>
                          1. Only registered students of the college are allowed
                          to participate.
                        </li>
                        <li>
                          2. Participants may join as part of a team, with 4
                          members per team.
                        </li>
                        <li>
                          3. All code must be original and written during the
                          competition. Teams found using pre-written or
                          plagiarized code will be disqualified.
                        </li>
                        <li>
                          4. Maintain respect for all participants and judges.
                          Harassment or discrimination will not be tolerated.
                        </li>
                        <li>
                          5. Teams should handle disagreements professionally
                          and work collaboratively to resolve issues.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className='text-center mb-[50px]'>
                <div className='mb-[10px] underline'>
                  <span className='font-bold text-[20px]'>PARTICIPATION</span>
                </div>
                <div>
                  <span className='font-semibold text-[17px]'>
                    Teams of 4 members are mandatory for participation.
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
              <span>
                The event will last for 8 hours. The first 6 hours will be spent
                designing a website based on the given problem statement,
                followed by 2 hours for project evaluation and presentation.
              </span>
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
            <div className='flex justify-center text-[17px] text-left  '>
              <div>
                <ul className='list-disc'>
                  <li className='mt-3 w-full sm:max-w-[800px]'>
                    <span className='font-semibold'>
                      Judging will be based on the following criteria:
                    </span>
                    - Creativity/Innovation: Unique ideas and solutions. -
                    Technical Implementation: Quality of code, complexity, and
                    efficiency. - User Interface (UI) and User Experience (UX):
                    Design, accessibility, and userfriendliness. - Scalability:
                    Potential for future expansion or real-world application. -
                    Functionality: How effectively the website addresses the
                    problem statement.
                  </li>
                  <li className='mt-3 w-full sm:max-w-[800px]'>
                    BUT In this Web-a-thon, we recognize that the importance of
                    development and technical execution cannot be overlooked, as
                    they play a vital role in creating functional and efficient
                    websites. However, for first-year students participating in
                    this event, we place a special emphasis on the originality
                    of ideas and the creativity of designs. While development
                    remains crucial, we understand that many students are still
                    building their technical skills. As such, the focus for this
                    competition will be on evaluating the uniqueness of
                    concepts, design aesthetics, and how well the project
                    addresses the given problem statement. This approach allows
                    first-year participants to showcase their innovative
                    thinking while still working on honing their development
                    skills over time.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WEBATHON;
