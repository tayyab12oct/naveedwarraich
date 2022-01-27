import React, { useEffect, useRef, useState, useCallback } from "react";
import debounce from "lodash.debounce";

function Hero_items({ rotate }) {
  const ref = useRef(null);

  return (
    <div className="flex items-center justify-end max-w-6xl ml-auto px-24">
      <div
        style={{ transform: rotate }}
        className={`flex items-center transition-all `}
      >
        <div className="text-black-100 pb-20 flex flex-col items-end px-8">
          <h1 className="font-extrabold text-6xl">WE MAKE</h1>
          <p className="font-extralight mt-3 tracking-widest">
            Beautiful & Responsive
          </p>
        </div>
        <div className="bg-[#DBD526] flex items-start justify-center px-6 flex-col text-white w-[630px] h-[400px]">
          <h1 className="text-6xl font-thin">
            Creative <br></br> <span className="font-black mt-2">Website </span>
          </h1>
          <p className="font-thin my-8 text-sm tracking-widest text-opacity-60 pr-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mauris
            arcu, lobortis id interdum vitae, interdum eget elit.
          </p>
          <button className=" w-40 p-3  rounded-3xl border-2 hover:bg-white hover:text-black hover:border-none">
            lern more
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero_items;
