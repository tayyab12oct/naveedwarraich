import React from "react";

function StepTwo({ rotate }) {
  return (
    <div>
      {" "}
      <div className="flex items-center md:-mt-72  justify-center md:justify-end md:max-w-6xl md:ml-auto md:px-24 px-6">
        <div
          style={{ transform: rotate }}
          className={`flex items-center transition-all md:flex-row flex-col md:pb-0 pb-20`}
        >
          <div className="text-black-100 md:w-auto w-full md:pb-20 md:pt-0 pt-10 pb-36 flex flex-col items-center md:items-end md:px-8">
            <h1 className="font-extrabold text-6xl">Step 2</h1>
            <p className="font-extralight mt-3 tracking-widest">Chose Price</p>
          </div>
          <div className="bg-[#DBD526] flex flex-col justify-between  md:px-6 md:py-10 py-10  text-white h-[400px] md:w-[700px] w-[400px]">
            <h1 className="text-6xl font-thin">
              <p className=" font-thin text-2xl    text-opacity-60 md:pl-0 px-6 md:pr-10">
                Bitte wahlen Sie lhren personlichen Tarif
              </p>
            </h1>
          
          <div className="w-full flex justify-around ">
                <label  className=" font-thin text-xl w-10">einmalig</label>
                <input type="range" className="w-80"min="12" max="84"  />

                 <h1 className="w-10 text-right">160C</h1>   
  
              </div>
             <div className="w-full flex justify-around ">
                <label  className=" font-thin text-xl w-10">monatlich </label>
                <input type="range" className="w-80"min="12" max="84"  />

                 <h1 className="w-10 text-right">29C</h1>   
  
              </div>
    
              <div className="flex space-x-16 items-center">
                  <h1 className="w-32 text-right">Laufzeit*</h1>
                <div className="grid grid-cols-4 w-full  gap-16  ">
                    <button className=" bg-opacity-50 placeholder-white  outline-white border-white w-24 p-3 rounded-lg border-2 hover:bg-white hover:text-black-800  hover:border-none">
                1 Jahr 
              </button><button className=" bg-opacity-50 placeholder-white  outline-white border-white w-24 p-3 rounded-lg border-2 hover:bg-white hover:text-black-800  hover:border-none">
                2 jahre
              </button><button className="  bg-opacity-50 placeholder-white  outline-white border-white w-24 p-3 rounded-lg border-2 hover:bg-white hover:text-black-800  hover:border-none">
                3 jahre
              </button>
                </div>
                  </div>
            <div className="flex justify-between items-center">
              <h1>*Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
              <button className=" w-40 p-3 rounded-3xl border-2 hover:bg-white hover:text-black-800  hover:border-none">
                Weiter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepTwo;
