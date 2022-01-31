import React from "react";

function StepFour({ rotate }) {
  return (
    <div>
      {" "}
      <div className="flex items-center md:-mt-72  justify-center md:justify-end md:max-w-6xl md:ml-auto md:px-24 px-6">
        <div
          style={{ transform: rotate }}
          className={`flex items-center transition-all md:flex-row flex-col md:pb-0 pb-20`}
        >
          <div className="text-black-100 md:w-auto w-full md:pb-20 md:pt-0 pt-10 pb-36 flex flex-col items-center md:items-end md:px-8">
            <h1 className="font-extrabold text-6xl">Thank</h1>
            <p className="font-extralight mt-3 tracking-widest">We will contact you</p>

          </div>
          <div className="bg-[#DBD526] flex flex-col  justify-center  md:px-6 md:py-10 py-10  text-white h-[400px] md:w-[700px] w-[400px]">
             <h1 className="font-extrabold text-6xl  mt-20  ">you!</h1>
             <p className="font-thin text-2xl mt-4 ">
                 We will contact you and send ypu a quote
             </p>
                <div className="flex justify-between items-center font-thin text-2xl  mt-28">
              <h1>if you want to lern more about this step,just click this button:</h1>
              <button className=" w-40 p-3 rounded-3xl border-2 hover:bg-white hover:text-black-800  hover:border-none">
                lern more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepFour;
