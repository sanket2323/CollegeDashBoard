const body = document.querySelector("body"),
  modeToggle = body.querySelector(".mode-toggle");
sidebar = body.querySelector("nav");
sidebarToggle = body.querySelector(".sidebar-toggle");

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark") {
  body.classList.toggle("dark");
}

let getStatus = localStorage.getItem("status");
if (getStatus && getStatus === "close") {
  sidebar.classList.toggle("close");
}

modeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    localStorage.setItem("mode", "dark");
  } else {
    localStorage.setItem("mode", "light");
  }
});

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
  if (sidebar.classList.contains("close")) {
    localStorage.setItem("status", "close");
  } else {
    localStorage.setItem("status", "open");
  }
});

//Data display:
// Load the data from data.json and populate the table
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const tableBody = document.querySelector("#student-table tbody");

    data.forEach((student) => {
      const row = document.createElement("tr");

      row.innerHTML = `
                <td>${student[""]}</td>
                <td>${student["__1"]}</td>
                <td>${student["__2"]}</td>
                <td>${student["__3"]}</td>
                <td>${student["__4"]}</td>
                <td>${student["__5"]}</td>
            `;

      tableBody.appendChild(row);
    });
  })
  .catch((error) => console.error("Error loading the JSON data:", error));
