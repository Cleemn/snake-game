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

function startGame() {
  drawGameSpace();
  snake = new Snake(20, 20, 'red', 10, 20);
  snake.update();
  setInterval(() => {
    food = new Food();
    food.update();
    console.log('food', food);
  }, 4000);
}

document.onkeydown = function (e) {
  switch (e.keyCode) {
    case 37:
      snake.clear();
      snake.moveLeft();
      snake.update();
      console.log('left', snake);
      break;
    case 39:
      snake.clear();
      snake.moveRight();
      snake.update();
      console.log('right', snake);
      break;
    case 38:
      snake.clear();
      snake.moveUp();
      snake.update();
      console.log('up', snake);
      break;
    case 40:
      snake.clear();
      snake.moveDown();
      snake.update();
      console.log('down', snake);
      break;
  }
};

button.addEventListener('click', () => {
  startGame();
  button.style.display = 'none';
});