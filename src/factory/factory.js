class Factory {
  character() {
    //character position
    let inicialPositionXCh = 100;
    let inicialPositionYCh = height - height / 3;
    //size of the character on the screen
    let characterWidth = width / 9;
    let characterHeigth = height / 3;
    //size of the character in the file
    let sizeXCh = 58;
    let sizeYCh = 65;
    //reference white parte of the sprite
    let spritePositionXCh = sizeXCh;
    let spritePositionYCh = sizeYCh * 11;
    let numberOfMovements = 8;
    return new Character(
      imageCharacter,
      inicialPositionXCh,
      inicialPositionYCh,
      characterWidth,
      characterHeigth,
      sizeXCh,
      sizeYCh,
      spritePositionXCh,
      spritePositionYCh,
      numberOfMovements,
      jumpSound,
    );
  }

  bubble() {
    //bubble position and image on the screen
    let inicialPositionXBb = width -100;
    let inicialPositionYBb =  height - height / 7;
    //size of the bubble on the screen
    let bubbleWidth = 52;
    let bubbleHeigth = 52;
    //size of the bubble in the file
    let sizeXBb = 104;
    let sizeYBb = 104;
    //reference white sprite use of the bubble
    let spritePositionXBb = 0;
    let spritePositionYBb = 0;
    let bubbleSpeed = 10;
    return new Bubble(
      imageBubble,
      inicialPositionXBb,
      inicialPositionYBb,
      bubbleWidth,
      bubbleHeigth,
      sizeXBb,
      sizeYBb,
      spritePositionXBb,
      spritePositionYBb,
      bubbleSpeed,
    );
  }
}
