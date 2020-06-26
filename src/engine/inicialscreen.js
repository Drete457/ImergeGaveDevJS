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
    textSize(height / 8.15);
    fill(350);

    this.showText ? text("WEDDING DUNGEONS", width / 2, height / 5.9) : null;

    imageKnight.position(width / 2.3, height / 3.2);
    imageKnight.show();

    textSize(height / 24.5);
    textLeading(height / 24.5);

    text(
      "THE KING OF THE KINGDOM IS HOLDING A CONTEST,\n THE KNIGHT WHO HAS THE MOST POINTS,\n MARRIES THE PRINCESS.\n WARRIOR ARE YOU READY TO TEST YOUR DESTINY?\n AND CONQUER THE KINGDOM AND THE PRINCESS?",
      width / 2,
      height / 1.8,
    );
    text(
      "CONTROLS:\n SPACE TO JUMP\n ARROW LEFT TO WALK LEFT\n ARROW RIGHT TO WALK RIGHT",
      width / 2,
      height / 1.3,
    );

    if (this.showText) {
      this.showText = false;
      text("PRESS BUTTON 'S' TO START THE GAME", width / 2, height / 1.11);
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
