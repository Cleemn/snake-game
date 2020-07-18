const button = document.getElementById('start');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const size = 10;
let score = 0;
const gameScore = document.getElementById('score');
const stop = document.querySelector(".stop");

button.addEventListener('click', () => {
  startGame();
  button.style.display = 'none';
  canvas.style.display = 'block';
  gameScore.style.display = 'block';
});

function startGame() {
  snake = new Snake(20, 20);
  food = new Food();
  obstacle = new Obstacle();

  food.chooseRandomPosition();
  obstacle.chooseRandomPosition();

  window.setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    food.draw();
    snake.update();
    snake.draw();

    if (snake.eat(food)) {
      food.chooseRandomPosition();
      score += 10;
      console.log(score);
      gameScore.querySelector('span').innerText = score;
    }
    snake.checkCrash();
  }, 100);
}

document.addEventListener('keydown', (e) => {
  const direction = e.key.replace('Arrow', '');
  snake.changeDirection(direction);
})