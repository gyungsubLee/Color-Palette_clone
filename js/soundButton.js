const soundButton = document.querySelector(".soundButton");
const buttons = document.getElementsByClassName("main__color-item__copy-button");

const audio = document.getElementById('sbnt');

let isSOn = true; 

const isSOnB = (isSOn) => {
  if(isSOn === true) {
    audio.play();
  }
}

const handleSoundBntText = () => {
  isSOn = !isSOn
  const Text = isSOn? "Sound On 🔊" : "Sound Off 🔇";
  soundButton.innerText = Text
  isSOnB(isSOn);
};

soundButton.addEventListener('click', handleSoundBntText);
