
let WIW = window.innerWidth;
let WIH = window.innerHeight;

let scenenum = 1;
let score = 0;

function setup() {
    let sketch = createCanvas(WIW, WIH);
    sketch.parent("TriviaCanvas");
    background(0);
    textAlign(CENTER);
    intro();
}
function draw() {
    question(scenenum);
}
function keyPressed() {
    if (key === "1" && scenenum === 1) {
        scenenum++;
        let answer = window.prompt("What is this thing called").toLowerCase();
        if (answer === "praetorian") {
            score += 2;
            displayScore("Fully Correct", score);
        }
        else if (answer.charAt(0) === "m") { //checks to see if answer starts with m
            score += 1;
            displayScore("Partially Correct", score);
        }
        else {
            displayScore("Wrong", score)
        }
    }
    if (key === "2" && scenenum === 2) {
        scenenum++;
        //--------------- Start of code to copy -------------------------------
        let answer = window.prompt("Who is the best teacher").toLowerCase(); //added  .toLowerCase() so that it doesn't matter if user forgets about capitlization. 
        if (answer === "mr. couprie") {
            score += 2;
            displayScore("Fully Correct", score);
        }
        else if (answer.includes("c")) { //this must be altered for each question you add
            score += 1;
            displayScore("Partially Correct", score);
        }
        else {
            displayScore("Wrong", score);
        }//--------------- End of code to copy -------------------------------
    }
    else if (key === "3" && scenenum === 3) {
        scenenum++;
        let answer = window.prompt("What is the capital city of France?").toLowerCase();
        if (answer === "paris") {
            score += 2;
            displayScore("Fully Correct", score);
        }
        else if (answer.startsWith("metz")) { // returns true if user entered metz as first word
            score += 1;
            displayScore("Partially Correct", score);
        }
        else {
            displayScore("Wrong", score)
        }
    }
    else if (key === "4" && scenenum === 4) {
        scenenum++;
        let answer = window.prompt("What is the coolest shape").toLowerCase();
        if (answer === "rhombus") {
            score += 2;
            displayScore("Fully Correct", score);
        }
        else if (answer.includes("r")) {
            score += 1;
            displayScore("Partially Correct", score);
        }
        else {
            displayScore("Wrong", score)
        }
    }
    else if (key === "5" && scenenum === 5) {
        scenenum++;
        let answer = window.prompt("What is the best layer of the atmopshere?").toLowerCase();
        if (answer === "thermosphere") {
            score += 2;
            displayScore("Fully Correct", score);
        }
        else if (answer.endsWith("stratosphere")) { //checks to see if final thing user entered was stratosphere 
            score += 1;
            displayScore("Partially Correct", score);
        }
        else {
            displayScore("Wrong", score)
        }
    }
    else if (key === "6" && scenenum === 6) {
        scenenum++;
        let answer = window.prompt("What is the best food").toLowerCase();
        if (answer === "fried chicken") {
            score += 2;
            displayScore("Fully Correct", score);
        }
        else if (answer === "pizza") {
            score += 1;
            displayScore("Partially Correct", score);
        }
        else {
            displayScore("Wrong", score)
        }
    }
}
function displayScore(answer, score) {
    background(0);
    textSize(45);
    fill(255);
    text(answer + "!", WIW * 0.5, WIH * 0.4);
    textSize(30);
    text("Your Score: " + score, WIW * 0.5, WIH * 0.5);
}
function question(questionnum) {
    fill(0)
    rect(0, WIH * 0.61, WIW, WIH) //draws black rectanlge to get rid of text bug caused by drawing the text with an unchanging background. 
    textSize(40);
    fill(255);
    text("Question: " + questionnum, WIW * 0.5, WIH * 0.7);
    text("Press the " + questionnum + " to answer the question", WIW * 0.5, WIH * 0.8);
    //quesitonnum is what question we are on, aka, the same as scenenum.

    if(questionnum === 1) {
        image(createImg('https://destiny.wiki.gallery/images/thumb/8/8e/Praetorian.jpg/1200px-Praetorian.jpg'),WIW*0.75,WIH*0.3,225,350)
    }
    if(questionnum >= 7) {
        background(0)
        fill(255)
        text("QUIZ DONE: your total score was " + score,WIW*0.5,WIH*0.5)
    }
}
function intro() {
    fill(255)
    textSize(20)
    text("Random Trivia Questions, press the coresponding number to answer the first question",WIW*0.5,WIH*0.1);
}