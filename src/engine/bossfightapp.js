class GameAppBoss {
  run() {
    keyIsDown(LEFT_ARROW) ? character.movement("left") : null;
    keyIsDown(RIGHT_ARROW) ? character.movement("right") : null;

    this.scenery();

    this.lives();

    this.characters()

    gameRun ? this.collisionVerification(bossCharacter) : null;

    this.createLives();

   // nextlvl();
  }

  createLives() {
    let randomLive = random(1, 100);
    if (randomLive > 99 && !powerLiveCatch) {
      powerLiveCatch = true;
        live = factory.live(); 
    }

    if (live != "" && powerLiveCatch) {
      animation(live);
      this.collisionVerification(live);
    }
  }

  collisionVerification(enemy) {
    character.collisionBoss(enemy) ? this.gameOverAndLive() : null;
  }

  gameOverAndLive() {
    !health.reduce() ? animation(gameOver) : null;
  }

  bossLiveReduce() {
    healthBoss.reduce();
  }

  scenery() {
    lvlFactory.backGround();
    animation(scenario);
  }

  lives() {
    animation(health);
    animation(healthBoss);
  }

  characters() {
    animation(character);
    animationBoss(bossCharacter);
  }
}
