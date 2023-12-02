let score = 0;
let name = "";
let ranking = "";
let scoreCheck = false;
let Q1Answered = false;
let Q2Answered = false;
let Q3Answered = false;
let Q4Answered = false;
let Q5Answered = false;
let testFinished = false;
let Q1Correct = false;
//Q1MegaCorrect is intentional, there are two right answers to the first question, just one of them gives more points 
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
    let sketch = createCanvas(1920, 950);
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
    text("THE COOLNESS TEST", 725, 50);
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
    text(name + ", your coolness™ score is " + score, 1200, 600);
    text("Click ? to check your rank", 1200, 650);
    if (scoreCheck === true) {
        if (ranking === "diamond") {
            text(name + ", your rank is " + ranking + "\n100%, good job! You're cool", 1200, 700);
            text("Click ! to retake test", 1200, 785);
            textSize(10);
            text("(only works if all questions are done)", 1660, 785);
        }
        else {
            text(name + ", your rank is " + ranking, 1200, 700);
            text("Click ! to retake test", 1200, 750);
            textSize(10);
            text("(only works if all questions are done)", 1660, 745);
        }
    }
}
function keyPressed() {
    // correct answers for test
    if (key === "q" && !Q1Answered) {
        score++;
        Q1Correct = true;
    }
    else if (key === "e" && !Q1Answered) {
        score += 2;
        Q1MegaCorrect = true;
    }
    else if (key === "t" && !Q2Answered) {
        score++;
        Q2Correct = true;
    }
    else if (key === "i" && !Q3Answered) {
        score++;
        Q3Correct = true;
    }
    else if (key === "p" && !Q4Answered) {
        score++;
        Q4Correct = true;
    }
    else if (key === "f" && !Q5Answered) {
        score++;
        Q5Correct = true;
    }
    // to check test score
    if (key === "?") {
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
    if (testFinished && key === "!") {
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
    if (key === "q" || key === "w" || key === "e") {
        Q1Answered = true;
    }
    else if (key === "r" || key === "t" || key === "y") {
        Q2Answered = true;
    }
    else if (key === "u" || key === "i" || key === "o") {
        Q3Answered = true;
    }
    else if (key === "p" || key === "a" || key === "s") {
        Q4Answered = true;
    }
    else if (key === "d" || key === "f" || key === "g") {
        Q5Answered = true;
    }
}