import React from "react";
import Icon from "./icon";
import Navbar_black from "./navbar";
import Hero_items from "./hero_items";
function First_section() {
  return (
    <div className="border-2 h-20 border-black space-y-24   h-[100vh] bg-[url('https://megaone.acrothemes.com/digital-agency/img/banner1.jpg')] ">
      <Icon />
      <Navbar_black />
      <Hero_items />
    </div>
  );
}
export default First_section;
