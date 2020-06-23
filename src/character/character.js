class Character extends AnimationDraw{
  constructor(image, inicialPositionX, inicialPositionY, characterWidth, characterHeigth, sizeX, sizeY, spritePositionX, spritePositionY, numberOfMovements, jumpSound) {
    super(image, inicialPositionX, inicialPositionY, characterWidth, characterHeigth, sizeX, sizeY, spritePositionX, spritePositionY);

    //the full sprite size will be use for the caracter movement
    this.sizeXMax = this.sizeX;
    this.sizeYMax = this.sizeY * numberOfMovements;

    this.inicialY = inicialPositionY;
    this.gravity = 9.807;
    this.jumpSpeed = 0;
    this.humanStrength = 3.73;

    this.jumpSound = jumpSound
  }

  animation(){
    this.spritePositionX < this.sizeYMax - this.sizeX
    ? this.spritePositionX += this.sizeX + 6
    : this.spritePositionX = 0;
  }

  jump() {
    this.jumpSpeed = -this.gravity * this.humanStrength;
    this.jumpSound.play();
  }

  applyGravity() {
    this.inicialPositionY += this.jumpSpeed;
    this.jumpSpeed += this.gravity*0.4; 
    this.inicialPositionY > this.inicialY ? this.inicialPositionY = this.inicialY : null;
  }

  collision(enemy) {
    const precision = 0.585;
    return collideRectRect(
      this.inicialPositionX,
      this.inicialPositionY,
      this.characterWidth * precision,
      this.characterHeigth * precision,
      enemy.inicialPositionX,
      enemy.inicialPositionY,
      enemy.characterWidth * precision,
      enemy.characterHeigth * precision
    );
  }
}
 