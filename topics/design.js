const container = document.querySelector(".image-section");
const magnifier = document.querySelector(".magnifier");
const image = document.querySelector(".image-section img");

container.addEventListener("mousemove", (e) => {
  const containerRect = container.getBoundingClientRect();
  const imageRect = image.getBoundingClientRect();

  const x = e.clientX - imageRect.left;
  const y = e.clientY - imageRect.top;

  const magnifierX = e.clientX - containerRect.left - magnifier.offsetWidth / 2;
  const magnifierY = e.clientY - containerRect.top - magnifier.offsetHeight / 2;

  const zoom = container.offsetWidth / magnifier.offsetWidth;

  magnifier.style.backgroundImage = `url(${image.src})`;
  magnifier.style.backgroundSize = `${image.naturalWidth * zoom}px ${
    image.naturalHeight * zoom
  }px`;
  magnifier.style.backgroundPosition = `-${x * zoom}px -${y * zoom}px`;
  magnifier.style.left = `${magnifierX}px`;
  magnifier.style.top = `${magnifierY}px`;
});
if (window.history && window.history.pushState) {
  const currentPath = window.location.pathname;

  if (currentPath.endsWith("/design.html")) {
    const newPath = currentPath.replace("/design.html", "/");
    history.pushState({}, "", newPath);
  }

  window.addEventListener("popstate", function (event) {
    event.preventDefault();
    history.pushState({}, "", newPath);
  });
}
