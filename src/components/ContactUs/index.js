import React from "react";
import { MdLocationOn } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
function ContactUs() {
  return (
    <div className="max-w-6xl mx-auto px-7 pt-16 grid grid-cols-2">
      <form>
        <h1 className="text-black-100 font-normal text-[42px] font-oswald">
          GET IN TOUCH
        </h1>
        <div className="grid grid-cols-10 gap-7 pt-9">
          <div className="w-full col-span-4 space-y-5">
            <input
              className="appearance-none border-2 border-black-400 placeholder-black-800 font-light w-full py-3 px-6 text-black-800 focus:outline-none font-roboto"
              type="text"
              name="name"
              placeholder="Your Name"
            />

            <input
              className="appearance-none border-2 border-black-400 placeholder-black-800 font-light w-full py-3 px-6 text-black-800 focus:outline-none font-roboto"
              type="email"
              placeholder="Email Address*"
            />

            <input
              className="appearance-none border-2 border-black-400 placeholder-black-800 font-light w-full py-3 px-6 text-black-800 focus:outline-none font-roboto"
              type="text"
              placeholder="Subject"
            />
          </div>
          <div className="col-span-6 w-full">
            <textarea
              type="text"
              rows="7"
              placeholder="Your Message"
              className="appearance-none border-2 border-black-400 placeholder-black-800 font-light w-full py-3 px-6 text-black-800 focus:outline-none font-roboto"
            />
          </div>
        </div>
        <button className="transition duration-500 w-full font-roboto flex items-center justify-center bg-[#E8D814] rounded-full mt-4 py-3 text-white hover:text-white hover:bg-black text-sm ">
          Send Message
        </button>
      </form>
      <div className="pl-32">
        <h1 className="text-black-100 font-normal text-[42px] font-oswald">
          OUR LOCATION
        </h1>
        <p className="text-base font-light text-black-100 font-roboto opacity-80 py-7">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered .
        </p>
        <div className="space-y-6 pt-6">
          <div className="flex space-x-3">
            <MdLocationOn className="w-9 h-9 text-primary-light" />
            <p className="text-base font-light leading-6 text-black-100 font-roboto opacity-60">
              123 Park Avenue, New <br></br>York, United States
            </p>
          </div>
          <div className="flex space-x-3">
            <FaPhoneVolume className="w-9 h-9 text-primary-light" />
            <p className="text-base font-light leading-6 text-black-100 font-roboto opacity-60">
              +1 631 1234 5678
              <span className="px-2 font-roboto ">+1 631 1234 5678</span>
            </p>
          </div>
          <div className="flex space-x-3">
            <SiMinutemailer className="w-9 h-9 text-primary-light" />
            <p className="text-base font-light leading-6 text-black-100 font-roboto opacity-60">
              email@website.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
