function toggleTopMenu() {
  var menu = document.getElementById("topNavMenu");
  var topBar = document.querySelector(".topBar");
  var menuIcon = document.querySelector(".menuIcon i");

  if (menu.classList.contains("open")) {
    //collapse the menu
    menu.classList.remove("open");
    topBar.classList.remove("open");
    menuIcon.style.transform = "rotate(0deg)";
  } else {
    // Open the menu
    menu.classList.add("open");
    topBar.classList.add("open");
    menuIcon.style.transform = "rotate(90deg)";
  }
}
