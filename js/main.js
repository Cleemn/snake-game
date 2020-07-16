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
  snake = new Snake(10, 20);
  drawGameSpace();
  snake.update();
}

document.onkeydown = function (e) {
  switch (e.keyCode) {
    case 37:
      snake.moveLeft();
      snake.update();
      console.log('left', snake);
      break;
    case 39:
      snake.moveRight();
      snake.update();
      console.log('right', snake);
      break;
    case 38:
      snake.moveUp();
      snake.update();
      console.log('up', snake);
      break;
    case 40:
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