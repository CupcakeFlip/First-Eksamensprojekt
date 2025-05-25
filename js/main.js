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

// Code from ai prompt

const modal1 = document.getElementById("myModal1");
const modalContent = document.getElementById("modalContent");
const openBtn1 = document.getElementById("openModal1");

// Open modal on image click
openBtn1.onclick = function () {
  modal1.style.display = "flex";
};

// Close modal when clicking outside the content
modal1.onclick = function (event) {
  if (!modalContent.contains(event.target)) {
    modal1.style.display = "none";
  }
};

const modal2 = document.getElementById("myModal2");
const openBtn2 = document.getElementById("openModal2");

// Open modal on image click
openBtn2.onclick = function () {
  modal2.style.display = "block";
};

// Close modal when clicking outside the iframe box
window.onclick = function (event) {
  if (event.target === modal2) {
    modal2.style.display = "none";
  }
};
