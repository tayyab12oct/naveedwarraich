import React from "react";
function Progress() {
  return (
    <div className="relative pt-1">
      <div className="flex mb-2.5 items-center">
        <span className="text-md font-thin text-black-500 font-sans inline-block ">
          Descriptions
        </span>
        <div className="bg-black-100 text-white px-2 rounded-sm absolute left-[30%] -ml-5 z-30">
          <span className="text-xs font-light font-sans inline-block">30%</span>
        </div>
      </div>
      <div className="overflow-hidden h-4 text-xs flex rounded bg-[#E9ECEF]">
        <div
          style={{ width: "30%" }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#DBD526]"
        ></div>
      </div>
    </div>
  );
}
export default Progress;
