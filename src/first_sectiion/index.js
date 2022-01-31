import React, { useState, useEffect, useCallback } from "react";
import Icon from "./icon";
import Navbar_black from "./navbar";
import Hero_items from "./hero_items";
import StepOne from "./stepOne";
import StepTwo from "./steptwo";
import StepThree from "./step 3";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import StepFour from "./step4";
function First_section() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [step, setStep] = useState(1);
  const [rotate, setRotate] = useState("translate3d(0px,0px, 0px)");
  const mouseEnter = (e) => {
    setY(e.movementY + 10);
    setX(e.movementX + 10);
  };
  const leave = () => setRotate("translate3d(0px,0px, 0px)");
  const nextStep = () => {
    setStep((e) => e + 1);
  };
  useEffect(() => {
    if (step === 6) {
      setStep(1);
    }
  }, [step]);
  useEffect(() => {
    setRotate(`translate3d(${x}px,${y}px, 0px)`);
  }, [x, y]);
  const data = useCallback(
    () => [
      {
        item: <Hero_items nextStep={nextStep} rotate={rotate} />,
      },
      {
        item: <StepOne nextStep={nextStep} rotate={rotate} />,
      },
      {
        item: <StepTwo nextStep={nextStep} rotate={rotate} />,
      },
      {
        item: <StepThree nextStep={nextStep} rotate={rotate} />,
      },
      {
        item: <StepFour nextStep={nextStep} rotate={rotate} />,
      },
    ],
    []
  );
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
      <SwitchTransition>
        <CSSTransition
          key={step}
          addEndListener={(node, done) =>
            node.addEventListener("transitionend", done, false)
          }
          classNames="fade"
        >
          <div className="w-full self-center">
            {data()?.map((v, k) => {
              if (k + 1 === step) {
                return v?.item;
              }
              return null;
            })}
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}
export default First_section;
