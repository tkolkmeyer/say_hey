function setup() {
    createCanvas(400, 400);
    mic = new p5.AudioIn();
    mic.start();
}

function draw() {
    background(220);

    let size = map(mic.getLevel(), 0, 0.1, 25, 50)

    textSize(size)
    textAlign(CENTER, CENTER)
    text("whoop", width / 2, height / 2)
    fill(mouseX, mouseY, 0);
}