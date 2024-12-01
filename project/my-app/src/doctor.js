import './doctor.css';
import React, { useState } from "react";
import axios from "axios";

const DoctorForm = () => {
  const [doctorID, setDoctorID] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [specialisation, setSpecialisation] = useState("");
  const [deptName, setDeptName] = useState("");
  const [message, setMessage] = useState(""); // Message state for success or error

  const handleSubmit = async (event) => {
    event.preventDefault();

    const doctorData = {
      doctorID, // user-entered doctor ID (optional)
      doctorName,
      specialisation,
      dept_name: deptName,
    };

    try {
      const response = await axios.post("http://127.0.0.1:5000/api/doctors/", doctorData);

      // Check for a success message or an error
      if (response.data.message) {
        setMessage(response.data.message); // Set success message
      } else {
        setMessage("Doctor added successfully!");
      }
    } catch (error) {
      // Handle error during request (e.g., network issues or backend errors)
      if (error.response) {
        // Error response from server
        setMessage(`Error: ${error.response.data.error}`);
      } else {
        // Network or other errors
        setMessage("There was an error submitting the form!");
      }
    }
  };

  return (
    <div>
      <h1 className="form-heading">Add Doctor Details</h1> {/* Heading */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Doctor ID (Optional)</label>
          <input
            type="text"
            value={doctorID}
            onChange={(e) => setDoctorID(e.target.value)}
            placeholder="Enter Doctor ID (Optional)"
          />
        </div>

        <div>
          <label>Doctor Name</label>
          <input
            type="text"
            value={doctorName}
            onChange={(e) => setDoctorName(e.target.value)}
            placeholder="Enter Doctor Name"
          />
        </div>

        <div>
          <label>Specialisation</label>
          <input
            type="text"
            value={specialisation}
            onChange={(e) => setSpecialisation(e.target.value)}
            placeholder="Enter Specialisation"
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

      {message && <div>{message}</div>} {/* Display message */}
    </div>
  );
};

export default DoctorForm;
