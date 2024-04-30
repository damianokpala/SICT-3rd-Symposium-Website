// Agenda.js

import React from "react";
import Header from "../components/Header";
import PageHero from "../components/PageHero";
import IntroSec from "../components/IntroSec";
import Schedules from "../components/Schedules";
import Registers from "../components/Register";
import Event from "../components/Event";
import Footer from "../components/Footer";

const Agenda = () => {
  return (
    <div>
      <Header />
      <main>
        <PageHero pageName="Agenda" />
        <IntroSec
          Intro={
            "Welcome to the Future of Food Symposium 2024! Below is the schedule of events for each day of the symposium. Please review the agenda to plan your participation accordingly."
          }
        />
        <Schedules />

        <IntroSec
          Intro={
            "Scheduled breaks and networking sessions will provide opportunities for attendees to interact with speakers and fellow participants. Take advantage of these sessions to network and exchange ideas"
          }
        />

        <Registers />
        <Event />
      </main>
      <Footer />
    </div>
  );
};

export default Agenda;
