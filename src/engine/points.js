class Points {
    constructor() {
        this.points = 0;
    }

    draw() { 
        this.points += 1;
    }
    
    animation() {
        textSize(100);
        fill(255);
        text(this.points, width - width / 20, height / 20);
    }
}