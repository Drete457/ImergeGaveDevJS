class Character {

    constructor(image) {
        this.image = image;
        this.sizeX = 58;
        this.sizeY = 65;
        this.characterWidth = width / 9 ;
        this.characterHeigth = height / 6;
       // this.characterWidth = width / 9;
        //this.characterHeigth = height / 6;
        this.x = this.sizeX;
        this.y = this.sizeY * 11;
        this.sizeXMax = this.sizeX;
        this.sizeYMax = this.sizeY * 8;
    }

    drawCharacter() {
        image(this.image, 20, height - height / 5, this.characterWidth, this.characterHeigth,
            this.x,
            this.y,
            this.sizeX, this.sizeY);
         this.animation();
    }

    animation() {
        console.log(this.x)
        this.x < this.sizeYMax-this.sizeX ? this.x += this.sizeX+6 : this.x = 0;
    
    }
}

