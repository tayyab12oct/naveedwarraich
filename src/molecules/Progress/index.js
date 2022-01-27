import React from "react";
function Progress() {
  return (
    <div className="relative pt-1">
      <div className="flex mb-2 items-center justify-between">
        <div>
          <span className="text-md font-semibold inline-block uppercase ">
            Descriptions
          </span>
        </div>
        <div className="text-right">
          <span className="text-xs font-semibold inline-block ">30%</span>
        </div>
      </div>
      <div className="overflow-hidden h-4 mb-4 text-xs flex rounded bg-[#E9ECEF]">
        <div
          style={{ width: "30%" }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#DBD526]"
        ></div>
      </div>
    </div>
  );
}
export default Progress;
