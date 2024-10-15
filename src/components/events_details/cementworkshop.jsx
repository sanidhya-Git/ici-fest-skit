import React, { useState } from "react";
import { Link } from "react-router-dom";

const materialData = [{ material: "Not Specified Properly", quantity: "-" }];

const WORKSHOP = () => {
  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  return (
    <div>
      <br />
      <br />
      <br />

      <div className="flex justify-center">
        <div className=" mx-[10px] md:mx-[60px] lg:mx-[200px] w-full">
          <div className="bg-[#ffb4a7] px-[20px] md:px-[40px] py-[30px] rounded-[30px] text-center">
            <div>
              <span className="font-extrabold text-[38px] md:text-[50px] uppercase">
                WORKSHOP
              </span>
            </div>
            <div className="flex justify-center">
              <div className="w-[100px] h-[4px] bg-[#ff583e]  " />
            </div>
            <div className="mt-[15px] font-bold  text-[16px] md:text-[18px]">
              <div>
                <span>
                  Date - 16<sup>th </sup>September 2023
                </span>
              </div>
              <div className="mt-[10px]">
                <span>Time - 01:00 pm to 02:00 pm</span>
              </div>
            </div>
            <div className="font-bold text-[22px] md:text-[28px] leading-none  md:leading-normal mt-[10px] ">
              <span>Registration Fee - ₹50 per individual</span>
            </div>
            <a href="https://erp.skit.ac.in/register/r/workshop">
              <div className="mt-[10px] font-semibold">
                <button className="bg-[#ff583e] hover:bg-white text-white hover:text-[#ff583e] duration-300 hover:ring-1 ring-[#ff583e] pt-[9px] pb-[9px] pl-[18px] pr-[18px] lg:pt-[11px] lg:pb-[11px] lg:pl-[20px] lg:pr-[20px] rounded-[8px] text-[14px] lg:text-[16px]  self-center">
                  Register Now
                </button>
              </div>
            </a>
            <div className="mt-[10px]">
              <span>
                <b> For more details - Puneet Dadhich: {" "}
                <a href="https://wa.me/8619106882" target="blank" className="underline">
                  {" "}
                  +91 8619106882
                </a>
                </b>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-[30px] md:mt-[50px]">
        <div className="flex justify-center mt-[20px]">
          <div className="text-center  mb-[50px]">
            <div className=" mb-[10px]">
              <span className="font-bold  text-[20px]">ABOUT</span>
            </div>
            <div className="mx-[20px] md:mx-[120px] xl:mx-[220px] ">
              <span className="text-[17px] font-semibold">
                {" "}
                Hands on experience with the right proportions of materials and
                facilitate yourself for industrial exposure and resolve queries
                with experts. <br />
                <b>TOPIC: </b> Self-Compacting Concrete (SCC) 
              </span>
            </div>
            <div className="mt-[20px]">
              <span className="text-[17px] font-semibold">
                Certificates will be provided
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WORKSHOP;
