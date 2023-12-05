let WIW = window.innerWidth
let WIH = window.innerHeight

let water = {
    X: 0,
    Y: 0,
    R: 25,
};
function setup() {
    let sketch = createCanvas(WIW, WIH);
    sketch.parent("WaterSimulationCanvas");
    rectMode(CORNERS)
}
function draw() { //--------------------------------- start of draw ---------------------------------------------------------//
    background(0);
    BG()

    fill(30, 70, 255)
    DrawWater();

    textAlign(CENTER);
    textSize(25);
    fill(255);
    text("yes, this is all it does, it was practice to better understand functions and calling them.", WIW / 2, WIH - 30);
}
function mouseClicked() {
    print(mouseY);
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
function DrawWater() {
    for (let circlecount = 0; circlecount < 30; circlecount++) {
        circle(random(100 + water.R, WIW - 200 - water.R), random(100 + water.R, WIH - 200 - water.R), water.R);
        circle(random(100 + water.R, WIW - 200 - water.R), random(100 + water.R, WIH - 200 - water.R), water.R);
        circle(random(100 + water.R, WIW - 200 - water.R), random(100 + water.R, WIH - 200 - water.R), water.R);
        circle(random(100 + water.R, WIW - 200 - water.R), random(100 + water.R, WIH - 200 - water.R), water.R);
        circle(random(100 + water.R, WIW - 200 - water.R), random(100 + water.R, WIH - 200 - water.R), water.R);
    }
}
function BG() {
    fill(0);
    stroke(255);
    rect(100, 100, WIW - 200, window.innerHeight - 200);
}

