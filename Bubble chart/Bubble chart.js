let WIW = window.innerWidth;
let WIH = window.innerHeight;

let Countries = ["America", "Canada", "Mexico","Britian","China"]
let GDP = ["23 Trillion USD", "2 Trillion USD", "1.3 Trillion USD","3.1 Trillion USD","17.7 Trillion USD"]
let LifeExpectancy = ["77 Years", "82 Years", "70 Years","81 Years","78 Years"]
let population = ["332 Million", "38 Million", "127 Million","67 Million","1.4 Billion"]

function setup() {
    let sketch = createCanvas(window.innerWidth, window.innerHeight);
    sketch.parent("bubblechartcanvas");
    textAlign(CENTER);
    angleMode(DEGREES);
}
function draw() {
    background(255);
    stroke(60);

    //america circle
    fill(200, 80, 120);                         //size scale 100 mil
    circle(7.66 * WIW * 0.12, WIH * 0.520, 20 * 332000000 / 100000000);
    textSize(15)
    fill(0);
    text(Countries[0], 7.66 * WIW * 0.12, WIH * 0.48)

    //canada circle
    fill(80, 120, 200);
    circle(0.8 * WIW * 0.12, WIH * 0.35, 20 * 38000000 / 100000000)
    fill(0)
    text(Countries[1], 0.8 * WIW * 0.12, WIH * 0.33)

    //mexico circle
    fill(120, 180, 140);
    circle(0.725 * WIW * 0.12, WIH * 0.8, 20 * 127000000 / 100000000);
    fill(0);
    text(Countries[2], 0.725 * WIW * 0.12, WIH * 0.77)

    //britian circle
    fill(200,30,130);
    circle(1.05 * WIW * 0.12, WIH * 0.37, 20 * 67000000/100000000);
    fill(0)
    text(Countries[3],1.05 * WIW * 0.12, WIH * 0.35)

    //china circle
    fill(190, 130, 130);
    circle(5.8 * WIW * 0.12,WIH * 0.53, 20 * 1400000000/100000000);
    fill(0)
    text(Countries[4],5.8 * WIW * 0.12,WIH * 0.38)

    for (info = 0; info < 5; info++) {
        textSize(12)
        text(Countries[info] + ": Popluation: " + population[info] + ",\n Life Expectancy: " + LifeExpectancy[info] + ", GDP: " + GDP[info], WIW * 0.115 + info * 370, WIH * 0.085)
    }
    textSize(15)
    //vertical lines
    for (let yline = 0; yline < 9; yline++) {
        strokeWeight(1);
        line(yline * WIW * 0.12, WIH * 0.15, yline * WIW * 0.12, WIH * 0.88);
        strokeWeight(0);
    }
    for (let money = 1; money < 9; money++) {
        text(money * 3 + " Trillion", money * WIW * 0.12, WIH * 0.91)
    }
    textSize(25)
    text("GDP (USD)", WIW / 2, WIH * 0.96)
    textSize(18)
    //horizontal lines
    for (let xline = 0; xline < 8; xline++) {
        strokeWeight(1);
        line(WIW * 0.075, xline * WIH * 0.2, WIH * 1.95, xline * WIH * 0.2);
        strokeWeight(0);
    }
    text("70", WIW * 0.065, WIH * 0.805);
    text("75", WIW * 0.065, WIH * 0.605);
    text("80", WIW * 0.065, WIH * 0.405);
    text("85", WIW * 0.065, WIH * 0.205);
    push();
    translate(WIW * 0.035, WIH * 0.5);
    rotate(-90);
    textSize(25)
    text("Life Expectancy (Years)", 0, 0);
    pop();

    //fun fact: ach pixel in graph is equal to 14511041009.5 USD of GDP

    text("Size is based on population size, Diamater = Popluation/100 mil", WIW / 2, WIH * 0.05)
    text("Life Expectancy vs GDP",WIW/2,WIH*0.14)
}
function mousePressed() {
    print("Mouse X: " + mouseX);
}