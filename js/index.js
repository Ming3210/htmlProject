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

//render

let product = [
    {
        name:"Logitech G Pro Gaming",
        price:"1.050.000đ",
        image:"./asset/image/logitech_981_000719_g_pro_gaming_headset_1418048.jpg",
        id:1,
        stock:20
    },
    {
        name:"Logitech G332 wired Stereo Gaming",
        price:"839.000đ",
        image:"./asset/image/logitech_981_000882_g733_lightspeed_wireless_rgb_1590052.jpg",
        id:2,
        stock:10
    },
    {
        name:"Logitech G545 Wireless Lighting Rgb",
        price:"1.550.000đ",
        image:"./asset/image/R.jpg",
        id:3,
        stock:9
    },
    {
        name:"Logitech G332 Wired Stereo Gaming",
        price:"650.000đ",
        image:"./asset/image/logitech_981_000755_g332_wired_stereo_gaming_1456197.jpg",
        id:4,
        stock:11
    }
]


let mouseProduct = [
    {
        name:"Logitech Wireless Mouse M325 Black",
        price:"450.000đ",
        image:"./asset/image/Logitech_910_001935_M705_Marathon_Mouse_728231.jpg",
        id:1,
        stock:20
    },
    {
        name:"Logitech Wireless Mouse M325 Black",
        price:"750.000đ",
        image:"./asset/image/Logitech_910_002974_Wireless_Mouse_M325_Black_882513.jpg",
        id:2,
        stock:11
    },
    {
        name:"Logitech Wireless Mouse M325 Black",
        price:"960.000đ",
        image:"./asset/image/logitech_910_005270_pro_wireless_gaming_mouse_1442777.jpg",
        id:3,
        stock:8
    },
    {
        name:"Logitech Wireless Mouse M325 Black",
        price:"670.000đ",
        image:"./asset/image/logitech_910_005790_g203_lightsync_gaming_mouse_1574402.jpg",
        id:4,
        stock:17
    },
]







localStorage.setItem("headphone",JSON.stringify(product))

// let headphone = JSON.parse(localStorage.getItem("headphone")) || []


//render product

function renderProduct(){
    let element = "";
    let element2 = "";
    for (let i = 0 ;i<product.length;i++){
        element +=`<a href="" class="item"><img src="${product[i].image}" alt=""><p class="headphone-name">${product[i].name}</p><p>${product[i].price}</p></a>
        `
        element2+=`<a href="" class="item"><img src="${mouseProduct[i].image}" alt=""><p class="mouse-name">${mouseProduct[i].name}</p><p>${mouseProduct[i].price}</p></a>
        `
    }

    document.getElementById("headphone-product").innerHTML = element
    document.getElementById("mouse-product").innerHTML = element2
}
renderProduct()