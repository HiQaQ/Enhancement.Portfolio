
document.getElementById("sen").addEventListener("mouseover", function () {
  document.getElementById("rep").style.display = "block";
});
document.getElementById("sen").addEventListener("mouseout", function () {
  document.getElementById("rep").style.display = "block";
  setTimeout(function () {
    document.getElementById("rep").style.display = "none";
  }, 2000);
});
