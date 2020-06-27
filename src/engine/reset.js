class Reset {
  constructor() {
    this.playMusic();

    factory = new Factory();
    points = new Points();
    animation = new AnimationMovement().animation;
    gameRun = false;

    lvl = 1;
    lvlFactory = new Lvl();
    lvl2 = true;
    lvl3 = false;
    lvl4 = false;
    health = factory.health();

    spritePositionX = 0;
    spritePositionY = 0;
    inicialScreen = new InicialScreen(
      imageInicialScreen,
      spritePositionX,
      spritePositionY,
      width,
      height,
      imageKnight,
    );

    inicialEnemyX = () => {
      return Math.floor(Math.random() * (width + 100 + width) + width + 10);
    };

    textFont(font);
    textAlign(CENTER, CENTER);

    lvlFactory.lvl(lvl);
    scenario = factory.scenario();

    character = factory.character();

    enemys = factory.enemys(3, 5);

    gameOver = factory.gameOver();
    loop();
  }

  playMusic() {
    if (!playSound) {
      playSound = true;
      playSoundFinalBoss.stop();
      gameSound.loop()
    }
  }
}
