import React from "react";
import _ from "./AboutMission.css";
import icon1 from "../assets/images/mission_2.png";
import icon2 from "../assets/images/mission_3.png";
import icon3 from "../assets/images/mission_4.png";

const AboutMission = ({ text }) => {
  return (
    <section className="about-mission-section">
      <div className="container">
        <div className="grid">
          <h2>OUR MISSION</h2>

          <div>
            <p>{text}</p>
          </div>
        </div>
        <div className="icons">
          <img src={icon1} alt="" />
          <img src={icon2} alt="" />
          <img src={icon3} alt="" />
        </div>
      </div>
    </section>
  );
};

export default AboutMission;
