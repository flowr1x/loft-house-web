let menuBurger = document.querySelector(".menu__burger");
let menuList = document.querySelector(".menu__list");

menuBurger.addEventListener("click", () => {
    menuBurger.classList.toggle("_active");
    menuList.classList.toggle("_active");
    document.body.classList.toggle("_lock");
})