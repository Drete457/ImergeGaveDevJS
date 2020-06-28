class Reset {
  constructor() {
    this.playMusic();

    this.lvlAutorization();

    spritePositionX = 0;
    spritePositionY = 0;
    this.inicialization();

    inicialEnemyX = () => {
      return Math.floor(Math.random() * (width + 100 + width) + width + 10);
    };

    textFont(font);
    textAlign(CENTER, CENTER);

    this.callFactory();

    loop();
  }

  inicialization() {
    factory = new Factory();
    points = new Points();
    animation = new AnimationMovement().animation;
    animationBoss = new AnimationMovement().animationBoss;
    lvlFactory = new Lvl();
    inicialScreen = new InicialScreen(
      imageInicialScreen,
      spritePositionX,
      spritePositionY,
      width,
      height,
      imageKnight,
    );
    gameApp = new GameApp();
    powerLiveCatch = false;
    live = "";
  }

  lvlAutorization() {
    gameRun = false;
    lvl = 1;
    lvl2 = true;
    lvl3 = false;
    lvl4 = false;
    lvl5 = false;
    bossFight = false;
  }

  playMusic() {
    if (!playSound) {
      playSound = true;
      playSoundFinalBoss.stop();
      gameSound.loop();
    }
  }

  callFactory() {
    health = factory.health();
    lvlFactory.lvl(lvl);
    scenario = factory.scenario();

    character = factory.character();

    enemys = factory.enemys(3, 5);

    gameOver = factory.gameOver();
  }
}
