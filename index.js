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

const onstartBtnClick = () => {
  refs.body.style.backgroundColor = colors[randomIntegerFromInterval(2, 2)];
};

refs.startBtn.addEventListener('click', onstartBtnClick);
