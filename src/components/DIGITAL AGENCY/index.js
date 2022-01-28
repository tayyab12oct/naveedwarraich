import React from "react";
import { BsBag, BsHeart, BsWallet2, BsLightbulb } from "react-icons/bs";

function Digital() {
  return (
    <>
      <div id="about" className="bg-[#E8D814] md:pb-32 text-white">
        <div className="max-w-6xl lg:pt-32 md:pt-56 pt-20 pb-10 mx-auto h-full grid lg:grid-cols-2 grid-cols-1">
          <div className="md:px-2 px-10 md:text-left flex-col flex lg:text-left">
            <h1 className="text-5xl font-medium font-oswald pb-5 tracking-wide">
              WE ARE
            </h1>

            <h1 className="text-5xl text-black-100 font-medium font-oswald pb-12 tracking-wide">
              DIGITAL <span className="text-white">AGENCY </span>
            </h1>
            <p className="text-base font-thin text-white font-roboto pb-7 md:pr-36 tracking-wide">
              Lorem ipsum is simply dummy text of the printing and typesetting.
              Lorem Ipsum has been the industry’s standard dummy. Lorem ipsum is
              simply dummy text of the printing and design.
            </p>
            <button className="transition self-start duration-500 w-44 py-4 font-roboto flex md:mx-0 mx-auto items-center justify-center bg-black-100 rounded-full mt-4  text-white  hover:text-black-100 hover:bg-white text-sm ">
              Learn More
            </button>
          </div>
          <div className="h-full md:pt-32 pt-10">
            <div className="grid grid-cols-2 gap-10 justify-center items-center">
              <div className="flex flex-col hover:scale-125 cursor-pointer transition-all md:items-start items-center group cursor-pointer">
                <BsBag className="text-white md:h-32 h-20 w-32" />
                <p className="md:text-2xl text-black-100 font-thin mt-5 text-center whitespace-nowrap overflow-hidden">
                  Make Business
                </p>
              </div>
              <div className="flex flex-col md:items-start items-center group hover:scale-125 transition-all cursor-pointer">
                <BsHeart className="text-white md:h-32 h-20 w-32" />
                <p className="w-full md:text-2xl text-black-100 font-thin mt-5 text-center whitespace-nowrap overflow-hidden">
                  Make Business
                </p>
              </div>
              <div className="flex flex-col md:items-end items-center group hover:scale-125 transition-all cursor-pointer">
                <BsWallet2 className="text-white md:h-32 h-20 w-32" />
                <p className="md:text-2xl text-black-100 font-thin mt-5 text-center whitespace-nowrap overflow-hidden">
                  Make Business
                </p>
              </div>
              <div className="flex flex-col md:items-end items-center group hover:scale-125 transition-all cursor-pointer">
                <BsLightbulb className="text-white md:h-32 h-20 w-32" />
                <p className="md:text-2xl text-black-100 font-thin mt-5 text-center whitespace-nowrap overflow-hidden">
                  Make Business
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute md:-mt-56 -mt-10 z-20 mx-auto md:pl-72 px-36 max-w-6xl w-full">
        <img
          src="https://megaone.acrothemes.com/digital-agency/img/pot.png"
          alt=""
        />
      </div>
    </>
  );
}

export default Digital;
