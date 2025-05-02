// The elements from html to be able to code for the JavaScript

const playBtn = document.getElementById("play-button");
const pauseBtn = document.getElementById("pause-button");
const resetBtn = document.getElementById("reset-button");
const music = document.getElementById("bg-music");

// Twenty five minutes is set for the study time as per rule of the pomodoro method

let totalSeconds = 25 * 60; // To ge 25 minutes it must be in seconds
let interval = null;

// Changes the timer numbers whatever part of the 25 mins the user is up to
function updateTimerDisplay() {
  const minutes = Math.floor(totalSeconds / 60); // Calculates the minutes
  const seconds = totalSeconds % 60; // Calculates the seconds

  // Changes the numbers on the timer by using the calculated numbers
  document.getElementById("minutes-tens").textContent = Math.floor(
    minutes / 10
  );
  document.getElementById("minutes-ones").textContent = minutes % 10;
  document.getElementById("seconds-tens").textContent = Math.floor(
    seconds / 10
  );
  document.getElementById("seconds-ones").textContent = seconds % 10;
}

// Starts the timer
function startTimer() {
  if (interval) return; //Avoids any interval clashes

  music.play(); // Plays study music

  // Decreases timer by one second
  interval = setInterval(() => {
    if (totalSeconds > 0) {
      totalSeconds--;
      updateTimerDisplay(); // Changes timer numbers
    } else {
      clearInterval(interval); // Stops interval when timer finishes
      interval = null;
      music.pause(); // Pauses musc when done
    }
  }, 1000); // By one second
}

// Pauses timer
function pauseTimer() {
  clearInterval(interval);
  interval = null;

  music.pause(); // pauses music
}

// Resets timer
function resetTimer() {
  clearInterval(interval);
  interval = null;
  totalSeconds = 25 * 60; // When clicked it reverts back to 25 mins
  updateTimerDisplay();
  music.pause(); //Pauses music
  music.currentTime = 0; // Restarts the music from the beginning
}

// Listeners to buttons
playBtn.addEventListener("click", startTimer); // When clicked, timer starts
pauseBtn.addEventListener("click", pauseTimer); // When clicked, timer pauses
resetBtn.addEventListener("click", resetTimer); // When clicked, timer resets

// Starts with 25 mins onscreen
updateTimerDisplay();

// For the focus button
document.addEventListener("DOMContentLoaded", function () {
  const focusButton = document.getElementById("focus-button");
  const html = document.documentElement;

  focusButton.addEventListener("click", function () {
    const currentFilter = html.style.filter; // Retrieves information from the html

    // Toggle brightness
    if (currentFilter === "brightness(50%)") {
      html.style.filter = "brightness(100%)"; // Brigtness is normal
    } else {
      html.style.filter = "brightness(50%)"; // Lowers brightness
    }
  });
});
