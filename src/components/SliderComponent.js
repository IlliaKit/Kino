import React, { Component } from "react";
import Slider from "react-slick";

import { filmsList } from "../helpers/filmsList";

export default class MultipleItems extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
    };
    return (
      <div>
        <Slider {...settings}>
          {filmsList.map((filmsList) => (
            <div class="container">
              <img src={filmsList.url} alt="" />
              <div>
                <p className="slideText">{filmsList.title}</p>
                <p className="seansText">Session Schedule</p>

                <p className="seansTime">
                  {filmsList.time
                    ? ` ${filmsList.time}`
                    : `Sorry, sessions no more`}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
