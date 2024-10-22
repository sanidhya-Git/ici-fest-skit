import React, { useState } from "react";
import { Link } from "react-router-dom";

import { bob_img, joist_img } from "../../assets";

const materialData = [
  { material: "Flat Ice-Cream Sticks", quantity: "100" },
  { material: "Adhesive Glue", quantity: "-" },
  { material: "Ruler, Paper Clips etc", quantity: "-" },
];

const JK = () => {
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
                JOIST KWIK
              </span>
            </div>
            <div className="flex justify-center">
              <div className="w-[100px] h-[4px] bg-[#ff583e]  " />
            </div>
            <div className="mt-[15px] font-bold  text-[16px] md:text-[18px]">
              <div className="flex flex-col items-center justify-center gap-[10px] md:flex-row">
                <div>
                  <div>Date</div>
                  <div>
                    Round 1 - <sup></sup>
                  </div>{" "}
                  <div>
                    {" "}
                    Round 2 - 
                    <sup> </sup>
                  </div>
                </div>
                <div>
                  <div>
                    <span>Time</span>
                  </div>
                  <div>
                    <span><span className="inline md:hidden"> Round 1</span> - </span>
                  </div>
                  <div>
                    <span><span className="inline md:hidden"> Round 2</span> - </span>
                  </div>
                </div>
              </div>
              <div className="mt-[10px]">
                <span>Venue: </span>
                <span>Tech zone in football ground</span>
              </div>
            </div>
            <div className="font-bold text-[22px] md:text-[28px] leading-none  mt-[10px] ">
              <span>Registration Fee - ₹250 per team</span>
            </div>
            <div className="mt-[10px]">
              <span className="font-semibold text-[18px]">
                All the teams must have 4 members each.
              </span>
            </div>
            <a href="https://erp.skit.ac.in/register/r/joistkwik">
              <div className="mt-[10px] font-semibold">
                <button className="bg-[#ff583e] hover:bg-white text-white hover:text-[#ff583e] duration-300 hover:ring-1 ring-[#ff583e] pt-[9px] pb-[9px] pl-[18px] pr-[18px] lg:pt-[11px] lg:pb-[11px] lg:pl-[20px] lg:pr-[20px] rounded-[8px] text-[14px] lg:text-[16px]  self-center">
                  Register Now
                </button>
              </div>
            </a>
            <div className="mt-[10px]">
              <span>
                <b> For more details - Aditya Singh : {" "}
                <a href="https://wa.me/6377829943" target="blank" className="underline">
                  {" "}
                  +91 9024913492
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
                    Design and construct a load-bearing bridge using only the
                    provided materials. The challenge involves creating a
                    structurally sound bridge utilizing limited resources,
                    testing its ability to support a specified load efficiently,
                    and showcasing innovative engineering principles to achieve
                    maximum strength-to-weight ratio.
                  </span>
                </div>
                <div className="flex justify-center mt-[20px] mx-[20px]">
                  <img src={joist_img} className="w-[350px]" />
                </div>
                <div className="mt-[20px]">
                  <span className="font-semibold">Dimensions</span>
                </div>
                <div>
                  <div>
                    <span>Length - 45-50 cm</span>
                  </div>
                  <div>
                    <span>Width - 11-12 cm</span>
                  </div>
                </div>
              </div>

              <div className="text-center  mb-[50px]">
                <div className=" mb-[10px] underline">
                  <span className="font-bold  text-[20px]">PARTICIPATION</span>
                </div>
                <div>
                  <span className="font-semibold text-[17px]">
                    Each team must have 4 members.
                  </span>
                </div>
              </div>

              <div className="text-center  mb-[50px]">
                <div className=" mb-[10px] underline">
                  <span className="font-bold  text-[20px]">
                    MATERIALS PROVIDED
                  </span>
                </div>
                <div className="flex justify-center text-left">
                  <table className="table-auto text-[17px]">
                    <thead>
                      <tr className="">
                        <th className="pr-[80px]">
                          Materials
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </th>
                        <th>Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      {materialData.map((item, index) => (
                        <tr key={index}>
                          <td>{item.material}</td>
                          <td>{item.quantity}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${
              activeButton === 1 ? "active-div" : "deactive-div"
            } text-[18px] `}
          >
            <div className="text-center">
              <span className="font-bold  text-[18px] ">
                The event will be conducted in <span> 2 rounds</span>
              </span>
            </div>
            <div className="flex justify-center mt-[10px] mx-[20px] ">
              <div>
                <div>
                  <span>
                    <b>Round 1</b>
                    <br />
                    You will be given <b>2 hours </b>to make the bridge in give
                    time submit the model for next round.
                  </span>
                </div>
                <div>
                  <span>
                    <b>Round 2</b>
                    <br />
                    Testing of model
                  </span>
                </div>
              </div>
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
            <div className="flex justify-center text-[17px] text-center">
              <div>
                <div>
                  <span>
                    <b>Geometry</b>
                  </span>
                </div>
                <div>
                  <span>Length - 45-50 cm</span>
                </div>
                <div>
                  <span>Width - 11-12 cm</span>
                </div>

                <div className="mt-[10px]">
                  <span>
                    <b>Deflection</b>
                  </span>
                </div>
                <div>
                  <span>Applied load upto failure.</span>
                </div>

                <div className="mt-[10px]">
                  <span>
                    <b>Economy</b>
                  </span>
                </div>
                <div>
                  <span>Number of sticks used.</span>
                </div>

                <div className="mt-[10px]">
                  <span>
                    <b>Alterations of sticks are not allowed</b>
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

export default JK;
