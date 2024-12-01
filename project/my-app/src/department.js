import './department.css';
import React, { useState } from "react";
import axios from "axios";

const DepartmentForm = () => {
  const [deptID, setDeptID] = useState("");
  const [deptName, setDeptName] = useState("");
  const [message, setMessage] = useState(""); // Message state for success or error

  const handleSubmit = async (event) => {
    event.preventDefault();

    const departmentData = {
      dept_ID: deptID,
      dept_name: deptName,
    };

    try {
      const response = await axios.post("http://127.0.0.1:5000/api/departments/", departmentData);

      if (response.data.message) {
        setMessage(response.data.message); // Set success message
      } else {
        setMessage("Department added successfully!");
      }
    } catch (error) {
      if (error.response) {
        setMessage(`Error: ${error.response.data.error}`);
      } else {
        setMessage("There was an error submitting the form!");
      }
    }
  };

  return (
    <div className="department-container">
      <h1 className="form-heading">Add Department Details</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Department ID</label>
          <input
            type="text"
            value={deptID}
            onChange={(e) => setDeptID(e.target.value)}
            placeholder="Enter Department ID"
          />
        </div>

        <div>
          <label>Department Name</label>
          <input
            type="text"
            value={deptName}
            onChange={(e) => setDeptName(e.target.value)}
            placeholder="Enter Department Name"
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      {message && <div className={message.includes('Error') ? "error-message" : "message"}>{message}</div>}
    </div>
  );
};

export default DepartmentForm;
