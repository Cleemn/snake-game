class Food {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  chooseRandomPosition() {
    this.x = Math.round((Math.random() * (canvas.width / size) - 1) + 1) * size;
    this.y = Math.round((Math.random() * (canvas.height / size) - 1) + 1) * size;
  }

  draw() {
    ctx.fillStyle = 'red';
    ctx.fillRect(this.x, this.y, size, size);
  }
}