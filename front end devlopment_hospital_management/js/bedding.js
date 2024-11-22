const apiUrl = "http://127.0.0.1:5000/bedding"; // Backend API URL

// Fetch and display bedding data
async function fetchBedding() {
    try {
        const response = await fetch(apiUrl);
        const bedding = await response.json();
        const tableBody = document.getElementById("beddingTableBody");
        tableBody.innerHTML = bedding.map(bed => `
            <tr>
                <td>${bed.bed_id}</td>
                <td>${bed.bed_type}</td>
                <td>${bed.bed_status}</td>
                <td>${bed.patientID}</td>
                <td>${bed.admission_date}</td>
                <td>${bed.discharge_date || "N/A"}</td>
                <td>${bed.cleaning_status}</td>
                <td>${bed.last_cleaned}</td>
                <td>
                    <button class="btn btn-info" onclick="editBedding('${bed.bed_id}')">Edit</button>
                    <button class="btn btn-danger" onclick="deleteBedding('${bed.bed_id}')">Delete</button>
                </td>
            </tr>
        `).join('');
    } catch (error) {
        console.error("Error fetching bedding:", error);
    }
}

// Add Bedding
document.getElementById("addBedding").addEventListener("click", () => {
    const beddingModal = new bootstrap.Modal(document.getElementById("beddingModal"));
    document.getElementById("beddingForm").reset();
    beddingModal.show();
});

async function addBedding(event) {
    event.preventDefault();
    const bedding = {
        bed_id: document.getElementById("bedID").value,
        bed_type: document.getElementById("bedType").value,
        bed_status: document.getElementById("bedStatus").value,
        patientID: document.getElementById("patientID").value,
        admission_date: document.getElementById("admissionDate").value,
        discharge_date: document.getElementById("dischargeDate").value,
        cleaning_status: document.getElementById("cleaningStatus").value,
        last_cleaned: document.getElementById("lastCleaned").value,
    };

    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(bedding),
        });
        if (response.ok) {
            fetchBedding();
            bootstrap.Modal.getInstance(document.getElementById("beddingModal")).hide();
        }
    } catch (error) {
        console.error("Error adding bedding:", error);
    }
}

// Delete Bedding
async function deleteBedding(bedID) {
    try {
        const response = await fetch(`${apiUrl}/${bedID}`, { method: "DELETE" });
        if (response.ok) {
            fetchBedding();
        }
    } catch (error) {
        console.error("Error deleting bedding:", error);
    }
}

// Initialize
document.getElementById("beddingForm").addEventListener("submit", addBedding);
fetchBedding();
