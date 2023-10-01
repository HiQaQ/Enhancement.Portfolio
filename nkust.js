// 驗證登入資訊
function validateLogin() {
  // 取得表單資料
  const username = document.querySelector("input[name='username']").value;
  const password = document.querySelector("input[name='password']").value;

  // 檢查帳號和密碼是否正確
  const isLoggedIn = username === "a" && password === "1";

  // 如果登入成功，則導向首頁
  if (isLoggedIn) {
    window.location.href = "https://www2.nkust.edu.tw/~c112110159";
  }
}

// 當表單提交時，執行驗證函數
document.querySelector("form").addEventListener("submit", validateLogin);