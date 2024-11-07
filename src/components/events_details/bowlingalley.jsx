import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { bowling_img } from '../../assets';

const materialData = [
  { material: 'Cement', quantity: '3 kg' },
  { material: 'Fine Sand', quantity: '2 kg' },
  { material: 'Mould', quantity: '1' },
  { material: 'Poly Bags', quantity: '1' },
  { material: 'Trovel and Pans', quantity: '1' },
  { material: 'Bottles', quantity: '1' },
  { material: 'Bricks', quantity: '10' },
];

const BA = () => {
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
                Bowling Alley
              </span>
            </div>
            <div className='flex justify-center'>
              <div className='w-[100px] h-[4px] bg-[#ff583e]  ' />
            </div>
            <div className='mt-[15px] font-bold  text-[16px] md:text-[18px]'>
              <div>
                <span>
                  Date - 8<sup>th </sup>November 2024 (Round 1)
                </span>
              </div>
              <div>
                <span>Time - 01:30 PM - 02:30 PM</span>
              </div>
              <div className='mt-2'>
                <span>
                  Date - 9<sup>th </sup>November 2024 (Round 2)
                </span>
              </div>
              <div>
                <span>Time - 01:00 PM - 02:30 AM</span>
              </div>
              <div className='mt-2'> 
                <span>Venue - Ground</span>
              </div>
            </div>
            <div className='font-bold text-[22px] md:text-[28px] leading-none  mt-[10px] '>
              <span>Registration Fee - ₹250 per team</span>
            </div>
            <div className='mt-[10px]'>
              <span className='font-semibold text-[18px]'>
                All the teams must have 4 members each.
              </span>
            </div>
            <Link
              to={`https://erp.skit.ac.in/register/r/bowling_alley`}
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
                  For more details - Aman Mishra:{' '}
                  <a target='blank' className='underline'>
                    {' 8290078495'}
                    &nbsp;
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
                    To design and cast durable concrete balls using a
                    cement-concrete mix inside plastic molds, ensuring they are
                    strong, balanced, and smooth enough for use in alley games
                    involving bricks
                  </span>
                </div>
                <div className=' mb-[10px] '>
                  <span className='font-bold  text-[20px] underline  '>
                    Rules and Regulation
                  </span>
                </div>
                <div className='mx-[20px] md:mx-[120px] xl:mx-[220px] '>
                  <span className='text-[17px] font-semibold'>
                    ● You have to cast the concrete balls within the given time
                    period.
                    <br />● Material is provided by the organizing team
                  </span>
                </div>
              </div>

              <div className='text-center  mb-[50px]'>
                <div className=' mb-[10px] underline'>
                  <span className='font-bold  text-[20px]'>PARTICIPATION</span>
                </div>
                <div>
                  <span className='font-semibold text-[17px]'>
                    In teams. Must have 4 members each.
                  </span>
                </div>
              </div>

              <div className='text-center  mb-[50px]'>
                <div className=' mb-[10px] underline'>
                  <span className='font-bold  text-[20px]'>
                    MATERIALS REQUIRED
                  </span>
                </div>
                <div className='flex justify-center text-left'>
                  <table className='table-auto text-[17px]'>
                    <thead>
                      <tr className=''>
                        <th className='pr-[80px]'>
                          Materials
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </th>
                        <th>Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      {materialData.map((item, index) => (
                        <tr key={index}>
                          <td>{item.material}</td>
                          <td>{item.quantity}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
              <span className='font-bold  text-[20px] '>
                The event will be conducted in <span> 2 rounds</span>
              </span>
            </div>
            <div className='flex justify-center mt-[10px] text-[17px] mx-[20px]'>
              <div>
                <div>
                  <div>
                    <span>
                      <b>Round 1</b>
                    </span>
                  </div>
                  <div>
                    <span>90 Minutes</span>
                  </div>
                </div>
                <div className='mt-[10px]'>
                  <div>
                    <span>
                      <b>Round 2</b>
                    </span>
                  </div>
                  <div>
                    <ul>
                      <li>180 Minutes</li>
                    </ul>
                  </div>
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
            <div className='flex justify-center text-[17px] text-center'>
              <div>
                <div>
                  <span>Each team will get 10 chances to hit the pins.</span>
                </div>
                <div>
                  <span>The team with maximum score will win.</span>
                </div>
              </div>
            </div>
            <div className='text-center mb-[10px]'>
              <span className='font-bold text-[20px] underline'>
                Disqualification CRITERIA
              </span>
            </div>
            <div className='flex justify-center text-[17px] text-center'>
              <div>
                <div>
                  <span>
                    Use of the external agent in the making of the ball is
                    prohibited.
                  </span>
                </div>
                <div>
                  <span>
                    Member other than the team member is found then the team
                    will be disqualified.
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

export default BA;
