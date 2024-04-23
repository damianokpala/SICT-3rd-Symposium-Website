// React.js

import React from "react";
import Header from "../components/Header";
import PageHero from "../components/PageHero";
import IntroSec from "../components/IntroSec";
import RegForm from "../components/RegisterForm";
import Registers from "../components/Register";
import Event from "../components/Event";
import Footer from "../components/Footer";

const Register = () => {
  return (
    <>
      <Header />
      <main>
        <PageHero pageName="Registration" />
        <IntroSec
          Intro={
            'Welcome to the Registration page for the upcoming symposium on "The Future of Food: AI, Robotics, and Vertical Farming." Secure your spot at this exciting event by completing the registration form below.'
          }
        />
        <RegForm />
        <Registers />
        <Event />
      </main>
      <Footer />
    </>
  );
};

export default Register;
