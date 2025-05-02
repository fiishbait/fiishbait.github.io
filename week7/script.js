const topHeading = document.querySelector("#top-heading");
console.log(topHeading);

let myNewHeading = document.querySelector("#airport-audio");
console.log(airportAudio);

// my logiv for playing sound:

const playButton = document.querySelector("#play-button");
console.log(playButton);

playButton.addEventListener("click", playAudio);

function playAudio() {
    myNewHeading = "audio is currently playing";
    airportAudio.play();
    topHeading.textContent = myNewHeading;
}
// ------------------------------------------

// my logic for pausing the sound:
const popAudio = document.querySelector("#pop-audio");
console.log(popSound);

const popButton = document.querySelector("#pop-button");
console.log(popButton);

pauseButton.addEventListener("click", popAudio);

function.popAudio() {
    myNewHeading = "Popping sound";
   // airportAudio.pause();
   popSound.play();
   topHeading.textContent = myNewHeading;
}
// -------------------------------------------
