import React from "react";
import { MdLocationOn } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";

function Right_div() {
  return (
    <div className="w-8/12 space-y-8">
      <h1 className="text-4xl">OUR LOCATION</h1>
      <p className="text-lg tracking-widest font-thin pt-5 ">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered
      </p>
      <div className="flex space-x-3    ">
        <MdLocationOn className="w-10 h-10 text-blue-300   " />
        <p className="text-lg tracking-widest font-thin ">
          123 Park Avenue, New <br></br>York, United States
        </p>
      </div>
      <div className="flex space-x-3    ">
        <FaPhoneVolume className="w-10 h-10 text-blue-300   " />
        <p className="text-lg tracking-wide font-thin ">+1 631 1234 5678</p>
        <p className="text-lg tracking-wide font-thin ">+1 631 1234 5678</p>
      </div>
      <div className="flex space-x-3    ">
        <SiMinutemailer className="w-10 h-10 text-blue-300   " />
        <p className="text-lg tracking-widest font-thin ">email@website.com</p>
      </div>
      <p className="text-md tracking-wide font-thin ">
        © 2020 MegaOne. Made With Love By Themesindustry
      </p>
    </div>
  );
}

export default Right_div;
