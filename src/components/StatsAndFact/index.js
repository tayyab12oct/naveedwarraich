import React from "react";
import Progress from "../../molecules/Progress";
function StatsAndFact() {
  return (
    <div className="max-w-6xl mx-auto px-7 grid grid-cols-2 gap-5 pt-20 pb-56 overflow-visible">
      <div className="text-right pb-5 col-span-2">
        <p className="text-[#5CBDBB] font-light font-roboto text-lg tracking-wide pb-5">
          Lorem ipsum is simply dummy text
        </p>
        <h1 className="text-6xl font-medium pb-8 font-oswald">
          AGENCY STATS & FACTS
        </h1>
        <p className="text-base font-roboto max-w-2xl ml-auto font-light pb-5">
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
