function nextlvl() {
  if (points.points > 10 && lvl2) {
    lvl2 = false;
    lvl3 = true;
    lvl = 2;
    this.renderNextLvl(5, 7);
  }
  if (points.points > 20 && lvl3) {
    lvl3 = false;
    lvl4 = true;
    lvl = 3;
    this.renderNextLvl(6, 8);
  }
  if (points.points > 30 && lvl4) {
    lvl4 = false;
    lvl5 = true;
    lvl = 4;
    this.renderNextLvl(8, 10);
  }
  if (points.points > 40 && lvl5) {
    lvl5 = false;
    lvl6 = true;
    lvl = 5;
    this.renderNextLvl(1, 1);
  }
  if (points.points > 50) {
    lvl = 6;
    this.renderNextLvl(0, 0);
  }
}

function renderNextLvl(min, max) {
  gameRun = false;
  lvlFactory.lvl(lvl);
  lvlFactory.backGround();
  inicialScreen = new NextScreen(nextLvlScreen, 0, 0, width, height);
  health = factory.health();
  healthBoss = factory.bossHealth();
  character = factory.character();
  scenario = factory.scenario();
  enemys = factory.enemys(min, max);
}
