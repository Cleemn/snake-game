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
    bucket.splice(food);
    food = new Food();
    bucket.push(food);
    food.draw();
  }
}

function updateGameArea() {
  getFat();
  snake.update();
}

document.onkeydown = function (e) {
  switch (e.keyCode) {
    case 37:
      snake.clear();
      snake.moveLeft();
      updateGameArea();
      break;
    case 39:
      snake.clear();
      snake.moveRight();
      updateGameArea();
      break;
    case 38:
      snake.clear();
      snake.moveUp();
      updateGameArea();
      break;
    case 40:
      snake.clear();
      snake.moveDown();
      updateGameArea();
      break;
  }
};

button.addEventListener('click', () => {
  startGame();
  button.style.display = 'none';
});

function startGame() {
  drawGameSpace();
  snake = new Snake(30, 10, 10, 20);
  updateGameArea();
  food = new Food();
  bucket.push(food);
  food.draw();
}