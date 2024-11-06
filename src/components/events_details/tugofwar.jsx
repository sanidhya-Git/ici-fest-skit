import React, { useState } from 'react';

const TUG_OF_WAR = () => {
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
                Tug Of War
              </span>
            </div>
            {/* <div className='mb-[10px]'>
              <span className='font-bold text-[18px] uppercase'>
                अभियांत्रिकी - Engineering (A Project Exhibition)
              </span>
            </div> */}
            <div className='flex justify-center'>
              <div className='w-[100px] h-[4px] bg-[#ff583e]  ' />
            </div>
            <div className='mt-[15px] font-bold  text-[16px] md:text-[18px]'>
              <div>
                <span>
                  Date - 10<sup>th </sup>November 2024
                </span>
              </div>
              <div className='mt-[10px]'>
                <span>Time - 12:00 NOON to 02:00 PM</span>
              </div>
              <div className='mt-[10px]'>
                <span>Venue - Ground</span>
              </div>
            </div>
            <div className='font-bold text-[22px] md:text-[28px] leading-none  mt-[10px] '>
              <span>Registration Fee - ₹50 per individual</span>
            </div>
            <div className='mt-[5px] font-bold  text-[16px] md:text-[18px]'>
              <span>Team of 7 members</span>
            </div>
            <a href='https://erp.skit.ac.in/register/r/tugofwar'>
              <div className='mt-[10px] font-semibold'>
                <button className='bg-[#ff583e] hover:bg-white text-white hover:text-[#ff583e] duration-300 hover:ring-1 ring-[#ff583e] pt-[9px] pb-[9px] pl-[18px] pr-[18px] lg:pt-[11px] lg:pb-[11px] lg:pl-[20px] lg:pr-[20px] rounded-[8px] text-[14px] lg:text-[16px]  self-center'>
                  Register Now
                </button>
              </div>
            </a>
            <div className='mt-[10px]'>
              <span>
                <b>
                  {' '}
                  For more details - Manmeet Singh Yadav:{' '}
                  <a
                    href='https://wa.me/8824684994'
                    target='blank'
                    className='underline'
                  >
                    {' '}
                    +91 8824684994
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
                    ABOUT
                  </span>
                </div>
                <div className='mx-[20px] md:mx-[120px] xl:mx-[220px] '>
                  <span className='text-[17px] '>
                    The main goal of Tug of War is for one team to successfully
                    pull the opposing team across a designated centre line using
                    a rope. Teams must strategize their approach, considering
                    strength, weight distribution, and pulling techniques.
                  </span>
                </div>
              </div>

              <div className='text-center  mb-[50px]'>
                <div className=' mb-[10px] underline'>
                  <span className='font-bold  text-[20px]'>PARTICIPATION</span>
                </div>
                <div>
                  <span className='font-semibold text-[17px]'>
                    Team of 7 members. All the members must be registered
                    individually.
                  </span>
                </div>
              </div>

              <div className='  mb-[50px]'>
                <div className=' mb-[10px] text-center '>
                  <span className='font-bold  text-[20px] underline  '>
                    RULES
                  </span>
                </div>
                <div className='mx-[20px] md:mx-[120px] xl:mx-[220px] mt-[10px]'>
                  <p className='font-semibold'>Start the Pull:</p>
                  <ul className='list-disc '>
                    <li>
                      On the signal to start, both teams begin pulling on the
                      rope, aiming to drag the opposing team across the marker
                    </li>
                  </ul>
                </div>

                <div className='mx-[20px] md:mx-[120px] xl:mx-[220px] mt-[10px]'>
                  <p className='font-semibold'>Pulling Technique:</p>
                  <ul className='list-disc '>
                    <li>
                      Players use their strength and coordination to pull the
                      rope steadily and forcefully in their team's direction.
                    </li>
                    <li>
                      Teams may adjust their grip and strategy during the pull
                      to gain leverage and advantage over the opposing team.
                    </li>
                  </ul>
                </div>
                <div className='mx-[20px] md:mx-[120px] xl:mx-[220px] mt-[10px]'>
                  <p className='font-semibold'>Winning the Game:</p>
                  <ul className='list-disc '>
                    <li>
                      The game ends when one team successfully pulls the other
                      team across the marker or line. o The team that crosses
                      the marker first is declared the winner of the round.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${
              activeButton === 1 ? 'active-div' : 'deactive-div'
            } text-[18px] `}
          >
            <div className='flex justify-center mt-[10px] mx-[10px] text-left md:text-center text-[17px]'>
              <div>
                <div>
                  <span className='font-bold'>Match Duration:</span>
                </div>
                <div>
                  <span>Each match lasts 1 to 3 minutes</span>
                </div>

                <div className='mt-[10px] '>
                  <span className='font-bold'>Tiebreakers</span>
                </div>
                <div className='mx-[0px] md:mx-[120px] xl:mx-[220px] '>
                  <span>
                    If no team successfully pulls the other across the line
                    within the time limit, a tiebreaker round may be initiated
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${
              activeButton === 2 ? 'active-div' : 'deactive-div'
            } mx-[20px]`}
          >
            <div className='flex justify-center text-[17px]  font-semibold'>
              <div className='p-4'>
                <h2 className='text-2xl font-bold text-gray-800 mb-4'>
                  Disqualification Criteria
                </h2>

                <div className='mb-6'>
                  <h3 className='font-semibold text-lg mb-2'>
                    1. Team Size Violations:
                  </h3>
                  <ul className='list-disc list-inside text-gray-700'>
                    <li>
                      A team has fewer than the required number of players
                      (e.g., 5 players) at the start of a match.
                    </li>
                  </ul>
                </div>

                <div className='mb-6'>
                  <h3 className='font-semibold text-lg mb-2'>
                    2. Failure to Adhere to Match Rules:
                  </h3>
                  <ul className='list-disc list-inside text-gray-700'>
                    <li>
                      Not following the referee's instructions during the match.
                    </li>
                    <li>
                      Disregarding the marked lines or boundaries during
                      gameplay.
                    </li>
                  </ul>
                </div>

                <div className='mb-6'>
                  <h3 className='font-semibold text-lg mb-2'>
                    3. Standing Position:
                  </h3>
                  <ul className='list-disc list-inside text-gray-700'>
                    <li>
                      All participants must be in a standing position at the
                      start of the match.
                    </li>
                    <li>
                      Players should not sit or lie down on the ground during
                      gameplay unless specified by the event rules.
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

export default TUG_OF_WAR;
