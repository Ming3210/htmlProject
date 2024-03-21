let fname = document.getElementById("f-name")
let lname = document.getElementById("l-name")
let email = document.getElementById("email")
let password = document.getElementById("password")
let repassword = document.getElementById("checkpass")
let submit = document.getElementById("submit")
let checkbox = document.getElementById("checkbox")
let fnameError = document.getElementById("fname-error")
let lnameError = document.getElementById("lname-error")
let emailError = document.getElementById("email-error")
let passwordError = document.getElementById("password-error")
let repassError = document.getElementById("repass-error")



let userInfo = JSON.parse(localStorage.getItem("user")) || []
function sendInfo(){
    let user = {
        id:Math.floor(Math.random() *9999999999999999999),
        fname: fname.value,
        lname: lname.value,
        email: email.value,
        password: password.value,
        repassword: repassword.value,
        cart:[]
    }
    if(fnameError.style.display == "none" && lnameError.style.display == "none" && emailError.style.display == "none" && passwordError.style.display == "none" && repassError.style.display == "none" && checkbox.checked == true){

        userInfo.push(user)
        localStorage.setItem("user", JSON.stringify(userInfo));
        window.location.href = "../page/login.html"
    }
}



function validateEmail(email) {
    return String(email)
        .toLowerCase()
        .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

function emailDuplicate(){
    let check =  JSON.parse(localStorage.getItem("user"))||[]
    for(let i = 0; i < check.length; i++){
        if(check[i].email == email.value){
            emailError.innerHTML = "Email already exists"
            emailError.style.display="block";
        }else if(!validateEmail(email.value)){
            emailError.style.display="block";
            emailError.innerHTML = "Invalid email address"
        }else emailError.style.display="none"
    }
    if(email.value ==""){
        emailError.style.display="block";
    }
}
function validate(){
    if(fname.value==""){
        fnameError.style.display="block";
    }else fnameError.style.display="none"

    if(lname.value==""){
        lnameError.style.display="block";
    }else lnameError.style.display="none"

    if(email.value==""){
        emailError.style.display="block";
    }else if(!validateEmail(email.value)){
        emailError.style.display="block";
        emailError.innerHTML = "Invalid email address"
    }else emailError.style.display="none"

    if(password.value==""){
        passwordError.style.display = "block"
    }else passwordError.style.display="none"

    if(repassword.value==""){
        repassError.style.display="block";
    }else if(repassword.value!== password.value){
        repassError.innerHTML = "Passwords do not match"
        repassError.style.display="block";
    }else repassError.style.display="none"

    if(checkbox.checked == false){
        alert("Please check the box to sign up")
    }
}
submit.addEventListener("click", function(e){
    
    e.preventDefault();
    validate();
    emailDuplicate()
    sendInfo()
})
