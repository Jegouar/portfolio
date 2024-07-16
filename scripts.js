const toggle = document.querySelector(".toggle");
const navigation = document.querySelector("nav");

function toggleMenu() {
    if (toggle.classList.contains("cross")) {
        toggle.classList.remove("cross");
        navigation.classList.remove("open");
    } 
    else {
        toggle.classList.add("cross");
        navigation.classList.add("open");
    }
}

toggle.addEventListener("click", toggleMenu, false);