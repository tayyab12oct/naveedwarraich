import React, { useState, useEffect } from "react";
import Icon from "./icon";
import Navbar_black from "./navbar";
import Hero_items from "./hero_items";
function First_section() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotate, setRotate] = useState("translate3d(0px,0px, 0px)");
  const mouseEnter = (e) => {
    setY(e.movementY + 10);
    setX(e.movementX + 10);
  };
  const leave = () => setRotate("translate3d(0px,0px, 0px)");
  useEffect(() => {
    setRotate(`translate3d(${x}px,${y}px, 0px)`);
  }, [x, y]);
  return (
    <div
      onMouseLeave={leave}
      onMouseMove={mouseEnter}
      id="hero"
      className="h-[90vh] relative flex-wrap bg-bottom-center bg-cover flex bg-[url('https://megaone.acrothemes.com/digital-agency/img/banner1.jpg')] "
    >
      <div className="w-full flex flex-col">
        <Icon />
        <Navbar_black />
      </div>
      <div className="w-full self-center">
        <Hero_items rotate={rotate} />
      </div>
    </div>
  );
}
export default First_section;
