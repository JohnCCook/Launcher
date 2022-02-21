var launcher, launcherImg;

function preload() {
  launcherImg = loadImage('Photos/Launcher.png');
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  launcher = createSprite(100, 650, 50, 50);
  launcher.addImage(launcherImg)
  launcher.scale = 0.1

  console.log(windowWidth,windowHeight);
}

function draw() {
  background(0,0,0);  
  drawSprites();
}