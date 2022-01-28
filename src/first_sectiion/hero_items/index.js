import React, { useEffect, useRef, useState, useCallback } from "react";
import debounce from "lodash.debounce";

function Hero_items({ rotate }) {
  const ref = useRef(null);

  return (
    <div className="flex items-center md:-mt-72  justify-center md:justify-end md:max-w-6xl md:ml-auto md:px-24 px-6">
      <div
        style={{ transform: rotate }}
        className={`flex items-center transition-all md:flex-row flex-col md:pb-0 pb-20`}
      >
        <div className="text-black-100 md:w-auto w-full md:pb-20 md:pt-0 pt-10 pb-36 flex flex-col items-center md:items-end md:px-8">
          <h1 className="font-extrabold text-6xl">WE MAKE</h1>
          <p className="font-extralight mt-3 tracking-widest">
            Beautiful & Responsive
          </p>
        </div>
        <div className="bg-[#DBD526] flex items-center md:items-start justify-center md:px-6 md:py-0 py-10 flex-col text-white md:w-[630px] md:h-[400px]">
          <h1 className="text-6xl font-thin">
            Creative <br></br> <span className="font-black mt-2">Website </span>
          </h1>
          <p className="font-thin my-8 text-sm tracking-widest text-opacity-60 md:pl-0 px-6 md:pr-10">
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
