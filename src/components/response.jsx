import { light_logo, mainlogo, ResponseLogo } from '../assets';

const Response = () => {
  return (
    <div className='text-center  my-[90px] font-bold text-3xl'>
      <h1>
        <div className='text-8xl mb-[40px] flex flex-col-reverse lg:flex-row justify-center items-center'>
          {' '}
          <img src={light_logo} className='w-[300px]' />
          💖{' '}
        </div>{' '}
        Due to overwhelming response we have closed registrations for this
        Event!
      </h1>
    </div>
  );
};

export default Response;
