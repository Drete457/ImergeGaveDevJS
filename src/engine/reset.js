class Reset {
  constructor() {
    factory = new Factory();
    points = new Points();
    animation = new AnimationMovement().animation;
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

    scenario = factory.scenario();

    character = factory.character();

    enemys = factory.enemys();

    gameOver = factory.gameOver();
    loop();
  }
}