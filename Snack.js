function Snack() {
    this.x = 0;
    this.y = 0;
    this.xSpeed = 1;
    this.ySpeed = 0;
    this.total = 0;
    this.tail = [];

    this.update = function () {
        if(this.total === this.tail.length) {
            for(var i = 0; i < this.tail.length - 1; i++) {
                this.tail[i] = this.tail[i + 1];
            }
        }
        this.tail[this.total - 1] = createVector(this.x, this.y);

        this.x = this.x + this.xSpeed * scl;
        this.y = this.y + this.ySpeed * scl;

        this.x = constrain(this.x, 0, width - scl);
        this.y = constrain(this.y, 0, height - scl);
    };

    this.show = function () {
        fill(255);
        this.tail.forEach(i => {
            rect(i.x, i.y, scl, scl);
        });

        rect(this.x, this.y, scl, scl);
    };

    this.eat = function(food) {
        var d = dist(this.x, this.y, food.x, food.y);

        if(d < 1) {
            this.total++;
            return true;
        }
        return false;
    };

    this.dir = function (x, y) {
        this.xSpeed = x;
        this.ySpeed = y;
    };
}