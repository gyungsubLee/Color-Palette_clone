
const CFBar = document.querySelector(".header__copy-bar");
const CFBarText = document.querySelector(".copy-bar__text");
const CFMenu = document.querySelector(".format-menu");
const CFMItems = document.getElementsByClassName("format-option");

// CFbar click event
const handleCFBar = () => {
    CFMenu.classList.toggle("hidden");
}

CFBar.addEventListener('click', handleCFBar);

// COlor Fomat Item 클릭 시 bar Text 변경
let ColorFormat = "HEX (#AA1923)";

const handleCFMItem = (CFMItem) => {
    ColorFormat  = CFMItem.innerText;
    CFBarText.innerText = `Copy Format: ${ColorFormat}`;
    CFMenu.classList.add('hidden');
}


Array.from(CFMItems).forEach(
    CFMItem => CFMItem.addEventListener('click', ()=>{
        handleCFMItem(CFMItem);
    }
));
