const timeCountInput = document.getElementById("timeCount");
const currentTimeDiv = document.getElementById("current-time");
const outputui = document.getElementById("output");

let timerId;
let timeLeft;

timeCountInput.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) { // Enter key
    const timeCount = Number(timeCountInput.value);

    if (timeCount >= 0) {
      timeLeft = timeCount;
      currentTimeDiv.innerHTML = timeLeft;
      timerId = setInterval(countdown, 1000);
    } else {
      currentTimeDiv.innerHTML = 0;
    }
  }
});

function countdown() {
  timeLeft--;
  currentTimeDiv.innerHTML = timeLeft;

  if (timeLeft === 0) {
    clearInterval(timerId);
    outputui.innerHTML = `${"Time Over"}`;
  }
}
