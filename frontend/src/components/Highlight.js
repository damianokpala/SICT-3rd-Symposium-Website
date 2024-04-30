import React from "react";
import _ from "./Highlight.css";
import highlight from "../assets/images/highlight.png";
import tick from "../assets/icons/tick.svg";
import arrRight from "../assets/icons/right.svg";

const Highlight = () => {
  return (
    <section className="home_highlight__section">
      <div className="container flow-content">
        <h2 className="secondary_heading">Symposium Highlight</h2>

        <div className="grid-2">
          <div className="grid-one">
            <img src={highlight} alt="People gathering" />
          </div>

          <div className="grid-two">
            <ul className="list">
              <li className="list-item">
                <span className="f-align-center">
                  <img src={tick} alt="" />
                  <p>Workshop for Final Year and Postgraduare Student</p>
                </span>
              </li>

              {/* two */}

              <li className="list-item">
                <span className="f-align-center">
                  <img src={tick} alt="" />
                  <p>Workshop for Final Year and Postgraduare Student</p>
                </span>
              </li>

              {/*  */}

              <li className="list-item">
                <span className="f-align-center">
                  <img src={tick} alt="" />
                  <p>Workshop for Final Year and Postgraduare Student</p>
                </span>
              </li>

              <li className="list-item">
                <span className="f-align-center">
                  <img src={tick} alt="" />
                  <p>Workshop for Final Year and Postgraduare Student</p>
                </span>
              </li>

              <li className="list-item">
                <span className="f-align-center">
                  <img src={tick} alt="" />
                  <p>Workshop for Final Year and Postgraduare Student</p>
                </span>
              </li>
            </ul>

            <span className="bttn f-align-center">
              <a href="" className="btn">
                View Event Agenda
              </a>

              <img className="icon" src={arrRight} alt="Right arrow" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlight;
