const topics = document.querySelectorAll(".topic");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentTopic = 0;

function showTopic(index) {
  topics.forEach((topic) => (topic.style.display = "none"));
  topics[index].style.display = "block";

  prevBtn.style.display = index === 0 ? "none" : "inline-block";
  nextBtn.style.display = index === topics.length - 1 ? "none" : "inline-block";
}
prevBtn.addEventListener("click", () => {
  if (currentTopic > 0) {
    currentTopic--;
    showTopic(currentTopic);
  }
});
nextBtn.addEventListener("click", () => {
  if (currentTopic < topics.length - 1) {
    currentTopic++;
    showTopic(currentTopic);
  }
});

showTopic(currentTopic);
if (window.history && window.history.pushState) {
  const currentPath = window.location.pathname;

  if (currentPath.endsWith("/index.html")) {
    const newPath = currentPath.replace("/index.html", "/");
    history.pushState({}, "", newPath);
  }

  window.addEventListener("popstate", function (event) {
    event.preventDefault();
    history.pushState({}, "", newPath);
  });
}
