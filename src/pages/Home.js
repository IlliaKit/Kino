import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import { IoAlertOutline } from "react-icons/io5";
import { CiPlay1 } from "react-icons/ci";
import HeroSlide from "../components/heroSlide/HeroSlide";

export default class MultipleItems extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      speed: 700,

      slidesToShow: 4,
      slidesToScroll: 2,
      swipeToSlide: true,
      rows: 2,
      slidesPerRow: 1,
    };

    return (
      <div>
        <HeroSlide filmsList={this.props.filmsList} />
        <Slider {...settings}>
          {this.props.filmsList.map((filmsList) => (
            <div class="container">
              <img src={filmsList.url} alt="" />
              <div>
                <p className="slideHeader">
                  <table>
                    <tr>
                      <td className="tableIcon">
                        <NavLink to={`/filmInfo/${filmsList.id - 1}`}>
                          <IoAlertOutline className="iconInTable" />
                        </NavLink>
                      </td>
                      <td className="tableText"> More information</td>
                      <td className="tableIcon">
                        <a
                          href={filmsList.trailer}
                          target="blank"
                          className="trailerLink"
                        >
                          <CiPlay1 className="iconInTable" />
                        </a>
                      </td>
                      <td className="tableText"> Watch the trailer</td>
                    </tr>
                  </table>
                </p>
                <p className="seansText">Session Schedule</p>

                <p className="seansTime">
                  {filmsList.time
                    ? ` ${filmsList.time}`
                    : `Sorry, sessions no more`}
                </p>

                <p className="slideText">{filmsList.title}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
