let rocksize = 500;
let papersize = 400;
let scissorsize = 400;

let onpaper = false
let onrock = false;
let onscissor = false;
let chosen = false;

let player1input;
let player2input;

let score = 0;
let botscore = 0;
let scoregiven = false;

let rock;
let scissor;
let paper;

let img;

let Hint;
let selected_hint;

let speed = 5;

let rockX = window.innerWidth * 0.15;
let paperX = window.innerWidth / 2;
let scissorX = window.innerWidth * 0.85;
let rockX2 = window.innerWidth * 0.15;
let paperX2 = window.innerWidth / 2;
let scissorX2 = window.innerWidth * 0.85;
let halfY = window.innerHeight / 2;

function setup() {
    let sketch = createCanvas(window.innerWidth, window.innerHeight);
    sketch.parent("RockPaperScissorsCanvas");

    img = [
        scissor = loadImage('scissor.png'), //0
        rock = loadImage('rock.png'),
        paper = loadImage('paper.webp'), //2
    ];
    Hint = [
        "", //0 
        "",
        "",
        "",
        "",
        "Your Opponents hand trembles and their body seems to tense up", //rock     5
        "Your Opponent looks flately at your hand", //paper                         6
        "Your Opponent looks sharply serious", // scissor                           7
        "", 
        "",
        "",
        "", //11
    ];

    imageMode(CENTER)
    textAlign(CENTER)

    selected_hint = Math.floor(Math.random() * ((11 - 0) + 1) + 0);
}
function draw() { //----------------------------------------------Start of Draw -----------------------------------------------------//
    background(5);
    fill(255);

    updateScore(score);
    updateBotScore(botscore);

    bounds();

    textSize(40)
    text(Hint[selected_hint], window.innerWidth / 2, window.innerHeight * 0.9)

    if (chosen === false) {
        image(rock, rockX, halfY, rocksize, rocksize);
        image(paper, paperX, halfY, papersize + 100, papersize);
        image(scissor, scissorX, halfY, scissorsize, scissorsize);
    }
    //moves things to where they are supposed to go over time 
    else if (player1input === "rock") {
        image(rock, rockX, halfY, 500, 500);
    }
    else if (player1input === "paper") {
        if (paperX >= window.innerWidth * 0.15) { paperX -= speed }
        image(paper, paperX, halfY, 400 + 100, 400);
    }
    else if (player1input === "scissor") {
        if (scissorX >= window.innerWidth * 0.15) { scissorX -= speed }
        image(scissor, scissorX, halfY, 400, 400);
    }
    if (chosen === true) { //uses default variable numbers to avoid an issue with keeping size after choosing option.
        speed += 1
        if (player2input === "rock") {
            if (rockX2 <= window.innerWidth * 0.85) { rockX2 += speed }
            image(rock, rockX2, halfY, 500, 500)
        }
        else if (player2input === "paper") {
            if (paperX2 <= window.innerWidth * 0.85) { paperX2 += speed }
            image(paper, paperX2, halfY, 400 + 100, 400)
        }
        else if (player2input === "scissor") {
            if (scissorX2 <= window.innerWidth * 0.85) {scissorX2 += speed}
            image(scissor, scissorX2, halfY, 400, 400)
        }

        text("Player 1 Selected: " + player1input, window.innerWidth * 0.15, window.innerHeight * 0.75)
        text("Player 2 Selected: " + player2input, window.innerWidth * 0.85, window.innerHeight * 0.75)

        textSize(100)
        text(winconditions(), window.innerWidth / 2, window.innerHeight / 1.75)
        if (winconditions() === "You Lose") {
            text("-1 point", window.innerWidth / 2, window.innerHeight / 1.35)
        }
        else if (winconditions() === "You Win!") {
            text("+1 point", window.innerWidth / 2, window.innerHeight / 1.35)
        }
    }

} //--------------------------------------------------------------End of Draw -------------------------------------------------------//
// checks to see if on specific choice
function bounds() {
    if (chosen === false) {
        if (mouseX > (rockX) / 2 && mouseX < (rockX) * 1.5 && mouseY > (halfY) / 1.3 && mouseY < (halfY) * 1.3) {
            if (rocksize <= 700) {
                rocksize += 8.5;
            }
            onrock = true;
        }
        else { if (rocksize >= 500) { rocksize -= 8.5; } onrock = false; }

        if (mouseX > (window.innerWidth / 2) / 1.3 && mouseX < (window.innerWidth / 2) * 1.3 && mouseY > (halfY) / 1.3 && mouseY < (halfY) * 1.3) {
            if (papersize <= 500) {
                papersize += 5;
            }
            onpaper = true;
        }
        else { if (papersize >= 400) { papersize -= 5; } onpaper = false; }

        if (mouseX > (scissorX) / 1.3 && mouseX < (scissorX) * 1.3 && mouseY > (halfY) / 1.3 && mouseY < (halfY) * 1.3) {
            if (scissorsize <= 650) {
                scissorsize += 8.5;
            }
            onscissor = true;
        }
        else { if (scissorsize >= 400) { scissorsize -= 8.5 }; onscissor = false; }
    }
}
//allows user to select only one choice then makes "player 2" choose randomly from the choices
function mousePressed() {
    if (chosen === false) {
        if (onrock === true) {
            player1input = "rock"
            chosen = true
            scoregiven = false;
        }
        if (onpaper === true) {
            player1input = "paper"
            chosen = true
            scoregiven = false;
        }
        if (onscissor === true) {
            player1input = "scissor"
            chosen = true;
            scoregiven = false;
        }
        if (onscissor === true || onpaper === true || onrock === true && chosen === true) {
            selected_img = Math.floor(Math.random() * ((2 - 0) + 1) + 0);
            player2assigner();
            winconditions();
        }
    }
}
//resets stuff back to normal when hitting space
function keyPressed() {
    if (chosen) {
        if (key === " ") {
            chosen = false;
            selected_hint = Math.floor(Math.random() * ((11 - 0) + 1) + 0);
            rockX = window.innerWidth * 0.15;
            paperX = window.innerWidth / 2;
            scissorX = window.innerWidth * 0.85
            rockX2 = window.innerWidth * 0.15;
            paperX2 = window.innerWidth / 2;
            scissorX2 = window.innerWidth * 0.85;
            speed = 5;
        }
    }
    //allows player to play by clicking keys.
    if (chosen === false) {
        if (key === "R" || key === "r") {
            player1input = "rock"
            chosen = true;
            scoregiven = false;
        }
        else if (key === "P" || key === "p") {
            player1input = "paper";
            chosen = true;
            scoregiven = false;
        }
        else if (key === "S" || key === "s") {
            player1input = "scissor"
            chosen = true;
            scoregiven = false;
        }
        if (player1input === "scissor" || player1input === "paper" || player1input === "rock") {
            selected_img = Math.floor(Math.random() * ((2 - 0) + 1) + 0);
            player2assigner();
            winconditions();
        }
    }
}
/* this stops the page from scrolling when hetting space, by returning on any keypress that it is not " "/space,
   other things using space still work such as reseting variables as long as they are placed before this function. */
