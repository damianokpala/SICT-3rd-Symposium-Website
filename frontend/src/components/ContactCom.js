import React from "react";
import _ from "./ContactCom.css";
import person from "../assets/images/person.jpg";
import social_1 from "../assets/icons/Facebook.svg";
import social_2 from "../assets/icons/Twitter.svg";

const ContactCom = () => {
  return (
    <section className="contact_com-section">
      <div className="container">
        <div className="grid">
          <div className="contacts-com">
            <div className="contact-com flow-content">
              <img src={person} alt="" />

              <h3>Dr. Arinze Chiduro</h3>
              <p>Senior Researcher, Agricultural Robotics Institute</p>

              <div className="socials flex align-center">
                <h5>Contact via</h5>
                <span>
                  <img src={social_1} alt="" />
                </span>
                <span>
                  <img src={social_2} alt="" />
                </span>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="contacts-com">
            <div className="contact-com flow-content">
              <img src={person} alt="" />

              <h3>Dr. Arinze Chiduro</h3>
              <p>Senior Researcher, Agricultural Robotics Institute</p>

              <div className="socials flex align-center">
                <h5>Contact via</h5>
                <span>
                  <img src={social_1} alt="" />
                </span>
                <span>
                  <img src={social_2} alt="" />
                </span>
              </div>
            </div>
          </div>

          {/*  */}

          <div className="contacts-com">
            <div className="contact-com flow-content">
              <img src={person} alt="" />

              <h3>Dr. Arinze Chiduro</h3>
              <p>Senior Researcher, Agricultural Robotics Institute</p>

              <div className="socials flex align-center">
                <h5>Contact via</h5>
                <span>
                  <img src={social_1} alt="" />
                </span>
                <span>
                  <img src={social_2} alt="" />
                </span>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="contacts-com">
            <div className="contact-com flow-content">
              <img src={person} alt="" />

              <h3>Dr. Arinze Chiduro</h3>
              <p>Senior Researcher, Agricultural Robotics Institute</p>

              <div className="socials flex align-center">
                <h5>Contact via</h5>
                <span>
                  <img src={social_1} alt="" />
                </span>
                <span>
                  <img src={social_2} alt="" />
                </span>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="message-form">
          <div>
            <h2>MESSAGE US HERE</h2>
            <form className="form">
              <div className="form-group">
                <label for="">Full Name:</label>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  placeholder="John Deo"
                />
              </div>

              <div className="form-group">
                <label for="">Email Address:</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="johndeo@gmail.com"
                />
              </div>

              <div className="form-group">
                <label for="">Additional Comments or Questions:</label>
                <textarea className="messages" rows="15"></textarea>
              </div>

              <div className="submit-form-group">
                <input className="submit-text" type="submit" value="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCom;
