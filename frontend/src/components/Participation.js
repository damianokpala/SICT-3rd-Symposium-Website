import React from "react";
import _ from "./Participation.css";
import register_1 from "../assets/images/registration-1.png";
import register_2 from "../assets/images/registration-2.png";
import register_3 from "../assets/images/registration-3.png";

const Participation = () => {
  return (
    <section className="participation-section">
      <div className="container">
        <h2>SICT SYMPOSIUM</h2>
        <p>
          The SICT Symposium features a diverse range of activities, including
          keynote presentations, panel discussions, workshops, and networking
          opportunities. Attendees have the chance to gain valuable insights,
          connect with peers, and explore emerging technologies in areas such as
          artificial intelligence, robotics, cybersecurity, and data science.
        </p>
        <div className="grid-3">
          <div className="grid">
            <img src={register_1} alt="" />
            <span>For Undergraduate</span>
          </div>

          <div className="grid">
            <img src={register_2} alt="" />
            <span>For Undergraduate</span>
          </div>

          <div className="grid">
            <img src={register_3} alt="" />
            <span>For Undergraduate</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Participation;
