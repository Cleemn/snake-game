const button = document.getElementById('start');
const again = document.getElementById('again');
const canvas = document.querySelector('canvas');
const board = document.querySelector('#game-board');
const gameScore = document.querySelector('.score');
const stop = document.querySelector(".stop");
const ctx = canvas.getContext('2d');
const dead_unicorn = document.querySelector('.dead-unicorn');
const bienvenue = document.querySelector('#typed');

const size = 40;
let score = 0;
let speed = 10;

const img1_left = document.createElement('img');
img1_left.src = "./images/1_left.png";
const img1_up = document.createElement('img');
img1_up.src = "./images/1_up.png";
const img1_down = document.createElement('img');
img1_down.src = "./images/1_down.png";
const img1_right = document.createElement('img');
img1_right.src = "./images/1_right.png";

const img2_up = document.createElement('img');
img2_up.src = "./images/2_up.png";
const img2_down = document.createElement('img');
img2_down.src = "./images/2_down.png";
const img2_left = document.createElement('img');
img2_left.src = "./images/2_left.png";
const img2_right = document.createElement('img');
img2_right.src = "./images/2_right.png";

const img3_up = document.createElement('img');
img3_up.src = "./images/3_up.png";
const img3_down = document.createElement('img');
img3_down.src = "./images/3_down.png";
const img3_left = document.createElement('img');
img3_left.src = "./images/3_left.png";
const img3_right = document.createElement('img');
img3_right.src = "./images/3_right.png";

const img4 = document.createElement('img');
img4.src = "./images/arcenciel.png";
const img5 = document.createElement('img');
img5.src = "./images/poison.png";
const fond = document.createElement('img');
fond.src = "./images/fond.jpg";


const eat = new Audio('./sounds/eat.m4a');
const final = new Audio('./sounds/final.m4a');
const dead = new Audio('./sounds/dead.m4a');
const avada = new Audio('./sounds/avada.m4a');
const music = new Audio('./sounds/music.m4a');

  var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 20,
    fadeOut: true,
    showCursor: false
  });

button.addEventListener('click', () => {
  startGame();
  button.style.display = 'none';
  canvas.style.display = 'block';
  bienvenue.style.display = 'none';
  canvas.style.borderStyle = 'solid';
  board.style.borderStyle = 'solid';
  gameScore.style.display = 'block';
  music.play();
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
  }, 300);
}

document.addEventListener('keydown', (e) => {
  const direction = e.key.replace('Arrow', '');
  snake.changeDirection(direction);
});
