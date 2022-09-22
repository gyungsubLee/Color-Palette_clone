
const CFBar = document.querySelector(".header__copy-bar");
const CFBarText = document.querySelector(".copy-bar__text");
const CFMenu = document.querySelector(".format-menu");
const CFMItems = document.getElementsByClassName("format-option");

const handleCFBar = (event) => {
    CFMenu.classList.toggle("hidden");
}

CFBar.addEventListener('click', handleCFBar);

let ColorFormat = "HEX (#AA1923)";

const handleCFMItem = (CFMItem) => {
    ColorFormat  = CFMItem.innerText;
    CFBarText.innerText = `Copy Format: ${CFMItem.innerText}`;
    CFMenu.classList.add('hidden');
}

Array.from(CFMItems).forEach(
    CFMItem => CFMItem.addEventListener('click', ()=>{
        handleCFMItem(CFMItem)
    }
));
