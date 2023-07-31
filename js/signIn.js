var signInEmail = document.getElementById("signInEmail");
var signInPassword = document.getElementById("signInPassword");
var LogIn = document.getElementById("LogIn");
var right = document.getElementById("right");
var error = document.getElementById("error");
var usersInfo = [];
let maryam = []
if (localStorage.getItem('data')!=null) 
{
  usersInfo=JSON.parse(localStorage.getItem('data'))
}
LogIn.addEventListener("click", signIn);
function signIn() {
for(let i=0 ; i<usersInfo.length ; i++){
  if (signInEmail.value == usersInfo[i].Email && signInPassword.value == usersInfo[i].Pass){
    window.open('file:///C:/Users/SMARTzone/Downloads/LogIn/welcome.htm')
    maryam.push(usersInfo[i])
    localStorage.setItem('test',JSON.stringify(maryam))

  }else{
    error.style.display = "block";
    right.style.display = "none";
  }
}
}
