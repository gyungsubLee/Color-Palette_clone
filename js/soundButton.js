const soundButton = document.querySelector(".soundButton");

let isSOn = true; 

const handleSoundBntText = () => {
  isSOn = !isSOn
  console.log(isSOn);
  const Text = isSOn? "Sound On" : "Sound Off";
  console.log(Text);
  soundButton.innerText = Text
};

soundButton.addEventListener('click', handleSoundBntText);
