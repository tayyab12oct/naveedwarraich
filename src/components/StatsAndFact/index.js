import React from "react";
import Progress from "../../molecules/Progess";
function StatsAndFact() {
  return (
    <div className=" px-64 grid grid-cols-2 gap-5 p-10 py-20">
      <div></div>
      <div className="text-right pb-5">
        <p className="text-[#5CBDBB] text-xl pb-5">
          Lorem ipsum is simply dummy text
        </p>
        <h1 className="text-5xl font-bold pb-8">AGENCY STATS & FACTS</h1>
        <p className="text-sm font-light pb-5">
          Lorem ipsum is simply dummy text of the printing and typesetting.
          Lorem Ipsum has been the industry’s standard dummy. Lorem Ipsum has
          been the industry’s standard dummy. Lorem ipsum is simply dummy text
          of the printing and typesetting.
        </p>
      </div>
      <div>
        <Progress />
      </div>
      <div>
        <Progress />
      </div>
      <div>
        <Progress />
      </div>
      <div>
        <Progress />
      </div>
    </div>
  );
}
export default StatsAndFact;
