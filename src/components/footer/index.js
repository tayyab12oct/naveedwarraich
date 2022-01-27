import React from "react";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineGooglePlus,
} from "react-icons/ai";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";

function Footer() {
  return (
    <div className="max-w-6xl mx-auto px-8 py-24 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <div className="group hover:bg-primary h-10 w-10 flex items-center justify-center rounded-full cursor-pointer transition-all">
          <FaFacebookF className="h-4 w-5 text-black group-hover:text-white" />
        </div>
        <div className="group hover:bg-primary h-10 w-10 flex items-center justify-center rounded-full cursor-pointer transition-all">
          <AiOutlineTwitter className="h-5 w-7 text-black group-hover:text-white" />
        </div>
        <div className="group hover:bg-primary h-10 w-10 flex items-center justify-center rounded-full cursor-pointer transition-all">
          <AiOutlineGooglePlus className="h-6 w-7 text-black group-hover:text-white" />
        </div>
        <div className="group hover:bg-primary h-10 w-10 flex items-center justify-center rounded-full cursor-pointer transition-all">
          <GrLinkedinOption className="h-4 w-7 text-black group-hover:text-white" />
        </div>
        <div className="group hover:bg-primary h-10 w-10 flex items-center justify-center rounded-full cursor-pointer transition-all">
          <AiOutlineInstagram className="h-5 w-7 text-black group-hover:text-white" />
        </div>
        <div className="group hover:bg-primary h-10 w-10 flex items-center justify-center rounded-full cursor-pointer transition-all">
          <FaPinterestP className="h-4 w-7 text-black group-hover:text-white" />
        </div>
      </div>
      <p className="text-sm font-light text-black-200 font-sans">
        © 2020 MegaOne. Made With Love By Themesindustry
      </p>
    </div>
  );
}

export default Footer;
