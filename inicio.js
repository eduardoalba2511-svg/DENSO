const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

function scrollToSection() {
    document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    });
}