const startButton = document.getElementById("start");
//с помощью классов мы добавляем стилистику, а с помощью айди добавляем данные, чтобы забирать элементы
const screens = document.querySelectorAll(".screen");
const timeList = document.querySelector("#time-list");
const timeEl = document.querySelector("#time");
const board = document.querySelector("#board");
let TIME = 0;
let score = 0;

startButton.addEventListener("click", (e) => {
  e.preventDefault();
  screens[0].classList.add("up");
});

//делигирование событий
timeList.addEventListener("click", (e) => {
  if (e.target.classList.contains("time-btn")) {
    TIME = parseInt(e.target.getAttribute("data-time"));
    screens[1].classList.add("up");
    startGame();
  }
});

board.addEventListener("click", (e) => {
  if (e.target.classList.contains("circle")) {
    score++;
    e.target.remove();
    createRandomCircle();
  }
});



function startGame() {
  setInterval(decreaseTime, 1000);
  createRandomCircle();
  setTime(TIME);
}

function decreaseTime() {
  if (TIME === 0) {
    finishGame();
  } else {
    let current = --TIME;
    if (current < 10) {
      current = `0${current}`;
    }
    setTime(current);
  }
}

function setTime(value) {
  timeEl.innerHTML = `00:${value}`;
}

function finishGame() {
  timeEl.parentNode.classList.add('hide');
  board.innerHTML = `<h1>Счет: <span class='primary'>${score}</span> </h1>`;
}

function createRandomCircle() {
  const circle = document.createElement("div");
  circle.classList.add("circle");
  const size = getRandomNumber(10, 60);
  const { width, height } = board.getBoundingClientRect();
  const x = getRandomNumber(0, width - size);
  const y = getRandomNumber(0, height - size);

  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.top = `${y}px`;
  circle.style.left = `${x}px`;
  circle.style.background = `${getRandomHexColor()}`

  board.append(circle);
}

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function getRandomHexColor() {
    return `#${(
        (Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0")}`
        
}