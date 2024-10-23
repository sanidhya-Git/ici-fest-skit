import { useState } from 'react';

const Timeline = () => {
  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };
  const DataDayOne = [
    {
      Event: { 1: 'INAUGRAL' },
      Timing: '9:30 AM - 11:00 AM',
    },
    {
      Event: { 1: 'EXPO/EXHIBITION' },
      Timing: '11:00 AM - 11:15 AM',
    },
    {
      Event: { 1: 'High tea' },
      Timing: '11:15 AM - 11:30 AM',
    },
    {
      Event: { 1: 'Greening the Gap' },
      Timing: '11:00 AM - 1:00 AM',
    },
    {
      Event: { 1: 'EV WORKSHOP' },
      Timing: '11:00 AM - 1:00 AM',
    },
    {
      Event: { 1: 'BEYOND CANVAS/BRICK-O-BRICK/IDEA FUSION' },
      Timing: '11:00 AM - 1:00 AM',
    },
    {
      Event: { 1: 'LUNCH' },
      Timing: '02:00 AM - 03:00 PM',
    },
    {
      Event: { 1: 'QUIZ-A-THON' },
      Timing: '1:00 AM - 2:00 PM',
    },
    {
      Event: { 1: 'ADVANCE CONSTRUCTION TECHNOLOGY' },
      Timing: '1:00 AM - 3:30 PM',
    },
    {
      Event: { 1: 'BOWLING ALLEY' },
      Timing: '1:30 PM - 3:30 PM',
    },
    {
      Event: { 1: 'DRONE WORKSHOP' },
      Timing: '2:00 PM - 3:30 PM',
    },
    {
      Event: { 1: 'REJOICE' },
      Timing: '3:30 PM - 5:00 AM',
    },
  ];
  const DataDayTwo = [
    {
      Event: { 1: 'BOWLLING ALLEY/JOIST QUICK' },
      Timing: '9:00 AM - 11:00 AM',
    },
    {
      Event: { 1: 'MUN' },
      Timing: '9:00 AM - 12:00 PM',
    },
    {
      Event: { 1: 'TECH CONNECT EXHIBITION' },
      Timing: '9:00 AM - 12:00 PM',
    },
    {
      Event: { 1: 'WEB-A-THON' },
      Timing: '9:00 AM - 3:00 PM',
    },
    {
      Event: { 1: 'ROBO SOCCER' },
      Timing: '9:00 AM - 11:00 AM',
    },
    {
      Event: { 1: 'CRACK THE CIRCUIT' },
      Timing: '10:00 AM - 11:00 AM',
    },
    {
      Event: { 1: 'DRAG RACE' },
      Timing: '11:00 AM - 1:00 PM',
    },
    {
      Event: { 1: 'CRACK THE CAD' },
      Timing: '12:00 PM - 1:00 PM',
    },
    {
      Event: { 1: 'BEYOND THE CANVAS (WORKSHOP)' },
      Timing: '12:00 PM - 1:30 PM',
    },
    {
      Event: { 1: 'TOWER CRAFT' },
      Timing: '1:00 PM - 2:30 PM',
    },
    {
      Event: { 1: 'REJOICE' },
      Timing: '3:30 PM - 5:00 PM',
    },
  ];

  const DataDayThree = [
    {
      Event: { 1: 'SCAVENGER HUNT' },
      Timing: '8:00 AM - 10:00 AM',
    },
    {
      Event: { 1: 'OFFROAD-O-DESEY' },
      Timing: '10:00 AM - 12:00 PM',
    },
    {
      Event: { 1: 'JOIST QUICK' },
      Timing: '12:00 PM - 2:00 PM',
    },
    {
      Event: { 1: 'COORDINATION CLASH' },
      Timing: '12:00 PM - 2:00 PM',
    },
    {
      Event: { 1: 'E-GAMING' },
      Timing: '12:00 PM - 2:00 PM',
    },
    {
      Event: { 1: 'JENGA-PLOOZA' },
      Timing: '12:00 PM - 2:00 PM',
    },
    {
      Event: { 1: 'FABRIC OF FANTASY' },
      Timing: '12:00 PM - 2:00 PM',
    },
    {
      Event: { 1: 'VALIDECTORY' },
      Timing: '2:00 PM onwards', 
    },
  ];  

  return (
    <>
      <div className='text-center text-[30px] md:text-[36px] font-extrabold mt-[20px]'>
        <p>
          {' '}
          Timeline for ICI FEST{"'"}
          <span className='text-[#ff583e]'>24</span>
        </p>
        {/* <p className='mt-1 text-base font-medium'>coming soon</p> */}
      </div>

      <div className='flex flex-wrap justify-center  gap-3 md:gap-5 mt-[20px]'>
        <div>
          <button
            className={`${
              activeButton === 0 ? 'btn_active' : 'btn_deactive'
            } 'btn_active' : 'btn_deactive'} tracking-wide px-[30px] py-[14px] btn_active font-extrabold text-[16px] rounded-full `}
            onClick={() => handleButtonClick(0)}
          >
            Day 1
          </button>
        </div>

        <div>
          <button
            className={`${
              activeButton === 1 ? 'btn_active' : 'btn_deactive'
            } 'btn_active' : 'btn_deactive'} tracking-wide px-[30px] py-[14px] btn_active font-extrabold text-[16px] rounded-full `}
            onClick={() => handleButtonClick(1)}
          >
            Day 2
          </button>
        </div>

        <div>
          <button
            className={`${
              activeButton === 2 ? 'btn_active' : 'btn_deactive'
            } 'btn_active' : 'btn_deactive'} tracking-wide px-[30px] py-[14px] btn_active font-extrabold text-[16px] rounded-full `}
            onClick={() => handleButtonClick(2)}
          >
            Day 3
          </button>
        </div>
      </div>

      <div className='flex justify-center mt-[20px]'>
        <div
          className={`${
            activeButton === 0 ? 'active-div' : 'deactive-div'
          } text-[18px] `}
        >
          {DataDayOne.map((item, index) => (
            <div className='flex justify-center' key={index}>
              <div
                className='block md:flex justify-center items-center border-2 px-[30px] py-[20px] md:px-[40px] md:py-[20px] rounded-[20px] gap-[50px]
              border-[#ff583e] mb-[10px]'
              >
                <div className='max-[320px]:w-[210px] w-[250px] md:w-[250px]'>
                  {Object.keys(item.Event).map((key, index) => (
                    <div key={index}>
                      <span className='font-bold'>{item.Event[key]}</span>
                    </div>
                  ))}
                </div>
                <div className='max-[320px]:w-[210px] w-[250px] md:w-[200px]'>
                  <span className=''>{item.Timing}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`${
            activeButton === 1 ? 'active-div' : 'deactive-div'
          } text-[18px] `}
        >
          {DataDayTwo.map((item, index) => (
            <div className='flex justify-center' key={index}>
              <div
                className='block md:flex justify-center items-center border-2 px-[40px] py-[20px] rounded-[20px] gap-[50px]
              border-[#ff583e] mb-[10px]'
              >
                <div className='max-[320px]:w-[210px] w-[250px] md:w-[250px]'>
                  {Object.keys(item.Event).map((key, index) => (
                    <div key={index}>
                      <span className='font-bold'>{item.Event[key]}</span>
                    </div>
                  ))}
                </div>
                <div className='max-[320px]:w-[210px] w-[250px] md:w-[200px]'>
                  <span className=''>{item.Timing}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`${
            activeButton === 2 ? 'active-div' : 'deactive-div'
          } text-[18px] `}
        >
          {DataDayThree.map((item, index) => (
            <div className='flex justify-center' key={index}>
              <div
                className='block md:flex justify-center items-center border-2 px-[40px] py-[20px] rounded-[20px] gap-[50px]
              border-[#ff583e] mb-[10px]'
              >
                <div className='max-[320px]:w-[210px] w-[250px] md:w-[250px]'>
                  {Object.keys(item.Event).map((key, index) => (
                    <div key={index}>
                      <span className='font-bold'>{item.Event[key]}</span>
                    </div>
                  ))}
                </div>
                <div className='max-[320px]:w-[210px] w-[250px] md:w-[200px]'>
                  <span className=''>{item.Timing}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Timeline;
