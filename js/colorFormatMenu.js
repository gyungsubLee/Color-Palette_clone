
const CFBar = document.querySelector(".header__copy-bar");
const CFBarText = document.querySelector(".copy-bar__text");
const CFMenu = document.querySelector(".format-menu");
const CFMItems = document.getElementsByClassName("format-option");

const handleCFBar = (event) => {
    CFMenu.classList.toggle("hidden");
}

CFBar.addEventListener('click', handleCFBar);

const handleCFMItem = (CFMItem) => {
    const ColorFormat  = CFMItem.innerText;
    console.log(ColorFormat);
    CFBarText.innerText = `Copy Format: ${CFMItem.innerText}`;
    CFMenu.classList.add('hidden');
}

Array.from(CFMItems).forEach(
    CFMItem => CFMItem.addEventListener('click', ()=>{
        handleCFMItem(CFMItem)
    }
));
