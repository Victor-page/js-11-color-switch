import { randomIntegerFromInterval } from "./utils/random-integer.js";

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
};

// console.log(randomIntegerFromInterval(2, 5));

const switcher = {
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    randomizeBackgroundColor();

    this.switcherId = setInterval(() => {
      randomizeBackgroundColor();
      //   console.log(new Date());
    }, 1000);
  },
  stop() {
    console.log(this.switcherId);
    clearInterval(this.switcherId);
    this.isActive = false;
  },
};

function randomizeBackgroundColor() {
  return (document.body.style.background =
    colors[randomIntegerFromInterval(0, colors.length)]);
}

refs.startBtn.addEventListener("click", switcher.start.bind(switcher));

refs.stopBtn.addEventListener("click", switcher.stop.bind(switcher));
