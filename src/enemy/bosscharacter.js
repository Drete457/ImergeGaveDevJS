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
      this.inicialY = inicialPositionY;
  
      this.inicialSpritePositionY = spritePositionY;
    
      this.direction;
    }
  
    animation() {
        this.spritePositionX < this.sizeXMax - this.sizeX
          ? (this.spritePositionX += this.sizeX + 6)
          : (this.spritePositionX = 0);
    }
  
    movement(choose) {
      switch (choose) {
        case "left":
          this.jumpAutorization ? this.spritePositionY = this.sizeYMax * this.numberOfMovements : null; 
          this.inicialPositionX > 0 ? (this.inicialPositionX -= 20) : null;
          this.direction = "left";
          break;
        case "right":
          this.jumpAutorization ? this.spritePositionY = this.inicialSpritePositionY : null;
          this.inicialPositionX < width * 0.85
            ? (this.inicialPositionX += 20)
            : null;
            this.direction = "right";
          break;
      }
    }
  }