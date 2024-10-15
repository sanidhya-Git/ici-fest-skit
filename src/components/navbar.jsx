 
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { skit_logo, ici_logo } from "../assets";
import useHamburgerMenu from "./hamburger";

const Navbar = () => {
  const [divClass, setDivClass] = useState("nav_bg_1");
  const [imgSize, setImgSize] = useState("img_size_1");

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 1024) {
        var scroll_amount = 40;
      } else {
        scroll_amount = 20;
      }
      if (window.scrollY >= scroll_amount) {
        setDivClass("nav_bg_2");
        setImgSize("img_size_2");
      } else {
        setDivClass("nav_bg_1");
        setImgSize("img_size_1");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useHamburgerMenu();

  return (
    <>
      <header
        className={`mx-[20px] flex justify-center pt-[10px] pr-[15px] pl-[15px] min-[375px]:pr-[25px] min-[375px]:pl-[25px] pb-[10px] sticky top-0 z-10 duration-200 ${divClass} z-50 `}
      >
        <nav className="w-full flex justify-between items-center">
          <div className="flex items-center ">
            <div className="flex items-center gap-2 hamburger">
              <div className="block xl:hidden mr-3 float-left ">
                <span className="block w-[20px] h-[3px] mt-[5px] mb-[5px] mr-auto ml-auto bg-black rounded-full bar"></span>
                <span className="block w-[20px] h-[3px] mt-[5px] mb-[5px] mr-auto ml-auto bg-black rounded-full bar"></span>
                <span className="block w-[20px] h-[3px] mt-[5px] mb-[5px] mr-auto ml-auto bg-black rounded-full bar"></span>
              </div>
              <div className="flex gap-[20px] items-center">
                <div>
                  <div className="flex justify-center text-center">
                    <img
                      src={skit_logo}
                      className={`duration-300  ${imgSize}`}
                    />
                  </div>
                  <div className="text-center hidden md:block">
                    <span className={`duration-300 ${imgSize}`}>
                      Swami Keshvanand Institute of
                    </span>
                  </div>
                  <div className="text-center hidden md:block  -mt-[5px]">
                    <span className={`duration-300 ${imgSize}`}>
                      Technology, M&G, Jaipur
                    </span>
                  </div>
                  <div className="text-center  block md:hidden leading-none ">
                    <span className={`duration-300 ${imgSize}`}>
                      Swami Keshvanand Institute of Technology, M&G, Jaipur
                    </span>
                  </div>
                </div>
                <div className="mt-[4px] md:mt-[8px]">
                  <div className="flex justify-center">
                    <img src={ici_logo} className={`duration-300 ${imgSize}`} />
                  </div>
                  <div className=" text-center hidden md:block">
                    <span className={`duration-300 ${imgSize}`}>
                      Indian Concrete Institute
                    </span>
                  </div>
                  <div className="text-center hidden md:block -mt-[5px]">
                    <span className={`duration-300 ${imgSize}`}>
                      Rajasthan State Center
                    </span>
                  </div>
                  <div className="text-center mt-[2px] md:mt-0 block md:hidden leading-none">
                    <span className={`duration-300 ${imgSize}`}>
                      Indian Concrete Institute Rajasthan State Center
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center font-bold ">
            <div>
              <ul className="hidden xl:flex gap-[20px] text-[13px] lg:text-[16px] items-center text-black">
                <li className="hover:border-b-[3px] duration-100 px-[10px] hover:pb-[8px] border-[#ff583e]">
                  <Link to="/">HOME</Link>
                </li>
                <li className="hover:border-b-[3px] duration-100 px-[10px] hover:pb-[8px] border-[#ff583e]">
                  <Link to="/gallery">GALLERY</Link>
                </li>
                <li className="hover:border-b-[3px] duration-100 px-[10px] hover:pb-[8px] border-[#ff583e]">
                  <Link to="/aboutteam">ABOUT</Link>
                </li>
                <li className="hover:border-b-[3px] duration-100 px-[10px] hover:pb-[8px] border-[#ff583e]">
                  <Link to="/events">EVENTS</Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="nav-menu flex xl:hidden ">
                <li className="nav-link">
                  <a href="/">Home</a>
                </li>
                <li className="nav-link">
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li className="nav-link">
                  <Link to="/aboutteam">About</Link>
                </li>
                <li className="nav-link">
                  <Link to="/events">Events</Link>
                </li>
                <li className="block md:hidden nav-link">
                  <Link to="/events">
                    <button className="bg-[#ff583e] hover:bg-white text-white hover:text-[#ff583e] duration-300 hover:ring-1 ring-[#ff583e] pt-[9px] pb-[9px] pl-[18px] pr-[18px] lg:pt-[11px] lg:pb-[11px] lg:pl-[20px] lg:pr-[20px] rounded-[8px] text-[12px] lg:text-[14px]  self-center">
                      Register Now
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-[0.5px] mr-[25px] ml-[25px] h-[30px] bg-black hidden xl:block " />
            <Link to="/events">
              <button className="bg-[#ff583e] hover:bg-white text-white hover:text-[#ff583e] duration-300 hover:ring-1 ring-[#ff583e] pt-[9px] pb-[9px] pl-[18px] pr-[18px] lg:pt-[11px] lg:pb-[11px] lg:pl-[20px] lg:pr-[20px] rounded-[8px] text-[12px] lg:text-[16px] self-center hidden md:block">
                Register Now
              </button>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
