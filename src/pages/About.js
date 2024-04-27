// About.js

import React from "react";
import Header from "../components/Header";
import PageHero from "../components/PageHero";
import IntroSec from "../components/IntroSec";
import AboutImageGrid from "../components/AboutImageGrid";
import AboutMission from "../components/AboutMission";
import Organizers from "../components/Orgaanizers";
import Event from "../components/Event";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <Header />
      <main>
        <PageHero pageName="About" />
        <IntroSec
          Intro={
            "Welcome to the School of Information and Communication Technology (SICT) Symposium, an annual event dedicated to exploring the latest advancements and innovations in the field of Information and Communication Technology (ICT)."
          }
        />
        <AboutImageGrid />
        <AboutMission
          text={
            "At SICT, our mission is to foster interdisciplinary collaboration, knowledge sharing, and technological innovation in the ever-evolving landscape of ICT. Through our symposium, we aim to bring together leading researchers, industry professionals, and students to exchange ideas, engage in meaningful discussions, and shape the future of ICT."
          }
        />
        <Organizers />
        <Event />
      </main>
      <Footer />
    </div>
  );
};

export default About;
