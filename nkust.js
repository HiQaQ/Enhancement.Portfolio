import React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

// 定義 UI 元件
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // 登入按鈕
  const handleLogin = async () => {
    setLoading(true);
    try {
      // 模擬登入
      await fetch("https://example.com/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      setLoading(false);
      // 登入成功
      window.location.href = "/";
    } catch (error) {
      setLoading(false);
      // 登入失敗
      alert(error);
    }
  };

  // 輸入框
  const Input = ({ label, value, onChange }) => {
    return (
      <div className="input-container">
        <label>{label}</label>
        <input
          type="text"
          value={value}
          onChange={onChange}
          className="input"
        />
      </div>
    );
  };

  // 主容器
  return (
    <div className="login-container">
      <h1>登入</h1>
      <Input label="帳號" value={username} onChange={setUsername} />
      <Input label="密碼" value={password} onChange={setPassword} />
      <button onClick={handleLogin} disabled={loading}>登入</button>
      {loading && <CSSTransition in={loading} timeout={300} classNames="loading">
        <div className="loading-container">
          <div className="loading-spinner"></div>
        </div>
      </CSSTransition>}
    </div>
  );
}

// 渲染 UI
ReactDOM.render(<Login />, document.querySelector("#root"));