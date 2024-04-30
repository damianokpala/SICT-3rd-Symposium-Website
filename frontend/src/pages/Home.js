// Home.js

import React from "react";
import Header from "../components/Header";
import HomeHero from "../components/HomeHero";
import HomeAbout from "../components/HomeAbout";
import Highlight from "../components/Highlight";
import Speakers from "../components/Speakers";
import Register from "../components/Register";
import Event from "../components/Event";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <HomeHero />
        <HomeAbout />
        <Highlight />
        <Speakers />
        <Register />
        <Event />
      </main>
      <Footer />
    </>
  );
};

export default Home;
