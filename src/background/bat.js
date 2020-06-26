class Bat extends AnimationDraw {
  constructor(
    image,
    inicialPositionX,
    inicialPositionY,
    characterWidth,
    characterHeight,
    sizeX,
    sizeY,
    spritePositionX,
    spritePositionY,
    speed,
  ) {
    super(
      image,
      inicialPositionX,
      inicialPositionY,
      characterWidth,
      characterHeight,
      sizeX,
      sizeY,
      spritePositionX,
      spritePositionY,
    );
    this.speed = speed;
  }

  animation() {
    this.spritePositionX < 280
      ? (this.spritePositionX += this.sizeX)
      : (this.spritePositionX = 0);
    this.move();
  }

  move() {
    this.inicialPositionX += -this.speed;
  }
}
