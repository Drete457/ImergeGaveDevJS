class Bubble extends AnimationDraw {
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
    this.spritePositionX >= 312 ? (this.spritePositionY += this.sizeY) : null;
    this.spritePositionX < 312
      ? (this.spritePositionX += this.sizeX)
      : (this.spritePositionX = 0);
    this.spritePositionY > 624 ? (this.spritePositionY = 0) : null;
    this.move();
  }

  move() {
    this.inicialPositionX += -this.speed;
  }
}
