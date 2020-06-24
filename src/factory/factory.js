class Factory {
  scenario() {
    return new Scenario(imageScenery, speed);
  }

  character() {
    //character position
    let inicialPositionX = 150;
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
    let characterWidth = 160;
    let characterHeigth = 120;
    //size of the enemy on the sprite
    let sizeXBt = 160;
    let sizeYBt = 120;
    let batSpeed = speed * 2;
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
    //size of the enemy on the screen
    let characterWidth = 104;
    let characterHeigth = 104;
    //size of the enemy on the sprite
    let sizeXBb = 104;
    let sizeYBb = 104;
    let bubbleSpeed = speed * 2.3;
    //enemy position and image on the screen
    let inicialPositionX = inicialEnemyX();
    let inicialPositionY = Math.floor(
      Math.random() * (height - characterHeigth - height / 1.3) + height / 1.3,
    );
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
    //size of the enemy on the screen
    let characterWidth = 300;
    let characterHeigth = 300;
    //size of the enemy on the sprite
    let sizeXTl = 400;
    let sizeYTl = 400;
    let trollSpeed = speed * 1.6;
    //enemy position and image on the screen
    let inicialPositionX = inicialEnemyX();
    let inicialPositionY = Math.floor(
      Math.random() * (height - characterHeigth - height / 1.4) + height / 1.4,
    );
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
    //size of the enemy on the screen
    let characterWidth = 200;
    let characterHeigth = 150;
    //size of the enemy on the sprite
    let sizeXBb = 200;
    let sizeYBb = 150;
    let flyBubbleSpeed = speed * 2.3;
    //enemy position and image on the screen
    let inicialPositionX = inicialEnemyX();
    let inicialPositionY = Math.floor(
      Math.random() * (height - characterHeigth - height / 1.3) + height / 1.3,
    );
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

  powerUp() {
    //size of the enemy on the screen
    let characterWidth = 80;
    let characterHeigth = 80;
    //size of the enemy on the sprite
    let powerSpeed = speed;
    //enemy position and image on the screen
    let inicialPositionX = inicialEnemyX();
    let inicialPositionY =  (height - height/2);
    return new PowerUpPoint(
      imagePowerUp,
      inicialPositionX,
      inicialPositionY,
      characterWidth,
      characterHeigth,
      powerSpeed,
    );
  }

  gameOver() {
    return new GameOver(imageGameOver);
  }

  enemys() {
    let numberOfEnemys = Math.ceil(Math.random() * (4 - 2) + 2);
    let list = [];
    for (let i = 0; i <= numberOfEnemys; i++) {
      list.push(this.enemy());
    }
    return list;
  }

  enemy() {
    let random = Math.ceil(Math.random() * 5);
    switch (random) {
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
      case 5:
        return this.powerUp();
        break;
    }
  }
}
