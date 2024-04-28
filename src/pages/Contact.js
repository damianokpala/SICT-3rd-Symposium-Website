// Contact.js

import React from "react";
import Header from "../components/Header";
import PageHero from "../components/PageHero";
import IntroSec from "../components/IntroSec";
import ContactCom from "../components/ContactCom";
import Registers from "../components/Register";
import Event from "../components/Event";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div>
      <Header />
      <main>
        <PageHero pageName="Contact" />
        <ContactCom />
        <Registers />
        <Event />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
