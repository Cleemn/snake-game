class Food {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  chooseRandomPosition() {
    this.x = Math.round((Math.random() * ((canvas.width - size) / size) - 1) + 1) * size;
    this.y = Math.round((Math.random() * ((canvas.height - size) / size) - 1) + 1) * size;
  }

  draw() {
    ctx.drawImage(img4, this.x, this.y, size, size);
  }
}