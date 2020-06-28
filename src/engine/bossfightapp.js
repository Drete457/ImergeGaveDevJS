class GameAppBoss {
  run() {
    keyIsDown(LEFT_ARROW) ? character.movement("left") : null;
    keyIsDown(RIGHT_ARROW) ? character.movement("right") : null;

    this.scenery();

    this.lives();

   animation(character);
  // animationBoss(bossCharacter);
    

   // gameRun ? this.collisionVerification(bossCharacter) : null

    //under construction
  /*  textSize(width / 10);
    text("WARNING", (width / 10) * 4.55, (height / 10) * 3.1);
    text("UNDER CONSTRUCTION", (width / 10) * 4.55, (height / 10) * 4.5);
    // nextlvl()

    /*   enemys.map((enemy) => {
        enemy.inicialPositionX > -enemy.characterWidth
          ? animation(enemy)
          : (enemys[enemys.indexOf(enemy)] = factory.enemy());
          gameRun ? this.collisionVerification(enemy) : null;
      });*/
  }

  collisionVerification(enemy) {
    character.collision(enemy) ? this.gameOverAndLive() : null;
  }

  gameOverAndLive() {
    !health.reduce() ? animation(gameOver) : null;
  }

  /*  bossLiveReduce() {
        
    }*/

  scenery() {
    lvlFactory.backGround();
    animation(scenario);
  }

  lives() {
    animation(health);
    animation(healthBoss);
  }
 
}
