import React, { useEffect, useState } from "react";
import axios from "axios";

const PatientsList = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/api/patients/")
      .then(response => {
        setPatients(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  return (
    <div>
      <h1>Patients List</h1>
      <ul>
        {patients.map(patient => (
          <li key={patient.patientID}>
            {patient.patient_name} - {patient.DOB}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientsList;