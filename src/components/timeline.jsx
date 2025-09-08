import { useState } from 'react';

const Timeline = () => {
  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };
  const DataDayOne = [
  //   { Event: { 1: 'Inaugural' }, Timing: '09:30 AM - 11:00 AM' },
  //   { Event: { 2: 'Expo' }, Timing: '11:00 AM - 02:30 PM' },
  //   {
  //     Event: { 3: 'Beyond The Canvas (Exhibition)' },
  //     Timing: '11:00 AM - 02:30 PM',
  //   },
  // { Event: { 4: 'Drag Race' }, Timing: '11:00 AM - 02:30 PM' },
  //   { Event: { 5: 'EV Workshop' }, Timing: '01:00 PM - 02:30 PM' },
  //   { Event: { 6: 'Brick-O-Brick' }, Timing: '11:00 AM - 01:00 PM' },
  //   { Event: { 7: 'The Mudventure' }, Timing: '11:00 AM - 01:00 PM' },
  //   { Event: { 8: 'Quiz-a-thon' }, Timing: '01:00 PM - 02:00 PM' },
  //   { Event: { 9: 'Essay Writing' }, Timing: '12:30 PM - 01:30 PM' },
  //   { Event: { 10: 'Bowling Alley (Round 1)' }, Timing: '01:30 PM - 02:30 PM' },
  //   { Event: { 11: 'Startup Mela' }, Timing: '01:00 PM - 02:30 PM' },
  //   { Event: { 12: 'Engine Exotic' }, Timing: '01:00 PM - 02:30 PM' },
  //   { Event: { 13: 'E-Gaming (Valorant)' }, Timing: '11:00 AM - 02:30 PM' },
  ];

  const DataDayTwo = [
    // { Event: { 1: 'E-Gaming (BGMI)' }, Timing: '09:00 AM - 12:00 PM' },
    // { Event: { 2: 'Crack the CAD' }, Timing: '09:00 AM - 10:00 AM' },
    // { Event: { 3: 'MUN' }, Timing: '09:00 AM - 12:00 PM' },
    // { Event: { 4: 'Web-a-thon' }, Timing: '09:00 AM - 02:30 PM' },
    // { Event: { 5: 'Crack the Circuit' }, Timing: '10:00 AM - 11:00 AM' },
    // { Event: { 6: 'Drone Workshop' }, Timing: '10:00 AM - 11:30 AM' },
    // { Event: { 7: 'Robo Soccer' }, Timing: '11:00 AM - 01:00 PM' },
    // { Event: { 8: 'Bowling Alley (Round 2)' }, Timing: '01:00 PM - 02:30 PM' },
    // { Event: { 9: 'Joist Quick (Round 1)' }, Timing: '01:00 PM - 02:30 PM' },
    // {
    //   Event: { 10: 'Beyond the Canvas (Workshop)' },
    //   Timing: '12:00 PM - 01:30 PM',
    // },
    // { Event: { 11: 'Tower Craft' }, Timing: '01:00 PM - 02:30 PM' },
  ];

  const DataDayThree = [
    // { Event: { 1: 'Scavenger Hunt' }, Timing: '08:00 AM - 10:00 AM' },
    // { Event: { 2: 'Offroad-o-Desey' }, Timing: '10:00 AM - 12:00 PM' },
    // { Event: { 3: 'Joist Quick (Round 2)' }, Timing: '12:00 PM - 02:00 PM' },
    // { Event: { 4: 'Kabad Se Jugaad' }, Timing: '12:00 PM - 02:00 PM' },
    // { Event: { 5: 'Coordination Clash' }, Timing: '12:00 PM - 02:00 PM' },
    // { Event: { 6: 'Jenga-Plooza' }, Timing: '12:00 PM - 02:00 PM' },
    // { Event: { 7: 'Fabric of Fantasy' }, Timing: '12:00 PM - 02:00 PM' },
    // { Event: { 8: 'Valedictory' }, Timing: '02:00 PM' },
  ];

  return (
    <>
      <div className='text-center text-[30px] md:text-[36px] font-extrabold mt-[20px]'>
        <p>
          {' '}
          Timeline for ICI FEST{"'"}
          <span className='text-[#ff583e]'>25</span>
        </p>
        <p className='font-extrabold text-[34px] md:text-[40px]'>coming soon</p>
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
      </div> */}

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
                      <span className='font-bold   text-base'>
                        {item.Event[key]}
                      </span>
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
                      <span className='font-bold  text-base'>
                        {item.Event[key]}
                      </span>
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
                      <span className='font-bold  text-base'>
                        {item.Event[key]}
                      </span>
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
