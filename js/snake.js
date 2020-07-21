class Snake {
  constructor (x, y) {
    this.x = x;
    this.y = y;
    this.moveX = size * 1;
    this.moveY = 0;
    this.totalSize = 0;
    this.tail = [];
  }

  draw() {
    ctx.fillStyle = 'blue';

    for (let i = 0; i < this.tail.length; i++) {
      ctx.drawImage(img2, this.tail[i].x, this.tail[i].y, size, size);
    }
    ctx.drawImage(img1, this.x, this.y, size, size);
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
        this.total = 0;
        this.tail = [];
        canvas.style.display = 'none';
        gameScore.style.display = 'none';
        stop.querySelector('span').innerText = score;
        stop.style.display = 'block';
        window.setTimeout(() => {
          document.location.reload(true);
        }, 4000);
      }
    }
  }
}