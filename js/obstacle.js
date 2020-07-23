class Obstacle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  chooseRandomPosition() {
    this.x = Math.round((Math.random() * (canvas.width / size) - 1) + 1) * size;
    this.y = Math.round((Math.random() * (canvas.height / size) - 1) + 1) * size;
  }

  draw() {
    ctx.drawImage(img5, this.x, this.y, size, size);
  }
}