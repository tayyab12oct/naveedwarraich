import React from "react";
import Progress from "../../molecules/Progress";
function StatsAndFact() {
  return (
    <div className="max-w-6xl mx-auto lg:px-7 md:px-16 px-5 grid lg:grid-cols-2 grid-cols-1 gap-5 pt-20 pb-32">
      <div className="lg:text-right text-center pb-5 lg:col-span-2">
        <p className="text-[#5CBDBB] font-light font-roboto text-lg tracking-wide pb-5">
          Lorem ipsum is simply dummy text
        </p>
        <h1 className="md:text-6xl text-5xl font-medium pb-8 font-oswald">
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
