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

if (navbar && hamburger && bars && xMark) {
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
