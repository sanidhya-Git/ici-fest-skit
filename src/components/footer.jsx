 
import { Link } from "react-router-dom";
import { mainlogo } from "../assets";

import {
  quicklink_icon,
  social_icon,
  location_icon,
  help_icon,
  contact_icon,
} from "../assets";

const Footer = () => {
  return (
    <>
      <div className="bg-black text-white mt-[50px] mx-[20px]  max-[320px]:mx-[10px] max-[320px]:mb-[10px] xl:mx-[40px] p-[20px] rounded-[20px] mb-[20px] xl:mb-[20px] ">
        <div className="  sm:ml-[50px]  mb-[20px]">
          <img src={mainlogo} className="w-[300px]" />
        </div>
        <div className="hidden lg:flex justify-center gap-[40px] xl:gap-[80px]">
          <div className="mt-[5px]">
            <div className="mb-[10px] flex items-center gap-1">
              <span>
                <img src={location_icon} className="w-[18px] aspect-square" />
              </span>
              <span className="font-bold text-[18px]">Address</span>
            </div>
            <a
              href="https://goo.gl/maps/mSYxHLo2vmUsTqUu9"
              target="blank"
              className=""
            >
              <div className="mt-[5px] text-[15px] hidden xl:block text-[#fff] ml-[20px]">
                SKIT Campus, Ram Nagariya Rd, Shivam Nagar, Jagatpura,
              </div>
              <div className=" text-[15px] hidden xl:block text-[#fff] ml-[20px]">
                {" "}
                Jaipur, Rajasthan 302017
              </div>
              <div>
                <span className="text-[#fff] hidden xl:block underline text-[13px] ml-[20px]">
                  see on map
                </span>
              </div>
            </a>
            <a
              href="https://goo.gl/maps/mSYxHLo2vmUsTqUu9"
              target="blank"
              className=""
            >
              <div className="mt-[5px] text-[15px] block xl:hidden text-[#fff]">
                SKIT Campus, Ram Nagariya Rd, Shivam Nagar,
              </div>
              <div className=" text-[15px] block xl:hidden text-[#fff]">
                Jagatpura, Jaipur, Rajasthan 302017
              </div>
              <div>
                <span className="text-[#fff] block xl:hidden underline text-[13px]">
                  see on map
                </span>
              </div>
            </a>
          </div>
          <div>
            <div className="mb-[10px] flex items-center  ">
              <span>
                <img
                  src={quicklink_icon}
                  className="w-[24px] aspect-square rotate-90"
                />
              </span>
              <span className=" font-bold text-[18px] ">Quick Links</span>
            </div>
            <div className="text-[15px] mt-[5px] ">
              <ul className="text-[#fff] ml-[30px]">
                <li className="hover:text-[#ff583e] duration-300 mb-[10px] text-[#fff]">
                  <a
                    href="https://drive.google.com/drive/folders/1y3hMlWEWZzpL_iN8EpH9gIPhBKFBIDQ4?usp=sharing"
                    target="blank"
                  >
                    Gallery
                  </a>
                </li>
                <li className="hover:text-[#ff583e] duration-300 mb-[10px]">
                  <Link to="/events">Events</Link>
                </li>
                <li className="hover:text-[#ff583e] duration-300 mb-[10px]">
                  <Link to="/registrations">Register Now</Link>
                </li>
                <li className="hover:text-[#ff583e] duration-300">
                  <a href="mailto:prashant.s2922@gmail.com">Report Bug</a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div>
              <div className="mb-[10px] flex gap-2 items-center   ">
                <span className=" text-[18px]">
                  <img src={social_icon} className="w-[18px] aspect-square" />
                </span>
                <span className="font-bold text-[18px]">Socials</span>
              </div>
              <div className="text-[15px] mt-[5px] ml-[28px]  ">
                <ul className="text-[#fff]">
                  <li className="hover:text-[#ff583e] duration-300 mb-[10px]">
                    <a
                      href="https://www.instagram.com/ici_skit/"
                      target="blank"
                    >
                      Instagram
                    </a>
                  </li>
                  <li className="hover:text-[#ff583e] duration-300 mb-[10px]">
                    <a
                      href="https://m.youtube.com/@ICIFest_SKIT"
                      target="blank"
                    >
                      YouTube
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <br />
            <div>
              <div className=" flex items-center gap-2">
                <span className=" ">
                  <img src={contact_icon} className="w-[18px] aspect-square" />
                </span>
                <span className="font-bold text-[18px]">Contact</span>
              </div>
              <div className="text-[15px] mt-[10px] ml-[28px] ">
                <ul className="text-[#fff]">
                  <li className="hover:text-[#ff583e] duration-300 mb-[10px]">
                    <a href="mailto:icifest@skit.ac.in">icifest@skit.ac.in</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="">
                <img src={help_icon} className="w-[18px] aspect-square" />
              </span>
              <span className="font-bold text-[18px]">Help and Query</span>
            </div>
            <div className="text-[15px] mt-[10px] ml-[28px] ">
              <ul className="text-[#fff]">
                <li className="hover:text-[#ff583e] duration-300  mb-[10px]">
                  Saarthak Chopra -
                  <a href="https://wa.me/9571285091" target="blank">
                    {" "}
                    &nbsp;+91 9571285091
                  </a>
                </li>
                <li className="hover:text-[#ff583e] duration-300  mb-[10px]">
                  Uday singh Sisodia -
                  <a href="https://wa.me/7733917219" target="blank">
                    {" "}
                    &nbsp;+91 7733917219
                  </a>
                </li>
                <li className="hover:text-[#ff583e] duration-300  mb-[10px]">
                  Puneet Dadheech -
                  <a href="https://wa.me/8619106882" target="blank">
                    {" "}
                    &nbsp;+91 8619106882
                  </a>
                </li>
                <li className="hover:text-[#ff583e] duration-300  mb-[10px]">
                  Nupur Agarwal -
                  <a href="https://wa.me/8209753424" target="blank">
                    {" "}
                    &nbsp;+91 8209753424
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="block lg:hidden gap-[40px] xl:gap-[100px] mt-[20px]">
          <div className="block md:flex gap-[40px]">
            <div>
              <div className="flex items-center gap-1">
                <span className="">
                  <img src={location_icon} className="w-[18px] aspect-square" />
                </span>
                <span className="text-[16px] md:text-[18px] font-bold">
                  Address
                </span>
              </div>
              <a
                href="https://goo.gl/maps/mSYxHLo2vmUsTqUu9"
                target="blank"
                className=""
              >
                <div className="mt-[5px] text-[15px] hidden xl:block text-[#fff]">
                  SKIT Campus, Ram Nagariya Rd, Shivam Nagar, Jagatpura,
                </div>
                <div className=" text-[15px] hidden xl:block text-[#fff]">
                  {" "}
                  Jaipur, Rajasthan 302017
                </div>
                <div>
                  <span className="text-[#fff] hidden xl:block underline text-[13px]">
                    see on map
                  </span>
                </div>
              </a>
              <a
                href="https://goo.gl/maps/mSYxHLo2vmUsTqUu9"
                target="blank"
                className=""
              >
                <div className="mt-[5px] text-[13px] md:text-[15px] ml-[23px] max-[320px]:hidden block xl:hidden text-[#fff]">
                  SKIT Campus, Ram Nagariya Rd, Shivam Nagar,
                </div>
                <div className=" text-[13px] md:text-[15px] max-[320px]:hidden ml-[23px] block xl:hidden text-[#fff]">
                  Jagatpura, Jaipur, Rajasthan 302017
                </div>
                <div>
                  <span className="text-[#fff] underline text-[12px] ml-[23px]  md:text-[13px] max-[320px]:hidden block xl:hidden">
                    see on map
                  </span>
                </div>
              </a>
              <a
                href="https://goo.gl/maps/mSYxHLo2vmUsTqUu9"
                target="blank"
                className=""
              >
                <div className="mt-[5px] text-[13px] md:text-[15px] max-[320px]:block hidden text-[#fff] ml-[20px]">
                  SKIT Campus, Ram Nagariya Rd, Shivam Nagar, Jagatpura, Jaipur,
                  Rajasthan 302017
                </div>
                <div>
                  <span className="text-[#fff] underline  text-[12px] ml-[20px] md:text-[13px] max-[320px]:block hidden">
                    see on map
                  </span>
                </div>
              </a>
            </div>

            <div>
              <div className="mt-[10px] md:mt-0 ">
                <div className="flex items-center gap-1">
                  <span className="">
                    <img
                      src={contact_icon}
                      className="w-[18px] aspect-square"
                    />
                  </span>
                  <span className=" text-[16px] md:text-[18px] font-bold">
                    Contact
                  </span>
                </div>
                <div className="text-[13px] md:text-[15px] mt-[3px] md:mt-[5px] ml-[23px] ">
                  <ul className="text-[#fff]">
                    <li className="hover:text-[#ff583e] duration-300">
                      <a href="mailto:icifest@skit.ac.in">icifest@skit.ac.in</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-[15px] block sm:hidden md:mt-0">
                <div className="flex items-center gap-1">
                  <span>
                    <img src={social_icon} className="w-[18px] aspect-square" />
                  </span>
                  <span className="text-[16px] md:text-[18px] font-bold">
                    Socials
                  </span>
                </div>
                <div className="text-[13px] md:text-[15px] mt-[3px] md:mt-[5px] ml-[22px] ">
                  <ul className="text-[#fff]">
                    <li className="hover:text-[#ff583e] duration-300">
                      <a
                        href="https://www.instagram.com/ici_skit/"
                        target="blank"
                      >
                        Instagram
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-normal gap-[155px]  max-[450px]:mt-[0px]  mt-[20px]">
            <div className="mt-[15px] md:mt-0">
              <div className="flex items-center gap-1">
                <span>
                  <img src={help_icon} className="w-[18px] aspect-square" />
                </span>
                <span className="text-[16px] md:text-[18px] font-bold">
                  Help and Query
                </span>
              </div>
              <div className="text-[13px] md:text-[15px] mt-[3px] md:mt-[5px]  ml-[24px] ">
                <ul className="text-[#fff]">
                  <li className="hover:text-[#ff583e] duration-300">
                    Saarthak Chopra -
                    <a href="https://wa.me/9571285091">&nbsp;+91 9571285091</a>
                  </li>
                  <li className="hover:text-[#ff583e] duration-300">
                    Uday singh Sisodia -
                    <a href="https://wa.me/7733917219">&nbsp;+91 7733917219</a>
                  </li>
                  <li className="hover:text-[#ff583e] duration-300">
                    Puneet Dadheech -
                    <a href="https://wa.me/8619106882">&nbsp;+91 8619106882</a>
                  </li>
                  <li className="hover:text-[#ff583e] duration-300">
                    Nupur Agarwal -
                    <a href="https://wa.me/8209753424">&nbsp;+91 8209753424</a>
                  </li>
                  <li className="hover:text-[#ff583e] duration-300">
                    <a href="mailto:prashant.s2922@gmail.com">Report Bug</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="max-[450px]:hidden">
              <div className="flex items-center gap-1">
                <span>
                  <img src={social_icon} className="w-[18px] aspect-square" />
                </span>
                <span className="text-[16px] md:text-[18px] font-bold">
                  Socials
                </span>
              </div>
              <div className="text-[13px] md:text-[15px] mt-[5px] ml-[22px] ">
                <ul className="text-[#fff]">
                  <li className="hover:text-[#ff583e] duration-300">
                    <a
                      href="https://www.instagram.com/ici_skit/"
                      target="blank"
                    >
                      Instagram
                    </a>
                  </li>
                  <li className="hover:text-[#ff583e] duration-300 mb-[10px]">
                    <a
                      href="https://m.youtube.com/@ICIFest_SKIT"
                      target="blank"
                    >
                      YouTube
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className=" text-[#fff] text-[10px] md:text-[12px] mt-[30px] md:mt-[10px] ">
          <div>
            <span>All rights are Reserved.</span>
          </div>
          <div>
            <span>&copy; SKIT 2023</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
