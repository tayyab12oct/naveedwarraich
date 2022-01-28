import React, { Component } from "react";
import Slider from "react-slick";

export default class VerticalMode extends Component {
  state = {
    slideIndex: 0,
    updateCount: 0,
  };
  change(v) {
    this.slider.slickGoTo(v);
  }
  componentWillReceiveProps(prev, next) {
    this.setState({
      ...prev.state,
    });
    this.change(prev.state.slideIndex);
  }
  render() {
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      afterChange: () =>
        this.setState((state) => ({ updateCount: state.updateCount + 1 })),
      beforeChange: (current, next) => this.setState({ slideIndex: next }),
    };
    return (
      <Slider {...settings} ref={(slider) => (this.slider = slider)}>
        <div>
          <img
            src="https://megaone.acrothemes.com/digital-agency/img/blog-mokup-img.png"
            alt=""
            className="w-full"
          />
        </div>
        <div>
          <img
            src="https://megaone.acrothemes.com/digital-agency/img/blog-mokup-img.png"
            alt=""
            className="w-full"
          />
        </div>
        <div>
          <img
            src="https://megaone.acrothemes.com/digital-agency/img/blog-mokup-img.png"
            alt=""
            className="w-full"
          />
        </div>
      </Slider>
    );
  }
}
