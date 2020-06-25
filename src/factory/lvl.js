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
        imageScenery = loadImage("images/scenery/cove.corridor_wall.21.png");
        imageScenery2 = loadImage("images/scenery/cove.corridor_wall.22.png");
        imageScenery3 = loadImage("images/scenery/cove.corridor_wall.23.png");
        speed = 7;
        break;
      case 4:
        imageScenery = loadImage("images/scenery/weald.corridor_wall.22.png");
        imageScenery2 = loadImage("images/scenery/weald.corridor_wall.23.png");
        imageScenery3 = loadImage("images/scenery/weald.corridor_wall.24.png");
        speed = 8;
        break;
    }
  }
}
