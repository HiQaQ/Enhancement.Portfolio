if (window.history && window.history.pushState) {
  const currentPath = window.location.pathname;

  if (currentPath.endsWith("/use.html")) {
    const newPath = currentPath.replace("/use.html", "/");
    history.pushState({}, "", newPath);
  }

  window.addEventListener("popstate", function (event) {
    event.preventDefault();
    history.pushState({}, "", newPath);
  });
}
