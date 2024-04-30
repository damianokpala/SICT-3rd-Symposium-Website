import React from "react";
import styles from "./Register.css";
import benefit_1 from "../assets/icons/benefit-1.svg";
import benefit_2 from "../assets/icons/benefit-2.svg";
import benefit_3 from "../assets/icons/benefit-3.svg";
import benefit_4 from "../assets/icons/benefit-4.svg";

const Register = () => {
  return (
    <section className="register__section">
      <div className="container flow-content">
        <h3>
          Attend the "Future of Food" Symposium! Secure your spot by registering
          today.
        </h3>

        <a href="/register" className="btn register__cta">
          Register
        </a>

        <div className="event__features">
          <div className="event__feature">
            <span className="feature-container">
              <img className="feature__image" src={benefit_1} alt="benefit-1" />
              <p className="feature__note">
                Access to all symposium sessions, including keynote speeches,
                panel discussions, and workshops.
              </p>
            </span>
          </div>

          <div className="event__feature">
            <span className="feature-container">
              <img className="feature__image" src={benefit_2} alt="benefit-1" />
              <p className="feature__note">
                Access to all symposium sessions, including keynote speeches,
                panel discussions, and workshops.
              </p>
            </span>
          </div>

          <div className="event__feature">
            <span className="feature-container">
              <img className="feature__image" src={benefit_3} alt="benefit-1" />
              <p className="feature__note">
                Access to all symposium sessions, including keynote speeches,
                panel discussions, and workshops.
              </p>
            </span>
          </div>

          <div className="event__feature">
            <span className="feature-container">
              <img className="feature__image" src={benefit_4} alt="benefit-1" />
              <p className="feature__note">
                Access to all symposium sessions, including keynote speeches,
                panel discussions, and workshops.
              </p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
