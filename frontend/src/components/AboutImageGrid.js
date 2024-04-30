import React from "react";
import _ from "./AboutImageGrid.css";
import Image1 from "../assets/images/about_grid_1.png";
import Image2 from "../assets/images/about_grid_2.png";

const AboutImageGrid = () => {
  return (
    <section className="grid-image-section">
      <div className="container">
        <div className="grid-2">
          <div className="grid">
            <img src={Image1} alt="" />
          </div>
          <div className="grid">
            <img src={Image2} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutImageGrid;
