function setup() {
    let sketch = createCanvas(window.innerWidth, window.innerHeight);
    sketch.parent("ExamplesCanvas");
}
function draw() {
    for (let i; i < 100; i++) {
        if (i%15 === 0) {i = fizzbuzz}
        else if (i%5 === 0) { i = buzz}
        else if (i%3 === 0) {i = fizz}
        else {print(i)}
    }
}