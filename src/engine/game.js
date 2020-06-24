class GameApp {
  run() {
    animation(scenario);
    animation(character);

    enemys.map((enemy) => {
      enemy.inicialPositionX > -enemy.characterWidth
        ? animation(enemy)
        : (enemys[enemys.indexOf(enemy)] = factory.enemy());
      character.collision(enemy) ? animation(gameOver) : animation(points);
    });
  }
}
