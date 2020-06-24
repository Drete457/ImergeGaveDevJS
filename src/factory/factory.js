class Factory {
  scenario() {
    return new Scenario(imageScenery, speed);
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

  bat() {
    //enemy position and image on the screen
    let inicialPositionX = inicialEnemyX();
    let inicialPositionY = Math.floor(
      Math.random() * (height / 2 - height / 11) + height / 11,
    );
    //size of the enemy on the screen
    let characterWidth = 60;
    let characterHeigth = 45;
    //size of the enemy on the sprite
    let sizeXBt = 160;
    let sizeYBt = 120;
    let batSpeed = speed * 3;
    return new Bat(
      imageBat,
      inicialPositionX,
      inicialPositionY,
      characterWidth,
      characterHeigth,
      sizeXBt,
      sizeYBt,
      spritePositionX,
      spritePositionY,
      batSpeed,
    );
  }

  bubble() {
    //enemy position and image on the screen
    let inicialPositionX = inicialEnemyX();
    let inicialPositionY = Math.floor(
      Math.random() * (height - 50 - height / 1.3) + height / 1.3,
    );
    //size of the enemy on the screen
    let characterWidth = 52;
    let characterHeigth = 52;
    //size of the enemy on the sprite
    let sizeXBb = 104;
    let sizeYBb = 104;
    let bubbleSpeed = speed * 2.3;
    return new Bubble(
      imageBubble,
      inicialPositionX,
      inicialPositionY,
      characterWidth,
      characterHeigth,
      sizeXBb,
      sizeYBb,
      spritePositionX,
      spritePositionY,
      bubbleSpeed,
    );
  }

  troll() {
    //enemy position and image on the screen
    let inicialPositionX = inicialEnemyX();
    let inicialPositionY = Math.floor(
      Math.random() * (height - 200 - height / 1.3) + height / 1.3,
    );
    //size of the enemy on the screen
    let characterWidth = 200;
    let characterHeigth = 200;
    //size of the enemy on the sprite
    let sizeXTl = 400;
    let sizeYTl = 400;
    let trollSpeed = speed * 1.6;
    return new Troll(
      imageTroll,
      inicialPositionX,
      inicialPositionY,
      characterWidth,
      characterHeigth,
      sizeXTl,
      sizeYTl,
      spritePositionX,
      spritePositionY,
      trollSpeed,
    );
  }

  flybubble() {
    //enemy position and image on the screen
    let inicialPositionX = inicialEnemyX();
    let inicialPositionY = Math.floor(
      Math.random() * (height - 50 - height / 1.3) + height / 1.3,
    );
    //size of the enemy on the screen
    let characterWidth = 100;
    let characterHeigth = 75;
    //size of the enemy on the sprite
    let sizeXBb = 200;
    let sizeYBb = 150;
    let flyBubbleSpeed = speed * 2.3;
    return new FlyBubble(
      imageFlyBubble,
      inicialPositionX,
      inicialPositionY,
      characterWidth,
      characterHeigth,
      sizeXBb,
      sizeYBb,
      spritePositionX,
      spritePositionY,
      flyBubbleSpeed,
    );
  }

  gameOver() {
    return new GameOver(imageGameOver);
  }

  enemys() {
    let numberOfEnemys = Math.ceil(Math.random() * (10 - 5) + 5);
    let list = [];
    for (let i = 0; i <= numberOfEnemys; i++) {
      list.push(this.enemy());
    }
    return list;
  }

  enemy() {
    switch (Math.ceil(Math.random() * 4)) {
      case 1:
        return this.bat();
        break;
      case 2:
        return this.bubble();
        break;
      case 3:
        return this.troll();
        break;
      case 4:
        return this.flybubble();
        break;
    }
  }
}
