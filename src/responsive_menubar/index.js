import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram, AiOutlineClose, AiFillYoutube } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function Responsive_menubar({ toggle }) {
  const Navigate = useNavigate();
  return (
    <div className="bg-black-100 h-full relative z-50 top-0 left-0 w-full">
      <div className="flex items-end justify-end md:pt-10 md:pr-10 pt-5 pr-5">
        <AiOutlineClose
          className=" text-white text-4xl cursor-pointer   "
          onClick={toggle}
        />
      </div>
      <div className="  flex  flex-col items-center justify-center h-full">
        <img
          className="w-32"
          src="https://megaone.acrothemes.com/digital-agency/img/logo-yellow.png"
        />
        <div className="md:w-6/12 w-full text-white flex md:flex-row flex-col justify-around md:mt-16 space-y-4 font-bold md:text-2xl text-xl md:p-0 p-10">
          <p className="cursor-pointer hover:text-secondary h-[40px] hover:border-b-2 hover:border-secondary">
            Home
          </p>
          <p className="cursor-pointer hover:text-secondary h-[40px] hover:border-b-2 hover:border-secondary">
            About
          </p>
          <p className="cursor-pointer hover:text-secondary h-[40px] hover:border-b-2 hover:border-secondary">
            Portfolio
          </p>
          <p className="cursor-pointer hover:text-secondary h-[40px] hover:border-b-2 hover:border-secondary">
            CLIENT
          </p>
          <p className="cursor-pointer hover:text-secondary h-[40px] hover:border-b-2 hover:border-secondary">
            Bolg
          </p>
          <p className="cursor-pointer hover:text-secondary h-[40px] hover:border-b-2 hover:border-secondary">
            Contact
          </p>
        </div>
        <div className="text-white flex mt-12 space-x-4 justify-center">
          <BsWhatsapp className="text-xl font-bold" />
          <BsTwitter className="text-xl font-bold" />
          <AiFillInstagram className="text-xl font-bold" />
          <AiFillYoutube className="text-xl font-bold" />
        </div>
      </div>
    </div>
  );
}

export default Responsive_menubar;
