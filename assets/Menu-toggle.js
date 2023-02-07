
window.addEventListener("resize", function() {
  var menuToggle = document.getElementById("menu-toggle");
  if (window.innerWidth < 600) {
    menuToggle.style.display = "block";
  } else {
    menuToggle.style.display = "none";
  }
});

document.getElementById("menu-toggle").addEventListener("click", function() {
  var menu = document.getElementById("menu");
  menu.style.display = (menu.style.display === "block") ? "none" : "block";
});
