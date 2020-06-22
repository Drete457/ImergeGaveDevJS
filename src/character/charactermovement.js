class Character {

    constructor(image) {
        this.image = image;
        this.x = 0;
        this.y = 0;
        this.characterWidth = width / 9;
        this.characterHeigth = height / 6;
        this.sizeX = 220;
        this.sizeY = 270;
        this.sizeXMax = this.sizeX * 3;
        this.sizeYMax = this.sizeY * 3;
    }

    drawCharacter() {
        image(this.image, 20, height - height / 5, this.characterWidth, this.characterHeigth,
            this.x,
            this.y,
            this.sizeX, this.sizeY);
        this.animation();
    }

    animation() {
        this.x < this.sizeXMax ? this.x += this.sizeX : this.x = 0; 
        this.x === 0 ? this.y += this.sizeY : null;
        this.y > this.sizeYMax ? this.y = 0 : null;
    }
}
