class Factory {
  scenario() {
    return new Scenario(imageScenery, speed, imageScenery2, imageScenery3);
  }

  character() {
    //character position
    let inicialPositionX = width / 9.3;
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
    let numberOfMovements = 9;
    let jumpLeft = 1;
    let jumpRight = 3;
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
      jumpLeft,
      jumpRight,
    );
  }

  health() {
    return new Health();
  }

  bat() {
    //enemy position and image on the screen
    let inicialPositionX = inicialEnemyX();
    let inicialPositionY = Math.floor(
      Math.random() * (height / 2 - height / 11) + height / 11,
    );
    //size of the enemy on the screen
    let characterWidth =  width / 8.75;
    let characterHeigth = height / 8.15;
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
    let characterWidth =  width / 13.46;
    let characterHeigth = height / 9.41;
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
    let characterWidth =  width / 4.66;
    let characterHeigth = height / 3.26;
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
    let characterWidth =  width / 7;
    let characterHeigth = height / 6.52;
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
    let characterWidth =  width / 17.5;
    let characterHeigth = height / 12.23;
    //size of the enemy on the sprite
    let powerSpeed = speed;
    //enemy position and image on the screen
    let inicialPositionX = inicialEnemyX();
    let inicialPositionY = height - height / 2;
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

  enemys(min, max) {
    let numberOfEnemys = parseInt(random(min, max));
    let list = [];
    for (let i = 0; i <= numberOfEnemys; i++) {
      list.push(this.enemy());
    }
    return list;
  }

  enemy() {
    let choose = parseInt(random(1, 6));
    switch (choose) {
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
