// Home.js

import React from "react";
import Header from "../components/Header";
import Register from "../components/Register";
import Event from "../components/Event";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Register />
        <Event />
      </main>
      <Footer />
    </>
  );
};

export default Home;
