import './consultation.css';
import React, { useState } from "react";
import axios from "axios";

const ConsultationForm = () => {
  const [appID, setAppID] = useState("");
  const [appDate, setAppDate] = useState("");
  const [appTime, setAppTime] = useState("");
  const [labtestID, setLabTestID] = useState("");
  const [testName, setTestName] = useState("");
  const [testDescription, setTestDescription] = useState("");
  const [testCost, setTestCost] = useState("");
  const [pharmacyID, setPharmacyID] = useState("");
  const [medicineName, setMedicineName] = useState("");
  const [stockQuantity, setStockQuantity] = useState("");
  const [pricePerUnit, setPricePerUnit] = useState("");
  const [billID, setBillID] = useState("");
  const [totalAmount, setTotalAmount] = useState("");
  const [recordID, setRecordID] = useState("");
//   const [diagonsis, setDiagonsis] = useState("");
  const [treatment, setTreatment] = useState("");
  const [prescription, setPrescription] = useState("");
  const [recordDate, setRecordDate] = useState("");
  const [patientID, setPatientID] = useState("");
  const [doctorID, setDoctorID] = useState("");
  const [message, setMessage] = useState(""); // Message state for success or error

  const handleSubmit = async (event) => {
    event.preventDefault();

    const consultationData = {
      app_id: appID,
      app_date: appDate,
      app_time: appTime,
      labtestID,
      test_name: testName,
      test_description: testDescription,
      test_cost: testCost,
      pharmacyID,
      medicine_name: medicineName,
      stock_quantity: stockQuantity,
      price_per_unit: pricePerUnit,
      billID,
      total_amount: totalAmount,
      recordID,
    //   diagnosis,
      treatment,
      prescription,
      record_date: recordDate,
      patientID,
      doctorID,
    };

    try {
      const response = await axios.post("http://127.0.0.1:5000/api/consultations/", consultationData);
      if (response.data.message) {
        setMessage(response.data.message); // Success message
      } else {
        setMessage("Consultation added successfully!"); // Default success message
      }
    } catch (error) {
      if (error.response) {
        setMessage(`Error: ${error.response.data.error}`); // Server error
      } else {
        setMessage("There was an error submitting the form!"); // Other errors (network, etc.)
      }
    }
  };

  return (
    <div className="consultation-container">
      <h1 className="form-heading">Add Consultation Details</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Appointment ID</label>
          <input
            type="text"
            value={appID}
            onChange={(e) => setAppID(e.target.value)}
            placeholder="Enter Appointment ID"
          />
        </div>

        <div>
          <label>Appointment Date</label>
          <input
            type="date"
            value={appDate}
            onChange={(e) => setAppDate(e.target.value)}
          />
        </div>

        <div>
          <label>Appointment Time</label>
          <input
            type="time"
            value={appTime}
            onChange={(e) => setAppTime(e.target.value)}
          />
        </div>

        <div>
          <label>Lab Test ID</label>
          <input
            type="text"
            value={labtestID}
            onChange={(e) => setLabTestID(e.target.value)}
          />
        </div>

        <div>
          <label>Test Name</label>
          <input
            type="text"
            value={testName}
            onChange={(e) => setTestName(e.target.value)}
          />
        </div>

        <div>
          <label>Test Description</label>
          <input
            type="text"
            value={testDescription}
            onChange={(e) => setTestDescription(e.target.value)}
          />
        </div>

        <div>
          <label>Test Cost</label>
          <input
            type="number"
            value={testCost}
            onChange={(e) => setTestCost(e.target.value)}
          />
        </div>

        <div>
          <label>Pharmacy ID</label>
          <input
            type="text"
            value={pharmacyID}
            onChange={(e) => setPharmacyID(e.target.value)}
          />
        </div>

        <div>
          <label>Medicine Name</label>
          <input
            type="text"
            value={medicineName}
            onChange={(e) => setMedicineName(e.target.value)}
          />
        </div>

        <div>
          <label>Stock Quantity</label>
          <input
            type="number"
            value={stockQuantity}
            onChange={(e) => setStockQuantity(e.target.value)}
          />
        </div>

        <div>
          <label>Price Per Unit</label>
          <input
            type="number"
            value={pricePerUnit}
            onChange={(e) => setPricePerUnit(e.target.value)}
          />
        </div>

        <div>
          <label>Bill ID</label>
          <input
            type="text"
            value={billID}
            onChange={(e) => setBillID(e.target.value)}
          />
        </div>

        <div>
          <label>Total Amount</label>
          <input
            type="number"
            value={totalAmount}
            onChange={(e) => setTotalAmount(e.target.value)}
          />
        </div>

        <div>
          <label>Record ID</label>
          <input
            type="text"
            value={recordID}
            onChange={(e) => setRecordID(e.target.value)}
          />
        </div>

        {/* <div>
          <label>Diagnosis</label>
          <input
            type="text"
            value={diagnosis}
            onChange={(e) => setDiagnosis(e.target.value)}
          />
        </div> */}

        <div>
          <label>Treatment</label>
          <input
            type="text"
            value={treatment}
            onChange={(e) => setTreatment(e.target.value)}
          />
        </div>

        <div>
          <label>Prescription</label>
          <input
            type="text"
            value={prescription}
            onChange={(e) => setPrescription(e.target.value)}
          />
        </div>

        <div>
          <label>Record Date</label>
          <input
            type="date"
            value={recordDate}
            onChange={(e) => setRecordDate(e.target.value)}
          />
        </div>

        <div>
          <label>Patient ID</label>
          <input
            type="text"
            value={patientID}
            onChange={(e) => setPatientID(e.target.value)}
          />
        </div>

        <div>
          <label>Doctor ID</label>
          <input
            type="text"
            value={doctorID}
            onChange={(e) => setDoctorID(e.target.value)}
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      {message && <div className={message.includes('Error') ? "error-message" : "message"}>{message}</div>}
    </div>
  );
};

export default ConsultationForm;
