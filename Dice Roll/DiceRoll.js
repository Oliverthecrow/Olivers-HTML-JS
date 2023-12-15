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

let previousrollP = 0;
let previousrollC = 0;

let DEBT = 0;
let interestRate = 0.015;
let totalLoanAmount = 0;
setInterval(interest, 2000);

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
        loadImage('one.png'), //0
        loadImage('two.png'), //1
        loadImage('3.svg'), //2
        loadImage('4.svg'), //3
        loadImage('5.png'), //4
        loadImage('6.png'), //5
    ];
    Cdie = [
        loadImage('one.png'), //0
        loadImage('two.png'), //1
        loadImage('3.svg'), //2
        loadImage('4.svg'), //3
        loadImage('5.png'), //4
        loadImage('6.png'), //5
    ];
    imageMode(CENTER)
    rectMode(CENTER)
    textAlign(CENTER)

    textSize(30)
    BET = 0;
}
function draw() { //-------------------------------------------------- START OF DRAW -------------------------------------------//
    background(40);

    //there are some strange bugs with this not updating correctely so redoing it every frame should work :)
    slider.max = Balance

    fill(0, 0, 0, 0);
    stroke(0);
    strokeWeight(2);
    rect(window.innerWidth / 3, window.innerHeight / 1.9, 350, 350);
    rect(window.innerWidth / 1.5, window.innerHeight / 1.9, 350, 350);

    fill(255)
    strokeWeight(0)
    text("Player's Dice", window.innerWidth / 3, window.innerHeight / 3.2);
    text("Casino's Dice", window.innerWidth / 1.5, window.innerHeight / 3.2)
    textAlign(CENTER)
    textSize(18)
    text("Click L to take out Loan", window.innerWidth - 300, window.innerHeight / 1.2)
    textSize(50)
    text("DEBT: " + Math.round(100 * DEBT) / 100, window.innerWidth - 300, window.innerHeight / 1.13)
    textAlign(CENTER)
    if (hasrolledP) { text("You have Rolled", window.innerWidth / 3, window.innerHeight / 1.3) }
    if (hasrolledC) { text("The Casino has Rolled", window.innerWidth / 1.5, window.innerHeight / 1.3) }

    image(Pdie[selected_P], window.innerWidth / 3, window.innerHeight / 1.9, 350, 350);
    image(Cdie[selected_C], window.innerWidth / 1.5, window.innerHeight / 1.9, 350, 350);


    textSize(50)
    if (checked) {
        text("You Won $" + Math.round(100 * Gained) / 100, window.innerWidth / 2, window.innerHeight / 1.05)
        if (previousrollC === selected_C && previousrollP === selected_P) {
            text("YOU WON IT BIG!!!", window.innerWidth / 2, window.innerHeight / 1.15)
        }
    }

    text("Your Balance: " + Math.round(100 * Balance) / 100, window.innerWidth - 300, window.innerHeight / 1.05)
    text("Current Bet: " + Math.round(100 * BET) / 100, window.innerWidth / 7, window.innerHeight / 1.15)

    fill(255, 0, 0)
    if (Balance <= 3) { text("YOU ARE BANKRUPT,  CLICK L TO TAKE OUT LOAN \n OR R TO RESART", window.innerWidth / 2, window.innerHeight / 2) }

    fill(255)
    text("Previous Roll:" + (previousrollP + 1), window.innerWidth / 3, window.innerHeight / 1.3)
    text("Previous Roll:" + (previousrollC + 1), window.innerWidth / 1.5, window.innerHeight / 1.3)
} //---------------------------------------------------------------- END OF DRAW -----------------------------------------------------//
function keyPressed() {

    if (!hasrolledP) {
        if (key === "p" || key === "P") {
            Balance -= BET;
            previousrollP = selected_P;
            selected_P = Math.floor(Math.random() * ((5 - 0) + 1) + 0);
            hasrolledP = true;
        }
    }
    if (!hasrolledC) {
        if (key === "c" || key === "C") {
            previousrollC = selected_C;
            selected_C = Math.floor(Math.random() * ((5 - 0) + 1) + 0);
            hasrolledC = true;
        }
    }
    if (!hasrolledC && !hasrolledP) {
        if (key === " ") {
            Balance -= BET;
            previousrollC = selected_C;
            previousrollP = selected_P;
            selected_P = Math.floor(Math.random() * ((5 - 0) + 1) + 0);
            selected_C = Math.floor(Math.random() * ((5 - 0) + 1) + 0);
            hasrolledC = true;
            hasrolledP = true;
        }
    }
    if (hasrolledC && hasrolledP) {
        if (selected_P === previousrollP && selected_C === previousrollC) {
            Balance += BET * 20;
            Gained = BET * 20;
        }
        else if (selected_P > selected_C) {
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
    else if (key === "L" || key === "l") {
        DEBT += 3000;
        Balance += 3000;
        slider.max = Balance;
    }
    else if (key === "R" || key === "r") {
        if (Balance <= 3) {
            DEBT = 0;
            Balance = 1500;
        }
    }
    console.log("selected_P:", selected_P);
    console.log("selected_C:", selected_C);
    console.log("BET:", BET);
}
function interest() {
    if (DEBT > 0) {
        let interestAmount = DEBT * interestRate;
        DEBT -= interestAmount;
        Balance -= interestAmount * 1.05;
        totalLoanAmount += interestAmount;
    }
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
