import React from "react";
import Slider from "react-slick";

function CustomerCarosel() {
  var settings = {
    speed: 500,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-[#E8D814] py-10 md:pt-0 text-white">
      <div className="max-w-6xl mx-auto pt-20 h-full px-7 text-center lg:text-left">
        <h1 className="text-5xl font-medium font-oswald pb-10 tracking-wide	">
          <span className="text-black-100">SATISFIED</span> CUSTOMERS
        </h1>
        <Slider {...settings} className="h-full text-white lg:my-10 my-8">
          {new Array(4).fill("1").map((v, k) => (
            <div
              className={`flex flex-col justify-center items-center w-full md:px-20 focus:cursor-pointer ${
                k % 2 !== 0 ? "mt-14 " : ""
              }`}
            >
              <p className="font-bold text-7xl">"</p>
              <p className="text-base font-light text-white font-roboto pb-7 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                vitae egestas mi, vel dapibus diam. Mauris malesuada, nisl non
                rutrum commodo, sem magna laoreet tellus, eu euismod dolor enim
                et mi. In at tempor purus.
              </p>
              <div className="rounded-full overflow-hidden w-28 h-28 ">
                <img
                  src="https://megaone.acrothemes.com/digital-agency/img/test1.jpg"
                  className="h-full w-full"
                  alt=""
                />
              </div>
              <p className="text-black-100 font-roboto text-lg font-light pt-5 ">
                Sara Williams
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
export default CustomerCarosel;
