var signUpName = document.getElementById("signUpName");//Sign Up
var signUpEmail = document.getElementById("signUpEmail");//Sign Up
var signUpPassword = document.getElementById("signUpPassword");//Sign Up
var right = document.getElementById("right");
var error = document.getElementById("error");
var usersInfo = [];
function logData() {
  let userInfo = {
    Name: signUpName.value,
    Email: signUpEmail.value,
    Pass: signUpPassword.value,
  };
  if (
    signName(signUpName.value) == true && signEmail(signUpEmail.value) == true && signPassword(signUpPassword.value) == true
  ) {
    usersInfo.push(userInfo);
    localStorage.setItem("data", JSON.stringify(usersInfo));
    right.style.display = "block";
  } else {
    right.style.display = "none";
    error.style.display = "block";
    alert("error");
  }
// =======>regex input <========
}
function signName(str) {
  var regex = /^[a-zA-Z1-9]{3,10}$/;
  return regex.test(str);
}
function signEmail(str) {
  var regex = /^[a-zA-Z1-9]{3,25}@gmail.com$/;
  return regex.test(str);
}
function signPassword(str) {
  var regex = /^[a-zA-Z1-9!@#$%&*+.=]{5,30}$/;
  return regex.test(str);
}