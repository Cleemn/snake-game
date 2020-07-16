class Snake {
  constructor (width, height, x, y) {
    this.width = width;
    this.height = height;
    this.color = 'blue';
    this.x = x;
    this.y = y;
  }

  update() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  clear() {
    ctx.clearRect(this.x, this.y, this.width, this.height);
  }

  moveLeft() {
    // TODO
    this.x -= 10;
  }
  moveRight() {
    // TODO
    this.x += 10;
  }

  moveUp() {
    this.y -= 10;
  }

  moveDown() {
    this.y += 10;
  }
}