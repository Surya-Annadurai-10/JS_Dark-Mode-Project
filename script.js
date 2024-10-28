let mover = document.querySelectorAll(".mover");
let container = document.querySelector(".container");
let message = document.querySelector(".message");

mover.forEach((value) =>{
    value.addEventListener("click" , (event)=>{
        console.log("hi")
        if (value.style.left == 0){
          value.style.left =  `90px`
        }else if(value.style.left == `90px`){
          value.style.left = 0;
        }
      })
})

