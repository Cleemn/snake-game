const button = document.getElementById('start');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const size = 40;
let score = 0;
let speed = 250;
const gameScore = document.getElementById('score');
const stop = document.querySelector(".stop");
const img1 = document.createElement('img')
img1.src = "./images/1.png";
const img2 = document.createElement('img')
img2.src = "./images/2.png";
const img3 = document.createElement('img')
img3.src = "./images/arcenciel.jpg";

button.addEventListener('click', () => {
  startGame();
  button.style.display = 'none';
  canvas.style.display = 'block';
  gameScore.style.display = 'block';
});

function startGame() {
  snake = new Snake(size, size);
  food = new Food();
  obstacle = new Obstacle();

  food.chooseRandomPosition();
  obstacle.chooseRandomPosition();

  if (score >= 100) {
    speed = 200;
  } else if (score >= 150) {
    speed = 150;
  } else if (score >= 200) {
    speed = 100;
  }

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
  }, speed);
}

document.addEventListener('keydown', (e) => {
  const direction = e.key.replace('Arrow', '');
  snake.changeDirection(direction);
})