function chooseRandomPosition(min, max) {
  return Math.round((Math.random()*(max-min)+min)/10)*10;
}

class Food {
  constructor (x, y) {
    this.width = 20;
    this.height = 20;
    this.color = 'red';
    this.x = chooseRandomPosition(20, 680);
    this.y = chooseRandomPosition(20, 680);
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}