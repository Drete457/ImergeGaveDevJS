class GameOver {
  constructor(image) {
    this.image = image;
  }

  draw() {
    image(this.image, width / 3, height / 4, width / 3, height / 3);
  }

  animation() {
    textSize(height / 24.5);
    fill(350);
    text("YOU LOST YOUR SOUL", width / 2, height / 1.7);
    text("YOU DIED", width / 2, height / 1.5);
    text("PRESS BUTTON 'R' TO RESTART THE GAME", width / 2, height / 1.3);
    gameRun = false;
    noLoop();
  }
}
