class PowerUpPoint extends AnimationDraw {
  constructor(
    image,
    inicialPositionX,
    inicialPositionY,
    characterWidth,
    characterHeight,
    speed,
  ) {
    super(
      image,
      inicialPositionX,
      inicialPositionY,
      characterWidth,
      characterHeight,
    );
    this.speed = speed;
  }

  animation() {
    this.move();
  }

  move() {
    this.inicialPositionX += -this.speed;
  }
}
