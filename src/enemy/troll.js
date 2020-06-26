class Troll extends AnimationDraw {
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
    this.spritePositionX >= 1600 ? (this.spritePositionY += this.sizeY) : null;
    this.spritePositionX < 1600
      ? (this.spritePositionX += this.sizeX)
      : (this.spritePositionX = 0);
    this.spritePositionY >= 2000 && this.spritePositionX > 800
      ? (this.spritePositionY = 0)
      : null;
    this.move();
  }

  move() {
    this.inicialPositionX += -this.speed;
  }
}
