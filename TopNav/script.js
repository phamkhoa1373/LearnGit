function toggleNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

document.querySelectorAll(".topnav a:not(.icon)").forEach(function (a) {
  a.addEventListener("click", function () {
    document.querySelectorAll(".topnav a").forEach(function (a) {
      a.classList.remove("active");
    });
    this.classList.add("active");
  });
});
