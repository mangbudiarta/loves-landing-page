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
  const windowPosition = window.scrollY > 45;
  navBar.classList.toggle("scrolling-active", windowPosition);
});

// Function add alert error form
let error = document.querySelector(".alert-warning");
function addError() {
  error.innerHTML = "Please complete form";
  error.style.display = "block";
}
let form = document.getElementById("contact-form");

// Function validasi contact form
function validasi(event) {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let subject = document.getElementById("subject").value;
  let messages = document.getElementById("messages").value;
  event.preventDefault();
  error.style.display = "none";
  if (name == "" || email == "" || messages == "" || subject == "") {
    addError();
  } else {
    alert("Thank you, your message will be replied to shortly. ");
    window.location.reload();
  }
}
form.addEventListener("submit", validasi);
