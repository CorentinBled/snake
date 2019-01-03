function Food() {
    this.x = 100;
    this.y = 100;

    this.update = function () {
            // outputs rounded number between 0 and 30, * 20 to keep in grid
             var randx = floor((random() * 30) + 1) * 20; 
             var randy = floor((random() * 30) + 1) * 20;
             this.x = constrain(randx,0, width-scl);
             this.y = constrain(randy,0, width-scl);
        }

    this.show = function () {
        fill(204, 102, 0);
        rect(this.x, this.y, scl, scl);
    }
}
