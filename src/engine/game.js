class GameApp {
  run() {
    image(background, 0, 0, width, height);
    keyIsDown(LEFT_ARROW) ? character.movement("left") : null;
    keyIsDown(RIGHT_ARROW) ? character.movement("right") : null;
    
    animation(scenario);
    animation(character);

    nextlvl();

    enemys.map((enemy) => {
      enemy.inicialPositionX > -enemy.characterWidth
        ? animation(enemy)
        : (enemys[enemys.indexOf(enemy)] = factory.enemy());
      character.collision(enemy) ? /*animation(gameOver)*/ "" : animation(points);
    });
  }
}
