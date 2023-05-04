import React from "react";
import { NavLink } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";
import "./header.css";
import { SlPeople } from "react-icons/sl";

export default function Header() {
  return (
    <header>
      <div>
        <span className="logo">
          <BurgerMenu />
          <NavLink to="/">
            <img className="logoimg" src="./img/logo.png" alt="" />
          </NavLink>
        </span>
        <NavLink to="/login">
          <ul className="nav">
            <li>Join / Sign</li>
            <li className="joinSign">
              <SlPeople />
            </li>
          </ul>
        </NavLink>
      </div>
    </header>
  );
}
