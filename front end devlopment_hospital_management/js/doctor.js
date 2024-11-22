const apiUrl = "http://127.0.0.1:5000/doctors"; // Backend API URL

// Fetch and display doctors
async function fetchDoctors() {
    try {
        const response = await fetch(apiUrl);
        const doctors = await response.json();
        const tableBody = document.getElementById("doctorsTableBody");
        tableBody.innerHTML = doctors.map(doctor => `
            <tr>
                <td>${doctor.doctorID}</td>
                <td>${doctor.doctorName}</td>
                <td>${doctor.specialisation}</td>
                <td>${doctor.dept_name}</td>
                <td>
                    <button class="btn btn-info" onclick="editDoctor('${doctor.doctorID}')">Edit</button>
                    <button class="btn btn-danger" onclick="deleteDoctor('${doctor.doctorID}')">Delete</button>
                </td>
            </tr>
        `).join('');
    } catch (error) {
        console.error("Error fetching doctors:", error);
    }
}

// Add Doctor
document.getElementById("addDoctor").addEventListener("click", () => {
    const doctorModal = new bootstrap.Modal(document.getElementById("doctorModal"));
    document.getElementById("doctorForm").reset();
    doctorModal.show();
});

async function addDoctor(event) {
    event.preventDefault();
    const doctor = {
        doctorID: document.getElementById("doctorID").value,
        doctorName: document.getElementById("doctorName").value,
        specialisation: document.getElementById("specialization").value,
        dept_name: document.getElementById("deptName").value,
    };

    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(doctor),
        });
        if (response.ok) {
            fetchDoctors();
            bootstrap.Modal.getInstance(document.getElementById("doctorModal")).hide();
        }
    } catch (error) {
        console.error("Error adding doctor:", error);
    }
}

// Delete Doctor
async function deleteDoctor(doctorID) {
    try {
        const response = await fetch(`${apiUrl}/${doctorID}`, { method: "DELETE" });
        if (response.ok) {
            fetchDoctors();
        }
    } catch (error) {
        console.error("Error deleting doctor:", error);
    }
}

// Call fetchDoctors on page load
fetchDoctors();
