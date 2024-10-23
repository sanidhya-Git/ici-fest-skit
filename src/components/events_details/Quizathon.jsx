import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const QAT = () => {
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
                Quiz-A-Thon
              </span>
            </div>
            <div className='flex justify-center'>
              <div className='w-[100px] h-[4px] bg-[#ff583e]  ' />
            </div>
            <div className="mt-[15px] font-bold  text-[16px] md:text-[18px]">
              <div>
                <span>
                  Date - 8<sup>th </sup>November 2024
                </span>
              </div>
              <div>
                <span>Time - 01:00 PM - 02:00 PM</span>
              </div>
              <div>
                <span>Venue - 4F4, Civil Block</span>
              </div>
            </div>
            <div className='font-bold text-[22px] md:text-[28px] leading-none  mt-[10px] '>
              <span>Registration Fee - ₹50 per individual</span>
            </div>
            <Link
              to={`https://erp.skit.ac.in/register/r/quiz_a_thon`}
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
                  For more details - Rudraksh Dusad:{' '}
                  <a className='underline'> +91 9828072482</a>
                </b>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Section Buttons */}
      <div className='flex justify-center mt-[30px] md:mt-[50px]'>
        <div className='flex flex-wrap justify-center gap-3 md:gap-5'>
          <button
            className={`${
              activeButton === 0 ? 'btn_active' : 'btn_deactive'
            } tracking-wide px-[35px] py-[18px] font-extrabold text-[14px] rounded-full`}
            onClick={() => handleButtonClick(0)}
          >
            ABOUT
          </button>
          <button
            className={`${
              activeButton === 1 ? 'btn_active' : 'btn_deactive'
            } tracking-wide px-[35px] py-[18px] font-extrabold text-[14px] rounded-full`}
            onClick={() => handleButtonClick(1)}
          >
            STRUCTURE
          </button>
          <button
            className={`${
              activeButton === 2 ? 'btn_active' : 'btn_deactive'
            } tracking-wide px-[35px] py-[18px] font-extrabold text-[14px] rounded-full`}
            onClick={() => handleButtonClick(2)}
          >
            JUDGMENT CRITERIA
          </button>
        </div>
      </div>

      {/* ABOUT Section */}
      <div className={`mt-[20px] ${activeButton === 0 ? 'block' : 'hidden'}`}>
        <div className='text-center mb-[50px] font-semibold'>
          <div className='mb-[10px]'>
            <span className='font-bold text-[20px] underline'>
              PROBLEM STATEMENT
            </span>
          </div>
          <div className='mx-[20px] md:mx-[120px] xl:mx-[220px]'>
            <span className='text-[17px]'>
              Quiz-A-Thon is a fast-paced quiz competition where participants
              will be asked 50-60 questions, each requiring a response within
              25-30 seconds. Answers will be submitted via a Google Form.
            </span>
          </div>
          <div className='my-[30px]'>
            <div className='mb-[10px] underline'>
              <span className='font-bold text-[20px]'>PARTICIPATION</span>
            </div>
            <span className='font-semibold text-[17px]'>
              Individual participation only.
            </span>
          </div>
          <div className='mx-[10px]'>
            <div className='mt-[10px]'>
              <span className='font-bold text-[18px]'>Basic Requirements</span>
            </div>
            <div>
              <span>
                Participants need a mobile phone with a stable internet
                connection.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* STRUCTURE Section */}
      <div className={`mt-[20px] ${activeButton === 1 ? 'block' : 'hidden'}`}>
        <div className='text-center mb-[10px] font-semibold'>
          <span className='font-bold text-[20px] underline'>STRUCTURE</span>
        </div>
        <div className='mx-[20px]'>
          <span className='text-[17px]'>
            This event consists of a single round. All participants will answer
            questions simultaneously using a Google Form. No one-word answer
            questions will be included; only multiple-choice and true/false
            questions. The entire event will last approximately 1 hour.
          </span>
        </div>
      </div>

      {/* JUDGMENT CRITERIA Section */}
      <div className={`mt-[20px] ${activeButton === 2 ? 'block' : 'hidden'}`}>
        <div className='text-center mb-[10px]'>
          <span className='font-bold text-[20px] underline'>
            JUDGMENT CRITERIA
          </span>
        </div>
        <div className='mx-[20px]'>
          <div className='flex justify-center'>
            <span className='text-[17px] font-bold text-center'>
              The following criteria will be used for judgment:
            </span>
          </div>
          <ul className='list-none text-center ml-[20px] mt-[10px]'>
            <li>
              1. The participant with the highest number of correct answers will
              be declared the winner.
            </li>
            <li>
              2. In case of a tie, a tiebreaker round with five additional
              questions will be conducted.
            </li>
          </ul>
        </div>
        <div className='text-center mt-[20px]'>
          <span className='font-bold text-[18px]'>
            Disqualification Criteria:
          </span>
          <ul className='list-none ml-[20px] mt-[10px]'>
            <li>1. Arguing with the quizmaster.</li>
            <li>2. Use of prohibited resources like ChatGPT, Google, etc.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QAT;
