let CasinoRoll = 0;
let PlayerROll = 0;
let selected_P = 0;
let selected_C = 0;
let Pdie;
let Cdie;
let hasrolledP = false;
let hasrolledC = false;
var Balance = 1500;
let PRoll = 0;
let CRoll = 0;
let checked = false;
let DEBT = 0;
let BET;

document.addEventListener("DOMContentLoaded", function () {
    let slider = document.getElementById("BETSLIDER");
    slider.addEventListener("input", function () {
        BET = slider.value;
    });
});
document.addEventListener("DOMContentLoaded", function () {
    let slider = document.getElementById("BETSLIDER");
    slider.addEventListener("input", function () {
        slider.max = Balance;
    });
});

function setup() {
    let sketch = createCanvas(window.innerWidth, window.innerHeight);
    sketch.parent("CasinoCanvas");

    Pdie = [
        one = loadImage('one.png'), //0
        two = loadImage('two.png'), //1
        three = loadImage('3.svg'), //2
        four = loadImage('4.svg'), //3
        five = loadImage('5.png'), //4
        six = loadImage('6.png'), //5
    ];
    Cdie = [
        one1 = loadImage('one.png'), //0
        two1 = loadImage('two.png'), //1
        three1 = loadImage('3.svg'), //2
        four1 = loadImage('4.svg'), //3
        five1 = loadImage('5.png'), //4
        six1 = loadImage('6.png'), //5
    ];
    imageMode(CENTER)
    rectMode(CENTER)
    textAlign(CENTER)

    textSize(30)
}
function draw() { //-------------------------------------------------- START OF DRAW -------------------------------------------//
    background(40);

    //there are some strange bugs with this not updating correctely so redoing it every frame should work :)
    slider.max = Balance

    fill(0, 0, 0, 0);
    stroke(0);
    strokeWeight(2);
    rect(window.innerWidth / 3, window.innerHeight / 2, 350, 350);
    rect(window.innerWidth / 1.5, window.innerHeight / 2, 350, 350);

    fill(255)
    strokeWeight(0)
    text("Player's Dice", window.innerWidth / 3, window.innerHeight / 3.4);
    text("Casino's Dice", window.innerWidth / 1.5, window.innerHeight / 3.4)
    text("DEBT: " + DEBT,150,window.innerHeight/2)
    if (hasrolledP) { text("You have Rolled", window.innerWidth / 3, window.innerHeight / 1.35) }
    if (hasrolledC) { text("The Casino has Rolled", window.innerWidth / 1.5, window.innerHeight / 1.35) }

    image(Pdie[selected_P], window.innerWidth / 3, window.innerHeight / 2, 350, 350);
    image(Cdie[selected_C], window.innerWidth / 1.5, window.innerHeight / 2, 350, 350);


    textSize(50)
    if (checked) { text("You Won $" + Math.round(100 * Gained) / 100, window.innerWidth / 2, window.innerHeight / 1.15) }

    text("Your Balance: " + Math.round(100 * Balance) / 100, window.innerWidth - 300, window.innerHeight / 1.15)
    text("Current Bet: " + Math.round(100 * BET) / 100, window.innerWidth / 7, window.innerHeight / 1.15)

    fill(255,0,0)
    if(Balance <= 0){ text("YOU ARE BANKRUPT,  CLICK L TO TAKE OUT LOAN",window.innerWidth/2,window.innerHeight/2)}
} //---------------------------------------------------------------- END OF DRAW -----------------------------------------------------//
function keyPressed() {
    if (!hasrolledP) {
        if (key === "p" || key === "P") {
            selected_P = Math.floor(Math.random() * ((5 - 0) + 1) + 0);
            hasrolledP = true;
            Balance -= BET
        }
    }
    if (!hasrolledC) {
        if (key === "c" || key === "C") {
            selected_C = Math.floor(Math.random() * ((5 - 0) + 1) + 0);
            hasrolledC = true;
        }
    }
    if (hasrolledC && hasrolledP) {
        if (selected_P > selected_C) {
            Balance += BET * 0.25;
            Gained = BET * 0.25;
        }
        else if (selected_P === selected_C) {
            Balance += BET * 2;
            Gained = BET * 2;
        }
        else if (selected_C > selected_P) {
            Balance += BET * 0;
            Gained = BET * 0;
        }
        checked = true;
        BET = 0;
        hasrolledC = false;
        hasrolledP = false;
    }
    else if(key === "L") {
        DEBT += 3000;
        Balance += 3000;
        slider.max = Balance
    }
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}