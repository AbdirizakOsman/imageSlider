let box = document.querySelector("#box")
let onBtn = document.querySelector("#onBtn")
let offBtn = document.querySelector("#offBtn")



onBtn.addEventListener("click",function(){
    box.style.backgroundColor = "yellow"
})

offBtn.addEventListener("click",function(){
    box.style.backgroundColor = "white"
})
 
