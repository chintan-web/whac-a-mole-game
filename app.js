const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const score = document.querySelector("#score");
const timeLeft = document.querySelector("#time-left");
const button = document.querySelector(".btn");

let result = 0;
let hitPosition;
let currentTime = 60;
let timerId = null;

function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove("mole");
  });

  let randomSquare = squares[Math.floor(Math.random() * 9)];
  randomSquare.classList.add("mole");

  hitPosition = randomSquare.id;
}

squares.forEach((square) => {
  square.addEventListener("mousedown", () => {
    if (square.id === hitPosition) {
      result++;

      score.textContent = result;
      hitPosition = null;
    }
  });
});

moveMole();

function moveMole() {
  timerId = setInterval(randomSquare, 700);
}

function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;

  if (currentTime === 0) {
    clearInterval(countDownTimerId);
    clearInterval(timerId);
    alert("game over! your score is  " + result);
  }
}

let countDownTimerId = setInterval(countDown, 1000);
