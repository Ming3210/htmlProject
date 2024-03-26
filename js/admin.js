let user = document.getElementById("user")

let product = document.getElementById("product")
let delivery = document.getElementById("delivery")
let logout = document.getElementById("logout")
let userForm = document.getElementsByClassName("user")
let productForm = document.getElementsByClassName("product")
let productTable = document.getElementById("product-table")
let deliveryTable = document.getElementById("delivery-table")
let userTable = document.getElementById("user-table")
let deliveryForm = document.getElementsByClassName("delivery")

user.style.borderRadius = "16px 0px 0px 16px"

let items = JSON.parse(localStorage.getItem("item") )||[]

let category = JSON.parse(localStorage.getItem("category")) || []

const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
});

let headphone = items.filter(function(e,i){
    return e.category === 1;
})
let mouse = items.filter(function(e,i){
    return e.category === 2;
})
console.log(items);
user.style.backgroundColor = "white"
user.onclick = function() {
    userClick()
    hover()
}



product.onclick = function() {
    productClick()
    hover2()
}
delivery.onclick = function(){
    deliveryClick()
    hover3()
}

function userClick(){

    userTable.style.display = "block"
    userTable.style.width = "38%"
    user.style.backgroundColor = "white"
    user.style.borderRadius = "16px 0px 0px 16px"
    productTable.style.display = "none"
    deliveryTable.style.display = "none"
   
}

function productClick(){
    productTable.style.display = "block"
    productTable.style.width = "38%"
    product.style.backgroundColor = "white"
    product.style.borderRadius = "16px 0px 0px 16px"
    deliveryTable.style.display = "none"
    userTable.style.display = "none"
    
}

function deliveryClick(){
    delivery.style.backgroundColor = "white"
    deliveryTable.style.display = "block"
    deliveryTable.style.width = "43%"
    delivery.style.borderRadius = "16px 0px 0px 16px"
    productTable.style.display = "none"
    userTable.style.display = "none"

}


function renderProduct(){
    let checkLogin = JSON.parse(localStorage.getItem("checkLogin"))
    let item = JSON.parse(localStorage.getItem("item"))||[]
    let user = JSON.parse(localStorage.getItem("user"))||[]
    let element =``
    let element2 =``
    for (let i=0; i<item.length;i++){
       
        element +=`
            <tr>
                <td>${i+1}</td>
                <td>${item[i].name}</td>
                <td><img src=".${item[i].image}" alt=""></td>
                <td>${item[i].stock}</td>
                <td>${VND.format(item[i].money)}</td>
                <td>
                        <button onclick="editProduct(${item[i].id})"><i class="fa-solid fa-pen-to-square"></i>Edit</button>
                    
                </td>
                <td>
                    <button id="btn-ban" onclick="deleteProduct(${item[i].id})"><i  class="fa-solid fa-trash"></i>Delete</button>
                </td>
            </tr>
        `
        }
        
    for (let i=0; i<user.length;i++){
        
       if(user[i].status == true){
        element2 +=`
        <tr >
            <td>${i+1}</td>
            <td>${user[i].fname}</td>
            <td>${user[i].lname}</td>
            <td>${user[i].email}</td>
            <td>Customer</td>
            <td><button onclick="banUser(${user[i].id})" class="btn-ban" ><i class="fa-solid fa-ban"></i>Ban</button></td>
            
        </tr>
    `
       }else if(user[i].status == false){
        element2 +=`
        <tr >
            <td>${i+1}</td>
            <td>${user[i].fname}</td>
            <td>${user[i].lname}</td>
            <td>${user[i].email}</td>
            <td>Customer</td>
            <td><button onclick="banUser(${user[i].id})" class="btn-ban" ><i class="bx bxs-lock-open-alt"></i>Unban</button></td>
            
        </tr>
    `
       }
        
        
        
    }
    document.getElementById("tr-2").innerHTML= element2
    document.getElementById("tr").innerHTML = element
}

renderProduct()


function hover(){
    user.style.backgroundColor="white"
    product.style.backgroundColor="greenyellow"
    delivery.style.backgroundColor="greenyellow"
    logout.style.backgroundColor="greenyellow"
}

