function chooseRandomPosition(from, to) {
  return Math.floor(Math.random() * (from - to + 1) + to);
}

class Food {
  constructor (x, y) {
    this.width = 20;
    this.height = 20;
    this.color = 'red';
    this.x = chooseRandomPosition(20, 780);
    this.y = chooseRandomPosition(20, 780);
  }

  update() {
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}