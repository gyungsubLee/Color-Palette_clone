//colorItem = [colorName, HEX]
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

// footer color
Array.from(FText).forEach((Text,idx) =>Text.style.color = colorItems[idx][1]);

// Color Format Convert
const ColorFmt = (idx) => {
    if(ColorFormat === "HEX (#AA1923)"){
        return colorItems[idx][1];
    }
    else {
        return colorItems[idx][2];
    }
}

// copy 
const copy = (idx) => {
    const $textarea = document.createElement("textarea");
    document.body.appendChild($textarea);
    $textarea.value =  ColorFmt(idx);
    $textarea.select();
    document.execCommand('copy');
    document.body.removeChild($textarea);
}

//copyButton Click시, veiw 
const copyView = (idx) => {
    DcopyView.classList.remove("hidden");
    DcopyView.style.backgroundColor = ColorFmt(idx);
    DcopyViewSTex.innerText = ColorFmt(idx);
    setTimeout(()=>DcopyView.classList.add("hidden"), 1100);
}


// Color Items - bg, text, event
Array.from(DcolorItems).forEach(
    (colorItem, idx) => {
        colorItem.style.backgroundColor = colorItems[idx][1];
        colorItem.childNodes[3].innerText = colorItems[idx][0];
        colorItem.childNodes[1].addEventListener('click', ()=>{
            if(isSOn === true){
                 audio.play();
            };
            copy(idx);
            copyView(idx);
        });
});






