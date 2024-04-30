import React, { useState, useEffect } from "react";

const Admin = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []); // Fetch data when component mounts

  const fetchData = () => {
    fetch("http://localhost/your-project-name/backend/api/fetch.php")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data); // Update state with fetched data
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div>
      <h1>Admin Portal</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.fullname}</td>
              <td>{user.email}</td>
              <td>{user.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
