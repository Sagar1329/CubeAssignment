const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".navbar-nav");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("mobile-active");
});
