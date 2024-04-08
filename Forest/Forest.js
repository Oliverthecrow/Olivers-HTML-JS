let WIW = window.innerWidth
let WIH = window.innerHeight
let leafColours = ["green", "red", "orange", "yellow"]

function setup() {
    let sketch = createCanvas(WIW, WIH);
    sketch.parent("ForestCanvas")
    clearForest();
    drawSimpleTree(200, 300, 50, 70, "Yellow");
    drawLeafyTree(130, 300, 30, 80, "Red", 80);
    drawLeafyTree(330, 300, 30, 60, "Orange", 150);
    drawLeafyTree(50, 200, 50, 90, "Yellow", 300);
    drawPineTree(200, 150, 40, 100, "green", false);
    drawPineTree(230, 200, 30, 50, "green", false);
    drawPineTree(400, 400, 50, 80, "green", true);
    drawPineTree(400, 200, 30, 80, "green", true);
    rowTrees(100, 400, 20, 40, 10)

}//end setup
function draw() { //empty draw function needed to keep the program looping
}//end draw
function keyPressed() {
    let treeWidth = random(40, 100);
    let treeHeight = random(2, 2.5) * treeWidth;
    let col = random(leafColours); //this randomly selects one item out of an array
    if (key === "a") {
        drawSimpleTree(mouseX, mouseY, treeWidth, treeHeight, col);
    }
    else if (key === "b") {
        //draw a plain pine tree
        drawPineTree(mouseX, mouseY, treeWidth, treeHeight, "green", false)
    }
    else if (key === "c") {
        AMTleaves = random(150, 200)
        drawLeafyTree(mouseX, mouseY, treeWidth, treeHeight, col, AMTleaves)
    }
    else if (key === "d") {
        //draw a fancy pine tree
        drawPineTree(mouseX, mouseY, treeWidth, treeHeight, "green", true)
    }
    else if (key === "r") { //the treewidth and treeheight random ranges are kinda too large for a potential row of 20, so I just gave a lower range
        rowTrees(mouseX, mouseY, random(20, 50), random(1, 1.5) * treeWidth, random(2, 20))
    }
    else if (key === " ") {
        clearForest();
    }
}//end keyPressed
function clearForest() {
    background("#c2e0ed");
    noStroke();
    fill("#5c9645")
    rectMode(CORNER);
    rect(0, height * 0.4, width, height * 0.6)
}//end clearForest
function drawSimpleTree(x, y, w, h, leafCol) {
    fill("brown");
    noStroke();
    rectMode(CORNER); //This allows the trunk to be centered
    rect(x - w * 0.15, y + w / 2, w * 0.3, h / 3);//Start the trunk at the bottom of the leaves,which are drawn next.
    fill(leafCol);
    strokeWeight(1);
    stroke(0)
    circle(x, y, w);
}//end drawSimpleTree
function drawPineTree(x, y, w, h, Col, fancy) {
    fill("brown");
    noStroke();
    rectMode(CORNER);
    rect(x - w * 0.15, y, w * 0.3, h / 3);
    fill(Col);
    strokeWeight(1);
    if (!fancy) { triangle(x - w * 0.5, y, x, y - h * 0.85, x + w * 0.5, y); }
    if (fancy) { triangle(x - w * 0.5, y, x, y - h * 0.85, x + w * 0.5, y); triangle(x - w * 0.4, y - h * 0.35, x, y - h * 0.85, x + w * 0.4, y - h * 0.35); triangle(x - w * 0.25, y - h * 0.66, x, y - h * 0.85, x + w * 0.25, y - h * 0.66); }

}
function drawLeafyTree(x, y, w, h, col, leaves) {
    fill("brown");
    noStroke();
    rectMode(CORNER);
    rect(x - w * 0.15, y, w * 0.3, h / 3);
    fill(col);
    strokeWeight(1);
    for (let i = 0; i < leaves; i++) {
        let size = random(0.05 * w, 0.15 * w);
        circle(random(x - w * 0.25, x + w * 0.25), random(y + h * 0.2, y - h * 0.2), size)
    }
}
function rowTrees(x, y, w, h, l) {
    for (let i = 0; i < l; i++) {
        drawPineTree(x, y, w, h, "green", false)
        x = x + w
    }
}