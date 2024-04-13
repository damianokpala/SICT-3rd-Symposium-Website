// Footer.js

import React from "react";
import styles from "./Footer.css";
import futoLogo from "../assets/images/FUTO Logo.png";
import sictLogo from "../assets/images/SICT Symposium Logo.png";
import ffsLogo from "../assets/images/FFS Logo.png";

import fbIcon from "../assets/icons/Facebook.svg";
import xIcon from "../assets/icons/Twitter.svg";
import instaIcon from "../assets/icons/Instagram.svg";
import tickIcon from "../assets/icons/Tiktok.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer__logo">
          <a href="#">
            <img src={futoLogo} alt="FUTO Logo" />
          </a>

          <a href="#">
            <img src={sictLogo} alt="SICT Logo" />
          </a>

          <a href="#">
            <img src={ffsLogo} alt="Future of Food Symposium Logo" />
          </a>
        </div>
        <p>&copy; Symposium 2024</p>
        <div className="socials">
          <h5>Follow us</h5>

          <nav className="icon__nav">
            <li>
              <a href="">
                <img src={fbIcon} alt="" />
              </a>
            </li>

            <li>
              <a href="">
                <img src={xIcon} alt="" />
              </a>
            </li>

            <li>
              <a href="">
                <img src={instaIcon} alt="" />
              </a>
            </li>

            <li>
              <a href="">
                <img src={tickIcon} alt="" />
              </a>
            </li>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
