var account = document.getElementById("account");
var password = document.getElementById("password");
const button = document.querySelector("button");
button.addEventListener("click", ABC());


function ABC(){
  document.getElementById("account").value="";
  document.getElementById("password").value="";
}