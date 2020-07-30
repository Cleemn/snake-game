class Snake {
  constructor (x, y) {
    this.x = x;
    this.y = y;
    this.moveX = size * 1;
    this.moveY = 0;
    this.totalSize = 1;
    this.tail = [];
  }

  draw() {
    if (this.moveX === 0 && this.moveY <= 0) {
      for (let i = 1; i < this.tail.length; i++) {
        ctx.drawImage(img2_up, this.tail[i].x, this.tail[i].y, size, size);
      }
      ctx.drawImage(img1_up, this.x, this.y, size, size);
      ctx.drawImage(img3_up, this.tail[0].x, this.tail[0].y, size, size);
    } else if (this.moveX === 0 && this.moveY >= 0) {
      for (let i = 1; i < this.tail.length; i++) {
        ctx.drawImage(img2_down, this.tail[i].x, this.tail[i].y, size, size);
      }
      ctx.drawImage(img1_down, this.x, this.y, size, size);
      ctx.drawImage(img3_down, this.tail[0].x, this.tail[0].y, size, size);
    } else if (this.moveX <= 0 && this.moveY === 0) {
      for (let i = 1; i < this.tail.length; i++) {
        ctx.drawImage(img2_left, this.tail[i].x, this.tail[i].y, size, size);
      }
      ctx.drawImage(img1_left, this.x, this.y, size, size);
      ctx.drawImage(img3_left, this.tail[0].x, this.tail[0].y, size, size);
    } else if (this.moveX >= 0 && this.moveY === 0) {
      for (let i = 1; i < this.tail.length; i++) {
        ctx.drawImage(img2_right, this.tail[i].x, this.tail[i].y, size, size);
      }
      ctx.drawImage(img1_right, this.x, this.y, size, size);
      ctx.drawImage(img3_right, this.tail[0].x, this.tail[0].y, size, size);
    }
  }

  update() {
    for (let i = 0; i < this.tail.length - 1; i++) {
      this.tail[i] = this.tail[i + 1];
    }

    this.tail[this.totalSize - 1] = { x: this.x, y: this.y };

    this.x += this.moveX;
    this.y += this.moveY;

    if (this.x > canvas.width) {
      this.x = 0;
    } else if (this.x < 0) {
      this.x = canvas.width;
    }

    if (this.y > canvas.height) {
      this.y = 0;
    } else if (this.y < 0) {
      this.y = canvas.height;
    }
  }

  changeDirection(direction) {
    switch(direction) {
      case 'Up':
        this.moveX = 0;
        this.moveY = -size * 1;
        break;
      case 'Down':
        this.moveX = 0;
        this.moveY = size * 1;
        break;
      case 'Left':
        this.moveX = -size * 1;
        this.moveY = 0;
        break;
      case 'Right':
        this.moveX = size * 1;
        this.moveY = 0;
        break;
    }
  }

  eat(food) {
    if (this.x === food.x && this.y === food.y) {
      this.totalSize += 1;
      return true;
    }
    return false;
  }

  checkCrash() {
    for (let i = 0; i < this.tail.length; i++) {
      if (this.x === this.tail[i].x &&
        this.y === this.tail[i].y) {
          return true;
      }
    }
  }

  checkObstacle() {
    if (this.x === obstacle.x && this.y === obstacle.y) {
      return true;
    }
  }

  gameOver() {
    avada.play();
    window.setTimeout(() => {
      dead_unicorn.style.display = 'block';
      canvas.style.display = 'none';
      gameScore.style.display = 'none';
    }, 2000);
    window.setTimeout(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      board.style.display = 'none';
      stop.querySelector('span').innerText = score;
      stop.style.display = 'block';
      dead_unicorn.style.display = 'none';
      stop.style.cursor = 'wait';
    }, 4000);
    // window.setTimeout(() => {
    //   document.location.reload(true);
    // }, 15000);
  }
}