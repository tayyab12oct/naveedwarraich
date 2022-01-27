import React from "react";
import Navbar_menu from "./narbar_element";
import { BiMenu } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export default function Navbar_black() {
  const Navigate = useNavigate();

  return (
    <div className=" flex  w-10/12 ml-[200px] mt-10  justify-between items-center justify-center       ">
      <Navbar_menu />
      <BiMenu
        className="mr-7 text-white w-12 h-10 cursor-pointer   "
        onClick={() => Navigate("/side_bar")}
      />
    </div>
  );
}
