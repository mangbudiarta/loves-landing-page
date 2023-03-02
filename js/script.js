// script hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// script navbar scroll
const navBar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  const windowPosition = window.scrollY > 45;
  navBar.classList.toggle("scrolling-active", windowPosition);
});
