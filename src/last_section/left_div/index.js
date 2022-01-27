import React, { useState } from "react";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineGooglePlus,
} from "react-icons/ai";
GrLinkedinOption;
import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";

function Left_div() {
  // const [input, SetInput] = useState({
  //   name: "",
  //   email: "",
  //   subject: "",
  // });
  // const inputHandler = (e) => {
  //   SetInput({ [e.target.name]: e.target.value });
  //   console.log(input.target.name, "naved warraich");
  // };
  // const submitHandler = (e) => {
  //   e.preventDefault();
  // };

  return (
    <div className=" space-y-6   ">
      <h1 className="text-4xl ">GET IN TOUCH</h1>
      <form>
        <div className="gid grid-cols-2 flex gap-10 ">
          {/* first div */}
          <div className="w-full space-y-4">
            <input
              className=" appearance-none focus:shadow-outline border-2 border-gray-200   w-full p-4 text-gray-400 leading-tight focus:outline-none focus:bg-white focus:border-blue-300"
              id="inline-full-name"
              type="text"
              placeholder="Name"
            />

            <input
              className=" appearance-none focus:shadow-outline border-2 border-gray-200   w-full p-4 text-gray-400 leading-tight focus:outline-none focus:bg-white focus:border-blue-300"
              id="inline-password"
              type="email"
              placeholder="Email Address@"
            />

            <input
              className=" appearance-none focus:shadow-outline border-2 border-gray-200   w-full p-4 text-gray-400 leading-tight focus:outline-none focus:bg-white focus:border-blue-300"
              id="inline-password"
              type="email"
              placeholder="Subject"
            />
          </div>
          <div className=" w-full">
            <textarea
              type="text"
              placeholder="Your Message"
              className=" w-full  h-full appearance-none focus:shadow-outline border-2 border-gray-200    p-4 text-gray-400 leading-tight focus:outline-none focus:bg-white focus:border-blue-300"
            />
          </div>
        </div>
        <button className="transition duration-500 w-full flex items-center justify-center bg-[#E8D814] rounded-3xl  mt-8 py-2 text-white hover:text-white hover:bg-black text-sm ">
          Send Message
        </button>
      </form>
      <div className=" h-24 w-11/12 mx-auto flex py-10 space-x-2">
        <AiOutlineTwitter className="w-10 h-10 text-black bg-white rounded-full p-2   hover:bg-blue-400 hover:text-white" />
        <FaFacebookF className="w-10 h-10 text-black bg-white rounded-full p-2   hover:bg-blue-400 hover:text-white" />
        <AiOutlineInstagram className="w-10 h-10 text-black bg-white rounded-full p-2   hover:bg-blue-400 hover:text-white" />
        <AiOutlineGooglePlus className="w-10 h-10 text-black bg-white rounded-full p-2   hover:bg-blue-400 hover:text-white" />
        <GrLinkedinOption className="w-10 h-10 text-black bg-white rounded-full p-2   hover:bg-blue-400 hover:text-white" />
        <FaPinterestP className="w-10 h-10 text-black bg-white rounded-full p-2   hover:bg-blue-400 hover:text-white" />
      </div>
    </div>
  );
}

export default Left_div;
