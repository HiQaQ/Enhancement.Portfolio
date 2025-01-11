function animateSections() {
  const sections = document.querySelectorAll(".animated");
  let delay = 0;

  sections.forEach((section) => {
    setTimeout(() => {
      section.classList.add("show");
    }, delay);
    delay += 300;
  });
}
window.addEventListener("load", animateSections);

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
