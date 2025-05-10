function toggleTopMenu() {
  var menu = document.getElementById("topNavMenu");
  var topBar = document.querySelector(".topBar");
  var menuIcon = document.querySelector(".menuIcon i");

  if (menu.classList.contains("open")) {
    menu.classList.remove("open");
    topBar.classList.remove("collapsed");
    menuIcon.style.transform = "rotate(0deg)";
  } else {
    menu.classList.add("open");
    topBar.classList.add("collapsed");
    menuIcon.style.transform = "rotate(90deg)";
  }
}
