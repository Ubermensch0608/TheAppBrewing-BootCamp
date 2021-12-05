const heading = document.querySelectorAll(".drum");

// 드럼을 클릭할 때
for (let i = 0; i < heading.length; i++) {
  heading[i].addEventListener("click", function () {
    const buttonInnerHTML = this.innerHTML;
    soundPlayer(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

// 키보드를 누를 때
document.addEventListener("keydown", function (event) {
  soundPlayer(event.key);
  buttonAnimation(event.key);
});

// soundPlayer
function soundPlayer(key) {
  switch (key) {
    case "w":
      const crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "a":
      const kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "s":
      const snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "d":
      const tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "j":
      const tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "k":
      const tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "l":
      const tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    default:
      console.log(buttonInnerHTML);
      break;
  }
}

function buttonAnimation(currentKey) {
  const activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
