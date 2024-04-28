// Speakers.js

import React from "react";
import Header from "../components/Header";
import PageHero from "../components/PageHero";
import IntroSec from "../components/IntroSec";
import Registers from "../components/Register";
import Event from "../components/Event";
import Footer from "../components/Footer";
import Register from "../components/Register";

const Speakers = () => {
  return (
    <div>
      <Header />
      <main>
        <PageHero pageName="Speakers" />
        <IntroSec
          Intro={
            "Welcome to the Symposium Speakers page, where you can get acquainted with the experts who will be sharing their knowledge and insights during the event. Our lineup of speakers includes accomplished professionals, researchers, and thought leaders from various fields related to the theme of the symposium."
          }
        />
        <Registers />
        <Event />
      </main>
      <Footer />
    </div>
  );
};

export default Speakers;
