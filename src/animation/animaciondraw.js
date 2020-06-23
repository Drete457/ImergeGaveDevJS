class AnimationDraw {
    constructor(image, inicialPositionX, inicialPositionY, characterWidth, characterHeight, sizeX, sizeY, spritePositionX, spritePositionY) {
      //character position and image on the screen
      this.image = image;
      this.inicialPositionX = inicialPositionX;
      this.inicialPositionY = inicialPositionY;
  
      //size of the character on the screen
      this.characterWidth = characterWidth;
      this.characterHeight = characterHeight;
  
      //size of the character in the file
      this.sizeX = sizeX;
      this.sizeY = sizeY;
  
      //reference of the image in the sprite
      this.spritePositionX = spritePositionX;
      this.spritePositionY = spritePositionY;
    }
  
    draw() {
      image(
        this.image,
        this.inicialPositionX,
        this.inicialPositionY, //1º x,y -> position on the screen
        this.characterWidth,
        this.characterHeight, //2º x,y -> size in the screen
        this.spritePositionX,
        this.spritePositionY, //3º x,y -> reference to the image
        this.sizeX,
        this.sizeY,
      ); //4º x,y -> position of the image
    }
  }
