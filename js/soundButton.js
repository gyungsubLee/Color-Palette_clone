const soundButton = document.querySelector(".soundButton");
const buttons = document.getElementsByClassName("main__color-item__copy-button");

const audio = document.getElementById('sbnt');

let isSOn = true; 

const handleSoundBntText = () => {
  isSOn = !isSOn
  const Text = isSOn? "Sound On 🔊" : "Sound Off 🔇";
  soundButton.innerText = Text
  if(isSOn === true) {
    audio.play();
  }
};

soundButton.addEventListener('click', handleSoundBntText);
