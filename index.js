const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stoptBtn: document.querySelector('[data-action="stop"]'),
  body: document.querySelector('body'),
};

let timerId = null;
let isActiveStartBtn = false;

const onstartBtnClick = () => {
  if (isActiveStartBtn) {
    return;
  }
  isActiveStartBtn = true;
  timerId = setInterval(() => {
    refs.body.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, 1000);
};

refs.startBtn.addEventListener('click', onstartBtnClick);
refs.stoptBtn.addEventListener('click', () => {
  clearInterval(timerId);
  isActiveStartBtn = false;
});
