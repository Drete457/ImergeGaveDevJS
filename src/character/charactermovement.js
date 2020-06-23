class Character {
  constructor(image) {
    //character position and image on the screen
    this.image = image;
    this.inicialPositionX = 45;
    this.inicialPositionY = height - height / 3;

    //size of the character on the screen
    this.characterWidth = width / 9;
    this.characterHeigth = height / 3 ;

    //size of the character in the file
    this.sizeX = 58;
    this.sizeY = 65;

    //reference whit sprite use of the character file
    this.x = this.sizeX;
    this.y = this.sizeY * 11;

    //the full sprite size will be use for the caracter movement
    this.sizeXMax = this.sizeX;
    this.sizeYMax = this.sizeY * 8;
  }

  drawCharacter() {
    image(
      this.image,
      this.inicialPositionX,
      this.inicialPositionY, //1º x,y -> position on the screen
      this.characterWidth,
      this.characterHeigth, //2º x,y -> size in the screen
      this.x,
      this.y, //3º x,y -> reference to the image
      this.sizeX,
      this.sizeY,
    ); //4º x,y -> position of the image
    this.animation();
  }

  animation() {
    this.x < this.sizeYMax - this.sizeX
      ? (this.x += this.sizeX + 6)
      : (this.x = 0);
  }
}
