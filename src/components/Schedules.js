import React from "react";
import _ from "./Schedules.css";
import tick from "../assets/icons/tick.svg";
import right from "../assets/icons/right.svg";

const Schedules = () => {
  return (
    <section className="schedule-section">
      <div className="container">
        <div className="schedule-container">
          <h2>Symposium Agenda</h2>

          <div className="agendas">
            <div className="agenda">
              <div>
                <span>Morning Session</span>
                <span>
                  <img src={right} alt="" />
                </span>
              </div>
              <div className="none">
                <div>
                  <span>
                    <img src={tick} alt="" />
                  </span>
                  <span>12:00pm - 2:00pm Launch</span>
                </div>

                <div>
                  <span>
                    <img src={tick} alt="" />
                  </span>
                  <span>12:00pm - 2:00pm Launch</span>
                </div>
              </div>
            </div>

            {/* 2 */}
            <div className="agenda">
              <div>
                <span>Midday Session</span>
                <span>
                  <img src={right} alt="" />
                </span>
              </div>
              <div className="none">
                <div>
                  <span>
                    <img src={tick} alt="" />
                  </span>
                  <span>12:00pm - 2:00pm Launch</span>
                </div>

                <div>
                  <span>
                    <img src={tick} alt="" />
                  </span>
                  <span>12:00pm - 2:00pm Launch</span>
                </div>
              </div>
            </div>

            {/* 3 */}

            <div className="agenda">
              <div>
                <span>Afternoon Session</span>
                <span>
                  <img src={right} alt="" />
                </span>
              </div>
              <div className="none">
                <div>
                  <span>
                    <img src={tick} alt="" />
                  </span>
                  <span>12:00pm - 2:00pm Launch</span>
                </div>

                <div>
                  <span>
                    <img src={tick} alt="" />
                  </span>
                  <span>12:00pm - 2:00pm Launch</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedules;
