let checkUser = JSON.parse(localStorage.getItem('user')) || []
console.log(checkUser.length);
if (checkUser.length !== 0){
    document.getElementById("login").style.display = "none"
    document.getElementById("register").style.display = "none"
    document.getElementById("user").style.display = "block"
    document.getElementById("user").innerText = `${localStorage.getItem("userName")}`
}else{
    document.getElementById("login").style.display = "block"
    document.getElementById("register").style.display = "block"
    document.getElementById("user").style.display = "none"
}
function redirect(){
    
}

let headphone = document.getElementsByClassName("headphone-name")
console.log(headphone);
let headphoneName = [{}]
for(let i = 0; i < headphone.length; i++){
    headphoneName[i] = headphone[i].innerHTML
}
console.log(headphoneName);

JSON.stringify(localStorage.setItem("headphone-name",headphoneName))
let a = [

]
console.log(a[0].name);
for(let i = 0; i < headphone.length; i++){
   a.push(headphoneName[i].innerText)
}
