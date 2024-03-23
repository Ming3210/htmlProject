document.getElementById("user").innerText = `${localStorage.getItem("userName")}`

let scaner = JSON.parse(localStorage.getItem("scan")) ||[]

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
    let items = JSON.parse(localStorage.getItem("item") )|| []
    console.log("121231231",items);
    let element =``
    for (let i=0; i<items.length;i++){
        element +=`
        <tr>
            <td>${i+1}</td>
            <td>${items[i].name}</td>
            <td><img src=".${items[i].image}" alt=""></td>
            <td>${items[i].stock}</td>
            <td>${(VND.format(items[i].money))}</td>
            <td>
            <button onclick="increase(${items[i].id})"><i class='bx bxs-up-arrow'></i></button>
            <p id="quantity">${items[i].quantity}</p>
            <button onclick="decrease(${items[i].id})"><i class='bx bxs-down-arrow'></i></button>
            </td>
            <td>
                <button onclick="deleteItem(${items[i].id})">Delete</button>
            </td>
        </tr>
        `
    }
    document.getElementById("tr").innerHTML = element

}

function checkItem(){
    let items = JSON.parse(localStorage.getItem("item")) ||[]
    let checkLogin = JSON.parse(localStorage.getItem("checkLogin"));
    if(scaner==true){
        let user =  JSON.parse(localStorage.getItem("user"))
        console.log("666666666666666666",user);
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
    for(let i = 0; i < items.length; i++){
        if(items[i].id == id && items[i].stock>0){
            
            items[i].stock--
            items[i].quantity++
            items[i].totalMoney = items[i].quantity * items[i].money
        }
    }
    
    // document.getElementById("total-money").innerHTML = VND.format(totalMoney)
    localStorage.setItem("item",JSON.stringify(items))
    renderItem()
    totalMoney()
}



function decrease(id){
    
    let items = JSON.parse(localStorage.getItem("item")) ||[]
    for(let i = 0; i < items.length; i++){
        if(items[i].id == id &&  items[i].stock<items[i].mainStock){
            console.log(items[i].quantity * items[i].money);
            items[i].stock++
            items[i].quantity--
            items[i].totalMoney = items[i].quantity * items[i].money
            
        }
    }
    localStorage.setItem("item",JSON.stringify(items))
    totalMoney()
    renderItem()
}

function totalMoney(){
    let money = 0
    let items = JSON.parse(localStorage.getItem("item")) ||[]
    for(let i = 0; i < items.length; i++){
        money += items[i].totalMoney
    }
    document.getElementById("total-money").innerHTML = VND.format(money)
    console.log("m",money);
}
totalMoney()