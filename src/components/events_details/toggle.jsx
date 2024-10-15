import React, { useState } from "react";
import { Link } from "react-router-dom";

const TOGGLE = () => {
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
              <span className="font-extrabold text-[38px] md:text-[50px]">
                TOGGLE
              </span>
            </div>
            <div className="flex justify-center">
              <div className="w-[100px] h-[4px] bg-[#ff583e]  " />
            </div>
            <div className="mt-[15px] font-bold  text-[16px] md:text-[18px]">
              <div>
                <span>
                  Date - 15<sup>th </sup>September 2023
                </span>
              </div>
              <div className="mt-[10px]">
                <span>Time - 11:00 am to 01:30 pm</span>
              </div>
              <div className="mt-[10px]">
                <span>Venue - Communication Skills Lab</span>
              </div>
              <div>
                <span>Civil Block 2nd floor.</span>
              </div>
            </div>
            <div className="font-bold text-[22px] md:text-[28px] leading-none  mt-[10px] ">
              <span>Registration Fee - ₹50 per individual</span>
            </div>
            <Link to="/response">
              <div className="mt-[10px] font-semibold">
                <button className="bg-[#ff583e] hover:bg-white text-white hover:text-[#ff583e] duration-300 hover:ring-1 ring-[#ff583e] pt-[9px] pb-[9px] pl-[18px] pr-[18px] lg:pt-[11px] lg:pb-[11px] lg:pl-[20px] lg:pr-[20px] rounded-[8px] text-[14px] lg:text-[16px]  self-center">
                  Register Now
                </button>
              </div>
            </Link>
            <div className="mt-[10px]">
              <span>
                <b> For more details - Paridhi Jain: {" "}
                <a href="https://wa.me/9929425337" target="blank" className="underline">
                  {" "}
                  +91 9929425337
                </a>
                </b>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-[30px] md:mt-[50px]">
        <div>
          <div className="flex flex-wrap justify-center  gap-3 md:gap-5">
            <div>
              <button
                className={`${
                  activeButton === 0 ? "btn_active" : "btn_deactive"
                } 'btn_active' : 'btn_deactive'} tracking-wide px-[35px] py-[18px] btn_active font-extrabold text-[14px] rounded-full `}
                onClick={() => handleButtonClick(0)}
              >
                ABOUT
              </button>
            </div>

            <div>
              <button
                className={`${
                  activeButton === 1 ? "btn_active" : "btn_deactive"
                } 'btn_active' : 'btn_deactive'} tracking-wide px-[35px] py-[18px] btn_active font-extrabold text-[14px] rounded-full `}
                onClick={() => handleButtonClick(1)}
              >
                STRUCTURE
              </button>
            </div>

            <div>
              <button
                className={`${
                  activeButton === 2 ? "btn_active" : "btn_deactive"
                } 'btn_active' : 'btn_deactive'} tracking-wide px-[35px] py-[18px] btn_active font-extrabold text-[14px] rounded-full `}
                onClick={() => handleButtonClick(2)}
              >
                JUDGEMENT CRITERIA
              </button>
            </div>
          </div>

          <div className="flex justify-center mt-[20px]">
            <div className={activeButton === 0 ? "active-div" : "deactive-div"}>
              <div className="text-center  mb-[50px]">
                <div className=" mb-[10px] ">
                  <span className="font-bold  text-[20px] underline  ">
                    PROBLEM STATEMENT
                  </span>
                </div>
                <div className="mx-[20px] md:mx-[120px] xl:mx-[220px] ">
                  <span className="text-[17px] font-semibold">
                    In this activity, every participant will be given a topic .
                    They will start by presenting the positive
                    aspects/advantages of the given topic. When the judges say
                    the word 'TOGGLE,' participants must switch to the negative
                    aspects/disadvantages of the topic. This alternating pattern
                    will continue throughout the activity.
                  </span>
                </div>
              </div>

              <div className="text-center  mb-[50px]">
                <div className=" mb-[10px] underline">
                  <span className="font-bold  text-[20px]">PARTICIPATION</span>
                </div>
                <div>
                  <span className="font-semibold text-[17px]">
                    Individual Participation
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${
              activeButton === 1 ? "active-div" : "deactive-div"
            } text-[18px] `}
          >
            <div className="text-center mx-[10px]">
              <span className="font-semibold">
                Each participant will be allotted a 3-minute speaking slot and
                will be given 4 minutes of preparation time before their turn to
                speak.
              </span>
            </div>
          </div>
          <div
            className={`${
              activeButton === 2 ? "active-div" : "deactive-div"
            } mx-[20px]`}
          >
            <div className="text-center mb-[10px]">
              <span className="font-bold text-[20px] underline">
                JUDGING CRITERIA
              </span>
            </div>
            <div className="flex justify-center text-[18px] text-left md:text-center mx-[10px]">
              <div>
                <div>
                  <span>
                    <b>Fluency</b>
                  </span>
                </div>
                <div className="w-full  md:w-[555px]">
                  <span>
                    It measures how smoothly and clearly participants express
                    their thoughts. It looks at their ability to maintain a
                    steady pace and engage the audience effectively.
                  </span>
                </div>

                <div className="mt-[10px]">
                  <span>
                    <b>Relevance to the Topic</b>
                  </span>
                </div>
                <div className="w-full  md:w-[555px]">
                  <span>
                    Judges evaluate how well speakers stick to the given topic.
                    Relevant content and staying on-point are crucial for a
                    higher score.
                  </span>
                </div>

                <div className="mt-[10px]">
                  <span>
                    <b>Precision</b>
                  </span>
                </div>
                <div className="w-full  md:w-[555px]">
                  <span>
                    Precision assesses the clarity and accuracy of the speaker's
                    communication. It involves using clear, concise language and
                    avoiding vague or confusing statements.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TOGGLE;
