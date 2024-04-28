import React from "react";
import _ from "./SpeakersDetails.css";
import Person from "../assets/images/person.jpg";
import social_1 from "../assets/icons/Facebook.svg";
import social_2 from "../assets/icons/Twitter.svg";

const SpeakersDetails = ({ flex_column }) => {
  return (
    <section className="speakers-details-section {flex_column}">
      <div className="container">
        <div className="speaker">
          <div className="grid-1">
            <div className="flex align-center justify-between">
              <span className="highlight">First Speaker</span>
              <span>The Role of Robotics in Sustainable Agriculture</span>
            </div>
            <div>
              <img src={Person} alt="First Speaker" />
            </div>

            <div className="speaker-details">
              <h4>Speaker Name</h4>
              <p className="title">Speaker Title</p>
              <p className="others">Stanford University</p>
            </div>
          </div>

          <div className="grid-2">
            <h3>Get to know about the speaker</h3>
            <p>
              Dr. Emily Watson is an Associate Professor of Robotics at Stanford
              University, specializing in the application of artificial
              intelligence and robotics in agriculture and food production. With
              a Ph.D. in Robotics from MIT and over a decade of research
              experience, Dr. Watson has led groundbreaking projects in the
              development of autonomous farming systems and precision
              agriculture technologies. Her research focuses on enhancing crop
              yield, resource efficiency, and sustainability through innovative
              robotic solutions. Dr. Watson is a recipient of the National
              Science Foundation CAREER Award and has published numerous papers
              in leading robotics and agricultural journals.
            </p>
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

        <div className="speaker">
          <div className="grid-1">
            <div className="flex align-center justify-between">
              <span className="highlight">First Speaker</span>
              <span>The Role of Robotics in Sustainable Agriculture</span>
            </div>
            <div>
              <img src={Person} alt="First Speaker" />
            </div>

            <div className="speaker-details">
              <h4>Speaker Name</h4>
              <p className="title">Speaker Title</p>
              <p className="others">Stanford University</p>
            </div>
          </div>

          <div className="grid-2">
            <h3>Get to know about the speaker</h3>
            <p>
              Dr. Emily Watson is an Associate Professor of Robotics at Stanford
              University, specializing in the application of artificial
              intelligence and robotics in agriculture and food production. With
              a Ph.D. in Robotics from MIT and over a decade of research
              experience, Dr. Watson has led groundbreaking projects in the
              development of autonomous farming systems and precision
              agriculture technologies. Her research focuses on enhancing crop
              yield, resource efficiency, and sustainability through innovative
              robotic solutions. Dr. Watson is a recipient of the National
              Science Foundation CAREER Award and has published numerous papers
              in leading robotics and agricultural journals.
            </p>
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

        <div className="speaker">
          <div className="grid-1">
            <div className="flex align-center">
              <span className="highlight">First Speaker</span>
              <span>The Role of Robotics in Sustainable Agriculture</span>
            </div>
            <div>
              <img src={Person} alt="First Speaker" />
            </div>

            <div className="speaker-details">
              <h4>Speaker Name</h4>
              <p className="title">Speaker Title</p>
              <p className="others">Stanford University</p>
            </div>
          </div>

          <div className="grid-2">
            <h3>Get to know about the speaker</h3>
            <p>
              Dr. Emily Watson is an Associate Professor of Robotics at Stanford
              University, specializing in the application of artificial
              intelligence and robotics in agriculture and food production. With
              a Ph.D. in Robotics from MIT and over a decade of research
              experience, Dr. Watson has led groundbreaking projects in the
              development of autonomous farming systems and precision
              agriculture technologies. Her research focuses on enhancing crop
              yield, resource efficiency, and sustainability through innovative
              robotic solutions. Dr. Watson is a recipient of the National
              Science Foundation CAREER Award and has published numerous papers
              in leading robotics and agricultural journals.
            </p>
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
    </section>
  );
};

export default SpeakersDetails;
