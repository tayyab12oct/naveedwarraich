import React, { useState } from "react";
import Navbar_menu from "./narbar_element";
import { VscMenu } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web";
import Responsive from "../../responsive_menubar";
export default function Navbar_black() {
  const [mega, setMega] = useState(false);
  const props = useSpring({
    height: mega ? 100 : 0,
  });
  const toggle = (e) => {
    e.stopPropagation();
    e.preventDefault();
    return setMega(!mega);
  };
  return (
    <>
      <animated.div
        style={{
          height: props.height.interpolate((e) => `${e}vh`),
        }}
        className={`w-full ${mega ? "z-50 fixed top-0" : ""}  overflow-hidden`}
      >
        <Responsive toggle={toggle} />
      </animated.div>
      <div className="w-full mx-auto relative flex items-center">
        <Navbar_menu toggle={toggle} />
        <div className="absolute top-0 h-full pr-20 flex items-center right-0">
          <VscMenu
            className="text-white h-8 w-8 mr-4 cursor-pointer"
            onClickCapture={toggle}
          />
        </div>
      </div>
    </>
  );
}
