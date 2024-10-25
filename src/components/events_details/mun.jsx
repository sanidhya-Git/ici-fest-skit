import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MUN = () => {
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
                MUN
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
                <span>Time - 09:00 AM - 12:00 NOON</span>
              </div>
              <div>
                <span>Venue - 5F1, Civil Block</span>
              </div>
            </div>
            <div className='font-bold text-[22px] md:text-[28px] leading-none  mt-[10px] '>
              <span>Registration Fee - ₹100 per individual</span>
            </div>
            {/* <div className="mt-[10px]">
              <span className="font-semibold text-[18px]">
                All the teams must have 4 members each.
              </span>
            </div> */}
            <Link
              to={`https://erp.skit.ac.in/register/r/ici_mun`}
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
                  For more details - Jagrati pareek:{' '}
                  <a target='blank' className='underline'>
                    {' '}
                    9772111651
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
            <div className='flex justify-center mt-[20px]'>
              <div
                className={activeButton === 0 ? 'active-div' : 'deactive-div'}
              >
                <div className='text-center mb-[50px] font-semibold'>
                  <div className='mb-[10px]'>
                    <span className='font-bold text-[20px] underline'>
                      PROBLEM STATEMENT
                    </span>
                  </div>
                  <div className='mx-[20px] md:mx-[120px] xl:mx-[220px]'>
                    <span className='text-[17px]'>
                      The All India Political Party Meet (AIPPM) is organizing a
                      Model United Nations (MUN) conference to address the
                      critical and long-standing issue of terrorism in Kashmir.
                      The agenda of the meeting focuses on facilitating a
                      thorough debate among delegates representing various
                      political parties, concentrating on the security,
                      geopolitical, and human rights dimensions of the Kashmir
                      conflict. Participants are expected to engage in
                      constructive discussions, propose actionable solutions,
                      and develop policy recommendations in line with their
                      party's stance. The outcome should include a comprehensive
                      strategy to combat terrorism, promote peace, and address
                      the social and political concerns in the Kashmir region.
                    </span>
                  </div>

                  <div className='text-center my-[30px]'>
                    <div className='mb-[10px] underline'>
                      <span className='font-bold text-[20px]'>
                        PARTICIPATION
                      </span>
                    </div>
                    <div>
                      <span className='font-semibold text-[17px]'>
                        Individual participation.
                      </span>
                    </div>
                  </div>
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
                  <span className='font-bold text-[20px]'>EVENT STRUCTURE</span>
                </div>
                <div>
                  <span>
                    <b>Round 1:</b> Each delegate will present their stance on
                    the issue within the allotted time.
                  </span>
                </div>
                <div>
                  <span>
                    <b>Round 2:</b> Engage in debates based on the event
                    structure provided.
                  </span>
                </div>

                <div className='mt-[30px] underline'>
                  <span className='font-bold text-[20px]'>
                    DISQUALIFICATION CRITERIA
                  </span>
                </div>
                <div className='text-[17px]'>
                  <ul>
                    <li>
                      Breach of Decorum: Offensive language, disrespectful
                      behaviour, or disrupting the session.
                    </li>
                    <li>
                      Rule Violations: Ignoring the chair’s instructions or
                      exceeding speaking time despite warnings.
                    </li>
                    <li>
                      Inconsistent Representation: Failing to align with the
                      assigned party’s ideology.
                    </li>
                    <li>
                      Non-Participation: Absence during voting or debates
                      without valid reasons.
                    </li>
                    <li>
                      Unapproved Communication: Unauthorized use of devices or
                      passing unapproved notes.
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
                <li>1. Research and Knowledge: 30 points</li>
                <li>2. Communication Skills: 25 points</li>
                <li>3. Diplomacy and Negotiation: 20 points</li>
                <li>4. Decorum and Conduct: 15 points</li>
                <li>5. Creativity and Initiative: 10 points</li>
              </ul>
            </div>

            <div className='mt-[30px] text-center underline'>
              <span className='font-bold text-[20px]'>
                RULES AND REGULATIONS
              </span>
            </div>
            <div className='text-[17px]'>
              <ol>
                <li>
                  1. Conduct:
                  <ul>
                    <li>Formal or ethnic wear is mandatory.</li>
                    <li>
                      Language: English or Hindi only, respectful and formal.
                    </li>
                  </ul>
                </li>
                <li>
                  2. Speaking Rules:
                  <ul>
                    <li>Opening Speech: 2 minutes per delegate.</li>
                    <li>Speakers List: 1 minute per speech.</li>
                    <li>Moderated Caucus: 45 seconds per delegate.</li>
                  </ul>
                </li>
                <li>
                  3. Motions and Points:
                  <ul>
                    <li>
                      Point of Order: For rule violations; misuse leads to
                      penalties.
                    </li>
                    <li>Motion to Adjourn: Simple majority vote required.</li>
                  </ul>
                </li>
                <li>
                  4. Voting: A simple majority (more than 50%) is needed to pass
                  resolutions.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MUN;
