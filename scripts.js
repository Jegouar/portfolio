const toggle = document.querySelector(".toggle");
const caret = document.querySelector(".caret");
const menu = document.querySelectorAll(".menu");
const submenu = document.querySelectorAll(".submenu");
const dropdown = document.querySelector(".dropdown");
const projects = document.querySelectorAll(".projects");

function toggleMenu() {
    if (toggle.classList.contains("cross")) {
        toggle.classList.remove("cross");
        for (const menuitem of menu) {
            menuitem.classList.remove("open");
        }
        if (caret.classList.contains("turned")) {
            caret.classList.remove("turned");
            for (const submenuitem of submenu) {
                submenuitem.classList.remove("open");
            }
        }
        for (const submenuitem of submenu) {
            submenuitem.style.display = "none";
        }
    } 
    else {
        toggle.classList.add("cross");
        for (const menuitem of menu) {
            menuitem.classList.add("open");
        }
        for (const submenuitem of submenu) {
            setTimeout(function() {
                submenuitem.style.display = "block";
            }, 300)
        }
    }
}
toggle.addEventListener("click", toggleMenu, false);

function toggleSubmenu() {
    if (caret.classList.contains("turned")) {
        caret.classList.remove("turned");
        for (const submenuitem of submenu) {
            submenuitem.classList.remove("open");
        }
    }
    else {
        caret.classList.add("turned");
        for (const submenuitem of submenu) {
            submenuitem.classList.add("open");
        }
    }
}
dropdown.addEventListener("click", toggleSubmenu, false);

function caretHover() {
    caret.classList.add("hovered");
}
dropdown.addEventListener("mouseover", caretHover, false);

function caretUnhover() {
    caret.classList.remove("hovered");
}
dropdown.addEventListener("mouseleave", caretUnhover, false);