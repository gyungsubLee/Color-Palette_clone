//colorItem = [colorName, HEX]
const colorItems = [
    ['PROTOSS PYLON', '#00a8ff'], // color 1
    ['PERIWINKLE','#9c88ff'], // color 2
    ['RISE-N-SHINE','#fbc531'], // color 3
    ['DOWNLOAD PROGRESS','#4cd137'], // color 4
    ['SEABROOK','#487eb0'], // color 5
    ['VANADYL BLUE','#0097e6'], // color 6
    ['MATT PURPLE','#8c7ae6'], // color 7
    ['NANOHANACHA GOLD','#e1b12c'], // color 8
    ['SKIRRET GREEN','#44bd32'], // color 9
    ['NAVAL','#40739e'], // color 10
    ['NASTURCIAN FLOWER','#e84118'], // color 11
    ['LYNX WHITE','#f5f6fa'], // color 12
    ['BLUEBERRY SODA','#7f8fa6'], // color 13
    ['MAZARINE BLUE','#273c75'], // color 14
    ['BLUE NIGHTS','#353b48'], // color 15
    ['HARLEY DAVIDSON ORANGE','#c23616'], // color 16
    ['HINT OF PENSIVE','#dcdde1'], // color 17
    ['CHAIN GANG GREY','#718093'], // color 18
    ['PICO VOID','#192a56'], // color 19
    ['ELECTROMAGNETIC','#2f3640'], // color 20
]


const DcolorItems = document.getElementsByClassName('main__color_item');

console.log(DcolorItems);

Array.from(DcolorItems).forEach(
    (colorItem, idx) => {
        colorItem.style.backgroundColor = colorItems[idx][1];
        colorItem.childNodes[3].innerText = colorItems[idx][0];
});