window.onkeydown = function stopscroll() {
    return !(key = " ")
}
//uses math above to give the correct choice to player 2 input
function player2assigner() {
    if (selected_hint === 5) {
        player2input = "rock"
    }
    else if (selected_hint === 6) {
        player2input = "paper"
    }
    else if (selected_hint === 7) {
        player2input = "scissor"
    }
    else if (selected_img === 0) {
        player2input = "scissor"
    }
    else if (selected_img === 1) {
        player2input = "rock"
    }
    else if (selected_img === 2) {
        player2input = "paper"
    }
}
//checks to see if the player has won, lost, or tied.
function winconditions() {
    if (player1input === "rock" && player2input === "rock") {
        scoregiven = true
        return "Its a Tie";
    }
    else if (player1input === "rock" && player2input === "paper") {
        if (scoregiven === false) { score--; botscore ++;}
        scoregiven = true
        return "You Lose";
    }
    else if (player1input === "rock" && player2input === "scissor") {
        if (scoregiven === false) { score++; botscore --;}
        scoregiven = true
        return "You Win!";
    }
    else if (player1input === "paper" && player2input === "rock") {
        if (scoregiven === false) { score++; botscore--;}
        scoregiven = true
        return "You Win!";
    }
    else if (player1input === "paper" && player2input === "paper") {
        scoregiven = true
        return "Its a Tie";
    }
    else if (player1input === "paper" && player2input === "scissor") {
        if (scoregiven === false) { score--; botscore ++;}
        scoregiven = true
        return "You Lose";
    }

    else if (player1input === "scissor" && player2input === "rock") {
        if (scoregiven === false) { score--; botscore ++;}
        scoregiven = true
        return "You Lose";
    }
    else if (player1input === "scissor" && player2input === "paper") {
        if (scoregiven === false) { score++; botscore --;}
        scoregiven = true
        return "You Win!";
    }
    else if (player1input === "scissor" && player2input === "scissor") {
        scoregiven = true
        return "Its a Tie";
    }
}
//resizes the window to make experince usable when either looking at console, or just after resizing browser tab.
function windowResized() {
    resizeCanvas(window.innerWidth, window.innerHeight);
}
//updates the score inside html, which allows the display to have css effects.
function updateScore(newScore) {
    score = newScore;
    document.getElementById('scoreDisplay').textContent = score;
}
function updateBotScore(newScoreBot) {
    botscore = newScoreBot;
    document.getElementById('botScoreDisplay').textContent = botscore;
}

//used no help from others.