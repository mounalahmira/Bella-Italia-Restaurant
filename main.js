const navbar = document.querySelector(".navbar")
const bars = document.querySelector(".fa-bars")
const xMark = document.querySelector(".fa-xmark")
const humburger = document.querySelector(".humburger")

humburger.addEventListener("click",()=>{
    bars.classList.toggle("active")
    xMark.classList.toggle("active")
    navbar.classList.toggle("active")
})