
import { new_b } from '../assets';

const Prizepool = () => {
  return (
    <>
      <div className="relative flex items-center justify-center mt-[80px]">
        <div className="w-[70%] z-10">
          <img
            src={new_b}
            alt=""
            className="w-full h-full "
          />
        </div>
        {/* <div className="absolute w-3/4 h-2/4 bg-[#ff583e] rounded-[24px] "></div> */}
      </div>
    </>
  );
};

export default Prizepool;
