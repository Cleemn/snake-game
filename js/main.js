const button = document.getElementById('start');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const size = 40;
let score = 0;
let speed = 10;
const gameScore = document.getElementById('score');
const stop = document.querySelector(".stop");
const img1 = document.createElement('img');
img1.src = "./images/1.png";
const img2 = document.createElement('img');
img2.src = "./images/2.png";
const img3 = document.createElement('img');
img3.src = "./images/3.png";
const img4 = document.createElement('img');
img4.src = "./images/arcenciel.png";
const img5 = document.createElement('img');
img5.src = "./images/poison.jpg";
const eat = new Audio('./sounds/eat.m4a');
// const grow = new Audio('./sounds/grow.m4a');
const final = new Audio('./sounds/final.m4a');
const fond = document.createElement('img');
fond.src = "./images/fond.jpg";

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
  
  window.setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(fond, 0, 0, 600, 600);
    food.draw();
    obstacle.draw();
    snake.update();
    snake.draw();

    if (snake.eat(food)) {
      eat.play();
      speed += 10;
      food.chooseRandomPosition();
      score += 10;
      obstacle.chooseRandomPosition();
      gameScore.querySelector('span').innerText = score;
    }

    snake.checkCrash();
    snake.checkObstacle();
  }, 200);
}

document.addEventListener('keydown', (e) => {
  const direction = e.key.replace('Arrow', '');
  snake.changeDirection(direction);
});