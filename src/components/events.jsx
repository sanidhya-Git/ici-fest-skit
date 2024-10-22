import { Link } from 'react-router-dom';
import { EventData } from './eventdata';

const FestEvent = () => {
  return (
    <>
      <div className='text-center mb-[20px] md:mb-[40px] mt-[10px]'>
        <span className='text-[26px] md:text-[30px] font-extrabold'>
          FEST{"'"}
          <span className='text-[#ff583e]'>24 </span>EVENTS
        </span>
      </div>

      {/* <div className='text-center mb-[20px] md:mb-[40px] mt-[50px] text-[26px] md:text-[30px] font-extrabold'>
        Registration opening soon
      </div> */}

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5 '>
        {EventData.map((data, index) => (
          <div
            key={index}
            className='relative w-full h-[230px] rounded-[20px] overflow-hidden'
          >
            <div className='absolute top-0 left-0 w-full h-full'>
              <img
                src={data.image}
                alt='cs'
                className={`w-full h-full object-cover ${
                  data.brightness_adj && 'brightness-50'
                }`}
              />
            </div>
            <div className='z-10 relative w-full h-full'>
              <div className='w-full h-full flex justify-center items-center'>
                <p className='text-xl text-center font-bold text-white'>
                  {data.title}
                </p>
              </div>
              <div
                disabled={data.registration_status !== 'live'}
                // onClick={() => {
                //   window.open(`/${data.slug}`, '_blank');
                // }}
                className={`bg-black absolute bottom-0 w-full h-[40px] flex items-center justify-center ${
                  data.registration_status === 'live'
                    ? 'cursor-pointer'
                    : 'cursor-not-allowed'
                }`}
              >
                <Link
                  to={
                    data.registration_status === 'live' ? `/${data.slug}` : ``
                  }
                >
                  <span className='text-white font-semibold hover:text-[#ff583e] duration-200'>
                    {data.registration_status === 'live'
                      ? 'Register Now'
                      : 'Registration Closed'}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FestEvent;
