function nextlvl() {
  if (points.points > 1000 && lvl2) {
    lvl2 = false;
    lvl3 = true;
    lvl = 2;
    this.renderNextLvl(5, 7);
  }
  if (points.points > 2000 && lvl3) {
    lvl3 = false;
    lvl4 = true;
    lvl = 3;
    this.renderNextLvl(6, 8);
  }
  if (points.points > 3000 && lvl4) {
    lvl4 = false;
    lvl = 4;
    this.renderNextLvl(8, 10);
  }
  /* if (points.points > 4000 && !lvl4) {
    renderNextLvl(); fazer o final do jogos? fight boss? um ecrã com um filme? um video? o que?
  }*/
}

function renderNextLvl(min, max) {
  gameRun = false;
  lvlFactory.lvl(lvl);
  lvlFactory.backGround();
  inicialScreen = new NextScreen(nextLvlScreen, 0, 0, width, height);
  scenario = factory.scenario();
  enemys = factory.enemys(min, max);
}
