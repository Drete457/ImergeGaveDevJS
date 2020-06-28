class Character extends AnimationDraw {
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
    jumpSound,
    jumpLeft,
    jumpRight,
    numberOfAttack,
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
    this.inicialY = inicialPositionY;
    this.gravity = 9.807;
    this.jumpSpeed = 0;
    this.numberOfJumps = 2;
    this.humanStrength = 3.73;

    this.originalSizeX = sizeX;
    this.inicialSpritePositionY = spritePositionY;

    this.direction = "right";
    this.jumpLeft = sizeX * jumpLeft;
    this.jumpRight = sizeX * jumpRight;
    this.jumpAutorization = true;
    this.jumpSound = jumpSound;
    this.numberOfAttack = numberOfAttack;
    this.attaksRemaning = 0;
  }

  animation() {
    if (this.attaksRemaning > 0) {
      this.attaksRemaning--;
      this.attackAnimation();
    } else {
      this.resetImage();
    }

   if (this.jumpAutorization && this.attaksRemaning <= 0) {
      this.spritePositionX < this.sizeXMax - this.sizeX
        ? (this.spritePositionX += this.sizeX)
        : (this.spritePositionX = 0);
    }

    this.animationDuringJumping();
  }

  animationDuringJumping() {
    if (!this.jumpAutorization) {
      this.spritePositionX = this.sizeX * 6;
      this.direction === "left"
      ? (this.spritePositionY = this.jumpLeft)
      : (this.spritePositionY = this.jumpRight);
    } 
  }

  jump() {
    this.jumpAutorization = false;
    this.spritePositionY === this.inicialSpritePositionY
      ? (this.spritePositionY = this.jumpRight)
      : (this.spritePositionY = this.jumpLeft);
    this.jumpSound.play();
    this.numberOfJumps > 0
      ? (this.jumpSpeed = -this.gravity * this.humanStrength)
      : null;
    this.numberOfJumps--;
  }

  movement(choose) {
    switch (choose) {
      case "left":
        this.jumpAutorization
          ? (this.spritePositionY = this.sizeYMax * this.numberOfMovements)
          : null;
        this.inicialPositionX > 0 ? (this.inicialPositionX -= 20) : null;
        this.direction = "left";
        break;
      case "right":
        this.jumpAutorization
          ? (this.spritePositionY = this.inicialSpritePositionY)
          : null;
        this.inicialPositionX < width * 0.85
          ? (this.inicialPositionX += 20)
          : null;
        this.direction = "right";
        break;
    }
  }

  applyGravity() {
    this.inicialPositionY += this.jumpSpeed;
    this.jumpSpeed += this.gravity * 0.211;
    if (this.inicialPositionY > this.inicialY) {
      this.inicialPositionY = this.inicialY;
      this.jumpAutorization = true;
      this.direction === "left"
        ? (this.spritePositionY = this.sizeYMax * this.numberOfMovements)
        : (this.spritePositionY = this.inicialSpritePositionY);
    }
    this.inicialPositionY === this.inicialY ? (this.numberOfJumps = 2) : null;
  }

  collision(enemy) {
    const precision = 0.7;
    if (enemy instanceof Bat) {
      return false;
    }
    if (enemy instanceof PowerUpPoint) {
      if (
        collideRectRect(
          this.inicialPositionX,
          this.inicialPositionY,
          this.characterWidth,
          this.characterHeight,
          enemy.inicialPositionX,
          enemy.inicialPositionY,
          enemy.characterWidth,
          enemy.characterHeight,
        )
      ) {
        enemy.inicialPositionX = -width;
        points.add();
      }
      return false;
    }
    return collideRectRect(
      this.inicialPositionX + width / 25,
      this.inicialPositionY,
      this.characterWidth - width / 15,
      this.characterHeight * precision,
      enemy.inicialPositionX + enemy.sizeX / 5,
      enemy.inicialPositionY + enemy.sizeY / 8,
      enemy.characterWidth * precision,
      enemy.characterHeight * precision,
    );
  }

  collisionBoss(enemy) {
    const precision = 0.7;

    if (enemy instanceof PowerLive) {
      if (
        collideRectRect(
          this.inicialPositionX,
          this.inicialPositionY,
          this.characterWidth,
          this.characterHeight,
          enemy.inicialPositionX,
          enemy.inicialPositionY,
          enemy.characterWidth,
          enemy.characterHeight,
        )
      ) {
        enemy.inicialPositionX = -width;
        health.add();
        powerLiveCatch = false;
      }
      return false;
    }

    let result = collideRectRect(
      this.inicialPositionX + width / 25,
      this.inicialPositionY,
      this.characterWidth - width / 15,
      this.characterHeight * precision,
      enemy.inicialPositionX + enemy.sizeX / 5,
      enemy.inicialPositionY + enemy.sizeY / 8,
      enemy.characterWidth * precision,
      enemy.characterHeight * precision,
    );
    this.attaksRemaning > 0 && result ? healthBoss.reduce() : null;
    return result;
  }

  attack() {
    this.attaksRemaning <= 0 ? this.attaksRemaning = this.numberOfAttack : null;
    this.direction === "left" && this.jumpAutorization ? this.attackLeft() : null;
    this.direction === "right" && this.jumpAutorization ? this.attackRight() : null;
  }

  attackLeft() {
    this.image = imageCharacterWeapon;
    this.spritePositionX = 0;
    this.spritePositionY = this.sizeYMax * 13; 
  }

  attackRight() {
    this.image = imageCharacterWeapon;
    this.spritePositionX = 0;
    this.spritePositionY = this.sizeYMax * 15; 
  }

  attackAnimation() {
    this.spritePositionX += this.sizeX;
  }

  resetImage() {
    this.image = imageCharacter;
    
    this.attackBegin = 0;
    this.direction === "left" && this.jumpAutorization ? this.spritePositionY = this.sizeYMax * this.numberOfMovements : this.spritePositionY = this.inicialSpritePositionY;
  }
}
