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
  }

  animation() {
    imageKnight.position(width / 2.3 , height / 2.9);
    textSize(40);
    fill(350);
    textLeading(40);
    text(
      "THE KING OF THE KINGDOM IS HOLDING A CONTEST,\n THE KNIGHT WHO HAS THE MOST POINTS,\n MARRIES THE PRINCESS.\n WARRIOR ARE YOU READY TO TEST YOUR DESTINY?\n AND CONQUER THE KINGDOM AND THE PRINCESS?",
      width / 2,
      height / 1.7,
    );
    text("PRESS BUTTON 'S' TO START THE GAME", width / 2, height / 1.3);
  }
}
