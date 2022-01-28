import React, { useState } from "react";
import Vertical from "../vertical-slider";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Slider from "react-slick";
export default class SlickGoTo extends React.Component {
  state = {
    slideIndex: 0,
    updateCount: 0,
  };
  change(v) {
    this.slider.slickGoTo(v);
  }
  render() {
    var settings = {
      afterChange: () =>
        this.setState((state) => ({ updateCount: state.updateCount + 1 })),
      beforeChange: (current, next) => this.setState({ slideIndex: next }),
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      vertical: false,
      arrows: false,
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
      <div className="w-full bg-black-100">
        <div className="max-w-6xl h-[90vh] items-center mx-auto flex justify-between">
          <div
            onClick={this.change.bind(
              this,
              this.state.slideIndex !== 0
                ? this.state.slideIndex - 1
                : this.state.slideIndex
            )}
            className="border-2 group text-white hover:text-black-100 hover:bg-white cursor-pointer transition-all p-3 mr-6 rounded-full border-white"
          >
            <BsChevronLeft className="" />
          </div>
          <div className="grid grid-cols-2 md:gap-20 gap-y-10">
            <div className="w-full md:col-span-1  col-span-2">
              {" "}
              <Slider {...settings} ref={(slider) => (this.slider = slider)}>
                {new Array(3).fill("1")?.map((v, k) => (
                  <div key={k} className="flex flex-col">
                    <h1 className="text-6xl text-white leading-tight font-medium font-oswald pb-10 tracking-wide	">
                      LATEST
                      <br />
                      <span className="text-secondary">DESIGN</span> BLOG
                    </h1>
                    <p className="text-base font-thin text-white font-roboto pb-7 tracking-wide">
                      Lorem ipsum is simply dummy text of the printing and
                      typesetting. Lorem Ipsum has been the industry’s standard
                      dummy. Lorem ipsum is simply dummy text of the printing
                      and design.
                    </p>
                    <button className="transition border border-white self-start duration-500 w-44 py-4 font-roboto flex md:mx-0 mx-auto items-center justify-center bg-black-100 rounded-full mt-4  text-white  hover:text-black-100 hover:bg-white text-sm ">
                      Learn More
                    </button>
                  </div>
                ))}
              </Slider>
            </div>

            <div className="w-full md:col-span-1  col-span-2 relative">
              <img
                src="https://megaone.acrothemes.com/digital-agency/img/blog-mokeup.png"
                alt=""
                className="relative"
              />
              <div className="md:w-[106%] w-[121%] overflow-hidden md:left-[-2px] left-[-20px] absolute md:top-[36px] top-[20px] pl-12 pr-16 h-[230px]">
                <Vertical state={this.state} />
              </div>
            </div>
          </div>
          <div
            onClick={this.change.bind(this, this.state.slideIndex + 1)}
            className="border-2 group text-white hover:text-black-100 hover:bg-white cursor-pointer transition-all p-3 relative z-50 rounded-full border-white"
          >
            <BsChevronRight />
          </div>
        </div>
      </div>
    );
  }
}
