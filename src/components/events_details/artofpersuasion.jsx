import React, { useState } from "react";
import { Link } from "react-router-dom";

const materialData = [{ material: "A4 Size Sheets", quantity: "2-3" }];

const ARTOFPERSUASION = () => {
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
                ART OF PERSUASION
              </span>
            </div>
            <div className="text-center mb-[10px]">
              <span className="font-semibold text-[18px] uppercase">
                Essay Writing Competition
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
                <span>Time - 11:30 am - 12:30 pm</span>
              </div>
              <div className="mt-[10px]">
                <span>Venue - COS Lab 2nd Floor, Civil Block</span>
              </div>
              {/* <div><span>Tech zone in football ground</span></div> */}
            </div>

            <div className="font-bold text-[22px] md:text-[28px] leading-none  mt-[10px] ">
              <span>Registration Fee - ₹50 per individual</span>
            </div>

            {/* <a href="https://erp.skit.ac.in/register/r/Cyclo_Walka">
              <div className="mt-[10px] font-semibold">
                <button className="bg-[#ff583e] hover:bg-white text-white hover:text-[#ff583e] duration-300 hover:ring-1 ring-[#ff583e] pt-[9px] pb-[9px] pl-[18px] pr-[18px] lg:pt-[11px] lg:pb-[11px] lg:pl-[20px] lg:pr-[20px] rounded-[8px] text-[14px] lg:text-[16px]  self-center">
                  Register Now
                </button>
              </div>
            </a> */}

            <Link to="/response">
              <div className="mt-[10px] font-semibold">
                <button className="bg-[#ff583e] hover:bg-white text-white hover:text-[#ff583e] duration-300 hover:ring-1 ring-[#ff583e] pt-[9px] pb-[9px] pl-[18px] pr-[18px] lg:pt-[11px] lg:pb-[11px] lg:pl-[20px] lg:pr-[20px] rounded-[8px] text-[14px] lg:text-[16px]  self-center">
                  Register Now
                </button>
              </div>
            </Link>
            <div className="mt-[10px]">
              <span>
                <b> For more details -</b> Anushka Jain: {" "}
                <a href="https://wa.me/6377561290" target="blank" className="underline">
                  {" "}
                  &nbsp;+91 6377561290
                </a>
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
                  <span className="text-[18px] font-semibold">
                    It's an essay writing. Participants will have to write an
                    essay on the provided topic.{" "}
                  </span>
                  <span className="text-[18px] font-bold ">
                    {" "}
                    <br />
                    Topic - "Beyond Blueprints: Integrating multidisciplinary
                    knowledge into civil engineering".
                  </span>
                </div>
                <div>
                  <span className="font-semibold">Word Limit: </span>
                  <span> 600 - 750 words</span>
                </div>
              </div>

              <div className="text-center  mb-[50px]">
                <div className=" mb-[10px] underline">
                  <span className="font-bold  text-[20px]">PARTICIPATION</span>
                </div>
                <div>
                  <span className="font-semibold text-[17px]">
                    Individual Participant.
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
                        <th className="pr-[50px]">
                          Materials
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
            <div className="flex justify-center mt-[10px] text-left md:text-center mx-[10px]">
              <div>
                <div>
                  <span className="font-bold">Writing Essay</span>
                </div>
                <div>
                  <span>
                    Participants will be given <b>1 hour </b>to wite their
                    essay.
                  </span>
                </div>

                <div className="mt-[10px]">
                  <span className="font-bold">
                    Reviewing and Finalzing Winners
                  </span>
                </div>
                <div>
                  <span>
                    Your essay will be judged on word limit and grammer.
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
                <div className="mt-[10px]">
                  <span>
                    <b>Grammer and Word Limit</b>
                  </span>
                </div>
                <div>
                  <span>
                    Your essay will be judged on word limit and grammer.
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

export default ARTOFPERSUASION;
