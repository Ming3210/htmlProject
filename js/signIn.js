let user =  JSON.parse(localStorage.getItem("user")) || []
console.log(user);
function validate(){
    if(document.getElementById("email").value==""){
        document.getElementById("email-error").style.display="block"
    }else document.getElementById("email-error").style.display="none"


    if(document.getElementById("password").value==""){
        document.getElementById("password-error").style.display="block"
    }else document.getElementById("password-error").style.display="none"
}

function signIn(){
    for(let i = 0; i < user.length; i++){
        if(user[i].email == document.getElementById("email").value && user[i].password == document.getElementById("password").value){
            localStorage.setItem("userName",user[i].lname)
            window.location.href = "../index.html"
        }else if(user[i].email != "" && user[i].password != ""){
            document.getElementById("email-error").style.display="block"
            document.getElementById("password-error").style.display="block"
            document.getElementById("email-error").innerHTML="Invalid email or password"
            document.getElementById("password-error").innerHTML="Invalid email or password"
        }
    }
}

let submit = document.getElementById("submit");
submit.addEventListener("click", function(e){
    e.preventDefault();
    validate()
    signIn()
})