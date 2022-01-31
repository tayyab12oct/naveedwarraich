import React from "react";

function StepThree({ rotate }) {
  return (
    <div>
      {" "}
      <div className="flex items-center md:-mt-72  justify-center md:justify-end md:max-w-6xl md:ml-auto md:px-24 px-6">
        <div
          style={{ transform: rotate }}
          className={`flex items-center transition-all md:flex-row flex-col md:pb-0 pb-20`}
        >
          <div className="text-black-100 md:w-auto w-full md:pb-20 md:pt-0 pt-10 pb-36 flex flex-col items-center md:items-end md:px-8">
            <h1 className="font-extrabold text-6xl">Step 3</h1>
            <p className="font-extralight mt-3 tracking-widest">get Quote</p>
          </div>
          <div className="bg-[#DBD526] flex flex-col justify-between  md:px-6 md:py-10 py-10  text-white h-[400px] md:w-[700px] w-[400px]">
            
              <p className="font-thin text-2xl tracking-wide text-opacity-60 md:pl-0 px-6 md:pr-10">
                Wie konnen wir Sie errichen?
              </p>
            
           
              <div className="flex justify-center items-center w-full " >
                <label className="w-10 text-right font-thin text-2xl">Email:</label>
                  <input
              className="shadow-sm p-3 placeholder-white  w-full bg-white bg-opacity-50 mx-14 block w-[80%] sm:text-sm border-white rounded-md outline-white"
              placeholder="Input Placeholder"
            />
                </div>
                 <div className="flex justify-center items-center w-full " >
                <label className="w-10 text-right font-thin text-2xl">Tell:</label>
                  <input
              className="shadow-sm p-3 placeholder-white  w-full bg-white bg-opacity-50 mx-14 block w-[80%] sm:text-sm border-white rounded-md outline-white"
              placeholder="Input Placeholder"
            />
                </div>
                 
                 <div className="flex justify-center items-center w-full " >

                  <p className="text-left font-thin text-2xl">r mhksudhfks pojsad lajis d asijdalskjd dhfkjhsdf</p>
                </div>


            
          
        
    
             
            <div className="flex justify-end items-center">
              <button className=" w-40 p-3 rounded-3xl border-2 hover:bg-white hover:text-black-800  hover:border-none">
                Submit
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepThree;
