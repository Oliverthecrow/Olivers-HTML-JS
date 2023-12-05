
let intervalId = setInterval(DrawWater, 1000);
let intervalID2 = setInterval(BG, 10000);

let WIW = window.innerWidth
let WIH = window.innerHeight

let x;
let y;

let water = {
    X: 0,
    Y: 0,
    R: 25,
    color: "rgba(30, 70, 255, .7)",
};
function setup() {
    let sketch = createCanvas(WIW, WIH);
    sketch.parent("WaterSimulationCanvas");
}
function draw() { //--------------------------------- start of draw ---------------------------------------------------------//
    background(0)
    BG()

    randomcords();

    fill(0);
    stroke(255);
    rect(100, 100, WIW - 200, window.innerHeight - 200);

    clearInterval(intervalID)
    clearInterval(intervalID2)

}
function mouseClicked() {
    print(mouseY)
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
function DrawWater() {
    fill(water.color)
    circle(random(100 + water.R, WIW - 200 + water.R), random(100 + water.R, WIH - 150), water.R);
    circle(random(100 + water.R, WIW - 200 + water.R), random(100 + water.R, WIH - 150), water.R);
    circle(random(100 + water.R, WIW - 200 + water.R), random(100 + water.R, WIH - 150), water.R);
    circle(random(100 + water.R, WIW - 200 + water.R), random(100 + water.R, WIH - 150), water.R);
    circle(random(100 + water.R, WIW - 200 + water.R), random(100 + water.R, WIH - 150), water.R);
    circle(random(100 + water.R, WIW - 200 + water.R), random(100 + water.R, WIH - 150), water.R);
    circle(random(100 + water.R, WIW - 200 + water.R), random(100 + water.R, WIH - 150), water.R);
    circle(random(100 + water.R, WIW - 200 + water.R), random(100 + water.R, WIH - 150), water.R);
    circle(random(100 + water.R, WIW - 200 + water.R), random(100 + water.R, WIH - 150), water.R);
    circle(random(100 + water.R, WIW - 200 + water.R), random(100 + water.R, WIH - 150), water.R);
    circle(random(100 + water.R, WIW - 200 + water.R), random(100 + water.R, WIH - 150), water.R);
    circle(random(100 + water.R, WIW - 200 + water.R), random(100 + water.R, WIH - 150), water.R);
    circle(random(100 + water.R, WIW - 200 + water.R), random(100 + water.R, WIH - 150), water.R);
    circle(random(100 + water.R, WIW - 200 + water.R), random(100 + water.R, WIH - 150), water.R);
    circle(random(100 + water.R, WIW - 200 + water.R), random(100 + water.R, WIH - 150), water.R);
    circle(random(100 + water.R, WIW - 200 + water.R), random(100 + water.R, WIH - 150), water.R);
    circle(random(100 + water.R, WIW - 200 + water.R), random(100 + water.R, WIH - 150), water.R);
    circle(random(100 + water.R, WIW - 200 + water.R), random(100 + water.R, WIH - 150), water.R);
    circle(random(100 + water.R, WIW - 200 + water.R), random(100 + water.R, WIH - 150), water.R);
    circle(random(100 + water.R, WIW - 200 + water.R), random(100 + water.R, WIH - 150), water.R);
    circle(random(100 + water.R, WIW - 200 + water.R), random(100 + water.R, WIH - 150), water.R);
    circle(random(100 + water.R, WIW - 200 + water.R), random(100 + water.R, WIH - 150), water.R);
    circle(random(100 + water.R, WIW - 200 + water.R), random(100 + water.R, WIH - 150), water.R);
    circle(random(100 + water.R, WIW - 200 + water.R), random(100 + water.R, WIH - 150), water.R);
    circle(random(100 + water.R, WIW - 200 + water.R), random(100 + water.R, WIH - 150), water.R);
    circle(random(100 + water.R, WIW - 200 + water.R), random(100 + water.R, WIH - 150), water.R);
    circle(random(100 + water.R, WIW - 200 + water.R), random(100 + water.R, WIH - 150), water.R);
    circle(random(100 + water.R, WIW - 200 + water.R), random(100 + water.R, WIH - 150), water.R);
    circle(random(100 + water.R, WIW - 200 + water.R), random(100 + water.R, WIH - 150), water.R);
    circle(random(100 + water.R, WIW - 200 + water.R), random(100 + water.R, WIH - 150), water.R);
    circle(random(100 + water.R, WIW - 200 + water.R), random(100 + water.R, WIH - 150), water.R);
    circle(random(100 + water.R, WIW - 200 + water.R), random(100 + water.R, WIH - 150), water.R);
}
function BG() {
    fill(0);
    stroke(255);
    rect(100, 100, WIW - 200, window.innerHeight - 200);
}

