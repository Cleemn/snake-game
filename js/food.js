function chooseRandomPosition(min, max) {
  return Math.round((Math.random()*(max-min)+min)/10)*10;
}


class Food {
  constructor (x, y) {
    this.width = 10;
    this.height = 10;
    this.color = 'red';
    this.x = chooseRandomPosition(20, 680);
    this.y = chooseRandomPosition(20, 680);
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  clear() {
    ctx.clearRect(this.x, this.y, this.width, this.height);
  }

  left() {
    return this.x;
  }
  right() {
    return this.x + this.width;
  }
  top() {
    return this.y;
  }
  bottom() {
    return this.y + this.height;
  }
}