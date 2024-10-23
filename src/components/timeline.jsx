import { useState } from 'react';

const Timeline = () => {
  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  const DataDayOne = [
    {
      Event: {
        1: 'Inaugural',
      },
      Timing: '09:30 am - 11:00 am',
    },
    {
      Event: {
        1: 'Panel Discussion',
      },
      Timing: '11:30 am - 12:30 pm',
    },
    {
      Event: {
        1: 'Bowling Alley, Joist Kwik',
      },
      Timing: '12:30 pm - 02:00 pm',
    },
    {
      Event: {
        1: 'Startup Expo',
      },
      Timing: '12:30 pm - 01:30 pm',
    },
    {
      Event: {
        1: 'Crack the Circuit',
      },
      Timing: '01:00 pm - 02:00 pm',
    },
    {
      Event: {
        1: 'EV and GeoPolymer Workshop',
      },
      Timing: '01:00 pm - 03:45 pm',
    },
  ];

  const DataDayTwo = [
    {
      Event: {
        1: 'Brick-O-Brick',
      },
      Timing: '09:00 am - 11:30 pm',
    },
    {
      Event: {
        1: 'Bowling Alley, Joist Kwik',
      },
      Timing: '10:00 am - 12:00 noon',
    },
    {
      Event: {
        1: 'Drone and Art of Sensation Workshop',
      },
      Timing: '12:00 noon - 01:30 pm',
    },
    {
      Event: {
        1: 'IGBC',
      },
      Timing: '02:00 pm - 03:30 pm',
    },
    {
      Event: {
        1: 'MUN',
      },
      Timing: '12:00 noon - 03:00 pm',
    },
    {
      Event: {
        1: 'Robo Soccer',
      },
      Timing: '02:00 pm - 03:00 pm',
    },
    
  ];

  const DataDayThree = [
    {
      Event: {
        1: 'Walkathon & Cyclothon',
      },
      Timing: '06:00 am - 07:00 am',
    },
    {
      Event: {
        1: 'Scavenger Hunt',
      },
      Timing: '08:00 am - 11:00 am',
    },
    {
      Event: {
        1: 'E Sports',
      },
      Timing: '11:00 am = 12:00 noon',
    },
    {
      Event: {
        1: 'Jenga Palooza',
      },
      Timing: '11:00 am = 12:00 noon',
    },
    {
      Event: {
        1: 'Face Painting',
      },
      Timing: '12:00 noon - 01:00 pm',
    },
    {
      Event: {
        1: 'Ball and Pen Showdown',
      },
      Timing: '12:00 noon - 01:00 pm',
    },
    {
      Event: {
        1: 'Valedictory Ceremony',
      },
      Timing: '02:00 pm onwards',
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
        <p className='mt-1 text-base font-medium'>coming soon</p>
      </div>
      

      {/* <div className='flex flex-wrap justify-center  gap-3 md:gap-5 mt-[20px]'>
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
      </div> */}
     
    </>
  );
};

export default Timeline;
