var launcher, launcherImg;

function setup() {
  createCanvas(windowWidth,windowHeight);
  launcher = createSprite(100, 650, 50, 50);
  console.log(windowWidth,windowHeight)
}

function draw() {
  background(0,0,0);  
  drawSprites();
}