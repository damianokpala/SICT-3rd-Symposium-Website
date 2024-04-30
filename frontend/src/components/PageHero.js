import React from "react";
import _ from "./PageHero.css";

const PageHero = ({ pageName }) => {
  return (
    <section className="page-hero-section">
      <div className="container">
        <div className="center-content">
          <h1>{pageName}</h1>
          <nav>
            <ul>
              <li>
                <a href="/home">Home</a>
              </li>
              <li> > </li>
              <li>{pageName}</li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
