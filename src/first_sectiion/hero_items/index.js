import React from "react";

function Hero_items() {
  return (
    <div className="flex items-center w-full justify-end   ">
      <div className="flex w-7/12  mr-16    mt-10 items-center justify-center      ">
        <div className=" ml-20 w-3/12">
          <h1 className="font-extrabold text-6xl">WE MAKE</h1>
          <p className="ml-24">Beautiful & Responsive</p>
        </div>
        <div className="bg-[#E8D814] pt-5 ml-8 pt-10   px-4 w-7/12 text-white p-10 space-y-8 ">
          <h1 className="text-6xl font-thin">
            Creative <br></br> <span className="font-black">Website </span>
          </h1>
          <p className="font-thin  text-md tracking-widerst ">
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
