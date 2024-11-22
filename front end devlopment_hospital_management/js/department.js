const apiUrl = "http://127.0.0.1:5000/departments"; // Backend API URL

// Fetch and display departments
async function fetchDepartments() {
    try {
        const response = await fetch(apiUrl);
        const departments = await response.json();
        const tableBody = document.getElementById("departmentsTableBody");
        tableBody.innerHTML = departments.map(department => `
            <tr>
                <td>${department.dept_ID}</td>
                <td>${department.dept_name}</td>
                <td>
                    <button class="btn btn-info" onclick="editDepartment('${department.dept_ID}')">Edit</button>
                    <button class="btn btn-danger" onclick="deleteDepartment('${department.dept_ID}')">Delete</button>
                </td>
            </tr>
        `).join('');
    } catch (error) {
        console.error("Error fetching departments:", error);
    }
}

// Add Department
document.getElementById("addDepartment").addEventListener("click", () => {
    const departmentModal = new bootstrap.Modal(document.getElementById("departmentModal"));
    document.getElementById("departmentForm").reset();
    departmentModal.show();
});

async function addDepartment(event) {
    event.preventDefault();
    const department = {
        dept_ID: document.getElementById("deptID").value,
        dept_name: document.getElementById("deptName").value,
    };

    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(department),
        });
        if (response.ok) {
            fetchDepartments();
            bootstrap.Modal.getInstance(document.getElementById("departmentModal")).hide();
        }
    } catch (error) {
        console.error("Error adding department:", error);
    }
}

// Delete Department
async function deleteDepartment(deptID) {
    try {
        const response = await fetch(`${apiUrl}/${deptID}`, { method: "DELETE" });
        if (response.ok) {
            fetchDepartments();
        }
    } catch (error) {
        console.error("Error deleting department:", error);
    }
}

// Initialize
document.getElementById("departmentForm").addEventListener("submit", addDepartment);
fetchDepartments();
