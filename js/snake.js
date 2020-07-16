class Snake {
  constructor (x, y) {
    this.width = 20;
    this.height = 20;
    this.x = x;
    this.y = y;
  }

  update() {
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  moveLeft() {
    // TODO
    this.x -= 20;
  }
  moveRight() {
    // TODO
    this.x += 20;
  }

  moveUp() {
    this.y -= 20;
  }

  moveDown() {
    this.y += 20;
  }
}