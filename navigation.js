const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");

function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        toggle.classList.remove("cross");
    }
    else {
        menu.classList.add("active");
        toggle.classList.add("cross");
    }
}
toggle.addEventListener("click", toggleMenu, false);


const caret = document.querySelector(".caret");

function toggleItem() {
    if (this.classList.contains("submenu-active")) {
        this.classList.remove("submenu-active");
        caret.classList.remove("turned");
    } 
    else {
        this.classList.add("submenu-active");
        caret.classList.add("turned");
    }
}

const items = document.querySelectorAll(".item");

for (let item of items) {
    if (item.querySelector(".submenu")) {
        item.addEventListener("click", toggleItem, false);
        item.addEventListener("keypress", toggleItem, false);
    }   
}


function closeSubmenu(e) {
    if (menu.querySelector(".submenu-active")) {
        let isClickInside = menu.querySelector(".submenu-active").contains(e.target);
        if (!isClickInside && menu.querySelector(".submenu-active")) {
            menu.querySelector(".submenu-active").classList.remove("submenu-active");
            caret.classList.remove("turned");
        }
    }
}
document.addEventListener("click", closeSubmenu, false);