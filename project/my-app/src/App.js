import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard";
import PatientForm from "./patient";
import DoctorForm from "./doctor";
import ConsultationForm from "./consultation";
import BeddingForm  from "./bedding";
import DepartmentForm from "./department";
// Add imports for other pages like Doctor, Consultation, etc.

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} /> {/* Home page */}
        <Route path="/patient" element={<PatientForm />} /> {/* Patient page */}
        <Route path="/doctor" element={<DoctorForm />}/>
        <Route path="/consultation" element={<ConsultationForm />}/>
        <Route path="/bedding" element={<BeddingForm />}/>
        <Route path="/department" element={<DepartmentForm/>}/>
        {/* Define routes for other options */}
      </Routes>
    </Router>
  );
};

export default App;


// import "./dashboard.css";
// import React from "react";
// import PatientForm from "./patient.js";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// // import PatientForm from "./patient.js";
// // import "./Dashboard.css"; // Import the CSS file for styling

// const Dashboard = () => {
//   return (
//     <div className="dashboard">
//       <h1 className="dashboard-title">Hospital Management System</h1>
//       <div className="options-container">
//         <div className="option-card" onClick={() => window.location.href="/patient"}>
//           <h2>Patient</h2>
//           <p>Manage patient records and information.</p>
//         </div>
//         <div className="option-card" onClick={() => window.location.href="/doctor"}>
//           <h2>Doctor</h2>
//           <p>View and manage doctor details.</p>
//         </div>
//         <div className="option-card" onClick={() => window.location.href="/consultation"}>
//           <h2>Consultation</h2>
//           <p>Handle consultations and appointments.</p>
//         </div>
//         <div className="option-card" onClick={() => window.location.href="/bedding"}>
//           <h2>Bedding</h2>
//           <p>Manage bedding and room assignments.</p>
//         </div>
//         <div className="option-card" onClick={() => window.location.href="/departments"}>
//           <h2>Departments</h2>
//           <p>View and organize departments.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


// import './App.css';
// import React, { useState } from "react";
// import axios from "axios";

// const PatientForm = () => {
//   const [patientID, setPatientID] = useState("");
//   const [patientName, setPatientName] = useState("");
//   const [DOB, setDOB] = useState("");
//   const [gender, setGender] = useState("");
//   const [address, setAddress] = useState("");
//   const [contactNo, setContactNo] = useState("");
//   const [email, setEmail] = useState("");
//   const [insuranceDetails, setInsuranceDetails] = useState("");
//   const [message, setMessage] = useState(""); // Message state for success or error

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const patientData = {
//       patientID, // user-entered patient ID (optional)
//       patient_name: patientName,
//       DOB,
//       gender,
//       address,
//       contactNo,
//       email,
//       insurance_details: insuranceDetails,
//     };

//     try {
//       const response = await axios.post("http://127.0.0.1:5000/api/patients/", patientData);

//       // Check for a success message or an error
//       if (response.data.message) {
//         setMessage(response.data.message); // Set success message
//       } else {
//         setMessage("Patient added successfully!");
//       }
//     } catch (error) {
//       // Handle error during request (e.g., network issues or backend errors)
//       if (error.response) {
//         // Error response from server
//         setMessage(`Error: ${error.response.data.error}`);
//       } else {
//         // Network or other errors
//         setMessage("There was an error submitting the form!");
//       }
//     }
//   };

//   return (
//     <div>
//        <h1 className="form-heading">Hospital Management App</h1> {/* Heading */}
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Patient ID (Optional)</label>
//           <input
//             type="text"
//             value={patientID}
//             onChange={(e) => setPatientID(e.target.value)}
//             placeholder="Enter Patient ID (Optional)"
//           />
//         </div>

//         <div>
//           <label>Patient Name</label>
//           <input
//             type="text"
//             value={patientName}
//             onChange={(e) => setPatientName(e.target.value)}
//             placeholder="Enter Patient Name"
//           />
//         </div>

//         <div>
//           <label>Date of Birth</label>
//           <input
//             type="date"
//             value={DOB}
//             onChange={(e) => setDOB(e.target.value)}
//           />
//         </div>

//         <div>
//           <label>Gender</label>
//           <select value={gender} onChange={(e) => setGender(e.target.value)}>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//             <option value="Other">Other</option>
//           </select>
//         </div>

//         <div>
//           <label>Address</label>
//           <input
//             type="text"
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//           />
//         </div>

//         <div>
//           <label>Contact No</label>
//           <input
//             type="text"
//             value={contactNo}
//             onChange={(e) => setContactNo(e.target.value)}
//           />
//         </div>

//         <div>
//           <label>Email</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>

//         <div>
//           <label>Insurance Details</label>
//           <input
//             type="text"
//             value={insuranceDetails}
//             onChange={(e) => setInsuranceDetails(e.target.value)}
//           />
//         </div>

//         <button type="submit">Submit</button>
//       </form>

//       {message && <div>{message}</div>} {/* Display message */}
//     </div>
//   );
// };

// export default PatientForm;
