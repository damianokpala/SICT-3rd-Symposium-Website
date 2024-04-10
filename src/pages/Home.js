// Home.js

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./Home.css";

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <h2>Welcome to the Home Page</h2>
        <p>This is the home page content.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
