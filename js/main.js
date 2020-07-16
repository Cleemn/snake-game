const button = document.getElementById('start');

const ctx = document.querySelector('canvas').getContext('2d');
const W = ctx.canvas.width;
const H = ctx.canvas.height;

function drawGameSpace() {
  ctx.beginPath();
  ctx.moveTo(0,10);
  ctx.lineTo(700, 10);
  ctx.moveTo(700,10);
  ctx.lineTo(700, 700);
  ctx.moveTo(700,700);
  ctx.lineTo(0, 700);
  ctx.moveTo(0,700);
  ctx.lineTo(0, 10);
  ctx.closePath();
  ctx.lineWidth = 1;
  ctx.stroke();
}

const bucket = [];

function getFat() {
  const eat = bucket.some((food) => {
    return snake.eat(food);
  });

  if (eat) {
    snake.width += 10;
    food.clear();
    bucket.splice(food);
  }
}

function updateGameArea() {
  snake.update();
  setInterval(() => {
    food = new Food();
    bucket.push(food);
    food.draw();
  }, 2000);
  getFat();
}

document.onkeydown = function (e) {
  switch (e.keyCode) {
    case 37:
      snake.clear();
      snake.moveLeft();
      snake.update();
      break;
    case 39:
      snake.clear();
      snake.moveRight();
      snake.update();
      break;
    case 38:
      snake.clear();
      snake.moveUp();
      snake.update();
      break;
    case 40:
      snake.clear();
      snake.moveDown();
      snake.update();
      break;
  }
};

button.addEventListener('click', () => {
  startGame();
  button.style.display = 'none';
});

function startGame() {
  drawGameSpace();
  snake = new Snake(20, 20, 10, 20);
  updateGameArea();
}