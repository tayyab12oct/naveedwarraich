import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar_menu() {
  const Navigate = useNavigate();
  return (
    <div className="   w-11/12  ">
      <nav className="bg-white shadow   border-red-700   ">
        <div className="flex-1 flex items-center justify-center justify-between h-[68px]">
          <div className=" bg-black  h-full flex justify-center items-center w-28">
            <img
              className=" h-12    "
              src="https://megaone.acrothemes.com/digital-agency/img/logo-white.png"
              alt="Workflow"
            />
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8 pr-6">
            <a
              href="#"
              className="border-indigo-500 text-black inline-flex items-center font-bold text-xl px-1 pt-1   "
            >
              HOME
            </a>
            <a
              href="#"
              className=" text-black hover:border-gray-300 hover:text-gray-600 inline-flex items-center font-bold text-lg px-1 pt-1  "
            >
              ABOUT
            </a>
            <a
              href="#"
              className=" text-black hover:border-gray-300 hover:text-gray-600 inline-flex items-center font-bold text-lg px-1 pt-1  "
            >
              PORTFILO
            </a>
            <a
              href="#"
              className=" text-black hover:border-gray-300 hover:text-gray-600 inline-flex items-center font-bold text-lg px-1 pt-1  "
              onClick={() => Navigate("/CustomerCarosel")}
            >
              CLIENTS
            </a>
            <a
              href="#"
              className=" text-black hover:border-gray-300 hover:text-gray-600 inline-flex items-center font-bold text-lg px-1 pt-1  "
            >
              BLOG
            </a>
            <a
              href="#"
              className=" text-black hover:border-gray-300 hover:text-gray-600 inline-flex items-center font-bold text-md px-1 pt-1  "
            >
              CONTACT
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar_menu;
