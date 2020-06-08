const toggleBtn = document.querySelector(".navbar_toggleBtn");
const menu = document.querySelector(".navbar_menu");
const icons = document.querySelector(".navbar_icons");

function toggleBtnClick(){
    menu.classList.toggle("active");
    icons.classList.toggle("active");
}

toggleBtn.addEventListener("click", toggleBtnClick);