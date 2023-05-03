import React, { Component } from "react";
import Slider from "react-slick";
import { filmsList } from "../helpers/filmsList";

export default class MultipleItems extends Component {
  render() {
    const settings = {
      className: "center",
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 3,
    };
    return (
      <div>
        <Slider {...settings}>
          {filmsList.map((filmsList, index) => (
            <div>
              <h3>{filmsList.title}</h3>
              <img src={filmsList.url} alt="" />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
