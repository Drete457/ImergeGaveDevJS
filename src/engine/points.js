class Points {
  constructor() {
    this.points = 0;
  }

  draw() {
    this.points += 0.03;
  }

  add() {
    this.points += 100;
  }

  animation() {
    textSize(height / 9.79);
    fill(255);
    text(
      "SCORE: " + parseInt(this.points),
      width - (width / 10) * 2,
      height / 10,
    );
  }

  finish() {
    this.points += 2000;
  }
}
