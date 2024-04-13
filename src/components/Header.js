// Header.js

import React from "react";
import logo from "../assets/icons/logo.svg";
import styles from "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <a href="/">
          <img alt="SICT logo" className="logo__class" src={logo} />
        </a>
        <nav>
          <ul className="nav__list">
            <li>
              <a className="active__nav" href="/">
                Home
              </a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/about">Symposium Agenda</a>
            </li>
            <li>
              <a href="/about">Speakers</a>
            </li>
            <li>
              <a href="/about">Contact Us</a>
            </li>
          </ul>
        </nav>

        <nav className="f-align-center">
          <ul className="nav_cta">
            <li className="btn register_cta">
              <a href="/register">Register</a>
            </li>
          </ul>

          <button className="mobile_nav_btn">
            <span className="nav__open"></span>
            <span className="nav__close"></span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
