class FlyBubble extends AnimationDraw {
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
    this.spritePositionX >= 400 ? (this.spritePositionY += this.sizeY) : null;
    this.spritePositionX < 400
      ? (this.spritePositionX += this.sizeX)
      : (this.spritePositionX = 0);
    if (this.spritePositionY >= 750 && this.spritePositionX > 0) {
      this.spritePositionY = 0;
      this.spritePositionX = 0;
    }
    this.move();
  }

  move() {
    this.inicialPositionX += -this.speed;
  }
}
