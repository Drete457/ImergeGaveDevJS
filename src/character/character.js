class Character extends AnimationDraw{
  constructor(image, inicialPositionX, inicialPositionY, characterWidth, characterHeight, sizeX, sizeY, spritePositionX, spritePositionY, numberOfMovements, jumpSound) {
    super(image, inicialPositionX, inicialPositionY, characterWidth, characterHeight, sizeX, sizeY, spritePositionX, spritePositionY);

    //the full sprite size will be use for the caracter movement
    this.sizeXMax = this.sizeX;
    this.sizeYMax = this.sizeY * numberOfMovements;

    this.inicialY = inicialPositionY;
    this.gravity = 9.807;
    this.jumpSpeed = 0;
    this.numberOfJumps = 2;
    this.humanStrength = 3.73;

    this.jumpSound = jumpSound
  }

  animation(){
    this.spritePositionX < this.sizeYMax - this.sizeX
    ? this.spritePositionX += this.sizeX + 6
    : this.spritePositionX = 0;
  }

  jump() {
    this.jumpSound.play();
    this.numberOfJumps > 0 ? this.jumpSpeed = -this.gravity * this.humanStrength : null;
    this.numberOfJumps--;
  }

  applyGravity() {
    this.inicialPositionY += this.jumpSpeed;
    this.jumpSpeed += this.gravity*0.4; 
    this.inicialPositionY > this.inicialY ? this.inicialPositionY = this.inicialY : null;
    this.inicialPositionY === this.inicialY ? this.numberOfJumps = 2 : null; 
  }

  collision(enemy) {
    const precision = 0.6;
    if (enemy instanceof Bat) { return false };
    return collideRectRect(
      this.inicialPositionX,
      this.inicialPositionY,
      this.characterWidth * precision,
      this.characterHeight * precision,
      enemy.inicialPositionX,
      enemy.inicialPositionY,
      enemy.characterWidth * precision,
      enemy.characterHeight * precision
    );
  }
}
 