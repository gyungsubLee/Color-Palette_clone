const soundButton = document.querySelector(".soundButton");

let isSOn = true; 

const handleSoundBntText = () => {
  isSOn = !isSOn
  const Text = isSOn? "Sound On" : "Sound Off";
  soundButton.innerText = Text
};

soundButton.addEventListener('click', handleSoundBntText);
