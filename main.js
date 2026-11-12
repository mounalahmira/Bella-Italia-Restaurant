// const navbar = document.querySelector(".navbar")
// const bars = document.querySelector(".fa-bars")
// const xMark = document.querySelector(".fa-xmark")
// const humburger = document.querySelector(".humburger")

// humburger.addEventListener("click",()=>{
//     bars.classList.toggle("active")
//     xMark.classList.toggle("active")
//     navbar.classList.toggle("active")
// })

const navbar = document.querySelector(".navbar");
const hamburger = document.querySelector(".humburger");
const bars = hamburger?.querySelector(".fa-bars");
const xMark = hamburger?.querySelector(".fa-xmark");
const navLinks = navbar?.querySelectorAll("a");

if (navbar && hamburger && bars && xMark) {  // && => and
    function toggleMenu(isOpen) {
        navbar.classList.toggle("active", isOpen);
        bars.classList.toggle("active", !isOpen);
        xMark.classList.toggle("active", isOpen);

        hamburger.setAttribute("aria-expanded", String(isOpen));

        hamburger.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );
    }

    hamburger.addEventListener("click", () => {
        const isOpen = hamburger.getAttribute("aria-expanded") !== "true";
        toggleMenu(isOpen);
    });

    // Close the menu after clicking a navigation link
    navLinks?.forEach(link => {
        link.addEventListener("click", () => {
            toggleMenu(false);
        });
    });

    // Close the menu with the Escape key
    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            toggleMenu(false);
        }
    });

    // Close the mobile menu when returning to desktop width
    window.matchMedia("(min-width: 901px)").addEventListener("change", () => {
        toggleMenu(false);
    });
}

// =========================================================
let currentIndex = 0
let slides = document.querySelectorAll(".slide")
let dots = document.querySelectorAll(".dot")
let prevBtn = document.querySelector(".prev")
let nextBtn = document.querySelector(".next")

function showSlide(index){
    slides.forEach((slide,i)=>{
        slide.classList.remove("active")
        dots[i].classList.remove("active")
    })

    slides[index].classList.add("active")
    dots[index].classList.add("active")
}

function prevSlide(){
    // currentIndex--;
    // if(currentIndex < 0){
    //     currentIndex = slides.length - 1
    // }

    currentIndex = (currentIndex - 1 + slides.length) % slides.length 
    showSlide(currentIndex)
}
function nextSlide(){
    // currentIndex++;
    // if(currentIndex > slides.length-1){
    //     currentIndex = 0
    // }
    currentIndex = (currentIndex + 1) % slides.length 
    showSlide(currentIndex)
}

function currentSlide(index){
    currentIndex = index
    showSlide(currentIndex)
}
prevBtn.addEventListener("click", prevSlide)
nextBtn.addEventListener("click", nextSlide)

dots.forEach((dot, index)=>{
    dot.addEventListener("click",()=>{currentSlide(index)})
})

// Auto Slider
setInterval(function(){
    nextSlide()
},3000)

const reservationModal =  document.querySelector("#reservation-modal")
const reservationBtn = document.querySelector("#reservation-btn")
const closeReservationModal = document.querySelector("#close");


// Close the reservationModel  when clicking X
closeReservationModal.addEventListener("click", ()=>{
    reservationModal.style.visibility = "hidden"
});
// Show the reservationModel 
reservationBtn.addEventListener("click",()=>{
    reservationModal.style.visibility = "visible"
})
