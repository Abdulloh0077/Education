const burgerMenu=document.querySelector(".burger-menu");
const menuBlock=document.querySelector(".menu-block");

burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("active");
    menuBlock.classList.toggle("active");
})