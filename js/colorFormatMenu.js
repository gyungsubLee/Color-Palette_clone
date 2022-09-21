const CFBar = document.querySelector(".header__copy-bar");
const CFMenu = document.querySelector(".format-menu");

const handleCFBar = () => {
    CFMenu.classList.toggle("hidden");
}

CFBar.addEventListener('click', handleCFBar);