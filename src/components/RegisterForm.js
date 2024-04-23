import React from "react";
import _ from "./RegisterForm.css";

const RegForm = () => {
  return (
    <section className="">
      <div className="container">
        <div className="form-section">
          <h3>Registration Form</h3>

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
              <label for="">Institution:</label>
              <input
                type="text"
                name="fullname"
                id="fullname"
                placeholder="Cambridge University"
              />
            </div>

            <div className="form-group">
              <label for="">Position/Title:</label>
              <input type="text" name="fullname" id="fullname" />
            </div>

            <div className="form-group">
              <label for="">Contact Number:</label>
              <input type="text" name="fullname" id="fullname" />
            </div>

            <div className="form-group">
              <label for="">Registration Type:</label>
              <input type="text" name="fullname" id="fullname" />
            </div>

            <div className="form-group">
              <label for="">Additional Comments or Questions:</label>
              <textarea className="messages" rows="20"></textarea>
            </div>

            <div className="submit-form-group">
              <input className="submit-text" type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegForm;