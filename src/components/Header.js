import React from "react";
import BurgerMenu from "./BurgerMenu";
import "./header.css";
import { SlPeople } from "react-icons/sl";

export default function Header() {
  return (
    <header>
      <div>
        <span className="logo">
          <BurgerMenu />
          <img className="logoimg" src="./img/logo.png" alt="" />
        </span>
        <ul className="nav">
          <li>Join / Sign</li>
          <li className="joinSign">
            <SlPeople />
          </li>
        </ul>
      </div>
    </header>
  );
}
