import React, { useState } from "react";
import { Link } from "react-router-dom";

const OFFROAD = () => {
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
        <div className="mx-[10px] md:mx-[60px] lg:mx-[200px] w-full">
          <div className="bg-[#ffb4a7] px-[20px] md:px-[40px] py-[30px] rounded-[30px] text-center">
            <div>
              <span className="font-extrabold text-[38px] md:text-[50px] uppercase">
               Robo Offroad Odyssey
              </span>
            </div>
            <div className="flex justify-center">
              <div className="w-[100px] h-[4px] bg-[#ff583e]" />
            </div>
            <div className="mt-[15px] font-bold  text-[16px] md:text-[18px]">
              <div>
                <span>
                  Date - 10<sup>th </sup>November 2024
                </span>
              </div>
              <div>
                <span>Time - 10:00 AM - 12:00 NOON</span>
              </div>
              <div>
                <span>Venue - D-Garden</span>
              </div>
            </div>
            <div className="font-bold text-[22px] md:text-[28px] leading-none mt-[10px]">
              <span>Registration Fee - ₹200 per team</span>
            </div>
            <div className="mt-[10px]">
              <span className="font-semibold text-[18px]">
                All the teams must have 2 members each.
              </span>
            </div>
            <a href="https://erp.skit.ac.in/register/r/offroad_odyssey">
              <div className="mt-[10px] font-semibold">
                <button className="bg-[#ff583e] hover:bg-white text-white hover:text-[#ff583e] duration-300 hover:ring-1 ring-[#ff583e] pt-[9px] pb-[9px] pl-[18px] pr-[18px] lg:pt-[11px] lg:pb-[11px] lg:pl-[20px] lg:pr-[20px] rounded-[8px] text-[14px] lg:text-[16px] self-center">
                  Register Now
                </button>
              </div>
            </a>
            <div className="mt-[10px]">
              <span>
                <b>
                  For more details - Tanmay Vyas :{" "}
                  <a
                    href="https://wa.me/8302583012"
                    target="blank"
                    className="underline"
                  >
                    +91 8302583012
                  </a>
                </b>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-[30px] md:mt-[50px]">
        <div>
          <div className="flex flex-wrap justify-center gap-3 md:gap-5">
            <div>
              <button
                className={`${
                  activeButton === 0 ? "btn_active" : "btn_deactive"
                } tracking-wide px-[35px] py-[18px] font-extrabold text-[14px] rounded-full`}
                onClick={() => handleButtonClick(0)}
              >
                EVENT OVERVIEW
              </button>
            </div>

            <div>
              <button
                className={`${
                  activeButton === 1 ? "btn_active" : "btn_deactive"
                } tracking-wide px-[35px] py-[18px] font-extrabold text-[14px] rounded-full`}
                onClick={() => handleButtonClick(1)}
              >
                RACE FORMAT
              </button>
            </div>

            <div>
              <button
                className={`${
                  activeButton === 2 ? "btn_active" : "btn_deactive"
                } tracking-wide px-[35px] py-[18px] font-extrabold text-[14px] rounded-full`}
                onClick={() => handleButtonClick(2)}
              >
                JUDGING CRITERIA
              </button>
            </div>
          </div>

          <div className="flex justify-center mt-[20px]">
            <div className={activeButton === 0 ? "active-div" : "deactive-div"}>
              <div className="text-center mb-[50px]">
                <div className="mb-[10px] underline">
                  <span className="font-bold text-[20px]">EVENT DESCRIPTION</span>
                </div>
                <div className="mx-[20px] md:mx-[120px] xl:mx-[220px]">
                  <span className="text-[17px] font-semibold">
                    Welcome to the Offroad Odyssey! Participants will compete using robots provided by the organizers in an exciting off-road racing challenge. Join us for a day of adventure, strategy, and fun!
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className={`${activeButton === 1 ? "active-div" : "deactive-div"} text-[18px]`}>
            <div className="text-center mb-[10px]">
              <span className="font-bold text-[20px] underline">RACE FORMAT</span>
            </div>
            <div className="flex justify-center text-[17px] text-center font-semibold">
              <div>
                <ul className="list-disc list-inside">
                  <li><b>Heats:</b> The event will consist of single heat, with only single participant racing at a time. The race will consist of multiple checkpoints, and the bot will move forward only after clearing a checkpoint. If the bot falls down before the checkpoint, it will go to the previous checkpoint.</li>
                  <li><b>Race Track:</b> The track will include various obstacles, such as ramps, bumps, and rough terrain.</li>
                  <li><b>Timing:</b> Each race will last 6 minutes.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={`${activeButton === 2 ? "active-div" : "deactive-div"} mx-[20px]`}>
            <div className="text-center mb-[10px]">
              <span className="font-bold text-[20px] underline">JUDGING CRITERIA</span>
            </div>
            <div className="flex justify-center text-[17px] text-center font-semibold">
              <div>
                <ul className="list-disc list-inside">
                  <li><b>Time:</b> Minimum time to clear all the checkpoints.</li>
                  <li><b>Control:</b> Smoothness and precision in controlling the robot.</li>
                </ul>
                <div className="mt-[20px] font-bold text-[18px] underline">Disqualification Criteria</div>
                <ul className="list-disc list-inside">
                  <li>Unauthorized modifications to the provided robot.</li>
                  <li>Unsportsmanlike conduct such as cheating or attempting to sabotage others.</li>
                  <li>Failure to control the robot exhibiting erratic behavior.</li>
                  <li>Course cutting or taking shortcuts.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OFFROAD;
