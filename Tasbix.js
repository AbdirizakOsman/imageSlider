let count = document.querySelector("#count")
let increment = document.querySelector("#incrementBtn")
let decrement = document.querySelector("#decrementBtn")
let Reset = document.querySelector("#ResetBtn")

let initialValue = 0

incrementBtn.addEventListener("click",function(){
    initialValue ++
    count.innerHTML = initialValue
   

    // if (initialValue >= 7) {
    //     document.body.style.backgroundColor = "blue";
    // } else {
    //     // Reset background color to default when value is less than 7
    //     document.body.style.backgroundColor = "";
    // }

    // if (initialValue >= 1) {
    //         document.body.style.backgroundColor = "red";
    //     }else if (initialValue >= 2){
    //         document.body.style.backgroundColor = "blue";

    //     }else if (initialValue >= 3){
    //         document.body.style.backgroundColor = "green";

    //     }else if (initialValue >= 4){
    //         document.body.style.backgroundColor = "black";

    //     }else if (initialValue >= 5){
    //         document.body.style.backgroundColor = "orange";

    //     }else{
    //         document.body.style.backgroundColor = "white";
    //     }

     // Set background color based on the value of initialValue
     if (initialValue === 1) {
        document.body.style.backgroundColor = "red";
    } else if (initialValue === 2) {
        document.body.style.backgroundColor = "blue";
    } else if (initialValue === 3) {
        document.body.style.backgroundColor = "green";
    } else if (initialValue === 4) {
        document.body.style.backgroundColor = "black";
    } else if (initialValue === 5) {
        document.body.style.backgroundColor = "orange";
    }

    else if (initialValue === 6) {
        document.body.style.backgroundColor = "yellow";
    }
    

     else {
        document.body.style.backgroundColor = "white";
    }


})

decrementBtn.addEventListener("click",function(){
  
    if (initialValue > 0) {
        initialValue--;
        count.innerHTML = initialValue;
    }

    if (initialValue === 1) {
        document.body.style.backgroundColor = "red";
    } else if (initialValue === 2) {
        document.body.style.backgroundColor = "blue";
    } else if (initialValue === 3) {
        document.body.style.backgroundColor = "green";
    } else if (initialValue === 4) {
        document.body.style.backgroundColor = "black";
    } else if (initialValue === 5) {
        document.body.style.backgroundColor = "orange";
    }

    else if (initialValue === 6) {
        document.body.style.backgroundColor = "yellow";
    }
    

     else {
        document.body.style.backgroundColor = "white";
    }

  
})

ResetBtn.addEventListener("click",function(){
    initialValue = 0;
    count.innerHTML = initialValue;
    document.body.style.backgroundColor = "white";
})


