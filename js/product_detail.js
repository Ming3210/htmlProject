document.getElementById("user").innerText = `${localStorage.getItem("userName")}`
let a = 1
let f = 1
let c = 1
let p = document.getElementsByClassName("p")
let btnBuy = document.getElementsByClassName("btn-buy")
let btnCart = document.getElementsByClassName("btn-cart")
let compatibility = document.getElementsByClassName("c")
let des = document.getElementsByClassName("des")
let price = document.getElementsByClassName("price")
let image = document.getElementById("image")
let asd = document.getElementsByClassName("name")
let scaner = JSON.parse(localStorage.getItem("scan")) ||[]
let b = document.getElementById("b")
let item = JSON.parse(localStorage.getItem("item")) ||[]
if (scaner == true){
   
    document.getElementById("login").style.display = "none"
    document.getElementById("register").style.display = "none"
    document.getElementById("user").style.display = "block"
    document.getElementById("user").innerText = `${localStorage.getItem("userName")}`
    document.getElementById("cart").style.display = "block"
}else{
    document.getElementById("login").style.display = "block"
    document.getElementById("register").style.display = "block"
    document.getElementById("user").style.display = "none"
    document.getElementById("cart").style.display = "none"

}

let id = window.location.href.split("?")[1].split("=")[1]

let headphoneProductList = JSON.parse(localStorage.getItem("headphone"))


console.log(headphoneProductList);
let headphoneProduct = headphoneProductList.find(function(e,i){
    return e.id === +id;
});
console.log("22212212",headphoneProduct.image);
des[0].innerHTML = headphoneProduct.description
price[0].innerHTML = headphoneProduct.price
p[0].innerHTML = headphoneProduct.height
p[1].innerHTML = headphoneProduct.width
p[2].innerHTML = headphoneProduct.thickness
p[3].innerHTML = headphoneProduct.weight

// for(let i =0 ;i<headphoneProductList.length ;i++){
   
// }
compatibility[0].innerHTML = headphoneProduct.compatibility
image.src = `.${headphoneProduct.image}`
asd.innerHTML = headphoneProduct.name

function detail(){
        console.log(a);
//     if(a % 2 == 0){
//         for(let i=0;i<p.length;i++){
//             p[i].style.display = "none"
//         }
//     }else if(a % 2 == 1){
//         for(let i=0;i<p.length;i++){
//             p[i].style.display = "block"
//         }
//     }
//     a++
    
}
function buy(){
    if(f % 2 == 0){
        // btnBuy[0].style.display = "none"
        btnCart[0].style.display = "none"
    }else if(f % 2 == 1){
        
        // btnBuy[0].style.display = "block"
        btnCart[0].style.display = "block"
    }
    f++
    
}
// function compa(){
//     if(c % 2 == 0){
//         compatibility[0].style.display = "none"
       
//     }else if(c % 2 == 1){
//         compatibility[0].style.display = "block"
//     }
//     c++
// }
function sold(){
    
    let flag = -1
    if(scaner == ""){
        console.log("$#@(&*&^!@#&*(&*(#!@#");
        console.log(scaner);
        alert("Bạn cần đăng nhập để mua hàng")
    }else if(scaner == true){
        let checkLogin = JSON.parse(localStorage.getItem("checkLogin"))
        let user =  JSON.parse(localStorage.getItem("user"))
        let product = JSON.parse(localStorage.getItem("headphone"));
        for(let i=0;i<product.length;i++){
            if(checkLogin == user[i].id){
                for(let j=0;j<product.length;j++){
                    if(product[j].id==id){
                        let index = user[i].cart.findIndex((item, index) => {
                            return item.id == id
                        })
                        if (index == -1) {
                            //tức là không có thêm bình thường
                            console.log("chưa có ");
                            alert("Thêm vào giỏ hàng thành công")
                            user[i].cart.push({ ...product[j], quantity: 1 });
                            item.push({ ...product[j], quantity:1})
                            localStorage.setItem("item", JSON.stringify(item));
                            localStorage.setItem("user", JSON.stringify(user));
                            showQuantityCart()
                        } else {
                            alert("Hàng đã có trong giỏ")
                            //có rồi đi tăng số lượng
                            // mình phải biết vị trí của cái cần tăng
                            // user[i].cart[index].quantity = ++user[i].cart[index].quantity;
                            // user[i].cart[index].quantity = --user[i].cart[index].stock;
                            localStorage.setItem("user", JSON.stringify(user));
                        }
                    }
                    
                }
                break
            }
        }
        showQuantityCart()
    }
}
function showQuantityCart(){
    let checkLogin = JSON.parse(localStorage.getItem("checkLogin"));
    let user = JSON.parse(localStorage.getItem("user"));
    for (let i = 0; i < user.length; i++) {
        if (user[i].id == checkLogin) {
            b.innerHTML = user[i].cart.length
            }
        }
}

function checkItem(){
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


btnCart[0].addEventListener("click",function(e){
    e.preventDefault
})


