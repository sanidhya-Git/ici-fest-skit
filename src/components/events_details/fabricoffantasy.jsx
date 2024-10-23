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

const Fabric = () => {
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
                Fabric Of Fantacy
              </span>
            </div>
            <div className="flex justify-center">
              <div className="w-[100px] h-[4px] bg-[#ff583e]  " />
            </div>
            <div className="mt-[15px] font-bold  text-[16px] md:text-[18px]">
              <div>
                <span>
                  Date - 10<sup>th </sup>November 2024
                </span>
              </div>
              <div>
                <span>Time - 12:00 NOON - 02:00 PM</span>
              </div>
              <div>
                <span>Venue - CAEG Lab</span>
              </div>
            </div>
            <div className="font-bold text-[22px] md:text-[28px] leading-none mt-[10px] md:mt-0 ">
              <span>Registration Fee - ₹150 per team</span>
            </div>
            <div className="mt-[10px]">
              <span className="font-semibold text-[18px]">
                All the teams must have 3 members each.
              </span>
            </div>
            <Link to={`https://erp.skit.ac.in/register/r/fabricoffantacy`} 
            target='_blank'>
              <div className="mt-[10px] font-semibold">
                <button className="bg-[#ff583e] hover:bg-white text-white hover:text-[#ff583e] duration-300 hover:ring-1 ring-[#ff583e] pt-[9px] pb-[9px] pl-[18px] pr-[18px] lg:pt-[11px] lg:pb-[11px] lg:pl-[20px] lg:pr-[20px] rounded-[8px] text-[14px] lg:text-[16px]  self-center">
                  Register Now
                </button>
              </div>
            </Link>
          
            <div className="mt-[10px]">
              <span>
                <b> For more details - Krishna Awasthi {" "}
                <a  target="blank" className="underline">
                  {" "}
                  +91 9649722470
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
                  <b>Fabric of Fantasy</b> is a creative event where teams of three will turn plain T-shirts into unique
                  pieces of art. Participants must bring their own colors and tools, allowing full artistic freedom. Held
                  at the <b>CAEG Lab</b>, the event encourages creativity in a fun and relaxed environment.
                  </span>
                </div>
                <div className=" mb-[10px] ">
                  <span className="font-bold  text-[20px] underline  ">
                  Materials:
                  </span>
                </div>
                <div className="mx-[20px] md:mx-[120px] xl:mx-[220px] ">
                  <span className="text-[17px] font-semibold">
                  Teams must bring their own colors and tools (paint, markers, etc.) to decorate the T-shirts.<br/>
 No sharp or hazardous objects are allowed in the decoration process.
                  </span>
                </div>
                
              </div>

              <div className="text-center  mb-[50px]">
                <div className=" mb-[10px] underline">
                  <span className="font-bold  text-[20px]">PARTICIPATION</span>
                </div>
                <div>
                  <span className="font-semibold text-[17px]">
                    All the teams must have 3 members each.
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
            <div className="text-center">
              <span className="font-bold underline text-[20px] uppercase ">
                Time Limits
              </span>
            </div>
            <div className="text-center mt-[10px]">
              <div>
                <span> Each team will have 2 hours to complete their T-shirt design.<br/>
Participants must complete their work within this time frame.<br/>
 A warning will be given 15 minutes before the event ends to help teams manage their time.</span>
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
               <b> Judgement will be done on the basis of - </b>
              </span>
            </div>
            <div className=" flex justify-center text-[17px]">
              <div>
                <div>
                  <span>Creativity and Originality (30%): How unique and innovative the design is.<br/>
                        Aesthetic Appeal (25%): The overall visual impact of the design on the T-shirt.<br/>
                        Theme Integration (20%): How well the design aligns with any chosen theme (if applicable).<br/>
                        Skill and Technique (15%): The level of artistry and skill displayed in applying the design.<br/> 
                        Completion (10%): Whether the design is fully realized within the given time.</span>
                </div>
                
              </div>
            </div>
            <div className="text-center mb-[10px]">
              <span className="font-bold text-[20px] underline">
                DISQUALIFICATION CRITERIA
              </span>
            </div>
            <div>
              <span className="text-[17px] ">
               <b> Participants may be disqualified from the competition for the following reasons: </b>
              </span>
            </div>
            <div className=" flex justify-center text-[17px]">
              <div>
                <div>
                  <span><b>Inappropriate Content:</b> Any design that includes offensive, vulgar, or<br/> inappropriate imagery or
                        language will lead to immediate disqualification.<br/>
                       <b>Damage to Materials:</b> Deliberate damage to the provided T-shirts or <br/>other participants' materials
                        will result in disqualification.<br/>
                        <b>Team Composition Violation:</b> Only registered team members are allowed to participate. If any<br/>
                        external individual is found contributing to the design, the team will be disqualified.<br/>
                        <b>Misconduct:</b> Teams found engaging in misconduct, including disturbing other <br/>participants or
                        violating the venue’s rules, will be disqualified.<br/>
                        <b>Use of Hazardous Materials:</b> Teams using any materials that pose safety hazards,<br/> such as
                        flammable or toxic substances, will face disqualification.</span>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fabric;
