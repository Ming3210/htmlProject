let checkUser = JSON.parse(localStorage.getItem('user')) || []
console.log(checkUser.length);
let scan = JSON.parse(localStorage.getItem("scan")) ||[]
let b = document.getElementById("b")

const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });

console.log(scan);
if (scan == true){
    document.getElementById("login").style.display = "none"
    document.getElementById("register").style.display = "none"
    document.getElementById("user").style.display = "block"
    document.getElementById("user").innerText = `${localStorage.getItem("userName")}`
    document.getElementById("cart").style.display = "block"
}else{
    document.getElementById("login").style.display = "block"
    document.getElementById("register").style.display = "block"
    document.getElementById("user").style.display = "none"
}
function redirect(){
    
}

//render

let product = [
    {
        name:"Logitech G Pro Gaming",
        price:"Price: 1.050.000đ",
        totalMoney:1050000,
        money: 1050000,

        category:1,
        image:"./asset/image/logitech_981_000719_g_pro_gaming_headset_1418048.jpg",
        id:Math.floor(Math.random() *9999999999999999999),
        mainStock:20,
        stock:20,
        description: "The wireless earbuds are lightweight—professional enough for the office, perfect for working from home.",
        height: "Height: 183.0 mm",
        width: "Width: 169.7 mm",
        thickness: "Thickness: 73 mm",
        weight: "Weight: 185 g",
        compatibility:"Windows, Mac OS, Linux"
,
status:true,
    },
    {
        name:"Logitech G332 wired Stereo Gaming",
        price:"Price: 839.000đ",
        totalMoney:839000,
        money: 839000,
        category:1,
        image:"./asset/image/logitech_981_000882_g733_lightspeed_wireless_rgb_1590052.jpg",
        id:Math.floor(Math.random() *9999999999999999999),
        mainStock:10,
        stock:10,
        description: "The wireless earbuds are lightweight—professional enough for the office, perfect for working from home.",
        height: "Height: 18 mm",
        width: "Width: 16 mm",
        thickness: "Thickness: 73 mm",
        weight: "Weight: 185 g",
        compatibility:"Windows, Mac OS, Linux"
,
status:true,
    },
    {
        name:"Logitech G545 Wireless Lighting Rgb",
        price:"Price: 1.550.000đ",
        totalMoney:1550000,
        money: 1550000,
        category:1,
        image:"./asset/image/R.jpg",
        id:Math.floor(Math.random() *9999999999999999999),
        mainStock:9,
        stock:9,
        description: "The wireless earbuds are lightweight—professional enough for the office, perfect for working from home.",
        height: "Height: 180 mm",
        width: "Width: 17 mm",
        thickness: "Thickness: 73 mm",
        weight: "Weight: 185 g",
        compatibility:"Windows, Mac OS, Linux"
,
status:true,
    },
    {
        name:"Logitech G332 Wired Stereo Gaming",
        price:"Price: 650.000đ",
        totalMoney:650000,
        money: 650000,
        category:1,
        image:"./asset/image/logitech_981_000755_g332_wired_stereo_gaming_1456197.jpg",
        id:Math.floor(Math.random() *9999999999999999999),        
        mainStock:11,
        stock:11,
        description: "The wireless earbuds are lightweight—professional enough for the office, perfect for working from home.",
        height: "Height: 83.0 mm",
        width: "Width: 19.7 mm",
        thickness: "Thickness: 73 mm",
        weight: "Weight: 185 g",
        compatibility:"Windows, Mac OS, Linux"
,
status:true,
    },
    {
    
    name:"Logitech Wireless Mouse M325 Black",
    price:"Price: 450.000đ",
    totalMoney:450000,
    money: 450000,
    category:2,
    image:"./asset/image/Logitech_910_001935_M705_Marathon_Mouse_728231.jpg",
    id:Math.floor(Math.random() *9999999999999999999),        
    mainStock:20,
    stock:20,
    description: "The wireless earbuds are lightweight—professional enough for the office, perfect for working from home.",
    height: "Height: 83.0 mm",
    width: "Width: 16.7 mm",
    thickness: "Thickness: 73 mm",
    weight: "Weight: 185 g",
    compatibility:"Windows, Mac OS, Linux",
    status:true,
},
{
    name:"Logitech Wireless Mouse M325 Black",
    price:"Price: 750.000đ",
    totalMoney:750000,
    money: 750000,
    category:2,
    image:"./asset/image/Logitech_910_002974_Wireless_Mouse_M325_Black_882513.jpg",
    id:Math.floor(Math.random() *9999999999999999999),        
    mainStock:11,
    stock:11,
    description: "The wireless earbuds are lightweight—professional enough for the office, perfect for working from home.",
    height: "Height: 18.0 mm",
    width: "Width: 1mm",
    thickness: "Thickness: 73 mm",
    weight: "Weight: 185 g",
    compatibility:"Windows, Mac OS, Linux",
    status:true,
},
{
    name:"Logitech Wireless Mouse M325 Black",
    price:"Price: 960.000đ",
    totalMoney:960000,
    money: 960000,
    category:2,
    image:"./asset/image/logitech_910_005270_pro_wireless_gaming_mouse_1442777.jpg",
    id:Math.floor(Math.random() *9999999999999999999),        
    mainStock:8,
    stock:8,
    description: "The wireless earbuds are lightweight—professional enough for the office, perfect for working from home.",
    height: "Height: 183.0 mm",
    width: "Width: 169.7 mm",
    thickness: "Thickness: 73 mm",
    weight: "Weight: 185 g",
    compatibility:"Windows, Mac OS, Linux",
    status:true,
},
{
    name:"Logitech Wireless Mouse M325 Black",
    price:"Price: 670.000đ",
    totalMoney:670000,
    money: 670000,
    category:2,
    image:"./asset/image/logitech_910_005790_g203_lightsync_gaming_mouse_1574402.jpg",
    id:Math.floor(Math.random() *9999999999999999999),        
    mainStock:17,
    stock:17,
    description: "The wireless earbuds are lightweight—professional enough for the office, perfect for working from home.",
    height: "Height: 183.0 mm",
    width: "Width: 169.7 mm",
    thickness: "Thickness: 73 mm",
    weight: "Weight: 185 g",
    compatibility:"Windows, Mac OS, Linux",
    status:true,
},
]

