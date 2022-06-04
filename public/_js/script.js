//Responsive navigation menu toggle

const menuBtn = document.querySelector(".nav-button");
const closeBtn = document.querySelector(".nav-close-btn");
const menuBox =  document.querySelector(".menu-box");
const liItem = document.querySelectorAll("li a");


menuBtn.addEventListener('click', () => {
    menuBox.classList.add("active");
});

closeBtn.addEventListener('click', () => {
    menuBox.classList.remove("active");
});


