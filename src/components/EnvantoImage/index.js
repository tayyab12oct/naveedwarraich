import React from "react";

function EnvantoImage() {
  return (
    <div className="lg:h-[45vh] md:h-[25vh] h-[15vh] md:py-14 flex flex-col justify-center w-full">
      <div className="lg:max-w-6xl max-w-2xl mx-auto lg:px-7 md:rotate-6 flex justify-between w-full">
        <img
          className="w-42 mx-auto md:mx-0 md:-rotate-6 opacity-50"
          src="https://megaone.acrothemes.com/digital-agency/img/client-3.png"
          alt=""
        />
        <img
          className="w-42 -rotate-6 opacity-50 hidden md:block"
          src="https://megaone.acrothemes.com/digital-agency/img/client-3.png"
          alt=""
        />
        <img
          className="w-42 -rotate-6 opacity-50 hidden md:block"
          src="https://megaone.acrothemes.com/digital-agency/img/client-3.png"
          alt=""
        />
        <img
          className="w-42 -rotate-6 opacity-50 hidden lg:block"
          src="https://megaone.acrothemes.com/digital-agency/img/client-3.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default EnvantoImage;
