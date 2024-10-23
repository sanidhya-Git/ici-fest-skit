import React, { useState } from "react";
import { Link } from "react-router-dom";

import { bob_img, next } from "../../assets";

const materialData = [
  { material: "Bricks", quantity: "27" },
  { material: "Cement", quantity: "3 Kg" },
  { material: "Trowel", quantity: "2" },
  { material: "Sand", quantity: "15 Kg" },
  { material: "Water", quantity: "4 Liters" },
  { material: "Hand Pan", quantity: "2" },
];

const ROBOSOCCER = () => {
  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  return (
    <div className="w-full min-h-screen">
      <br />
      <br />
      <br />

      <div className="flex justify-center">
        <div className=" mx-[10px] md:mx-[60px] lg:mx-[200px] w-full">
          <div className="bg-[#ffb4a7] px-[20px] md:px-[40px] py-[30px] rounded-[30px] text-center">
            <div>
              <span className="font-extrabold text-[38px] md:text-[50px]">
                BRICK-O-BRICK
              </span>
            </div>
            <div className="flex justify-center">
              <div className="w-[100px] h-[4px] bg-[#ff583e]  " />
            </div>
            <div className="mt-[15px] font-bold  text-[16px] md:text-[18px]">
              <div>
                <span>
                  Date - <sup> </sup>
                </span>
              </div>
              <div>
                <span>Time - 00:00</span>
              </div>
              <div>
                <span>Venue - </span>
              </div>
            </div>
            <div className="font-bold text-[22px] md:text-[28px] leading-none mt-[10px] md:mt-0 ">
              <span>Registration Fee - ₹250 per team</span>
            </div>
            <div className="mt-[10px]">
              <span className="font-semibold text-[18px]">
                All the teams must have 4 members each.
              </span>
            </div>
            <Link to={`https://erp.skit.ac.in/register/r/brick_o_brick`} 
            target='_blank'>
              <div className="mt-[10px] font-semibold">
                <button className="bg-[#ff583e] hover:bg-white text-white hover:text-[#ff583e] duration-300 hover:ring-1 ring-[#ff583e] pt-[9px] pb-[9px] pl-[18px] pr-[18px] lg:pt-[11px] lg:pb-[11px] lg:pl-[20px] lg:pr-[20px] rounded-[8px] text-[14px] lg:text-[16px]  self-center">
                  Register Now
                </button>
              </div>
            </Link>
          
            <div className="mt-[10px]">
              <span>
                <b> For more details -  Siddharth Lawaniya: {" "}
                <a  target="blank" className="underline">
                  {" "}
                  +91 6377766785
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
                  In Brick O Brick, teams of four will construct a wall using
                  bricks, cement, and water. Focus on teamwork, creativity, and
                  mindfulness. Each team is encouraged to collaborate
                  effectively, ensuring a fun and engaging experience for all
                  participants.
                  </span>
                </div>
                iv className="text-center  mb-[50px]"
                <div className=" mb-[10px] ">
                  <span className="font-bold  text-[20px] underline  ">
                  Rules And Regulations
                  </span>
                </div>
                <div className="mx-[20px] md:mx-[120px] xl:mx-[220px] ">
                  <span className="text-[17px] font-semibold">
                  1. Participants must have a team of 4 members.<br/>
2. Use of unfair means and getting help from others will
result in disqualification.<br/>
3. All the members of the team should be present on time
of commencement.<br/>
4. Limited quantity of cement and bricks will be provided.<br/>
5. We will not be responsible for any injuries caused
during the game.
                  </span>
                </div>
                <div className="flex justify-center">
                  <img src={bob_img} />
                </div>
                <div className="mt-[20px]">
                  <span className="font-semibold">Dimensions</span>
                </div>
                <div>
                  <div>
                    <span>First side - 31 inches</span>
                  </div>
                  <div>
                    <span>Other side - 36 inches</span>
                  </div>
                  <div>
                    <span>Height of the structure - 19 inches</span>
                  </div>
                </div>
              </div>

              <div className="text-center  mb-[50px]">
                <div className=" mb-[10px] underline">
                  <span className="font-bold  text-[20px]">PARTICIPATION</span>
                </div>
                <div>
                  <span className="font-semibold text-[17px]">
                  In teams. Must have 4 members each.

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
                      <tr className="p-[20px]">
                        <th className="pr-[50px]">Materials</th>
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
              <span className="font-bold underline text-[20px] uppercase ">
                Time Limits
              </span>
            </div>
            <div className="text-center mt-[10px]">
              <div>
                <span>Event timing - 2hrs</span>
              </div>
              <div>
                <span>Briefing Time - 15min (starting)</span>
              </div>
              <div>
                <span>Time limit for the task - 45 min</span>
              </div>
              <div>
                <span>Result and checking - 1hr</span>
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
            <div>
              <span className="text-[17px] ">
                Judgement will be done on the basis of - .
              </span>
            </div>
            <div className=" flex justify-center text-[17px]">
              <div>
                <div>
                  <span>● On the basis of appearance/geometry.<br/>
                        ● Placement of Bricks and its bond alignment.<br/>
                        ● 90° angle between the corners of wall.<br/>
                        ● Straightness of wall.<br/>
                        ● Space of each step must be same.</span>
                </div> 
                <div className="text-center mb-[10px]">
              <span className="font-bold text-[20px] underline">
              DISQUALIFICATIO CRITERIA
              </span>
            </div>
            <div>
                  <span>1.Participant will be disqualified if they are found getting
external help.<br/>
2. Participants will be disqualified for late arrival.<br/>
3. Sabotaging other teams will lead in disqualification.</span>
                </div>               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ROBOSOCCER;
