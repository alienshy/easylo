window.addEventListener("scroll",()=>{
    if(window.scrollY>300){
        document.querySelector("nav").style.backgroundColor = "#10C98F"
        document.querySelector("nav").style.top="0"
        document.querySelector("nav").style.left="0"
    }
    else{   
        document.querySelector("nav").style.backgroundColor = ""
        document.querySelector("nav").style.top=""
        document.querySelector("nav").style.left=""
    }
});



const menu  = document.querySelector("#click")
const ul = document.querySelector(".connavul")

function menum(){
    if(ul.style.display === "none"){
        ul.style.display = "flex"
}
    else{
        ul.style.display = "none"
    }
}

menu.addEventListener("click",()=>{
    menum()
})