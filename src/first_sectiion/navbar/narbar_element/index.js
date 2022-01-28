/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useNavigate } from "react-router-dom";
import { VscMenu } from "react-icons/vsc";

function Navbar_menu({ toggle }) {
  const Navigate = useNavigate();
  return (
    <div className="max-w-6xl px-7 relative z-40 mx-auto w-full">
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
              href="#hero"
              className="border-indigo-500 text-black inline-flex items-center font-bold text-base px-1 pt-1   "
            >
              HOME
            </a>
            <a
              href="#about"
              className="text-black hover:border-gray-300 hover:text-gray-600 inline-flex items-center font-bold text-base"
            >
              ABOUT
            </a>
            <a
              href="#state"
              className="text-black hover:border-gray-300 hover:text-gray-600 inline-flex items-center font-bold text-base"
            >
              PORTFILO
            </a>
            <a
              href="#team"
              className="text-black hover:border-gray-300 hover:text-gray-600 inline-flex items-center font-bold text-base"
            >
              CLIENTS
            </a>
            <a
              href="#blog"
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
          <VscMenu
            className="text-black-100 md:hidden block h-8 w-8 mr-4 cursor-pointer"
            onClickCapture={toggle}
          />
        </div>
      </nav>
    </div>
  );
}

export default Navbar_menu;
