//colorItem = [colorName, HEX, RGB]
const colorItems = [
    ['PROTOSS PYLON', '#00a8ff', "rgb(0, 168, 255)"], // color 1
    ['PERIWINKLE','#9c88ff', "rgb(156, 136, 255)"], // color 2
    ['RISE-N-SHINE','#fbc531', "rgb(251, 197, 49)"], // color 3
    ['DOWNLOAD PROGRESS','#4cd137', "rgb(76, 209, 55)"], // color 4
    ['SEABROOK','#487eb0', "rgb(72, 126, 176)"], // color 5
    ['VANADYL BLUE','#0097e6', "rgb(0, 151, 230)"], // color 6
    ['MATT PURPLE','#8c7ae6', "rgb(140, 122, 230)"], // color 7
    ['NANOHANACHA GOLD','#e1b12c', "rgb(225, 177, 44)"], // color 8
    ['SKIRRET GREEN','#44bd32', "rgb(68, 189, 50)"], // color 9
    ['NAVAL','#40739e', "rgb(64, 115, 158)"], // color 10
    ['NASTURCIAN FLOWER','#e84118', "rgb(232, 65, 24)"], // color 11
    ['LYNX WHITE','#f5f6fa', "rgb(245, 246, 250)"], // color 12
    ['BLUEBERRY SODA','#7f8fa6', "rgb(127, 143, 166)"], // color 13
    ['MAZARINE BLUE','#273c75', "rgb(39, 60, 117)"], // color 14
    ['BLUE NIGHTS','#353b48', "rgb(53, 59, 72)"], // color 15
    ['HARLEY DAVIDSON ORANGE','#c23616', "rgb(194, 54, 22)"], // color 16
    ['HINT OF PENSIVE','#dcdde1', "rgb(220, 221, 225)"], // color 17
    ['CHAIN GANG GREY','#718093', "rgb(113, 128, 147)"], // color 18
    ['PICO VOID','#192a56', "rgb(25, 42, 86)"], // color 19
    ['ELECTROMAGNETIC','#2f3640', "rgb(47, 54, 64)"], // color 20
]

const DcolorItems = document.getElementsByClassName('main__color_item');
const FText = document.getElementsByClassName('footer__text');
const DcopyView = document.querySelector(".copyView");
const DcopyViewSTex = document.querySelector(".copyView-subText");

// Color Fomat Item
const CFItem = (idx, num) => {
    return colorItems[idx][num];
};

// Color Format Convert
const ColorFmtConvert = (idx) => {
    if(ColorFormat === "HEX (#AA1923)"){
        return CFItem(idx, 1); // CFItem - HEX
    }
    else {
        return CFItem(idx, 2); // CFItem - RGB
    }
}

// copy 
const copy = (value) => {
    const $textarea = document.createElement("textarea");
    document.body.appendChild($textarea);
    $textarea.value =  value;
    $textarea.select();
    document.execCommand('copy');
    document.body.removeChild($textarea);
}

//copyButton Click???, veiw 
const copyView = (value) => {
    DcopyView.classList.remove("hidden");
    DcopyView.style.backgroundColor = value;
    DcopyViewSTex.innerText = value;
    setTimeout(()=>DcopyView.classList.add("hidden"), 1100);
}

// handleCFMTConvert
const handleCFMT = (idx) => {
    const CFmtV = ColorFmtConvert(idx);
    isSOnB(isSOn);
    copy(CFmtV);
    copyView(CFmtV);
}


// Color Items - bg, text, event
Array.from(DcolorItems).forEach(
    (colorItem, idx) => {
        colorItem.style.backgroundColor = CFItem(idx, 1);    // CFItem - HEX
        colorItem.childNodes[3].innerText = CFItem(idx, 0);  // CFItem - name
        colorItem.childNodes[1].addEventListener('click', ()=>{
            handleCFMT(idx);
        });
});


// footer color 
Array.from(FText).forEach((Text,idx) =>Text.style.color = CFItem(idx, 1)); // CFItem - HEX



