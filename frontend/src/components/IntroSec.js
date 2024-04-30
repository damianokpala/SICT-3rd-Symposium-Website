import React from "react";
import _ from "./IntroSec.css";

const IntroSec = ({ Intro }) => {
  return (
    <section className="intro-sec-section">
      <div className="container">
        <div className="grid-2">
          <p>{Intro}</p>
          <div>
            <div className="empty"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSec;
