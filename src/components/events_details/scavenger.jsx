import React, { useState } from "react";
import { Link } from "react-router-dom";

const SH = () => {
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
                Scavenger Hunt
              </span>
            </div>
            <div className="flex justify-center">
              <div className="w-[100px] h-[4px] bg-[#ff583e]  " />
            </div>
            <div className="mt-[15px] font-bold  text-[16px] md:text-[18px]">
              <div>
                <span>
                  Date -<sup> </sup>
                </span>
              </div>
              <div className="mt-[10px]">
                <span>Time - </span>
              </div>
              {/* <div className='mt-[10px]'><span>Venue - </span></div> */}
              {/* <div><span>Tech zone in football ground</span></div> */}
            </div>
            <div className="font-bold text-[22px] md:text-[28px] leading-none  mt-[10px] ">
              <span>Registration Fee - ₹250 per team</span>
            </div>
            <div className="mt-[10px]">
              <span className="font-semibold text-[18px]">
                All the teams must have 4 members each.
              </span>
            </div>
            <a href="https://erp.skit.ac.in/register/r/scavengehunt">
              <div className="mt-[10px] font-semibold">
                <button className="bg-[#ff583e] hover:bg-white text-white hover:text-[#ff583e] duration-300 hover:ring-1 ring-[#ff583e] pt-[9px] pb-[9px] pl-[18px] pr-[18px] lg:pt-[11px] lg:pb-[11px] lg:pl-[20px] lg:pr-[20px] rounded-[8px] text-[14px] lg:text-[16px]  self-center">
                  Register Now
                </button>
              </div>
            </a>
            {/* <Link to="/response">
              <div className="mt-[10px] font-semibold">
                <button className="bg-[#ff583e] hover:bg-white text-white hover:text-[#ff583e] duration-300 hover:ring-1 ring-[#ff583e] pt-[9px] pb-[9px] pl-[18px] pr-[18px] lg:pt-[11px] lg:pb-[11px] lg:pl-[20px] lg:pr-[20px] rounded-[8px] text-[14px] lg:text-[16px]  self-center">
                  Register Now
                </button>
              </div>
            </Link> */}
            <div className="mt-[10px]">
              <span>
                <b>
                  {" "}
                  For more details - Palak Soni :{" "}
                  <a
                    href="https://wa.me/8302367735"
                    target="blank"
                    className="underline"
                  >
                    {" "}
                    +91 7597646465
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
                <div className=" mb-[10px] underline">
                  <span className="font-bold  text-[20px]">
                    EVENT DESCRIPTION
                  </span>
                </div>
                <div className="mx-[20px] md:mx-[120px] xl:mx-[220px] ">
                  <span className="text-[17px] font-semibold">
                    This scavenger hunt is going to be one of the thrilling and
                    inspiring events of ICI FEST 2023. Scavenger hunt is a game
                    in which the organizers prepare a list of specific items,
                    challenges, or activities that the participants must find,
                    complete, or perform. There are 7 levels in the game. All
                    the levels are contrary and stimulating. <br />A map of SKIT
                    campus will be provided to every team.
                  </span>
                </div>
                <div className="text-left flex justify-center">
                  <div>
                    <div className="mt-[20px]">
                      <span className="font-bold text-[18px] ">Rule Book</span>
                    </div>
                    <div className="text-[18px] ">
                      <ul>
                        <li>
                          1. Participants must participate in team of 4 members.
                        </li>
                        <li>
                          2. All the cell phones will be collected at the
                          briefing time of event.
                        </li>
                        <li>
                          3. There is disqualification of teams at every level..
                        </li>
                        <li>
                          4. Use of unfair means and gossip with other teams is
                          not allowed.
                        </li>
                        <li>
                          5. All the 4 members should be present at the time of
                          answer checking.
                        </li>
                        <li>
                          6. The team leader will be very significant for the
                          event. <br /> There might be one or more levels in
                          which the leader will perform on the behalf of
                          the entire team.
                        </li>
                      </ul>
                    </div>
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
            </div>
          </div>
          <div
            className={`${
              activeButton === 1 ? "active-div" : "deactive-div"
            } text-[18px] `}
          >
            <div className="text-center">
              <span>
                There are <b>various levels</b> in the games. Each level has
                some specific task.
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
            <div className="flex justify-center text-[17px] text-center font-semibold">
              <div>
                <div>
                  <span>
                    The First team to solve the last level is going to be the
                    winner.
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

export default SH;
