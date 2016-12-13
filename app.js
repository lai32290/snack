let snack;
let scl = 20;
let food;

function setup() {
    createCanvas(100, 50);
    createCanvas(600, 600);
    snack = new Snack();

    frameRate(10);
    pickLocation();
}

function pickLocation() {
    var cols = floor(width / scl);
    var rows = floor(height / scl);

    food = createVector(floor(random(cols)), floor(random(rows)));
    food.mult(scl);
}

function draw() {
    background(51);
    snack.update();
    snack.show();

    if(snack.eat(food)) {
        pickLocation();
    }

    fill(255, 0, 100);
    rect(food.x, food.y, scl, scl);
}

function keyPressed() {
    if(keyCode === UP_ARROW) {
        snack.dir(0, -1);
    } else if (keyCode === DOWN_ARROW) {
        snack.dir(0, 1);
    }else if(keyCode === RIGHT_ARROW) {
        snack.dir(1, 0);
    }else if(keyCode === LEFT_ARROW) {
        snack.dir(-1, 0);
    }
}