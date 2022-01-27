import React from "react";
import { BsBag, BsHeart, BsWallet2, BsLightbulb } from "react-icons/bs";

function Digital() {
  return (
    <>
      <div className="bg-[#E8D814] pb-32 text-white transform rotate-6 w-[107%] -mx-12 overflow-hidden">
        <div className="max-w-6xl pt-20 mx-auto transform -rotate-6 h-full grid grid-cols-2">
          <div className="px-2">
            <h1 className="text-5xl font-medium font-oswald pb-5 tracking-wide">
              WE ARE
            </h1>

            <h1 className="text-5xl text-black-100 font-medium font-oswald pb-12 tracking-wide">
              DIGITAL <span className="text-white">AGENCY </span>
            </h1>
            <p className="text-base font-thin text-white font-roboto pb-7 max-w-xs tracking-wide">
              Lorem ipsum is simply dummy text of the printing and typesetting.
              Lorem Ipsum has been the industry’s standard dummy. Lorem ipsum is
              simply dummy text of the printing and design.
            </p>
            <button className="transition duration-500 w-44 py-4 font-roboto flex items-center justify-center bg-black-100 rounded-full mt-4  text-white  hover:text-black-100 hover:bg-white text-sm ">
              Learn More
            </button>
          </div>
          <div className="h-full pt-32">
            <div className="grid grid-cols-2 gap-10">
              <div className="flex flex-col items-start group cursor-pointer">
                <BsBag className="text-white h-32 w-32" />
                <p className="text-2xl text-black-100 font-thin mt-5 text-center whitespace-nowrap overflow-hidden">
                  Make Business
                </p>
              </div>
              <div className="flex flex-col items-start group cursor-pointer">
                <BsHeart className="text-white h-32 w-32" />
                <p className="text-2xl text-black-100 font-thin mt-5 text-center whitespace-nowrap overflow-hidden">
                  Make Business
                </p>
              </div>
              <div className="flex flex-col items-end group cursor-pointer">
                <BsWallet2 className="text-white h-32 w-32" />
                <p className="text-2xl text-black-100 font-thin mt-5 text-center whitespace-nowrap overflow-hidden">
                  Make Business
                </p>
              </div>
              <div className="flex flex-col items-end group cursor-pointer">
                <BsLightbulb className="text-white h-32 w-32" />
                <p className="text-2xl text-black-100 font-thin mt-5 text-center whitespace-nowrap overflow-hidden">
                  Make Business
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -mt-40 z-20 mx-auto pl-72 max-w-6xl w-full">
        <img
          src="https://megaone.acrothemes.com/digital-agency/img/pot.png"
          alt=""
        />
      </div>
    </>
  );
}

export default Digital;
