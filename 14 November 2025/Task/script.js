const employees = [];
const employeeForm = document.getElementById("employeeForm");
const tableBody = document.getElementById("tableBody");

function handleFormSubmit(event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value.trim();
  const position = document.getElementById("position").value.trim();

  if (!validateForm(name, age, position)) return;

  const employee = {
    id: Date.now(),
    name: name,
    age: age,
    position: position
  };
  employees.push(employee);
  updateTable();
  employeeForm.reset();
}

function validateForm(name, age, position) {
  let isValid = true;
  if (!name) {
    document.getElementById("nameError").classList.add("show");
    isValid = false;
  } else {
    document.getElementById("nameError").classList.remove("show");
  }
  if (!age) {
    document.getElementById("ageError").classList.add("show");
    isValid = false;
  } else {
    document.getElementById("ageError").classList.remove("show");
  }
  if (!position) {
    document.getElementById("positionError").classList.add("show");
    isValid = false;
  } else {
    document.getElementById("positionError").classList.remove("show");
  }
  return isValid;
}

function updateTable() {
  tableBody.innerHTML = "";
  if (employees.length === 0) {
    const row = document.createElement("tr");
    row.innerHTML =
      '<td colspan="4" class="empty-state">No employees added yet</td>';
    tableBody.appendChild(row);
    return;
  }
  employees.forEach(employee => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${employee.name}</td>
      <td>${employee.age}</td>
      <td>${employee.position}</td>
      <td><button class="delete-btn" onclick="deleteEmployee(${employee.id})">Delete</button></td>
    `;
    tableBody.appendChild(row);
  });
}

window.deleteEmployee = function(employeeId) {
  const index = employees.findIndex(emp => emp.id === employeeId);
  if (index !== -1) {
    employees.splice(index, 1);
    updateTable();
  }
};

document.addEventListener("DOMContentLoaded", function(){
  employeeForm.addEventListener("submit", handleFormSubmit);
  updateTable();
});
