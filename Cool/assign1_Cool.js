let score = 0;
let name = "";
let ranking = "";
let scoreCheck = false;
let testFinished = false;

let Q1Answered = false;
let Q2Answered = false;
let Q3Answered = false;
let Q4Answered = false;
let Q5Answered = false;
let Q1Correct = false;
let Q1MegaCorrect = false;
let Q2Correct = false;
let Q3Correct = false;
let Q4Correct = false;
let Q5Correct = false;
let Q1 = "Question 1: Do you have own an air fryer? \n q) YES    w) NO    e) I HAVE TWENTY!";
let Q2 = "Question 2: What animal out of the the choices is your favourite? \n r) Dogs    t) Cats    y) Birds";
let Q3 = "Question 3: How many hours in Satisfactory do you have \n u) What is that?    i) >2     o) <2";
let Q4 = "Question 4: Favourite subject in school \n p) Math     a) L.A     s) Social";
let Q5 = "Question 5: What is 9 + 10 \n d) 19     f) 21     g) 90";

let green;
let red;
let blue;

function setup() {
    let sketch = createCanvas(window.innerWidth, window.innerHeight);
    sketch.parent("mycanvas");
    name = window.prompt("What is your name?");
    textFont('Courier New');
}
function preload() {
    BG = loadImage("./coolnessBG.jpg");
    green = color(50, 200, 50);
    red = color(200, 50, 50);
    blue = color(50, 50, 200);
}
function draw() {
    background(BG);
    fill(255);
    stroke(255);
    textSize(50);
    textAlign(CENTER);
    text("THE COOLNESS TEST", window.innerWidth / 2, 50);
    textAlign(LEFT);
    strokeWeight(5);
    line(0, 65, 2000, 65);

    strokeWeight(0);
    textSize(20);
    if (!Q1Answered) {
        text(Q1, 50, 200);
    }
    else if (Q1Correct) {
        fill(green);
        text(Q1, 50, 200);
        fill(255);
    }
    else if (Q1MegaCorrect) {
        fill(blue);
        text(Q1, 50, 200);
        fill(255);
    } else {
        fill(red);
        text(Q1, 50, 200);
        fill(255);
    }
    if (!Q2Answered) {
        text(Q2, 50, 300);
    }
    else if (Q2Correct) {
        fill(green);
        text(Q2, 50, 300);
        fill(255);
    } else {
        fill(red);
        text(Q2, 50, 300);
        fill(255);
    }
    if (!Q3Answered) {
        text(Q3, 50, 400);
    }
    else if (Q3Correct) {
        fill(green);
        text(Q3, 50, 400);
        fill(255);
    } else {
        fill(red);
        text(Q3, 50, 400);
        fill(255);
    }
    if (!Q4Answered) {
        text(Q4, 50, 500);
    }
    else if (Q4Correct) {
        fill(green);
        text(Q4, 50, 500);
        fill(255);
    } else {
        fill(red);
        text(Q4, 50, 500);
        fill(255);
    }
    if (!Q5Answered) {
        text(Q5, 50, 600);
    }
    else if (Q5Correct) {
        fill(green);
        text(Q5, 50, 600);
        fill(255);
    } else {
        fill(red);
        text(Q5, 50, 600);
        fill(255);
    }

    textSize(35)
    textAlign(RIGHT)
    text(name + ", your coolness™ score is " + score, window.innerWidth - 25, 500);
    text("Click ? to check your rank", window.innerWidth - 25, 550);
    if (scoreCheck === true) {
        if (ranking === "diamond") {
            text(name + ", your rank is " + ranking + "\n100%, good job! You're cool", window.innerWidth - 25, 600);
            text("Click ! to retake test", window.innerWidth - 25, 700);
            textSize(12);
            text("(only works if all questions are done)", window.innerWidth - 25, 720);
        }
        else {
            text(name + ", your rank is " + ranking, window.innerWidth - 25, 600);
            text("Click ! to retake test", window.innerWidth - 25, 650);
            textSize(12);
            text("(only works if all questions are done)", window.innerWidth - 25, 670);
        }
    }
}
function keyPressed() {
    // correct answers for test
    if (key === "q" || key === "Q" && !Q1Answered) {
        score++;
        Q1Correct = true;
    }
    else if (key === "e" || key === "E" && !Q1Answered) {
        score += 2;
        Q1MegaCorrect = true;
    }
    else if (key === "t" || key === "T" && !Q2Answered) {
        score++;
        Q2Correct = true;
    }
    else if (key === "i" || key === "I" && !Q3Answered) {
        score++;
        Q3Correct = true;
    }
    else if (key === "p" || key === "P" && !Q4Answered) {
        score++;
        Q4Correct = true;
    }
    else if (key === "f" || key === "F" && !Q5Answered) {
        score++;
        Q5Correct = true;
    }
    // to check test score
    if (key === "?" || key === "/") {
        scoreCheck = true;
        if (score === 6) {
            ranking = "diamond";
        }
        else if (score === 5) {
            ranking = "gold";
        }
        else if (score >= 3) {
            ranking = "silver";
        }
        else {
            ranking = "wood";
        }
    }
    else if (Q1Answered && Q2Answered && Q3Answered && Q4Answered && Q5Answered && scoreCheck) {
        testFinished = true;
    }
    // resets variables to default
    if (testFinished && key === "!" || key === "1") {
        Q1Answered = false;
        Q2Answered = false;
        Q3Answered = false;
        Q4Answered = false;
        Q5Answered = false;
        scoreCheck = false;
        testFinished = false;
        score = 0;
        ranking = "";
        Q1Correct = false;
        Q1MegaCorrect = false;
        Q2Correct = false;
        Q3Correct = false;
        Q4Correct = false;
        Q5Correct = false;

    }
    //checks to see if a question has been asnwered
    if (key === "q" || key === "w" || key === "e" || key === "Q" || key === "W" || key === "E") {
        Q1Answered = true;
    }
    else if (key === "r" || key === "t" || key === "y" || key === "R" || key === "T" || key === "Y") {
        Q2Answered = true;
    }
    else if (key === "u" || key === "i" || key === "o" || key === "U" || key === "I" || key === "O") {
        Q3Answered = true;
    }
    else if (key === "p" || key === "a" || key === "s" || key === "P" || key === "A" || key === "S") {
        Q4Answered = true;
    }
    else if (key === "d" || key === "f" || key === "g" || key === "D" || key === "F" || key === "G") {
        Q5Answered = true;
    }
}