import React from "react";
import "./login.css";
import { BsGoogle } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { BsApple } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { ImHome } from "react-icons/im";

export default function Login() {
  return (
    <div className="loginPage">
      <div className="loginWidth">
        <p className="imgCenter">
          <img className="loginImg" src="./img/logo.png" alt="" />
        </p>
        <h2>Login to personal account</h2>
        <p className="loginPersonalInf">
          All your orders and personal information are here
        </p>
        <input
          className="loginInput"
          type="tel"
          id="phone"
          name="phone"
          placeholder="+48 (XX) XXX XXXX"
        ></input>
        <button className="loginButton">Enter</button>

        <div className="loginWith">
          <p>log in with</p>

          <BsGoogle className="loginGoogleButton" />
          <FaFacebookF className="loginGoogleButton" />
          <BsApple className="loginGoogleButton" />
        </div>
        <NavLink to="/">
          <p className="loginReturn">
            Return to the site <ImHome />
          </p>
        </NavLink>
      </div>
    </div>
  );
}
