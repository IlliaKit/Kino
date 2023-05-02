import React from "react";
import "./header.css";
import { SlPeople } from "react-icons/sl";

export default function Header() {
  return (
    <header>
      <div>
        <span className="logo">
          <img className="logoimg" src="./img/logo.png" alt="" />
        </span>
        <ul className="nav">
          <li>join/sign</li>
          <li>
            <SlPeople />
          </li>
        </ul>
      </div>
    </header>
  );
}
