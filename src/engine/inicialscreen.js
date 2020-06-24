class InicialScreen extends AnimationDraw {
  constructor(
    image,
    inicialPositionX,
    inicialPositionY,
    characterWidth,
    characterHeight,
    imageKnight,
  ) {
    super(
      image,
      inicialPositionX,
      inicialPositionY,
      characterWidth,
      characterHeight,
    );
    this.imageKnight = imageKnight;
    this.showText = false;
    this.interval = 0;
  }

  animation() {
      imageKnight.position(width / 2.3, height / 2.9);
      imageKnight.show();
    textSize(40);
    textLeading(40);
    fill(350);
    text(
      "THE KING OF THE KINGDOM IS HOLDING A CONTEST,\n THE KNIGHT WHO HAS THE MOST POINTS,\n MARRIES THE PRINCESS.\n WARRIOR ARE YOU READY TO TEST YOUR DESTINY?\n AND CONQUER THE KINGDOM AND THE PRINCESS?",
      width / 2,
      height / 1.7,
      );
      text(
        "CONTROLS: SPACE TO JUMP",
        width / 2,
        height / 1.3,
      );
    if (this.showText) {
      this.showText = false;
      text("PRESS BUTTON 'S' TO START THE GAME", width / 2, height / 1.21);
      this.show();
    } else {
      this.showText = true;
      fill(0);
      this.show();
    }
  }

  show() {
    noLoop();
    setTimeout(() => {
      loop();
    }, 500);
  }
}
