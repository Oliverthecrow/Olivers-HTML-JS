//as3_superheroes.js
let WIW = window.innerWidth;
let WIH = window.innerHeight;

let allHeroes = ["Thor", "Ironman", "Superman", "Vanya Hargreeves", "Wonder Woman", "Spider Man"];
let isHuman = ['Non Human', "Human", "Non Human", "Human", "Human", "Human"];
let SuperPowers = ["Lightning", "Iron Suit", "Super Strength", "Sound Waves", "Super Strength", "Web Slinging"]
let allPics = [];
let rand;
let SelectedHero = 0;
let HeroSelected = false;
let angle = 0;

function preload() {
    allPics.push(createImg('https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/Chris_Hemsworth_as_Thor.jpg/220px-Chris_Hemsworth_as_Thor.jpg', "Thor"));
    allPics.push(createImg('https://bgr.com/wp-content/uploads/2019/11/avengers-endgame-iron-man-gauntlet.jpg?quality=82&strip=all&resize=1400,788', "Iron Man"));
    allPics.push(createImg("https://media.newyorker.com/photos/5909527c1c7a8e33fb38a864/master/pass/Man_of_Steel-580.jpeg", "Superman"));
    allPics.push(createImg("https://s1.r29static.com/bin/entry/1b6/x,80/2130813/image.jpg", "vanya"));
    allPics.push(createImg("https://media.vanityfair.com/photos/5c4ddf0fba532c6650dedf67/9:16/w_746,h_1327,c_limit/wonder-woman-3-modern.jpg", "W.W."));
    allPics.push(createImg("https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png", "Spider Man"));

    for (let i = 0; i < allHeroes.length; i++) {
        allPics[i].hide();
    }
}//end preloading of images
function setup() {
    let sketch = createCanvas(WIW, WIH);
    sketch.parent("superheroscanvas");
    rand = floor(random(0, allHeroes.length));
    print(rand);
    angleMode(DEGREES);
    SelectedHero = 7
}//end setup
function draw() {
    background(120, 200, 200);
    //all pictures
    imageMode(CORNER);
    for (let i = 0; i < allPics.length; i++) {
        image(allPics[i], i * 240 + WIW * 0.25, 125, 200, 175);
    }
    textSize(25)
    fill(255)
    textAlign(CENTER)
    for (let i = 0; i < allHeroes.length; i++) {
        text(allHeroes[i], i * 240 + WIW*0.25 + 100, 325)
    }
    fill(255,120,200)
    textSize(22)
    for (let i = 0 ; i < SuperPowers.length; i++) {
        text(SuperPowers[i] , i * 240 +  WIW*0.25 + 100, 360)
    }
    for (let i = 0 ; i < isHuman.length; i++) {
        text(isHuman[i] , i * 240 +  WIW*0.25 + 100, 390)
    }
    fill(255);
    noStroke();
    textSize(20);
    text("Your superhero for hire is: " + allHeroes[SelectedHero], 230, 100);
    text("Click c to expose heros to Couprinite",WIW*0.9,WIH*0.9)
    textSize(30)
    text("Click on heros to choose them",WIW*0.5,WIH*0.75)
    //spinning pictures
    imageMode(CENTER);
    translate(250, 375); //the location of the spinning image
    if(HeroSelected) {
    rotate(angle);
    image(allPics[SelectedHero], 0, 0, angle, angle); 
    resetMatrix();
    if (angle < 360) {
        angle += 3;
    }
}
}//end draw
function mousePressed() {
    print("MouseX: " + mouseX + " MouseY: " + mouseY);
    allHeroes[0] = "Cool guy 123"
    allHeroes[5] = "An even Cooler guy 456"

    if (mouseX >= WIW * 0.25 && mouseX <= WIW * 0.25 + 225 + 0 * 240 && mouseY >= 125 && mouseY <= 300) {
        SelectedHero = 0;
        HeroSelected = true;
    }
    else if (mouseX >= WIW * 0.25 && mouseX <= WIW * 0.25 + 225 + 1 * 240 && mouseY >= 125 && mouseY <= 300) {
        SelectedHero = 1;
        HeroSelected = true;
    }
    else if (mouseX >= WIW * 0.25 && mouseX <= WIW * 0.25 + 225 + 2 * 240 && mouseY >= 125 && mouseY <= 300) {
        SelectedHero = 2;
        HeroSelected = true;
    }
    else if (mouseX >= WIW * 0.25 && mouseX <= WIW * 0.25 + 225 + 3 * 240 && mouseY >= 125 && mouseY <= 300) {
        SelectedHero = 3;
        HeroSelected = true;
    }
    else if (mouseX >= WIW * 0.25 && mouseX <= WIW * 0.25 + 225 + 4 * 240 && mouseY >= 125 && mouseY <= 300) {
        SelectedHero = 4;
        HeroSelected = true;
    }
    else if (mouseX >= WIW * 0.25 && mouseX <= WIW * 0.25 + 225 + 5 * 240 && mouseY >= 125 && mouseY <= 300) {
        SelectedHero = 5;
        HeroSelected = true;
    }
}//end mousePressed
function keyPressed() {
    if(key === "c" || key === "C") {
        for (let i = 0 ; i < isHuman.length; i++) {
            if(isHuman[i] === 'Non Human') {SuperPowers[i] = "None"}
        }
    }
}
