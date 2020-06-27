class Lvl {
  lvl(lvl) {
    switch (lvl) {
      case 1:
        imageScenery = loadImage("images/scenery/crypts.corridor_wall.21.png");
        imageScenery2 = loadImage("images/scenery/crypts.corridor_wall.22.png");
        imageScenery3 = loadImage("images/scenery/crypts.corridor_wall.23.png");
        speed = 4;
        break;
      case 2:
        nextLvlScreen = loadImage(
          "images/scenery/warrens.corridor_wall.17.png",
        );
        imageScenery = loadImage("images/scenery/warrens.corridor_wall.22.png");
        imageScenery2 = loadImage(
          "images/scenery/warrens.corridor_wall.23.png",
        );
        imageScenery3 = loadImage(
          "images/scenery/warrens.corridor_wall.24.png",
        );
        speed = 5;
        break;
      case 3:
        nextLvlScreen = loadImage("images/scenery/cove.corridor_wall.15.png");
        imageScenery = loadImage("images/scenery/cove.corridor_wall.21.png");
        imageScenery2 = loadImage("images/scenery/cove.corridor_wall.22.png");
        imageScenery3 = loadImage("images/scenery/cove.corridor_wall.23.png");
        speed = 7;
        break;
      case 4:
        nextLvlScreen = loadImage("images/scenery/weald.corridor_wall.14.png");
        imageScenery = loadImage("images/scenery/weald.corridor_wall.22.png");
        imageScenery2 = loadImage("images/scenery/weald.corridor_wall.23.png");
        imageScenery3 = loadImage("images/scenery/weald.corridor_wall.24.png");
        speed = 8;
        break;
      case 5:
        nextLvlScreen = loadImage("images/scenery/finalboss.png");
        imageScenery = nextLvlScreen;
        playSound = false;
        gameSound.stop();
        playSoundFinalBoss.loop();
        playSoundFinalBoss.setVolume(0.1);
        bossFight = true;
        speed = 0;
        bossCharacter = factory.bossCharacter();
    }
  }

  backGround() {
    image(background, 0, 0, width, height);
  }
}
