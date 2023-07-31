let maryem=[]

if(localStorage.getItem('test') != null){
  maryem = JSON.parse(localStorage.getItem('test'))
 
}

let welcome = document.getElementById('welcome')


welcome.innerHTML='welcome   ' + maryem[0].Name