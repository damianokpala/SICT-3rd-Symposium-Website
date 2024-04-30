import React from "react";
import _ from "./HomeHero.css";
import flyers from "../assets/images/flyer.png";

const HomeHero = () => {
  return (
    <section className="home_hero__section">
      <div className="container flow-content">
        <p className="subtitle">
          3rd symposium of the School of Information and Communication
          Technology (SICT)
        </p>
        <h1 className="primary_heading">Future of Food Symposium 2024</h1>
        <img src={flyers} alt="The invitation flyer" className="hero_flyer" />

        <p className="hero__caption">
          Date: May 22nd, 2024 | Time: 9:00 AM | Location: Hall of Excellence,
          FUTO
        </p>

        <p className="hero_des">
          Join us for the "Future of Food" Symposium, where we explore the
          exciting intersection of technology and agriculture. Discover how AI,
          Robotics, and Vertical Farming are revolutionizing the way we produce
          and consume food.
        </p>

        <a href="" className="btn primary-btn">
          Register Now
        </a>
      </div>
    </section>
  );
};

export default HomeHero;
