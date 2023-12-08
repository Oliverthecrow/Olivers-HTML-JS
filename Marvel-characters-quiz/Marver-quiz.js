
let scenenum = 0;
let isHuman = false;
let isGood = false;
let isBitten = false;
let isFemale = false;
let isGod = false;
let isGreen = false;
let img;
let selected_img;

function preload() {
    //old
    img = [
        IronM = loadImage('IronMan.gif'), //0
        Groot = loadImage('groot-this.gif'), //1
        Thanos = loadImage('thanos.gif'), //2
        Spiderman = loadImage('Spider man.gif'), //3
        CaptainMarvel = loadImage('Captain marvel.gif'), //4
        gamora = loadImage('gamora-gotg.gif'), //5
        SpiderGwen = loadImage('spider-gwen.gif'), //6
        Thanos = loadImage('thanos.gif'), //7

        //new
        CaptainAmerica = loadImage('captain-america.gif'), //8
        Hulk = loadImage('Hulk.gif'), //9
        Loki = loadImage('Loki.gif'), //10
    ];
}//end preloading of images and fonts

function setup() {
    let sketch = createCanvas(window.innerWidth, window.innerHeight);
    sketch.parent("Marvel-Quiz");
    background(255, 255, 0);
    textAlign(CENTER)
    textSize(45)
    BG = img[selected_img];
}//end setup

function draw() { //--------------------------------------------------- Start draw ---------------------------------------//

    if (scenenum === 0) {
        scene0();
    }
    else if (scenenum === 1) {
        scene1();
    }
    else if (scenenum === 2) {
        scene2();
    }
    else if (scenenum === 3) {
        scene3();
    }
    else if (scenenum === 4) {
        scene4();
    }
    else if (scenenum === 5) {
        scene5();
    }
    else if (scenenum === 6) {
        scene6();
    }
    else if (scenenum === 999) {
        endscene();
    }

}//----------------------------------------------------------------------End draw --------------------------------------------------//

function keyPressed() {
    //Human question
    if (key === 'y' && scenenum === 1) {
        scenenum = 2;
        isHuman = true;
    }
    else if (key === 'n' && scenenum === 1) {
        scenenum = 2;
    }
    //Good guy question
    else if (key === 'y' && scenenum === 2) {
        scenenum = 3;
        isGood = true;
    }
    else if (key === 'n' && scenenum === 2) {
        scenenum = 3;
    }
    //Spider question
    else if (key === 'y' && scenenum === 3) {
        scenenum = 4;
        isBitten = true;
    }
    else if (key === 'n' && scenenum === 3) {
        scenenum = 4;
    }
    //Female question
    else if (key === 'y' && scenenum === 4) {
        scenenum = 5;
        isFemale = true;
    }
    else if (key === 'n' && scenenum === 4) {
        scenenum = 5;
    }
    // Loki question
    else if (key === 'y' && scenenum === 5) {
        isGod = true;
        scenenum = 6;
    }
    else if (key === 'n' && scenenum === 5) {
        scenenum = 6;
    }
    //green question
    else if (key === 'y' && scenenum === 6) {
        scenenum = 999;
        isGreen = true;
    }
    else if (key === 'n' && scenenum === 6) {
        scenenum = 999;
    }
} //end keyPressed

