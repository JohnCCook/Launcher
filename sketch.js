//All of the global variables
var launcher, launcherImg;
//Matter.js stuff
const Engine = Matter.Engine
const  World = Matter.World
const  Bodies = Matter.Bodies;
const Body = Matter.Body

function preload() {
//Adding the pictures to the sprites
  launcherImg = loadImage('Photos/Launcher.png');
}

function setup() {
  createCanvas(windowWidth,windowHeight);

//Setting up the launher
  launcher = createSprite(100, 650, 50, 50);
  launcher.addImage(launcherImg)
  launcher.scale = 0.1

  console.log(windowWidth,windowHeight);
}

function draw() {
  background(0);  
  drawSprites();
}