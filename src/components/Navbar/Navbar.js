import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="app__navbar" id="navbar">
      <h1 className="navbar-logo">BRILLIANT</h1>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#header">HOME</a>
        </li>
        <li className="p__opensans">
          <a href="#services">SERVICES</a>
        </li>
        <li className="p__opensans">
          <a href="#works">WORKS</a>
        </li>
        <li className="p__opensans">
          <a href="#about">ABOUT</a>
        </li>
        <li className="p__opensans">
          <a href="#news">BLOG</a>
        </li>
        <li className="p__opensans">
          <a href="#testimonial">TESTIMONIAL</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans navbar-login">
          Log In / Registration
        </a>
        <div />
        <a href="/" className="p__opensans">
          <button className="custom__button-login main_div">CONTACT</button>
        </a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          className="hamburger"
          fontSize={27}
          color="#fff"
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen-overlay flex-center slide-bottom">
            <AiFillCloseCircle
              fontSize={27}
              color="#fff"
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen-links">
              <li className="p__opensans">
                <a href="#header">HOME</a>
              </li>
              <li className="p__opensans">
                <a href="#services">SERVICES</a>
              </li>
              <li className="p__opensans">
                <a href="#works">WORKS</a>
              </li>
              <li className="p__opensans">
                <a href="#about">ABOUT</a>
              </li>
              <li className="p__opensans">
                <a href="#news">BLOG</a>
              </li>
              <li className="p__opensans">
                <a href="#testimonial">TESTIMONIAL</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