// localStorage.setItem("item",JSON.stringify(product)) ||[]   

let categoryList = [
    {
        name:"Headphone",
        id:1,
    },
    {
        name:2,
        id:2,
    }
]


localStorage.setItem("category",JSON.stringify(categoryList))||[]


let category = JSON.parse(localStorage.getItem("category")) || []
// let product = [
    
// ]

let item = JSON.parse(localStorage.getItem("item"))
console.log("abcxyz",item);

let headphone = item.filter(function(e,i){
    return e.category === 1;
})
let mouse = item.filter(function(e,i){
    return e.category === 2;
})




// let headphone = JSON.parse(localStorage.getItem("headphone")) || []


//render product


function renderProduct(){
    let element = "";
    let element2 = "";

    for (let index in headphone) {
        console.log("12312312321312312312312321",headphone[index]);
        element +=`        <li>
        <a href="./util/product_detail.html?id=${headphone[index].id}"><span href="" class="item"><img src="${headphone[index].image}" alt=""><p class="headphone-name">${headphone[index].name}</p><p>${headphone[index].price}</p><p><input onclick="sold(${headphone[index].id})" id="button" value="Buy now" type="button"></p></span></a>
        
        </li>

        `
    }




    // for (let i = 0 ;i<item.length/2;i++){
        
        
    // }

    for(let index in mouse){
        element2+=`<li><a href="./util/product_detail.html?id=${mouse[index].id}"><span href="" class="item"><img src="${mouse[index].image}" alt=""><p class="mouse-name">${mouse[index].name}</p><p>${mouse[index].price}</p><p><input onclick="sold(${mouse[index].id})" id="button" value="Buy now" type="button"></p></span></a></li>
        `
    }
    document.getElementById("headphone-product").innerHTML = element
    document.getElementById("mouse-product").innerHTML = element2
}
renderProduct()

let checkLogin = JSON.parse(localStorage.getItem("checkLogin"))
console.log(checkLogin);



// function sold(productId){
    
//     if(scan == ""){
//         console.log("$#@(&*&^!@#&*(&*(#!@#");
//     }else if(scan == true){
//         let checkLogin = JSON.parse(localStorage.getItem("checkLogin"))
//         let user =  JSON.parse(localStorage.getItem("user"))
//         let product = JSON.parse(localStorage.getItem("headphone"));
//         for(let i=0;i<product.length;i++){
//             if(checkLogin == user[i].id){
//                 for(let j=0;j<product.length;j++){
//                     if(product[j].id==productId){
//                         let index = user[i].cart.findIndex((item, index) => {
//                             return item.id == productId
//                         })
//                         if (index == -1) {
//                             //tức là không có thêm bình thường
//                             console.log("chưa có ");
//                             user[i].cart.push({ ...product[j], quantity: 1 });
//                             localStorage.setItem("user", JSON.stringify(user));
//                             // showQuantityCart()
//                         } else {
//                             //có rồi đi tăng số lượng
//                             // mình phải biết vị trí của cái cần tăng
//                             user[i].cart[index].quantity = ++user[i].cart[index].quantity;
//                             user[i].cart[index].quantity = --user[i].cart[index].stock;
//                             localStorage.setItem("user", JSON.stringify(user));
//                         }
//                     }
                    
//                 }
//                 break
//             }
//         }
//         showQuantityCart()
//     }
// }
// function showQuantityCart(){
//     let checkLogin = JSON.parse(localStorage.getItem("checkLogin"));
//     let user = JSON.parse(localStorage.getItem("user"));
//     for (let i = 0; i < user.length; i++) {
//         if (user[i].id == checkLogin) {
//             b.innerHTML = user[i].cart.length
            
//             }
//         }
// }

function checkItem(){
    let checkLogin = JSON.parse(localStorage.getItem("checkLogin"));
    let user =  JSON.parse(localStorage.getItem("user"))
    if(scan==true){
        for(let i = 0; i < user.length; i++){
            if(user[i].id == checkLogin){
                b.innerHTML = user[i].cart.length
            }       
        }
    }
}
checkItem()
