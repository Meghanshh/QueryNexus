const apiUrl = "http://127.0.0.1:5000/patients"; // Backend API URL

// Fetch and display patients
async function fetchPatients() {
    try {
        const response = await fetch(apiUrl);
        const patients = await response.json();
        const tableBody = document.getElementById('patientsTableBody');
        tableBody.innerHTML = patients.map(patient => `
            <tr>
                <td>${patient.patientID}</td>
                <td>${patient.patient_name}</td>
                <td>${patient.DOB}</td>
                <td>${patient.gender}</td>
                <td>${patient.contactNo}</td>
                <td>${patient.email}</td>
                <td>
                    <button class="btn btn-info">Edit</button>
                    <button class="btn btn-danger">Delete</button>
                </td>
            </tr>
        `).join('');
    } catch (error) {
        console.error("Error fetching patients:", error);
    }
}

// Call fetchPatients on page load
fetchPatients();
