import React from "react";
import _ from "./Organizers.css";
import person from "../assets/images/person.jpg";

const Organizers = () => {
  return (
    <section className="home_organizers__section">
      <div className="container flow-content">
        <h2>Featured Organizers</h2>

        <div className="organizers">
          <div className="organizer flow-content">
            <img src={person} alt="" />

            <h3>Dr. Arinze Chiduro</h3>
            <p>Senior Researcher, Agricultural Robotics Institute</p>
          </div>

          {/*  */}
          <div className="organizer flow-content">
            <img src={person} alt="" />

            <h3>Dr. Arinze Chiduro</h3>
            <p>Senior Researcher, Agricultural Robotics Institute</p>
          </div>

          {/*  */}
          <div className="organizer flow-content">
            <img src={person} alt="" />

            <h3>Dr. Arinze Chiduro</h3>
            <p>Senior Researcher, Agricultural Robotics Institute</p>
          </div>

          {/* Second Griid */}

          <div className="organizer flow-content">
            <img src={person} alt="" />

            <h3>Dr. Arinze Chiduro</h3>
            <p>Senior Researcher, Agricultural Robotics Institute</p>
          </div>

          {/*  */}
          <div className="organizer flow-content">
            <img src={person} alt="" />

            <h3>Dr. Arinze Chiduro</h3>
            <p>Senior Researcher, Agricultural Robotics Institute</p>
          </div>

          {/*  */}
          <div className="organizer flow-content">
            <img src={person} alt="" />

            <h3>Dr. Arinze Chiduro</h3>
            <p>Senior Researcher, Agricultural Robotics Institute</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Organizers;
