function nextlvl() {
  if (points.points > 1000 && lvl2) {
    lvl2 = false;
    lvl3 = true;
    console.log("1000");
    lvl = 2;
    renderNextLvl();
  }
    if (points.points > 2000 && lvl3) {
        lvl3 = false;
        lvl4 = true;
    lvl = 3;
    renderNextLvl();
  }
    if (points.points > 3000 && lvl4) {
        lvl4 = false;
    lvl = 4;
    renderNextLvl();
    }
   /* if (points.points > 4000 && !lvl4) {
    renderNextLvl();
  }*/
}

function renderNextLvl() {
  lvlFactory.lvl(lvl);
  scenario = factory.scenario();
}
