const welcomeText = document.getElementById("welcomeText");
const words = ["Welcome", "To", "Enhancement Portfolio"];
let currentWordIndex = 0;

function showNextWord() {
  if (currentWordIndex < words.length) {
    welcomeText.textContent = words[currentWordIndex];
    welcomeText.classList.add("show");

    setTimeout(
      () => {
        welcomeText.classList.remove("show");

        setTimeout(() => {
          currentWordIndex++;
          showNextWord();
        }, 1000);
      },
      currentWordIndex === words.length - 1 ? 1200 : 500
    );
  } else {
    setTimeout(() => {
      document.body.style.transition = "opacity 0.5s ease";
      document.body.style.opacity = 0;

      window.location.href = "home/index.html";
    }, 100);
  }
}

showNextWord();
