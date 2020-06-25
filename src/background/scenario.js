class Scenario {
  constructor(image, speed, image2, image3) {
    this.image = image;
    this.image2 = image2;
    this.image3 = image3;
    this.speed = speed;
    this.x1 = 0;
    this.x2 = width;
    this.x3 = width * 2;
  }

  draw() {
    image(this.image, this.x1, 0, width, height);
    image(this.image2, this.x2, 0, width, height);
    image(this.image3, this.x3, 0, width, height);
  }

  animation() {
    this.x1 -= this.speed;
    this.x2 -= this.speed; 
    this.x3 -= this.speed;

    if (this.x1 < -width) {
      this.x1 = width;
    };
    if (this.x2 < -width) {
      this.x2 = width;
    };
    if (this.x3 < -width) {
      this.x3 = width;
    };
  }
}
