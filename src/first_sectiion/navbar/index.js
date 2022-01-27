import React from "react";
import Navbar_menu from "./narbar_element";
import { VscMenu } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

export default function Navbar_black() {
  const Navigate = useNavigate();

  return (
    <div className="w-full mx-auto relative flex items-center">
      <Navbar_menu />
      <div className="absolute top-0 h-full pr-20 flex items-center right-0">
        <VscMenu
          className="text-white h-8 w-8 mr-4 cursor-pointer"
          onClick={() => Navigate("/side_bar")}
        />
      </div>
    </div>
  );
}
