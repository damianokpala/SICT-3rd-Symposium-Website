// import React from "react";
import React, { useState } from "react";
import axios from "axios";
import _ from "./RegisterForm.css";

const RegForm = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    contact: "",
  });

  const handleChange = (e) => {
    // Update the form data state when input values change
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send form data to the PHP backend endpoint
      const response = await axios.post(
        "http://localhost/your-project-name/backend/api/signup.php",
        formData
      );

      // Handle response
      console.log("Response from backend:", response.data);
      // You can handle the response data here (e.g., show a success message)

      // Clear the form after successful submission
      setFormData({
        fullname: "",
        email: "",
        contact: "",
      });
    } catch (error) {
      // Handle errors (e.g., display an error message)
      console.error("Error:", error);
    }
  };

  return (
    <section className="">
      <div className="container">
        <div className="form-section">
          <h3>Registration Form</h3>

          <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
              <label for="">Full Name:</label>
              <input
                type="text"
                name="fullname"
                id="fullname"
                placeholder="John Deo"
                value={formData.fullname}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label for="">Full Name:</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label for="">Full Name:</label>
              <input
                type="number"
                name="contact"
                placeholder="Contact"
                value={formData.contact}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegForm;

// const RegForm = () => {
//   return (
//     <section className="">
//       <div className="container">
//         <div className="form-section">
//           <h3>Registration Form</h3>

//           <form className="form">
//             <div className="form-group">
//               <label for="">Full Name:</label>
//               <input
//                 type="text"
//                 name="fullname"
//                 id="fullname"
//                 placeholder="John Deo"
//               />
//             </div>

//             <div className="form-group">
//               <label for="">Email Address:</label>
//               <input
//                 type="email"
//                 name="email"
//                 id="email"
//                 placeholder="johndeo@gmail.com"
//               />
//             </div>

//             <div className="form-group">
//               <label for="">Department:</label>

//               <select for="">
//                 <option value="Computer Science" key="cam">
//                   Computer Science
//                 </option>

//                 <option value="Software Engineering" key="cam">
//                   Software Engineering
//                 </option>

//                 <option value="Cyber Security" key="cam">
//                   Cyber Security
//                 </option>

//                 <option value="Information Technology" key="cam">
//                   Information Technology
//                 </option>
//               </select>
//             </div>

//             <div className="form-group">
//               <label for="">Position/Title:</label>
//               <input type="text" name="fullname" id="fullname" />
//             </div>

//             <div className="form-group">
//               <label for="">Contact Number:</label>
//               <input type="text" name="fullname" id="fullname" />
//             </div>

//             <div className="form-group">
//               <label for="">Registration Type:</label>
//               <input type="text" name="fullname" id="fullname" />
//             </div>

//             <div className="form-group">
//               <label for="">Additional Comments or Questions:</label>
//               <textarea className="messages" rows="20"></textarea>
//             </div>

//             <div className="submit-form-group">
//               <input className="submit-text" type="submit" value="Submit" />
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default RegForm;
