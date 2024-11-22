const apiUrl = "http://127.0.0.1:5000/consultations"; // Backend API URL

// Fetch and display consultations
async function fetchConsultations() {
    try {
        const response = await fetch(apiUrl);
        const consultations = await response.json();
        const tableBody = document.getElementById("consultationsTableBody");
        tableBody.innerHTML = consultations.map(consultation => `
            <tr>
                <td>${consultation.app_id}</td>
                <td>${consultation.app_date}</td>
                <td>${consultation.app_time}</td>
                <td>${consultation.diagonsis || "N/A"}</td>
                <td>${consultation.treatment || "N/A"}</td>
                <td>${consultation.total_amount}</td>
                <td>
                    <button class="btn btn-info" onclick="editConsultation('${consultation.app_id}')">Edit</button>
                    <button class="btn btn-danger" onclick="deleteConsultation('${consultation.app_id}')">Delete</button>
                </td>
            </tr>
        `).join('');
    } catch (error) {
        console.error("Error fetching consultations:", error);
    }
}

// Add Consultation
document.getElementById("addConsultation").addEventListener("click", () => {
    const consultationModal = new bootstrap.Modal(document.getElementById("consultationModal"));
    document.getElementById("consultationForm").reset();
    consultationModal.show();
});

async function addConsultation(event) {
    event.preventDefault();
    const consultation = {
        app_id: document.getElementById("appID").value,
        app_date: document.getElementById("appDate").value,
        app_time: document.getElementById("appTime").value,
        total_amount: document.getElementById("totalAmount").value,
        diagonsis: document.getElementById("diagnosis").value,
        treatment: document.getElementById("treatment").value,
        patientID: document.getElementById("patientID").value,
        doctorID: document.getElementById("doctorID").value,
    };

    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(consultation),
        });
        if (response.ok) {
            fetchConsultations();
            bootstrap.Modal.getInstance(document.getElementById("consultationModal")).hide();
        }
    } catch (error) {
        console.error("Error adding consultation:", error);
    }
}

// Delete Consultation
async function deleteConsultation(appID) {
    try {
        const response = await fetch(`${apiUrl}/${appID}`, { method: "DELETE" });
        if (response.ok) {
            fetchConsultations();
        }
    } catch (error) {
        console.error("Error deleting consultation:", error);
    }
}

// Initialize
document.getElementById("consultationForm").addEventListener("submit", addConsultation);
fetchConsultations();
