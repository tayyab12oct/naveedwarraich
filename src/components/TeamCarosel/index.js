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
    <div className="bg-black-100 text-white bg-clipy">
      <div className="max-w-6xl mx-auto pt-40 lg:pt-28 lg:pb-36 pb-20 h-full px-7 text-center lg:text-left">
        <p className="text-lg pb-5 font-light font-roboto">
          Lorem ipsum is simply dummy text
        </p>

        <h1 className="lg:text-6xl text-5xl font-medium font-oswald pb-14 tracking-wide	">
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
              <p className="text-3xl font-normal font-oswald group-hover:text-secondary lg:pt-10 pt-6 uppercase">
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
