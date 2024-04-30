import React from "react";
import _ from "./PastEvent.css";
import event from "../assets/images/events.png";

const Events = () => {
  return (
    <section className="events-section">
      <div className="container">
        <h2>Past Events</h2>
        <img src={event} alt="" />
      </div>
    </section>
  );
};

export default Events;
