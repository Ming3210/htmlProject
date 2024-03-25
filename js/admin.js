let user = document.getElementById("user")

let product = document.getElementById("product")
let userForm = document.getElementsByClassName("user")
let productForm = document.getElementsByClassName("product")
user.style.backgroundColor = "white"
user.style.borderRadius = "16px 0px 0px 16px"

let items = JSON.parse(localStorage.getItem("item") )||[]
console.log(items);

user.onclick = function() {
    userForm[0].style.display = "block"
    check()
}

function check(){
    if(userForm[0].style.display == "block"){   
        user.style.backgroundColor = "white"
        user.style.borderRadius = "16px 0px 0px 16px"
    }
}


function renderProduct(){
    let checkLogin = JSON.parse(localStorage.getItem("checkLogin"))
    
    let user = JSON.parse(localStorage.getItem("user"))
    console.log(user);
    let element =``
    let element2 =``
    for (let i=0; i<user.length;i++){
        if(user[i].id==checkLogin){
            for(let j=0; j<user[i].cart.length;j++){
                element +=`
                    <tr>
                        <td>${j+1}</td>
                        <td>${user[i].cart[j].name}</td>
                        <td><img src=".${user[i].cart[j].image}" alt=""></td>
                        <td>Headphone</td>
                        <td>${user[i].cart[j].stock}</td>
                        <td>
                                <button><i class="fa-solid fa-pen-to-square"></i>Edit</button>
                            <button><i class="fa-solid fa-trash"></i> Delete</button>
                        </td>
                    </tr>
        `
            }
        }
        
    }
    for (let i=0; i<user.length;i++){
        if(user[i].id==checkLogin){
            
        element2 +=`
            <tr >
                <td>${i+1}</td>
                <td>${user[i].fname}</td>
                <td>${user[i].lname}</td>
                <td>${user[i].email}</td>
                <td>Customer</td>
                <td><button><i class="fa-solid fa-ban"></i>  Ban </button></td>
                <td><button><i class="fa-solid fa-trash"></i> Delete</button></td>
            </tr>
        `
        
        }
        
    }
    document.getElementById("tr-2").innerHTML= element2
    document.getElementById("tr").innerHTML = element
}

renderProduct()