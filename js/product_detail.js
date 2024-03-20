document.getElementById("user").innerText = `${localStorage.getItem("userName")}`
let a = 1
let b = 1
let c = 1
let p = document.getElementsByClassName("p")
let btnBuy = document.getElementsByClassName("btn-buy")
let btnCard = document.getElementsByClassName("btn-cart")
let compatibility = document.getElementsByClassName("c")










function compa(){
    
}
function buy(){

}
function detail(){
    
    if(a % 2 == 0){
        for(let i=0;i<p.length;i++){
            p[i].style.display = "none"
        }
    }else if(a % 2 == 1){
        for(let i=0;i<p.length;i++){
            p[i].style.display = "block"
        }
    }
    a++
    
}
function buy(){
    if(b % 2 == 0){
        btnBuy[0].style.display = "none"
        btnCard[0].style.display = "none"
    }else if(b % 2 == 1){
        
        btnBuy[0].style.display = "block"
        btnCard[0].style.display = "block"
    }
    b++
    
}
function compa(){
    if(c % 2 == 0){
        compatibility[0].style.display = "none"
       
    }else if(c % 2 == 1){
        compatibility[0].style.display = "block"
        
    }
    c++
}