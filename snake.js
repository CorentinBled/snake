function Snake() {
    
    this.x = 300;
    this.y = 300;
    this.xspeed = 0;
    this.yspeed = 0;
    this.total = 0;
    this.blocks = [];
    
    

    this.update = function() {
        for(var i = this.total; i > 0; i--){
            this.blocks[i].x  = this.blocks[i-1].x;
            this.blocks[i].y = this.blocks[i-1].y;
        }
        
        this.x = this.x + this.xspeed*scl;
        this.y = this.y + this.yspeed*scl;

        this.x = constrain(this.x, 0, width-scl);
        this.y = constrain(this.y, 0, height-scl);
        this.blocks[0] = new Block(this.x, this.y);

    }

    this.dir = function(x, y) {
        this.xspeed = x;
        this.yspeed = y;
    }

    this.show = function() {
        
        for(var i = 0; i <= this.total; i++){
            fill(255);
            rect(this.blocks[i].x, this.blocks[i].y, scl, scl);
        }
        
    }

    this.eat = function() {
        this.total++;
        this.blocks[this.total] = [new Block(0, 0)];
    }

    this.collide = function() {
        for(var i = 1; i <= this.total; i++) {
            if((this.blocks[0].x == this.blocks[i].x && this.blocks[0].y == this.blocks[i].y) || (this.blocks[0].x == (0|599) || this.blocks[0].y == (0 | 599)) ){
                textAlign(CENTER)
                textSize(70);
                fill(255,50);
                noStroke();
                text('Game Over', 300, 300);
                return true;
            }
        }
        
    }

    this.reset = function() {
        this.x = 300;
        this.y = 300;
        this.xspeed = 0;
        this.yspeed = 0;
        this.total = 0;
        this.blocks = [];
    }
}