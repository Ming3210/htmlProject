document.getElementById("user").innerText = `${localStorage.getItem("userName")}`
let user = JSON.parse(localStorage.getItem("user")) || []
let scaner = JSON.parse(localStorage.getItem("scan")) ||[]
let a = JSON.parse(localStorage.getItem("item")) ||[]
    const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });


if (scaner == true){
   
    document.getElementById("user").style.display = "block"
    document.getElementById("user").innerText = `${localStorage.getItem("userName")}`
    document.getElementById("cart").style.display = "block"
}else{
    document.getElementById("user").style.display = "none"
    document.getElementById("cart").style.display = "none"

}

function renderItem(){
    let user = JSON.parse(localStorage.getItem("user")) || []
    let items = JSON.parse(localStorage.getItem("item") )|| []
    let checkLogin = JSON.parse(localStorage.getItem("checkLogin"));
    let element =``
    for (let i = 0; i < user.length; i++) {
        if(user[i].id==checkLogin){
            for (let j=0; j<user[i].cart.length;j++){
                element +=`
                <tr>
                    <td>${j+1}</td>
                    <td>${user[i].cart[j].name}</td>
                    <td><img src=".${user[i].cart[j].image}" alt=""></td>
                    <td>${user[i].cart[j].stock}</td>
                    <td>${(VND.format(user[i].cart[j].money))}</td>
                    <td>
                    <button onclick="increase(${user[i].cart[j].id})"><i class='bx bxs-up-arrow'></i></button>
                    <p id="quantity">${user[i].cart[j].quantity}</p>
                    <button onclick="decrease(${user[i].cart[j].id})"><i class='bx bxs-down-arrow'></i></button>
                    </td>
                    <td>
                        <button onclick="deleteItem(${user[i].cart[j].id})">Delete</button>
                    </td>
                </tr>
                `
            }
        }
    }
    document.getElementById("tr").innerHTML = element

}

function checkItem(){
    let items = JSON.parse(localStorage.getItem("item")) ||[]
    let checkLogin = JSON.parse(localStorage.getItem("checkLogin"));
    if(scaner==true){
        let user =  JSON.parse(localStorage.getItem("user"))
        for(let i = 0; i < user.length; i++){
            if(user[i].id == checkLogin){
                b.innerHTML = user[i].cart.length
            }
        }
    }
   
}



checkItem()
renderItem()




function increase(id){
    let items = JSON.parse(localStorage.getItem("item")) ||[]
    let user =  JSON.parse(localStorage.getItem("user"))
    let checkLogin = JSON.parse(localStorage.getItem("checkLogin"));
    for(let i = 0; i < user.length; i++){
        if(user[i].id == checkLogin){
            for(let j =0;j<user[i].cart.length;j++){
                if(user[i].cart[j].id == id && user[i].cart[j].stock>0){
            
                    user[i].cart[j].stock--
                    user[i].cart[j].quantity++
                    user[i].cart[j].totalMoney = user[i].cart[j].quantity * user[i].cart[j].money
                }
            }
        }

        
    }
    
    // document.getElementById("total-money").innerHTML = VND.format(totalMoney)
    localStorage.setItem("user",JSON.stringify(user))
    
    totalMoney()
    renderItem()
}



function decrease(id){
    let checkLogin = JSON.parse(localStorage.getItem("checkLogin"));
    let user =  JSON.parse(localStorage.getItem("user"))
    for(let i = 0; i < user.length; i++){
        if(user[i].id == checkLogin){    
            for(let j = 0;j<user[i].cart.length;j++){
                if(user[i].cart[j].id == id &&  user[i].cart[j].stock<user[i].cart[j].mainStock){
                    user[i].cart[j].stock++
                    user[i].cart[j].quantity--
                    user[i].cart[j].totalMoney = user[i].cart[j].quantity * user[i].cart[j].money
                    
                }
            }
        }

        
    }
    localStorage.setItem("user",JSON.stringify(user))
    totalMoney()
    renderItem()
}

function totalMoney(){
    let money = 0
    let items = JSON.parse(localStorage.getItem("item")) ||[]
    let user =  JSON.parse(localStorage.getItem("user"))
    let checkLogin = JSON.parse(localStorage.getItem("checkLogin"));
    for(let i = 0; i <user.length; i++){
        if(user[i].id==checkLogin){
            for(let j=0;j<user[i].cart.length;j++){
                money += user[i].cart[j].totalMoney
            }
        }
    }
    document.getElementById("total-money").innerHTML = VND.format(money)
}
totalMoney()



        
