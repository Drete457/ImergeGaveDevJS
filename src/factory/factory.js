class Factory {
  scenario() {
    return new Scenario(imageScenery, speed);
  }

  bat() {
    let numberOfBat = Math.ceil(Math.random() *  5);
    let list = [];
    for (let i = 0; i <= numberOfBat; i++) {
      //bat position and image on the screen
      let inicialPositionXBt = Math.floor(
        Math.random() * (width + width / 1.3) + width / 1.3,
      );
      let inicialPositionYBt = Math.floor(
        Math.random() * (height / 5 - height / 11) + height / 11,
      );
      //size of the bat on the screen
      let batWidth = 60;
      let batHeigth = 45;
      //size of the bat in the file
      let sizeXBt = 160;
      let sizeYBt = 120;
      //reference white sprite use of the bat
      let spritePositionXBt = 0;
      let spritePositionYBt = 0;
      let batSpeed = 10;
      list.push(
        new Bat(
          imageBat,
          inicialPositionXBt,
          inicialPositionYBt,
          batWidth,
          batHeigth,
          sizeXBt,
          sizeYBt,
          spritePositionXBt,
          spritePositionYBt,
          batSpeed,
        ),
      );
    }
    return list;
  }

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
    let numberOfBubble = Math.ceil(Math.random() * 5);
    let list = [];
    for (let i = 0; i <= numberOfBubble; i++) {
      //bubble position and image on the screen
      let inicialPositionXBb = Math.floor(
        Math.random() * (width + width / 1.3) + width / 1.3,
      );
      let inicialPositionYBb = Math.floor(
        Math.random() * ((height - 50) - height / 1.3) + height / 1.3,
      );
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
      list.push(
        new Bubble(
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
        ),
      );
    }
    return list;
  }

  gameOver() {
    return new GameOver(imageGameOver);
  }
}
