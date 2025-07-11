document.addEventListener("DOMContentLoaded", cargarEstudiantes);
document.getElementById("loadButton").addEventListener("click", async () => {
  const response = await fetch("/api/students");
  const students = await response.json();
  const tbody = document.querySelector("#studentsTable tbody");
  tbody.innerHTML = "";
  students.forEach((student) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${student.id}</td><td>${student.name}</td>`;
    tbody.appendChild(row);
  });
});
function saludar() {
  const nombre = document.getElementById("nombre").value;

  fetch(`/api/greet?name=${encodeURIComponent(nombre)}`)
    .then(response => response.json())
    .then(data => {
      document.getElementById("respuesta").textContent = data.message;
    })
    .catch(error => {
      document.getElementById("respuesta").textContent = "Error";
      console.error(error);
    });
}
function agregarEstudiante() {
  const nombre = document.getElementById("nuevoEstudiante").value;

  fetch('/api/students', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: nombre }),
  })
  .then(res => res.json())
  .then(estudiante => {
    cargarEstudiantes(); 
    document.getElementById("nuevoEstudiante").value = ""; 
  })
  .catch(err => {
    console.error("Error al agregar estudiante:", err);
  });
}
async function cargarEstudiantes() {
  const response = await fetch("/api/students");
  const students = await response.json();
  const tbody = document.getElementById("studentsTable");
  tbody.innerHTML = "";
  students.forEach((student) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${student.id}</td><td>${student.name}</td>`;
    tbody.appendChild(row);
  });
}
