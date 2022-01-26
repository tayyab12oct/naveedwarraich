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
    <div className="bg-[#E8D814] min-h-[50vh] px-64 text-white p-10">
      <h1 className="text-4xl font-bold pb-10 tracking-wide	">
        <span className="text-black">SATISFIED</span> CUSTOMERS
      </h1>
      <Slider {...settings} className="h-full text-white  ">
        {new Array(5).fill("1").map((v, k) => (
          <div className="flex flex-col justify-center items-center  w-full px-24 h-[100%]">
            <p className="font-bold text-5xl">""</p>
            <p className="text-center text-md font-light py-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              vitae egestas mi, vel dapibus diam. Mauris malesuada, nisl non
              rutrum commodo, sem magna laoreet tellus, eu euismod dolor enim et
              mi. In at tempor purus.
            </p>
            <img
              src="https://megaone.acrothemes.com/digital-agency/img/test1.jpg"
              className="rounded-full pt-4"
              alt=""
            />
            <p className="text-black text-xl font-semibold pt-5 ">
              Sara Williams
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
export default CustomerCarosel;
