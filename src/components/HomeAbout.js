import React from "react";
import _ from "./HomeAbout.css";
import register from "../assets/images/register.png";
import accept from "../assets/images/accept.png";
import access from "../assets/images/access.png";
import dots from "../assets/icons/dots.svg";

const HomeAbout = () => {
  return (
    <section className="home_about__section">
      <div className="container flow-content">
        <h2 className="secondary_heading">Future of Food Symposium 2024</h2>

        <p className="about__des">
          The "Future of Food" Symposium aims to explore the transformative
          potential of AI, Robotics, and Vertical Farming in revolutionizing
          food production, distribution, and sustainability. By bringing
          together experts, researchers, and enthusiasts in the field, the
          symposium seeks to foster interdisciplinary discussions, share
          insights, and inspire innovative solutions to address the challenges
          facing global food systems.
        </p>

        <div className="steps">
          <div className="top step step-1">
            <p>REGISTER</p>
            <img src={register} alt="register" />
          </div>

          <div className="step-before"></div>
          <div className="bottom step step-2">
            <p>ACCEPT</p>
            <img src={accept} alt="accept" />
          </div>

          <div className="step-before"></div>

          <div className="top step step-3">
            <p>ACCESS</p>
            <img src={access} alt="access" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
