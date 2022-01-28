import React from "react";
import { MdLocationOn } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
function ContactUs() {
  return (
    <div className="lg:max-w-6xl max-w-2xl w-full mx-auto lg:px-7 px-2 pt-16 grid lg:grid-cols-2 grid-cols-1 gap-24 lg:gap-0">
      <form className="px-4 md:px-0">
        <h1 className="text-black-100 font-normal lg:text-[42px] text-4xl font-oswald text-center lg:text-left">
          GET IN TOUCH
        </h1>
        <div className="grid md:grid-cols-10 grid-cols-1 gap-7 pt-9">
          <div className="w-full lg:col-span-4 space-y-7">
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
          <div className="lg:col-span-6 w-full">
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
      <div className="lg:pl-32 text-center lg:text-left">
        <h1 className="text-black-100 font-normal lg:text-[42px] text-4xl font-oswald">
          OUR LOCATION
        </h1>
        <p className="text-base font-light text-black-100 font-roboto opacity-80 py-7">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered .
        </p>
        <div className="space-y-6 pt-6">
          <div className="flex items-center flex-col lg:flex-row lg:space-x-3 space-y-4">
            <MdLocationOn className="w-9 h-9 text-primary-light" />
            <p className="text-base font-light leading-6 text-black-100 font-roboto opacity-60">
              123 Park Avenue, New <br className="hidden lg:block"></br>York,
              United States
            </p>
          </div>
          <div className="flex items-center flex-col lg:flex-row lg:space-x-3 space-y-4">
            <FaPhoneVolume className="w-9 h-9 text-primary-light" />
            <p className="text-base font-light leading-6 text-black-100 font-roboto opacity-60">
              <span className="px-2 font-roboto ">+1 631 1234 5678</span>
              <span className="px-2 font-roboto ">+1 631 1234 5678</span>
            </p>
          </div>
          <div className="flex items-center flex-col lg:flex-row lg:space-x-3 space-y-4">
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
