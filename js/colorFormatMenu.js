
const CFBar = document.querySelector(".header__copy-bar");
const CFBarText = document.querySelector(".copy-bar__text");
const CFMenu = document.querySelector(".format-menu");
const CFMItems = document.getElementsByClassName("format-option");

console.log(CFBarText.innerText);

const handleCFBar = (event) => {
    CFMenu.classList.toggle("hidden");
}

CFBar.addEventListener('click', handleCFBar);

const handleCFMItem = (CFMItem) => {
    let Text = `Copy Format: ${CFMItem.innerText}`;
    CFBarText.innerText = Text
    CFMenu.classList.add('hidden');
}

Array.from(CFMItems).forEach(
    CFMItem => CFMItem.addEventListener('click', ()=>{
        handleCFMItem(CFMItem)
    }
));
