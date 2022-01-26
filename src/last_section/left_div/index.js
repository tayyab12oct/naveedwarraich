import React, { useState } from "react";

function Left_div() {
  // const [input, SetInput] = useState({
  //   name: "",
  //   email: "",
  //   subject: "",
  // });
  // const inputHandler = (e) => {
  //   SetInput({ [e.target.name]: e.target.value });
  //   console.log(input.target.name, "naved warraich");
  // };
  // const submitHandler = (e) => {
  //   e.preventDefault();
  // };

  return (
    <div className="p-3 space-y-6   ">
      <h1 className="text-4xl ">GET IN TOUCH</h1>
      <form>
        <div className="gid grid-cols-2 flex ">
          {/* first div */}
          <div className="w-6/12 space-y-4">
            <input
              className=" appearance-none focus:shadow-outline border-2 border-gray-200   w-9/12 p-4 text-gray-400 leading-tight focus:outline-none focus:bg-white focus:border-blue-300"
              id="inline-full-name"
              type="text"
              placeholder="Name"
            />

            <input
              className=" appearance-none focus:shadow-outline border-2 border-gray-200   w-9/12 p-4 text-gray-400 leading-tight focus:outline-none focus:bg-white focus:border-blue-300"
              id="inline-password"
              type="email"
              placeholder="Email Address@"
            />

            <input
              className=" appearance-none focus:shadow-outline border-2 border-gray-200   w-9/12 p-4 text-gray-400 leading-tight focus:outline-none focus:bg-white focus:border-blue-300"
              id="inline-password"
              type="email"
              placeholder="Subject"
            />
          </div>
          <div className=" w-6/12">
            <textarea
              type="text"
              placeholder="Your Message"
              className=" w-full  h-full appearance-none focus:shadow-outline border-2 border-gray-200    p-4 text-gray-400 leading-tight focus:outline-none focus:bg-white focus:border-blue-300"
            />
          </div>
        </div>
        <button className="transition duration-500 w-full flex items-center justify-center bg-[#E8D814] rounded-3xl  mt-8 py-2 hover:text-white hover:bg-black text-sm ">
          Send Message
        </button>
      </form>
      {/* <div>
        <AiOutlineTwitter />
      </div> */}
    </div>
  );
}

export default Left_div;
