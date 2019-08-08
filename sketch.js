var DOT_COUNT = 5;
var canvas;
var size = 4;

function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  noLoop();
  noStroke();
  background(255, 0);
}

function draw() {

  for (let i = 0; i < DOT_COUNT; i++) {
    let x = random(0, width);
    let y = random(0, height);

    if (i == 0) {
      fill(51, 153, 255);
    } else {
      fill(0);
    }

    rect(x, y, size, size);
    
  }
}