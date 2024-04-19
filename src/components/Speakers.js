import React from "react";
import _ from "./Speakers.css";
import person from "../assets/images/person.jpg";

const Speakers = () => {
  return (
    <section className="home_speakers__section">
      <div className="container flow-content">
        <h2 className="secondary_heading">Featured Speakers</h2>

        <div className="speakers">
          <div className="speaker flow-content">
            <img src={person} alt="" />

            <h3>Dr. Arinze Chiduro</h3>
            <p>Senior Researcher, Agricultural Robotics Institute</p>
          </div>

          {/*  */}
          <div className="speaker flow-content">
            <img src={person} alt="" />

            <h3>Dr. Arinze Chiduro</h3>
            <p>Senior Researcher, Agricultural Robotics Institute</p>
          </div>

          {/*  */}
          <div className="speaker flow-content">
            <img src={person} alt="" />

            <h3>Dr. Arinze Chiduro</h3>
            <p>Senior Researcher, Agricultural Robotics Institute</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speakers;
