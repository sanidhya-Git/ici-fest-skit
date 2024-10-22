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
                Fabric Of Fantasy
              </span>
            </div>
            <div className="flex justify-center">
              <div className="w-[100px] h-[4px] bg-[#ff583e]  " />
            </div>
            <div className="mt-[15px] font-bold  text-[16px] md:text-[18px]">
              <div>
                <span>
                  Date - <sup></sup>
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
                All the teams must have 3 members each.
              </span>
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
                <b> For more details - Krishna Awasthi {" "}
                <a href="https://wa.me/8529058592" target="blank" className="underline">
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
                    Construct a structurally sound L-shaped step wall using
                    bricks. The challenge is to create a design that showcases
                    the versatility of brick as a building material, while
                    ensuring the wall's stability and safety for users.
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
                    All the teams must have 4 members each.
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
                  <span>1. Appearance and Geometry.</span>
                </div>
                <div>
                  <span>2. Placement of Bricks and it's bond alignment.</span>
                </div>
                <div>
                  <span>3. 90° angle between the corners of wall.</span>
                </div>
                <div>
                  <span>4. Straightness of wall.</span>
                </div>
                <div>
                  <span>5. Length of each step must be same.</span>
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
