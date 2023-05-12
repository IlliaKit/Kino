import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import { IoAlertOutline } from "react-icons/io5";
import React from "react";
import { CiPlay1 } from "react-icons/ci";
import "./heroSlide.css";

export default function HeroSlide({ filmsList }) {
  const settings = {
    className: "",
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    grabCursor: true,
    autoplay: true,
    autoplaySpeed: 5000,
    swipeToSlide: true,
    adaptiveHeight: true,
    animateIn: "animateIn",
    animateOut: "animateOut",
  };

  return (
    <div className="hero">
      <Slider {...settings}>
        {filmsList.map((filmsList) => (
          <div class="hero-container">
            <img src={filmsList.big_img} alt="" />
            <div>
              <p className="hero-slideHeader">
                <table>
                  <tr>
                    <td className="hero-tableIcon">
                      <NavLink to={`/filmInfo/${filmsList.id - 1}`}>
                        <IoAlertOutline className="hero-iconInTable" />
                      </NavLink>

                      <span className="hero-tableText">More information</span>
                      <span className="hero-trailerLink">
                        <a href={filmsList.trailer} target="blank">
                          <CiPlay1 className="hero-iconInTable" />
                        </a>
                        <span className="hero-tableText">
                          Watch the trailer
                        </span>
                      </span>
                    </td>

                    <td className="hero-tableIcon">
                      <span className="hero-title">{filmsList.title}</span>{" "}
                      <br />
                      <br />
                      <span className="hero-mini_description">
                        {filmsList.mini_description}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        className="hero-image"
                        style={{
                          width: "300px",
                          height: "400px",
                          position: "fixed",
                          top: "100px",
                          left: "70px",
                          zIndex: "5",
                        }}
                        src={filmsList.url}
                        alt=""
                      />
                    </td>
                  </tr>
                </table>
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
