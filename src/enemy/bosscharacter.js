class BossCharacter extends AnimationDraw {
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
    numberOfMovements,
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

    //the full sprite size will be use for the caracter movement
    this.sizeXMax = sizeX * numberOfMovements;
    this.sizeYMax = sizeY;
    this.numberOfMovements = numberOfMovements;
  //  this.inicialY = inicialPositionY;

    this.inicialSpritePositionY = spritePositionY;

   this.direction;
  }

  animation() {
    this.spritePositionX < this.sizeXMax - this.sizeX ? this.spritePositionX += this.sizeX + 6 : this.spritePositionX = 0;
  }

  playerPositionVerification(player) {
    if (player.inicialPositionX > this.inicialPositionX) {
      this.spritePositionY = this.sizeYMax * 11;
      this.direction = "right";
      this.movement("right");
    } else {
      this.spritePositionY = this.inicialSpritePositionY;
      this.direction = "left";
      this.movement("left");
     }
    
  }

  movement(choose) {
    switch (choose) {
      case "left":
      this.inicialPositionX -= 5;
        break;
      case "right":
        this.inicialPositionX += 5;
        break;
    }
  }
}