function hover2(){
    product.style.backgroundColor="white"
    user.style.backgroundColor="greenyellow"
    delivery.style.backgroundColor="greenyellow"
    logout.style.backgroundColor="greenyellow"
}

function hover3(){
    delivery.style.backgroundColor="white"
    user.style.backgroundColor="greenyellow"
    logout.style.backgroundColor="greenyellow"
    product.style.backgroundColor="greenyellow"
}

function hover4(){
    logout.style.backgroundColor="white"
    user.style.backgroundColor="greenyellow"
    delivery.style.backgroundColor="greenyellow"
    product.style.backgroundColor="greenyellow"
}
let form = document.getElementById("form")

function addProduct(){
    form.style.display = "block"

}

function addDown(){
    form.style.display = "none"
}

function uuidv4() {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
      (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
    );
}
  

function add(){
    let compatibility = document.getElementById("compatibility")
    let category = document.getElementById("category")
    let name = document.getElementById("name")
    let image = document.getElementById("image")
    let stock = document.getElementById("stock")
    let money = document.getElementById("money")
    let weight = document.getElementById("weight")
    let height = document.getElementById("height")
    let width = document.getElementById("width")
    let thickness = document.getElementById("thickness")
    let description = document.getElementById("description")
    let item = JSON.parse(localStorage.getItem("item"))||[]
    
    var originalPath = image.value;

        function convertPath(originalPath) {
            var removedFakePath = originalPath.replace(/^.*[\\\/]/, '');

            var newPath = './asset/image/' + removedFakePath;

            return newPath;
        }

    var newPath = convertPath(originalPath);
        let newItem = {
        compatibility: compatibility.value,
        category: +category.value,
        id: Math.floor(Math.random() *9999999999999999999),
        name: name.value,
        image: newPath,
        mainStock: +stock.value,
        stock: +stock.value,
        money: +money.value,
        height: `Height : ${height.value}`,
        width: `Width : ${width.value}`,
        thickness: `Thickness : ${thickness.value}`,
        description: description.value,
        weight : `Weight : ${weight.value}`,
        totalMoney: +money.value,
        price:`Price: ${money.value}`
    }
    item.push(newItem)
    localStorage.setItem("item",JSON.stringify(item))
    renderProduct()
    // form.style.display = "none"
}

function deleteProduct(id){
    let item = JSON.parse(localStorage.getItem("item") )||[]
    for(let i = 0;i<item.length;i++){
        if(item[i].id == id){
            let confirmDeleteProduct = confirm("Are you sure you want to delete")
            if(!confirmDeleteProduct){
                return
            }
            item.splice(i,1)
            localStorage.setItem("item",JSON.stringify(item))
            break
        }
    }
    renderProduct()
}

function banUser(id){
    let user = JSON.parse(localStorage.getItem("user") )||[]
    for(let i = 0;i < user.length;i++){
        if(user[i].id == id){
            if(user[i].status == true){
                console.log("1");
                document.getElementsByClassName("btn-ban")[i].innerHTML = `<i class="bx bxs-lock-open-alt"></i>  Unban </button>`
                user[i].status = false
            }else {
                console.log("2");
                document.getElementsByClassName("btn-ban")[i].innerHTML = `<i class="fa-solid fa-ban"></i>Ban</button>`
                user[i].status = true
            }
        }
    }
    localStorage.setItem("user",JSON.stringify(user))
    // renderProduct()
}

function editProduct(id){
    let item = JSON.parse(localStorage.getItem("item") )||[]
    for(let i = 0;i<item.length;i++){
        if(item[i].id == id){
            let compatibility = document.getElementById("compatibility")
            let category = document.getElementById("category")
            let name = document.getElementById("name")
            let image = document.getElementById("image")
            let stock = document.getElementById("stock")
            let money = document.getElementById("money")
            let weight = document.getElementById("weight")
            let height = document.getElementById("height")
            let width = document.getElementById("width")
            let thickness = document.getElementById("thickness")
            let description = document.getElementById("description")
            compatibility.value = item[i].compatibility
            category.value = item[i].category
            name.value = item[i].name
            image.value = item[i].image
            stock.value = item[i].stock
            money.value = item[i].money
            height.value = item[i].height
            width.value = item[i].width
            weight.value = item[i].weight
        }
    }
}