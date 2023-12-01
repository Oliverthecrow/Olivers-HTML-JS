let score = 0;
let name = "";
let ranking = "";
let scoreCheck = false;
let Q1ANS = false;
let Q2ANS = false;
let Q3ANS = false;
let Q4ANS = false;
let Q5ANS = false;
let testFinished = false;

function setup() {
    let sketch = createCanvas(1920, 950);
    sketch.parent("mycanvas");
    name = window.prompt("What is your name?");
}
function preload() {
    BG = loadImage("./coolnessBG.jpg");
}
function draw() {
    background(BG);
    fill(255);
    stroke(255);
    textSize(50);
    text("THE COOLNESS TEST", 725, 50);
    strokeWeight(5);
    line(0, 65, 2000, 65);

    strokeWeight(0.5);
    textSize(20);
    if (Q1ANS === false) {
        text("Question 1: Do you have own an air fryer? \n q) YES    w) NO    e) I HAVE TWENTY!", 50, 200);
    }
    if (Q2ANS === false) {
        text("Question 2: What animal out of the the choices is your favourite? \n r) Dogs    t) Cats    y) Birds", 50, 300);
    }
    if (Q3ANS === false) {
        text("Question 3: How many hours in Satisfactory do you have \n u) What is that?    i) >2    o) <2", 50, 400);
    }
    if (Q4ANS === false) {
        text("Question 4: Favourite subject in school \n p) Math    a) L.A    s) Social", 50, 500);
    }
    if (Q5ANS === false) {
        text("Question 5: What is 9 + 10 \n d) 19    f) 21    g) 90", 50, 600);
    }

    textSize(35)
    text(name + ", your coolness™ score is " + score, 1300, 600);
    text("Click ? to check your rank", 1300, 650);
    if (scoreCheck === true) {
        if (ranking === "diamond") {
            text(name + " your rank is " + ranking + "\n100%, good job! Your cool", 1300, 700)
            text("Click ! to retake test", 1300, 785)
        }
        else {
            text(name + " your rank is " + ranking, 1300, 700);
            text("Click ! to retake test", 1300, 750)
        }
    }
}
function keyPressed() {
    if (key === "q" && Q1ANS === false) {
        score++
    }
    else if (key === "e" && Q1ANS === false) {
        score += 2
    }
    else if (key === "t" && Q2ANS === false) {
        score++
    }
    else if (key === "o" && Q3ANS === false) {
        score++
    }
    else if (key === "p" && Q4ANS === false) {
        score++
    }
    else if (key === "f" && Q5ANS === false) {
        score++
    }
    else if (key === "?") {
        scoreCheck = true
        if (score >= 6) {
            ranking = "diamond"
        }
        else if (score < 6 && score >= 3) {
            ranking = "silver"
        }
        else if (score < 3) {
            ranking = "wood"
        }
    }
    if (Q1ANS === true && Q2ANS === true && Q3ANS === true && Q4ANS === true && Q5ANS === true && scoreCheck === true) {
        testFinished = true
    }
    if (testFinished === true) {
        if (key === "!") {
            Q1ANS = false;
            Q2ANS = false;
            Q3ANS = false;
            Q4ANS = false;
            Q5ANS = false;
            scoreCheck = false;
            testFinished = false;
            score = 0;
            ranking = "";
        }
    }
    if (key === "q" || key === "w" || key === "e") {
        Q1ANS = true;
    }
    else if (key === "r" || key === "t" || key === "y") {
        Q2ANS = true;
    }
    else if (key === "u" || key === "i" || key === "o") {
        Q3ANS = true;
    }
    else if (key === "p" || key === "a" || key === "s") {
        Q4ANS = true;
    }
    else if (key === "d" || key === "f" || key === "g") {
        Q5ANS = true;
    }
}
