import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { TbBrandYoutube } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";
const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="burger-menu" onClick={toggleMenu}>
      <div
        className={isOpen ? "menu-icon open" : "menu-icon"}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={isOpen ? "menu-links open" : "menu-links"}>
        <ul>
          <li>
            <AiOutlineClose className="closeMenu" onClick={toggleMenu} />
          </li>
          <li>
            <img className="menuImg" src="./img/logo.png" alt="" />
            <br /> <a href="!#">Now in cinema</a>
          </li>
          <li>
            <a href="!#">Coming soon</a>
          </li>
          <li>
            <a href="!#">Help</a>
          </li>
          <li>
            <a href="!#">About company</a>
          </li>

          <li className="socNetworks">We are in social networks</li>
          <li className="socNetworksLi">
            <FiFacebook className="networksImg" /> Facebook
          </li>
          <li className="socNetworksLi">
            <TbBrandYoutube className="networksImg" /> YouTube
          </li>
          <li className="socNetworksLi">
            <FaInstagram className="networksImg" /> Instagram
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;
