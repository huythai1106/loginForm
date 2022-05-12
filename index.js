import { checkLogin } from "./controller.js";

var submitButton = document.querySelector("input[type=submit]");
var email = document.querySelector('input[name="email"]');
var password = document.querySelector('input[name="password"]');
var err = document.querySelector(".error");
var form = document.querySelector("form");
var isLoginErr = true;
var errorMessage;

let isLogin = false;

console.log(err);
form.onsubmit = function (e) {
  if (email.value && password.value) {
    e.preventDefault();

    isLogin = false;
    const value = {
      name: email.value,
      password: password.value,
    };

    checkLogin(value, (index, arr) => {
      console.log(index, arr);
      for (var i = 0; i < arr.length; i++) {
        if (isCorrect(arr[i], index)) {
          console.log("correct");
          alert("Đăng nhập thành công");
          isLogin = true;
          break;
        }
      }

      if (!isLoginErr) return;

      if (!isLogin) {
        errorMessage = document.createElement("p");
        errorMessage.classList.add("err-msg");
        errorMessage.innerHTML = "emali or password is wrong";
        err.appendChild(errorMessage);
        isLoginErr = false;
      }
    });
  }
};

submitButton.onblur = function () {
  if (!isLogin && errorMessage) {
    err.removeChild(errorMessage);
    isLoginErr = true;
  }
};

function isCorrect(a, b) {
  if (a.username === b.name && a.password === b.password) return true;
  return false;
}
