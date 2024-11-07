import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DN = () => {
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
                Drone Workshop
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
                <span>Time - 10:00 AM - 11:30 PM</span>
              </div>
              <div>
                <span>Venue - JC Bose Auditorium</span>
              </div>
            </div>
            <div className='font-bold text-[22px] md:text-[28px] leading-none  mt-[10px] '>
              <span>Registration Fee - ₹50 per Individual</span>
            </div>
            {/* <div className="mt-[10px]">
              <span className="font-semibold text-[18px]">
                All the teams must have 4 members each.
              </span>
            </div> */}
            <Link
              to={`https://erp.skit.ac.in/register/r/drone_workshop`}
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
                  For more details - Maytri Singh Ahluwalia:{' '}
                  <a target='blank' className='underline'>
                    {' '}
                    +91 7597404429
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
                    As drone technology continues to expand into industries such
                    as agriculture, logistics, and surveillance, there is a
                    significant need for practical, hands-on understanding of
                    drone assembly, programming, and operation. Many tech
                    enthusiasts lack direct experience with drones, limiting
                    their ability to innovate and contribute to this growing
                    field. The Drone Workshop at ICI Techno Fest 2024 aims to
                    address this gap by equipping participants with essential
                    skills in drone building, control, and safety, empowering
                    them to apply drone technology in real-world scenarios and
                    drive future advancements.
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
                        Rules and Regulations:
                      </span>
                    </div>
                    <div className='flex justify-center  '>
                      <span>
                        1. Participants must be registered for the workshop and
                        have basic knowledge of electronics or programming.
                        <br />
                        2. Attendees must arrive on time. Late arrivals may miss
                        essential instructions and may not be accommodated.
                        <br />
                        3. Respect fellow participants, instructors, and staff.
                        Disruptive behavior or violation of any rules will lead
                        to removal from the workshop.
                        <br />
                        4. A certificate of participation will be provided to
                        those who complete the workshop successfully.
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
                <span>The workshop will be of 2.5 hours.</span>
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
                DISQUALIFICATION CRITERIA
              </span>
            </div>
            <div className=''></div>
            <div className='flex justify-center  text-[17px]'>
              <ul>
                <li>
                  1. Engaging in rude, inappropriate, or disruptive behavior
                  towards instructors, staff, or fellow participants will result
                  in disqualification.
                  <br />
                  2. Breaking any other rules outlined by the organizers, such
                  as team collaboration guidelines, punctuality, or conduct
                  codes, will result in disqualification.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DN;