function mousePressed() {
    if (scenenum === 0) {
        scenenum = 1
    }
    else if (scenenum === 999) {
        scenenum = 0;
        isHuman = false;
        isGood = false;
        isBitten = false;
        isFemale = false;
        isGod = false;
        isGreen = false;
    }
}//end mousePressed
function scene0() {
    textSize(45)
    background(255, 255, 0)
    text("Welcome to the Marvel Quiz!", window.innerWidth / 2, window.innerHeight / 2);
    text("Click anywhere to start test", window.innerWidth / 2, window.innerHeight / 2 + 100);
    textSize(20)
    text("Characters avalible: IronMan, SpiderMan, SpiderGwen, Gamora, Groot, Thanos, Captain America, Loki, Hulk, and Captain Marvel",window.innerWidth / 2, window.innerHeight / 2 + 200)
    text("You will click y or n on your keyboard for yes or no",window.innerWidth / 2,window.innerHeight / 2 +300)
    textSize(45)
}
function scene1() {
    background(255, 255, 0);
    text("Is your character from earth? (y or n)", window.innerWidth / 2, window.innerHeight / 2);
}
function scene2() {
    background(255, 255, 0);
    text("Is your character a goodguy? (y or n)", window.innerWidth / 2, window.innerHeight / 2);
}
function scene3() {
    background(255, 255, 0);
    text("Has your character been bitten by a radioactive insect? (y or n)", window.innerWidth / 2, window.innerHeight / 2);
}
function scene4() {
    background(255, 255, 0);
    text("Is your character female? (y or n)", window.innerWidth / 2, window.innerHeight / 2);
}
function scene5() {
    background(255, 255, 0);
    text("Is your character a god?  (y or n)", window.innerWidth / 2, window.innerHeight / 2);
}
function scene6() {
    background(255, 255, 0);
    text("Is your character Green?  (y or n)", window.innerWidth / 2, window.innerHeight / 2);
}
function scene999() {
    text("Click anywhere to retake test", window.innerWidth / 2, window.innerHeight / 2 + 100);
}
function endscene() {
    background(255, 255, 0);
    //old
    if (isHuman && isGood && !isBitten && !isFemale && !isGod && !isGreen) {
        text("Ironman!", window.innerWidth / 2, window.innerHeight / 2);
        selected_img = 0;
        text("Click anywhere to retake test", window.innerWidth / 2, window.innerHeight / 2 + 100);
        image(img[selected_img], 200, 200, 350, 350)
    }
    else if (isHuman && isGood && isBitten && !isFemale && !isGod && !isGreen) {
        text("Spiderman!", window.innerWidth / 2, window.innerHeight / 2);
        text("Click anywhere to retake test", window.innerWidth / 2, window.innerHeight / 2 + 100);
        selected_img = 3;
        image(img[selected_img], 200, 200, 350, 350);
    }
    else if (!isHuman && !isGood && !isBitten && !isFemale && !isGod && !isGreen) {
        text("Thanos!", window.innerWidth / 2, window.innerHeigth / 2);
        text("Click anywhere to retake test", window.innerWidth / 2, window.innerHeight / 2 + 100);
        selected_img = 7;
        image(img[selected_img], 200, 200, 350, 350);
    }
    else if (!isHuman && isGood && !isBitten && !isFemale && !isGod && !isGreen) {
        text("Groot!", window.innerWidth / 2, window.innerHeigth / 2);
        text("Click anywhere to retake test", window.innerWidth / 2, window.innerHeight / 2 + 100);
        selected_img = 1;
        image(img[selected_img], 200, 200, 350, 350);
    }
    else if (!isHuman && isGood && !isBitten && isFemale && !isGod && isGreen) {
        text("Gamora!", window.innerWidth / 2, window.innerHeigth / 2);
        text("Click anywhere to retake test", window.innerWidth / 2, window.innerHeight / 2 + 100);
        selected_img = 5;
        image(img[selected_img], 200, 200, 350, 350);
    }
    else if (isHuman && isGood && !isBitten && isFemale && !isGod && !isGreen) {
        text("Captain Marvel!", window.innerWidth / 2, window.innerHeigth / 2);
        text("Click anywhere to retake test", window.innerWidth / 2, window.innerHeight / 2 + 100);
        selected_img = 4;
        image(img[selected_img], 200, 200, 350, 350);
    }
    //new
    else if (!isHuman && isGood && !isBitten && !isFemale && isGod && !isGreen) {
        text("Loki", window.innerWidth / 2, window.innerHeight / 2);
        text("Click anywhere to retake test", window.innerWidth / 2, window.innerHeight / 2 + 100);
        selected_img = 8;
        image(img[selected_img], 200, 200, 350, 350);
    }
    else if (isHuman && isGood ** !isBitten && !isFemale && !isGod && !isGreen) {
        text("Captain America!", window.innerWidth / 2, window.innerHeigth / 2);
        text("Click anywhere to retake test", window.innerWidth / 2, window.innerHeight / 2 + 100);
        selected_img = 9;
        image(img[selected_img], 200, 200, 350, 350);
    }
    else if (isHuman && isGood && !isBitten && !isFemale && !isGod && isGreen) {
        text("Hulk!", window.innerWidth / 2, window.innerHeight / 2)
        text("Click anywhere to retake test", window.innerWidth / 2, window.innerHeight / 2 + 100);
        selected_img = 10;
        image(img[selected_img], 200, 200, 350, 350);
    }
    else {
        background(255, 255, 0)
        text("We might not have the character you are looking for.", window.innerWidth / 2,window.innerHeight / 2);
        text("Click anywhere to retake test", window.innerWidth / 2, window.innerHeight / 2 + 100);
    }
}//endscene
