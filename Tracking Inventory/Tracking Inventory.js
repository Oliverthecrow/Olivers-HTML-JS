let scenenum = 0;
let coins = 10;
let InventoryGiven = false;
let GotPotion = false;

let WIW = window.innerWidth;
let WIH = window.innerHeight;

let inventory = ["Water", "Knife", "Shield", "Hat", coins]

function setup() {
    let sketch = createCanvas(window.innerWidth, window.innerHeight);
    sketch.parent("trackinginventorycanvas");

    textAlign(CENTER)
    backgroundimage = loadImage('apocalypse background.avif');
}
function draw() {
    WIW = window.innerWidth;
    WIH = window.innerHeight;
    if(!GotPotion || scenenum < 10) {background(backgroundimage)}
    else{background(backgroundimage)}

    fill(160,160,160,160);
    rect(WIW*0.6,WIH*0.8,WIW*0.39,WIH*0.18);   
    fill(255);
    text("Coins: " + coins,WIW*0.925,WIH*0.10);

    textSize(35);
    text("Inventory:",WIW*0.8,WIH*0.85);

    textSize(35)
    text(inventory,WIW*0.795,WIH*0.91);

    textSize(25);
    text("press backspace to go back",WIW*0.1,WIH*0.9);

    textSize(20);
    text("Press Ctrl + R to restart at any point",WIW*0.09,WIH*0.2)

    //plays correct scene
    if (scenenum === 0) { scene1() }
    else if (scenenum === 1) { scene2() }
    else if (scenenum === 2) { scene3() }
    else if (scenenum === 3) { scene4() }
    else if (scenenum === 4) { scene5() }
    else if (scenenum === 5) { scene6() }
    else if (scenenum === 6) { scene7() }
    else if (scenenum === 7) { scene8() }
    else if (scenenum === 8) { scene9() }
    else if (scenenum === 9) { scene10() }
    else if (scenenum === 10) { scene11() }
}
//goes on to next "level" when clicking 
function mousePressed() {
    if(scenenum <= 10) {scenenum++;}
    InventoryGiven = false;
}
//scenes
function scene1() {
    textSize(40);
    fill(255);
    text("the apocalypse has hit suddenly, causing great devestation across the globe, \n caused by one Queen zombie spreading the infection. \nYou are a lone traveller, who wants to try and end this once and for all, \n so you set out to find the queen and gather resources.",WIW/2,WIH/2);
}
function scene2() {
    textSize(40)
    text("A nice granny you ran into gave you 5 coins and a map", WIW/2, WIH/2);
//                                    gets rid of coins    gives back correct amount of coins
    if(!InventoryGiven) {coins += 5; inventory.splice(4, 1); inventory.push("Map",coins); InventoryGiven = true;}
}
function scene3() {
    textSize(40);
    text("Along your journey, you run into a aggresive zombie, \n you manage to fend it off with your shield, unfortunately breaking it in the process",WIW/2,WIH/2);

    if(!InventoryGiven) {inventory.splice(2, 1); InventoryGiven = true;}

}
function scene4() {
    textSize(40);
    text("Your Stomach grumbles, you enter an abandoned restaurant and gather some supplies",WIW/2,WIH/2);

    if(!InventoryGiven) {inventory.splice(1,0,"Food","Food"); InventoryGiven = true;}

}
function scene5() {
    textSize(40);
    text("You come accross some a group of young children in need of food, \n but in your desperate situation, you decide you do not have enough spare food",WIW/2,WIH/2);

    text("Food Items:",WIW/2,WIH - 150);
    text(inventory[0] + " " + inventory[1] +  " " + inventory[2], WIW/2, WIH - 100); //displays just food items

}
function scene6() {
    textSize(40);
    text("You come accross a cabin in the woods with a key close to the front door, \n seeing the glow of a small town in the distance, you pick up the key",WIW/2,WIH/2);

    if(!InventoryGiven) {inventory.push("Key") ; InventoryGiven = true;};
}
function scene7() {
    textSize(40);
    text("You go to the town and meet a blacksmith, who is selling a magical sword for only 5 coins.",WIW/2,WIH/2);

    if(!InventoryGiven) {coins -= 5 /*price of sword*/; inventory.splice(6,1,coins,"Sword") ; InventoryGiven = true;};
}
function scene8() {
    textSize(40);
    text("You got back to your new found cabin, and drink your remaining water before going to sleep",WIW/2,WIH/2);

    if(!InventoryGiven) {inventory.splice(0,1) ; InventoryGiven = true;};
}
function scene9() {
    textSize(40);
    text("Back in the town in the morning some crazed man runs up to you, \n and says after looking around suspicously, if you want to buy his potion, \n a very dark red potion, with a small amount of brownish red gas waiting to escape the bottle \n Press Y to buy, or click to ignore",WIW/2,WIH/2);

    if(key === "y" || key === "Y") {
    if(!InventoryGiven) {inventory.splice(0,0,"Potion"); inventory.splice(6,1); InventoryGiven = true;};coins = 0; GotPotion = true;}
}
function scene10() {
    textSize(40);
    if(GotPotion) {text("The Queen zombie, the reason for the apocalypse approaches you, \n fighting her with your new magical sword, you get flung to the ground, \n very injured, you drink your potion, and Win the battle,",WIW/2,WIH/2);}
    else{text("The Queen zombie, the reason for the apocalypse approaches you, \n fighting her with your new magical sword, you get flung to the ground, \n very injured, you are not able to get up, and the Queen escapes",WIW/2,WIH/2)}

    if(!InventoryGiven) {inventory.splice(0,1); InventoryGiven = true;};
}
function scene11() {
    textSize(40)
    if(GotPotion) {backgroundimage = loadImage("good ending background.jpg"); text("YOU WON, you have saved the world",WIW/2,WIH/2)}
    else{text("The world remains in ruin, and stays this way forever, You lost",WIW/2,WIH/2)}
}
function keyPressed() {
    //allows you to go back
    if(scenenum >= 0) if(keyCode === 8) {scenenum--}

    return keyPressed
}
//resizes window
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
function preLoad() {
    loadImage("good ending background.jpg");
    loadImage("apocalypse background.avif");
}
