const button = document.getElementById('start');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const size = 10;

button.addEventListener('click', () => {
  startGame();
  button.style.display = 'none';
  canvas.style.display = 'block';
});

function startGame() {
  snake = new Snake(20, 20);
  food = new Food();

  food.chooseRandomPosition();

  window.setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    food.draw();
    snake.update();
    snake.draw();

    if (snake.eat(food)) {
      food.chooseRandomPosition();
    }
  }, 100);
}

document.addEventListener('keydown', (e) => {
  const direction = e.key.replace('Arrow', '');
  snake.changeDirection(direction);
})