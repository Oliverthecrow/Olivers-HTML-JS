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
let Q1COR = false
//Q1COR2 is intentional, there are two right answers to the first question, just one of them gives more points 
let Q1COR2 = false
let Q2COR = false
let Q3COR = false
let Q4COR = false
let Q5COR = false


function setup() {
    let sketch = createCanvas(1920, 950);
    sketch.parent("mycanvas");
    name = window.prompt("What is your name?");
    textFont('Courier New')
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

    strokeWeight(0);
    textSize(20);
    if (Q1ANS === false) {
        text("Question 1: Do you have own an air fryer? \n q) YES    w) NO    e) I HAVE TWENTY!", 50, 200);
    }
    else if (Q1COR === true) {
        fill(50, 200, 50)
        text("Question 1: Do you have own an air fryer? \n q) YES    w) NO    e) I HAVE TWENTY!", 50, 200);
        fill(255)
    }
    else if (Q1COR2 === true) {
        fill(50, 50, 200)
        text("Question 1: Do you have own an air fryer? \n q) YES    w) NO    e) I HAVE TWENTY!", 50, 200);
        fill(255)
    } else {
        fill(200, 50, 50)
        text("Question 1: Do you have own an air fryer? \n q) YES    w) NO    e) I HAVE TWENTY!", 50, 200);
        fill(255)
    }
    if (Q2ANS === false) {
        text("Question 2: What animal out of the the choices is your favourite? \n r) Dogs    t) Cats    y) Birds", 50, 300);
    }
    else if (Q2COR === true) {
        fill(50, 200, 50)
        text("Question 2: What animal out of the the choices is your favourite? \n r) Dogs    t) Cats    y) Birds", 50, 300);
        fill(255)
    } else {
        fill(200, 50, 50)
        text("Question 2: What animal out of the the choices is your favourite? \n r) Dogs    t) Cats    y) Birds", 50, 300);
        fill(255)
    }
    if (Q3ANS === false) {
        text("Question 3: How many hours in Satisfactory do you have \n u) What is that?    i) >2    o) <2", 50, 400);
    }
    else if (Q3COR === true) {
        fill(50, 200, 50)
        text("Question 3: How many hours in Satisfactory do you have \n u) What is that?    i) >2    o) <2", 50, 400);
        fill(255)
    } else {
        fill(200, 50, 50)
        text("Question 3: How many hours in Satisfactory do you have \n u) What is that?    i) >2    o) <2", 50, 400);
        fill(255)
    }
    if (Q4ANS === false) {
        text("Question 4: Favourite subject in school \n p) Math    a) L.A    s) Social", 50, 500);
    }
    else if (Q4COR === true) {
        fill(50, 200, 50)
        text("Question 4: Favourite subject in school \n p) Math    a) L.A    s) Social", 50, 500);
        fill(255)
    } else {
        fill(200, 50, 50)
        text("Question 4: Favourite subject in school \n p) Math    a) L.A    s) Social", 50, 500);
        fill(255)
    }
    if (Q5ANS === false) {
        text("Question 5: What is 9 + 10 \n d) 19    f) 21    g) 90", 50, 600);
    }
    else if (Q5COR === true) {
        fill(50, 200, 50)
        text("Question 5: What is 9 + 10 \n d) 19    f) 21    g) 90", 50, 600);
        fill(255)
    } else {
        fill(200, 50, 50)
        text("Question 5: What is 9 + 10 \n d) 19    f) 21    g) 90", 50, 600);
        fill(255)
    }

    textSize(35)
    text(name + ", your coolness™ score is " + score, 1200, 600);
    text("Click ? to check your rank", 1200, 650);
    if (scoreCheck === true) {
        if (ranking === "diamond") {
            text(name + " your rank is " + ranking + "\n100%, good job! Your cool", 1200, 700);
            text("Click ! to retake test", 1200, 785);
            textSize(10);
            text("(only works if all questions are done)", 1660, 785);
        }
        else {
            text(name + " your rank is " + ranking, 1200, 700);
            text("Click ! to retake test", 1200, 750);
            textSize(10);
            text("(only works if all questions are done)", 1660, 745);
        }
    }
}
function keyPressed() {
    // correct answers for test
    if (key === "q" && Q1ANS === false) {
        score++;
        Q1COR = true;
    }
    else if (key === "e" && Q1ANS === false) {
        score += 2;
        Q1COR2 = true;
    }
    else if (key === "t" && Q2ANS === false) {
        score++;
        Q2COR = true;
    }
    else if (key === "o" && Q3ANS === false) {
        score++;
        Q3COR = true;
    }
    else if (key === "p" && Q4ANS === false) {
        score++;
        Q4COR = true;
    }

    else if (key === "f" && Q5ANS === false) {
        score++
        Q5COR = true;
    }
    // to check test score
    if (key === "?") {
        scoreCheck = true
        if (score === 6) {
            ranking = "diamond"
        }
        else if (score === 5) {
            ranking = "gold"
        }
        else if (score >= 3) {
            ranking = "silver"
        }
        else {
            ranking = "wood"
        }
    }
    else if (Q1ANS === true && Q2ANS === true && Q3ANS === true && Q4ANS === true && Q5ANS === true && scoreCheck === true) {
        testFinished = true
    }
    // resets variables to default
    if (testFinished === true && key === "!") {
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
    //checks to see if a question has been asnwered
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