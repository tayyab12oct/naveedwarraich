import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

export default function Icon() {
  return (
    <div className="flex justify-between mt-9 w-9/12 mx-auto">
      <div className="flex space-x-3 items-center text-white">
        <BsWhatsapp className="w-8 h-8 p-1       " />
        <p className="font-bold text-md"> +1 631 123 4567</p>
      </div>

      <div className="flex space-x-5 text-white ">
        <FaFacebookF className="w-8 h-8 p-1     hover:bg-white hover:text-[#4267B2]  rounded-full   " />
        <BsTwitter className="w-8 h-8 p-1     hover:bg-white hover:text-[#4267B2]  rounded-full   " />
        <AiFillInstagram className="w-8 h-8 p-1     hover:bg-white hover:text-[#C13584]  rounded-full" />
        <FaLinkedinIn className="w-8 h-8 p-1      hover:bg-white hover:text-[#4267B2]  rounded-full   " />
      </div>
    </div>
  );
}
