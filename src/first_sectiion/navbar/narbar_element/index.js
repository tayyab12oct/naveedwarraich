/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar_menu() {
  const Navigate = useNavigate();
  return (
    <div className="max-w-6xl px-7 mx-auto w-full">
      <nav className="bg-white shadow ">
        <div className="flex-1 flex items-center justify-between">
          <div className="bg-[#1D1D21] px-6 py-4">
            <img
              className="h-10"
              src="https://megaone.acrothemes.com/digital-agency/img/logo-white.png"
              alt="Workflow"
            />
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8 pr-6">
            <a
              href="#"
              className="border-indigo-500 text-black inline-flex items-center font-bold text-base px-1 pt-1   "
            >
              HOME
            </a>
            <a
              href="#"
              className="text-black hover:border-gray-300 hover:text-gray-600 inline-flex items-center font-bold text-base"
            >
              ABOUT
            </a>
            <a
              href="#"
              className="text-black hover:border-gray-300 hover:text-gray-600 inline-flex items-center font-bold text-base"
            >
              PORTFILO
            </a>
            <a
              href="#"
              className="text-black hover:border-gray-300 hover:text-gray-600 inline-flex items-center font-bold text-base"
              onClick={() => Navigate("/CustomerCarosel")}
            >
              CLIENTS
            </a>
            <a
              href="#"
              className="text-black hover:border-gray-300 hover:text-gray-600 inline-flex items-center font-bold text-base"
            >
              BLOG
            </a>
            <a
              href="#"
              className="text-black hover:border-gray-300 hover:text-gray-600 inline-flex items-center font-bold text-base"
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
