const imageContainers = document.querySelectorAll(".image-container");

imageContainers.forEach((container) => {
  const image = container.querySelector("img");
  const magnifier = container.querySelector(".magnifier");
  container.addEventListener("mousemove", (e) => {
    magnifier.style.display = "block";
    const x = e.offsetX;
    const y = e.offsetY;
    const magnifierX = x - magnifier.offsetWidth / 2;
    const magnifierY = y - magnifier.offsetHeight / 2;
    const maxX = image.offsetWidth - magnifier.offsetWidth;
    const maxY = image.offsetHeight - magnifier.offsetHeight;
    const finalX = Math.max(0, Math.min(magnifierX, maxX));
    const finalY = Math.max(0, Math.min(magnifierY, maxY));
    magnifier.style.left = `${finalX}px`;
    magnifier.style.top = `${finalY}px`;
    const bgX = -x * 2 + magnifier.offsetWidth / 2;
    const bgY = -y * 2 + magnifier.offsetHeight / 2;
    magnifier.style.backgroundPosition = `${bgX}px ${bgY}px`;
    magnifier.style.backgroundImage = `url(${image.src})`;
  });
  container.addEventListener("mouseleave", () => {
    magnifier.style.display = "none";
  });
});

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
