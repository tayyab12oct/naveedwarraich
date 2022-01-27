import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram, AiOutlineClose, AiFillYoutube } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function Responsive_menubar() {
  const Navigate = useNavigate();
  return (
    <div className="border-2 border-black h-[100vh] bg-[#202020] p-14 ">
      <AiOutlineClose
        className=" text-white text-4xl ml-auto  cursor-pointer   "
        onClick={() => Navigate("/")}
      />
      <div className="  flex  flex-col items-center justify-center h-[100%]">
        <img
          className="w-32 "
          src="https://megaone.acrothemes.com/digital-agency/img/logo-yellow.png"
        />
        <div className="w-6/12 text-white flex justify-around mt-16 font-bold text-2xl ">
          <p className="cursor-pointer">Home</p>
          <p className="cursor-pointer">About</p>
          <p className="cursor-pointer">Portfolio</p>
          <p className="cursor-pointer">CLIENT</p>
          <p className="cursor-pointer">Bolg</p>
          <p className="cursor-pointer">Contact</p>
        </div>
        <div className="text-white flex w-[15%] mt-12 justify-around">
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
