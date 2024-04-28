// Contact.js

import React from "react";
import Header from "../components/Header";
import PageHero from "../components/PageHero";
import IntroSec from "../components/IntroSec";
import Registers from "../components/Register";
import Event from "../components/Event";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div>
      <Header />
      <main>
        <PageHero pageName="Contact" />
        <IntroSec
          Intro={
            "Welcome to the Future of Food Symposium 2024! Below is the schedule of events for each day of the symposium. Please review the agenda to plan your participation accordingly."
          }
        />
        <Registers />
        <Event />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
