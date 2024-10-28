let mover = document.querySelectorAll(".mover");
let container = document.querySelector(".container");
let message = document.querySelector(".message");
let header = document.querySelector(".header");
mover.forEach((value) => {
  value.addEventListener("click", (event) => {
    if (value.style.left == "0px") {
      value.style.left = "90px";
      header.style.color = "#fff";
      message.style.color = "#fff";
      container.style.backgroundColor = "#000";
    }else {
      value.style.left = "0px";
      header.style.color = "#000";
      container.style.backgroundColor = "#fff";
      message.style.color = "#000";
    }
  });
});
