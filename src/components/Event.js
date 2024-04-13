import React from "react";
import styles from "./Event.css";
import person from "../assets/images/person.jpg";
import mail from "../assets/icons/Mail.svg";
import tel from "../assets/icons/Phone.svg";

import date from "../assets/icons/Calendar.svg";
import time from "../assets/icons/Time.svg";
import location from "../assets/icons/Location.svg";

const Event = () => {
  return (
    <section className="event__section">
      <div className="container">
        <div className="enquire__section flow-content">
          <h4 className="other_headings">For inquiries and registration</h4>

          <div className="contacts">
            <div className="contact">
              <img
                className="contact__image"
                src={person}
                alt="Contact Person 1"
              />
              <div className="contact__info flow-content">
                <span className="contact__name">Damian Okpala</span>
                <span className="contact_position">
                  <span>Event Convener</span>
                  <span className="f-align-center">
                    <a href="mailto:damianokpala111@gmail.com">
                      <img className="mail-icon" src={mail} alt="" />
                    </a>

                    <a href="tel:+2349067187178">
                      <img className="tel-icon" src={tel} alt="" />
                    </a>
                  </span>
                </span>
              </div>
            </div>

            {/* Person two */}

            <div className="contact">
              <img
                className="contact__image"
                src={person}
                alt="Contact Person 1"
              />
              <div className="contact__info flow-content">
                <span className="contact__name">Damian Okpala</span>
                <span className="contact_position">
                  <span>Event Convener</span>
                  <span className="f-align-center">
                    <a href="mailto:damianokpala111@gmail.com">
                      <img className="mail-icon" src={mail} alt="" />
                    </a>

                    <a href="tel:+2349067187178">
                      <img className="tel-icon" src={tel} alt="" />
                    </a>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="external__section">
            <div className="external flow-content">
              <img
                className="external__image"
                src={person}
                alt="Special guest"
              />
              <p className="external__name">Prof Nnena Oti</p>
              <p className="external__title">Vice-Chancellor of FUTO</p>

              <p className="external__position">Special Guest</p>
            </div>

            <div className="external flow-content">
              <img
                className="external__image"
                src={person}
                alt="Special guest"
              />
              <p className="external__name">Prof Nnena Oti</p>
              <p className="external__title">Vice-Chancellor of FUTO</p>

              <p className="external__position">Special Guest</p>
            </div>
          </div>

          <div className="details__section flow-content">
            <h4 className="other_headings">Event Details</h4>

            <div className="events">
              <div className="event">
                <img className="event__icon" src={date} alt="" />
                <span className="event__item">May 22nd, 2024</span>
              </div>
              <div className="event">
                <img className="event__icon" src={time} alt="" />
                <span className="event__item">9:00AM</span>
              </div>
              <div className="event">
                <img className="event__icon" src={location} alt="" />
                <span className="event__item">Hall of Excellence, FUTO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Event;
