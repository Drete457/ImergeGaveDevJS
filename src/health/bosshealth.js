class BossHealth {
  constructor() {
    this.health = 100;
    this.maxHealth = 100;
    this.rectWidth = (height / 10) * 14;
    this.drawWidth;
    this.inicialY = height / 10;
  }

  draw() {
    textSize(height / 9.79);
    fill(255);
    text(" BOSS", (width / 10) * 9, this.inicialY);

    // Change color
    if (this.health < 30) {
      fill(255, 0, 0);
    } else if (this.health < 60) {
      fill(255, 255, 0);
    } else {
      fill(0, 255, 0);
    }

    this.drawWidth = -(this.health / this.maxHealth) * this.rectWidth;
  }

  animation() {
    // Draw bar
    noStroke();
    // Get fraction 0->1 and multiply it by width of bar
    rect((width / 10) * 9.6, this.inicialY / 0.6, this.drawWidth, height / 15);
  }

  reduce() {
    this.health -= 0.8;
  }

  dead() {
    return this.health <= 0 ? false : true;
  }
}
