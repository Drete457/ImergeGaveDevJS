class Factory {
  scenario() {
    return new Scenario(imageScenery, speed);
  }

  bat() {
    //bat position and image on the screen
    let inicialPositionX = Math.floor(
      Math.random() * (width + width / 1.3) + width / 1.3,
    );
    let inicialPositionY = Math.floor(
      Math.random() * (height / 5 - height / 11) + height / 11,
    );
    //size of the bat on the screen
    let characterWidth = 60;
    let characterHeigth = 45;
    //size of the bat in the file
    let sizeXBt = 160;
    let sizeYBt = 120;
    //reference white sprite use of the bat
    let spritePositionXBt = 0;
    let spritePositionYBt = 0;
    let batSpeed = 10;
    return new Bat(
      imageBat,
      inicialPositionX,
      inicialPositionY,
      characterWidth,
      characterHeigth,
      sizeXBt,
      sizeYBt,
      spritePositionXBt,
      spritePositionYBt,
      batSpeed,
    );
  }

  character() {
    //character position
    let inicialPositionX = 100;
    let inicialPositionY = height - height / 3;
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
      inicialPositionX,
      inicialPositionY,
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
    let inicialPositionXBb = Math.floor(
      Math.random() * (width + width / 1.3) + width / 1.3,
    );
    let inicialPositionYBb = Math.floor(
      Math.random() * (height - 50 - height / 1.3) + height / 1.3,
    );
    //size of the bubble on the screen
    let characterWidth = 52;
    let characterHeigth = 52;
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
      characterWidth,
      characterHeigth,
      sizeXBb,
      sizeYBb,
      spritePositionXBb,
      spritePositionYBb,
      bubbleSpeed,
    );
  }

  gameOver() {
    return new GameOver(imageGameOver);
  }

  enemys() {
    let numberOfEnemys = Math.ceil(Math.random() * 10);
    let list = [];
    for (let i = 0; i <= numberOfEnemys; i++) {
      switch (Math.ceil(Math.random() * 2)) {
        case 1:
          list.push(this.bat());
          break;
        case 2:
          list.push(this.bubble());
          break;
      }
    }
    return list;
  }

  enemy() {
    switch (Math.ceil(Math.random() * 2)) {
      case 1:
        return this.bat();
        break;
      case 2:
        return this.bubble();
        break;
    }
  }
}
