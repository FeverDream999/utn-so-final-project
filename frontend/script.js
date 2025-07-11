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
