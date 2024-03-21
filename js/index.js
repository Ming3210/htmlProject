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
        price:"1.050.000đ",
        money: VND.format("1050000"),
        image:"./asset/image/logitech_981_000719_g_pro_gaming_headset_1418048.jpg",
        id:1,
        stock:20,
        description: "The wireless earbuds are lightweight—professional enough for the office, perfect for working from home.",
        height: "Height: 183.0 mm",
        width: "Width: 169.7 mm",
        thickness: "Thickness: 73 mm",
        weight: "Weight: 185 g",
        compatibility:"Windows, Mac OS, Linux"
    },
    {
        name:"Logitech G332 wired Stereo Gaming",
        price:"839.000đ",
        money: VND.format("839000"),
        image:"./asset/image/logitech_981_000882_g733_lightspeed_wireless_rgb_1590052.jpg",
        id:2,
        stock:10,
        description: "The wireless earbuds are lightweight—professional enough for the office, perfect for working from home.",
        height: "Height: 18 mm",
        width: "Width: 16 mm",
        thickness: "Thickness: 73 mm",
        weight: "Weight: 185 g",
        compatibility:"Windows, Mac OS, Linux"
    },
    {
        name:"Logitech G545 Wireless Lighting Rgb",
        price:"1.550.000đ",
        money: VND.format("1550000"),
        image:"./asset/image/R.jpg",
        id:3,
        stock:9,
        description: "The wireless earbuds are lightweight—professional enough for the office, perfect for working from home.",
        height: "Height: 180 mm",
        width: "Width: 17 mm",
        thickness: "Thickness: 73 mm",
        weight: "Weight: 185 g",
        compatibility:"Windows, Mac OS, Linux"
    },
    {
        name:"Logitech G332 Wired Stereo Gaming",
        price:"650.000đ",
        money: VND.format("650000"),
        image:"./asset/image/logitech_981_000755_g332_wired_stereo_gaming_1456197.jpg",
        id:4,
        stock:11,
        description: "The wireless earbuds are lightweight—professional enough for the office, perfect for working from home.",
        height: "Height: 83.0 mm",
        width: "Width: 19.7 mm",
        thickness: "Thickness: 73 mm",
        weight: "Weight: 185 g",
        compatibility:"Windows, Mac OS, Linux"
    }
]


let mouseProduct = [
    {
        name:"Logitech Wireless Mouse M325 Black",
        price:"450.000đ",
        money: VND.format("450000"),
        image:"./asset/image/Logitech_910_001935_M705_Marathon_Mouse_728231.jpg",
        id:1,
        stock:20,
        description: "The wireless earbuds are lightweight—professional enough for the office, perfect for working from home.",
        height: "Height: 83.0 mm",
        width: "Width: 16.7 mm",
        thickness: "Thickness: 73 mm",
        weight: "Weight: 185 g",
        compatibility:"Windows, Mac OS, Linux"
    },
    {
        name:"Logitech Wireless Mouse M325 Black",
        price:"750.000đ",
        money: VND.format("750000"),
        image:"./asset/image/Logitech_910_002974_Wireless_Mouse_M325_Black_882513.jpg",
        id:2,
        stock:11,
        description: "The wireless earbuds are lightweight—professional enough for the office, perfect for working from home.",
        height: "Height: 18.0 mm",
        width: "Width: 1mm",
        thickness: "Thickness: 73 mm",
        weight: "Weight: 185 g",
        compatibility:"Windows, Mac OS, Linux"
    },
    {
        name:"Logitech Wireless Mouse M325 Black",
        price:"960.000đ",
        money: VND.format("960000"),
        image:"./asset/image/logitech_910_005270_pro_wireless_gaming_mouse_1442777.jpg",
        id:3,
        stock:8,
        description: "The wireless earbuds are lightweight—professional enough for the office, perfect for working from home.",
        height: "Height: 183.0 mm",
        width: "Width: 169.7 mm",
        thickness: "Thickness: 73 mm",
        weight: "Weight: 185 g",
        compatibility:"Windows, Mac OS, Linux"
    },
    {
        name:"Logitech Wireless Mouse M325 Black",
        price:"670.000đ",
        money: VND.format("670000"),
        image:"./asset/image/logitech_910_005790_g203_lightsync_gaming_mouse_1574402.jpg",
        id:4,
        stock:17,
        description: "The wireless earbuds are lightweight—professional enough for the office, perfect for working from home.",
        height: "Height: 183.0 mm",
        width: "Width: 169.7 mm",
        thickness: "Thickness: 73 mm",
        weight: "Weight: 185 g",
        compatibility:"Windows, Mac OS, Linux"
    },
]







localStorage.setItem("headphone",JSON.stringify(product))

// let headphone = JSON.parse(localStorage.getItem("headphone")) || []


//render product


function renderProduct(){
    let element = "";
    let element2 = "";
    for (let i = 0 ;i<product.length;i++){
        element +=`        <a href="./util/product_detail.html?id=${product[i].id}"><span href="" class="item"><img src="${product[i].image}" alt=""><p class="headphone-name">${product[i].name}</p><p>${product[i].price}</p><p><input onclick="sold(${product[i].id})" id="button" value="Buy now" type="button"></p></span></a>

        `
        element2+=`<span href="" class="item"><img src="${mouseProduct[i].image}" alt=""><p class="mouse-name">${mouseProduct[i].name}</p><p>${mouseProduct[i].price}</p><p><input onclick="sold()" id="button" value="Buy now" type="button"></p></span>
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

// function checkItem(){
//     let checkLogin = JSON.parse(localStorage.getItem("checkLogin"));
//     let user =  JSON.parse(localStorage.getItem("user"))
//     if(scan==true){
//         for(let i = 0; i < user.length; i++){
//             if(user[i].id == checkLogin){
//                 b.innerHTML = user[i].cart.length
//             }
//         }
//     }
   
// }
// checkItem()
