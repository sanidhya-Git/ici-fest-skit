import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const EVWORKSHOP = () => {
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
                EV Workshop by HVRDC Electric
              </span>
            </div>
            <div className='flex justify-center'>
              <div className='w-[100px] h-[4px] bg-[#ff583e]  ' />
            </div>
            <div className='mt-[15px] font-bold  text-[16px] md:text-[18px]'>
              <div>
                <span>Date - 08th November 2024</span>
              </div>
              <div className='mt-[10px]'>
                <span>Time - 01:00 PM to 02:30 PM</span>
              </div>
              <div className='mt-[10px]'>
                <span>Venue - JC Bose Auditorium</span>
              </div>
            </div>
            <div className='font-bold text-[22px] md:text-[28px] leading-none  mt-[10px] '>
              <span>Registration Fee - ₹50 per individual</span>
            </div>
            {/* <div className="mt-[10px]">
              <span className="font-semibold text-[18px]">
                All the teams must have 4 members each.
              </span>
            </div> */}
            <Link
              to={`https://erp.skit.ac.in/register/r/ev_workshop`}
              target='_blank'
            >
              <div className='mt-[10px] font-semibold'>
                <button className='bg-[#ff583e] hover:bg-white text-white hover:text-[#ff583e] duration-300 hover:ring-1 ring-[#ff583e] pt-[9px] pb-[9px] pl-[18px] pr-[18px] lg:pt-[11px] lg:pb-[11px] lg:pl-[20px] lg:pr-[20px] rounded-[8px] text-[14px] lg:text-[16px]  self-center'>
                  Register Now
                </button>
              </div>
            </Link>
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
          </div>

          <div className='flex justify-center mt-[20px]'>
            <div className={activeButton === 0 ? 'active-div' : 'deactive-div'}>
              <div className='text-center  mb-[50px] font-semibold'>
                <div className='mx-[20px] md:mx-[120px] xl:mx-[220px] '>
                  <h1 className='text-2xl font-bold mb-4'>
                    HVRDC Electric Workshop
                  </h1>
                  <p className='mb-4'>
                    HVRDC Electric is a recognized leader in electric mobility
                    solutions in Rajasthan, certified by DIPPIT, iStart, Startup
                    India, and more. We are renowned for our research and
                    development efforts in the EV domain, focusing on areas such
                    as retrofitting, EV rentals, battery swapping, and skill
                    development and training. With a strong foundation in
                    sustainable transport and cutting-edge EV technology, we are
                    excited to host this workshop.
                  </p>
                  <div className='text-center  mb-[50px] font-semibold'>
                    <div className='text-left'>
                      <h2 className='text-xl font-semibold mb-2'>
                        Workshop Outcomes
                      </h2>
                      <p className='mb-4'>
                        Participants will benefit from the following outcomes:
                      </p>
                      <ul className='list-disc list-inside space-y-2 mb-6'>
                        <li>
                          <span className='font-bold'>Industry Insight:</span>{' '}
                          Understand the current landscape and future trends of
                          the electric vehicle industry.
                        </li>
                        <li>
                          <span className='font-bold'>
                            Technical Knowledge:
                          </span>{' '}
                          Gain expertise on essential EV components and
                          technologies.
                        </li>
                        <li>
                          <span className='font-bold'>
                            Hands-On Experience:
                          </span>{' '}
                          Engage with EV components through practical sessions.
                        </li>
                        <li>
                          <span className='font-bold'>
                            Understanding Retrofitting:
                          </span>{' '}
                          Learn the process of converting ICE vehicles to
                          electric.
                        </li>
                        <li>
                          <span className='font-bold'>
                            Data Analytics Awareness:
                          </span>{' '}
                          Discover the role of data in optimizing EV operations.
                        </li>
                        <li>
                          <span className='font-bold'>
                            Collaborative Learning:
                          </span>{' '}
                          Participate in discussions and knowledge exchange with
                          peers and experts.
                        </li>
                        <li>
                          <span className='font-bold'>
                            Career Opportunities:
                          </span>{' '}
                          Explore potential career paths in the growing EV
                          sector.
                        </li>
                        <li>
                          <span className='font-bold'>
                            Inspiration for Innovation:
                          </span>{' '}
                          Ignite creativity and innovation in addressing
                          challenges in the EV space.
                        </li>
                      </ul>

                      <h2 className='text-xl font-semibold mb-2'>
                        Innovation and Research Focus
                      </h2>
                      <p className='mb-4'>
                        HVRDC Electric places a strong emphasis on research and
                        development. We are actively engaged in:
                      </p>
                      <ul className='list-disc list-inside space-y-2'>
                        <li>
                          Conducting research on EV powertrains to enhance
                          performance and efficiency.
                        </li>
                        <li>
                          Developing skill development programs to educate and
                          empower the next generation of professionals in the EV
                          sector.
                        </li>
                        <li>
                          Collaborating with academic institutions and industry
                          experts to foster innovation and drive advancements in
                          electric vehicle technology.
                        </li>
                      </ul>
                    </div>

                   
                  </div>
                </div>

              </div>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default EVWORKSHOP;
