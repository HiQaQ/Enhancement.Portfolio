// 檢查輸入值
function validateForm() {
  const username = document.querySelector("input[name='username']").value;
  const password = document.querySelector("input[name='password']").value;

  if (username === "" || password === "") {
    alert("請輸入帳號和密碼");
    return false;
  }

  return true;
}

// 處理登入請求
function handleSubmit(event) {
  event.preventDefault();

  if (!validateForm()) {
    return;
  }

  // 模擬登入
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "login.php");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify({
    username,
    password,
  }));

  xhr.onload = function() {
    if (xhr.status === 200) {
      // 登入成功
      window.location.href = "/";
    } else {
      // 登入失敗
      alert(xhr.responseText);
    }
  };
}

// 綁定事件
document.querySelector("form").addEventListener("submit", handleSubmit);