// Added smooth scroll 
let linksScroll = document.querySelectorAll("[data-goto]");

if (linksScroll.length > 0) {
    linksScroll.forEach(linkScroll => {
        linkScroll.addEventListener("click", onLinkScrollClick);
    })

    function onLinkScrollClick(event) {
        const linkScroll = event.currentTarget;

        if (document.querySelector(linkScroll.dataset.goto)) {            
            let menuBurger = document.querySelector(".menu__burger");
            if (menuBurger.classList.contains("_active")) {
                menuBurger.classList.remove("_active");
                menuList.classList.remove("_active");
                document.body.classList.remove("_lock");
            }

            const gotoBlock = document.querySelector(linkScroll.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
        }
        
        event.preventDefault();
    }
}