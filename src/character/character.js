class Character extends AnimationDraw{
  constructor(image, inicialPositionX, inicialPositionY, characterWidth, characterHeigth, sizeX, sizeY, spritePositionX, spritePositionY, numberOfMovements) {
    super(image, inicialPositionX, inicialPositionY, characterWidth, characterHeigth, sizeX, sizeY, spritePositionX, spritePositionY);

    //the full sprite size will be use for the caracter movement
      this.sizeXMax = this.sizeX;
      this.sizeYMax = this.sizeY * numberOfMovements;
  }

  animation(){
    this.spritePositionX < this.sizeYMax - this.sizeX
    ? this.spritePositionX += this.sizeX + 6
    : this.spritePositionX = 0;
  }
}
