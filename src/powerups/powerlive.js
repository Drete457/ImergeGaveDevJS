class PowerLive extends AnimationDraw {
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
    this.inicialX = inicialPositionX;
    this.speed = speed;
    this.hide = false;
  }

  animation() {
    if (!this.hide) {
      this.inicialPositionX = width * 2;
      this.hide = true;
    } else {
      this.inicialPositionX = this.inicialX;
      this.hide = false;
    }
  }
}
