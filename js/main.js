const programs = document.querySelectorAll(".programsIKnow");
const infoBox = document.getElementById("infoBox");

programs.forEach((program) => {
  program.addEventListener("click", () => {
    // Removes active from all programs
    programs.forEach((p) => p.classList.remove("active"));
    // Adds active to the chosen program
    program.classList.add("active");

    // Updates the info box with the information each program is assigned.
    const info = program.querySelector("img").getAttribute("data-info");
    infoBox.textContent = info;
  });
});
