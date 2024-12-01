import './bedding.css';
import React, { useState } from "react";
import axios from "axios";

const BeddingForm = () => {
  const [bed_id, setBedID] = useState("");
  const [bedType, setBedType] = useState("");
  const [bedStatus, setBedStatus] = useState("");
  const [patientID, setPatientID] = useState("");
  const [admissionDate, setAdmissionDate] = useState("");
  const [dischargeDate, setDischargeDate] = useState("");
  const [cleaningStatus, setCleaningStatus] = useState("");
  const [lastCleaned, setLastCleaned] = useState("");
  const [message, setMessage] = useState(""); // Message state for success or error

  const handleSubmit = async (event) => {
    event.preventDefault();

    const beddingData = {
      bed_id,
      bed_type: bedType,
      bed_status: bedStatus,
      patientID,
      admission_date: admissionDate,
      discharge_date: dischargeDate,
      cleaning_status: cleaningStatus,
      last_cleaned: lastCleaned,
    };

    try {
      const response = await axios.post("http://127.0.0.1:5000/api/bedding/", beddingData);

      if (response.data.message) {
        setMessage(response.data.message); // Set success message
      } else {
        setMessage("Bedding details added successfully!");
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
    <div className="bedding-container">
      <h1 className="form-heading">Add Bedding Details</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Bed ID</label>
          <input
            type="text"
            value={bed_id}
            onChange={(e) => setBedID(e.target.value)}
            placeholder="Enter Bed ID"
          />+
        </div>

        <div>
          <label>Bed Type</label>
          <input
            type="text"
            value={bedType}
            onChange={(e) => setBedType(e.target.value)}
            placeholder="Enter Bed Type"
          />
        </div>

        <div>
          <label>Bed Status</label>
          <input
            type="text"
            value={bedStatus}
            onChange={(e) => setBedStatus(e.target.value)}
            placeholder="Enter Bed Status"
          />
        </div>

        <div>
          <label>Patient ID</label>
          <input
            type="text"
            value={patientID}
            onChange={(e) => setPatientID(e.target.value)}
            placeholder="Enter Patient ID"
          />
        </div>

        <div>
          <label>Admission Date</label>
          <input
            type="date"
            value={admissionDate}
            onChange={(e) => setAdmissionDate(e.target.value)}
          />
        </div>

        <div>
          <label>Discharge Date</label>
          <input
            type="date"
            value={dischargeDate}
            onChange={(e) => setDischargeDate(e.target.value)}
          />
        </div>

        <div>
          <label>Cleaning Status</label>
          <input
            type="text"
            value={cleaningStatus}
            onChange={(e) => setCleaningStatus(e.target.value)}
            placeholder="Enter Cleaning Status"
          />
        </div>

        <div>
          <label>Last Cleaned</label>
          <input
            type="date"
            value={lastCleaned}
            onChange={(e) => setLastCleaned(e.target.value)}
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      {message && <div className={message.includes('Error') ? "error-message" : "message"}>{message}</div>}
    </div>
  );
};

export default BeddingForm;
