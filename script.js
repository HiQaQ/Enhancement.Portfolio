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
        }, 800);
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

// 檢查瀏覽器是否支援 history.pushState
if (window.history && window.history.pushState) {
  // 獲取當前網址路徑
  const currentPath = window.location.pathname;

  // 檢查網址是否包含 'index.html'
  if (currentPath.endsWith('/index.html')) {
    // 使用 history.pushState 替換網址，移除 'index.html'
    const newPath = currentPath.replace('/index.html', '/');
    history.pushState({}, '', newPath);
  }

  // 監聽 popstate 事件，防止返回時重新出現 'index.html'
  window.addEventListener('popstate', function(event) {
    event.preventDefault();
    history.pushState({}, '', newPath);
  });
}