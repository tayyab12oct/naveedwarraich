import React from "react";
import Slider from "react-slick";

function TeamCarosel() {
  var settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
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
    // <div className="bg-[#202020] min-h-[50vh] px-64 text-white p-10 py-20">
    <div className="bg-black-100 text-white transform rotate-6 w-[106%] -mx-12 overflow-hidden">
      <div className="max-w-6xl mx-auto pb-32 transform -rotate-6 pt-7 h-full px-7">
        <p className="text-lg pb-5 font-light font-roboto">
          Lorem ipsum is simply dummy text
        </p>

        <h1 className="text-6xl font-medium font-oswald pb-10 tracking-wide	">
          OUR CREATIVE TEAM
        </h1>
        <Slider {...settings} className="h-full text-white  ">
          {new Array(3).fill("1").map((v, k) => (
            <div
              className={
                k % 2 !== 0
                  ? "pt-14 flex flex-col justify-center items-center group cursor-pointer w-full px-22"
                  : k % 3 === 0
                  ? "flex flex-col justify-center items-center group cursor-pointer w-full px-22"
                  : "pt-24 flex flex-col justify-center items-center group cursor-pointer w-full px-22"
              }
              // className="flex flex-col justify-center items-center group cursor-pointer w-full px-22 h-[100%]"
            >
              <img
                src="https://megaone.acrothemes.com/digital-agency/img/team1.png "
                className="rounded-full pt-4 bg-[#E8D814] w-[250px]  h-[250px]"
                alt=""
              />
              <p className="text-3xl font-normal font-oswald group-hover:text-secondary pt-10 ">
                Richard Stevens{" "}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
export default TeamCarosel;
