
var boy, boyImage;
var backgroundImg
var egg1, egg1Img;
var egg2, egg2Img;
var egg3, egg3Img;
var egg4, egg4Img;
var bg
var hole, HoleImg

var gameState, PLAY, END;

var score=0;

function preload(){
  boyImage = loadImage ("boy.png")
  backgroundImg = loadImage("park.jpg")
  egg1Img = loadImage("egg1.png")
  egg2Img = loadImage("egg2.png")
  egg3Img = loadImage("egg3.png")
  egg4Img = loadImage("egg4.png")
  HoleImg = loadImage("unnamed.png")
}

function setup() {
createCanvas(800,800)
 bg = createSprite(800,400,2000,800)

 bg.addImage(backgroundImg)
 bg.scale = 1.9
 bg.velocityX = -4

  boy = createSprite(110,560,30,30)
  boy.addImage(boyImage)
  boy.debug=true;
  boy.setCollider("rectangle",0,0,200,400);
  console.log(bg.width);
  boy.scale = 0.8
obstaclesGroup = new Group();
eggsGroup = new Group();
  ground = createSprite(400,740,800,10);
  ground.visible=false;

  PLAY =1 ;
  END = 0;
  gameState = PLAY;

}

function draw() {
background("green")


if (bg.x < 60){
  bg.x = bg.width/2;

}
if(gameState=== PLAY){
  if(keyDown("space")){
    boy.velocityY=-10;
  }
  boy.velocityY=boy.velocityY+1;
  spawnObstacles();
  
  if(obstaclesGroup.isTouching(boy)){
    obstaclesGroup.setVelocityXEach(0);
    obstaclesGroup.destroyEach();
    score = score+10;
  }
  if(eggsGroup.isTouching(boy)){
    obstaclesGroup.setVelocityXEach(0);
    obstaclesGroup.destroyEach();
    gameState=END
  }
  
  }
  else if (gameState === END){
    fill("red");
  textSize(35);
  text("game Over", 600, 200);
  }
  boy.collide(ground);
  drawSprites();
  fill("red");
  textSize(35);
  text("score is"+score, 600, 200);
  
  
spawnObstacles();
spawnObstacles2();
drawSprites();
}
  
function spawnObstacles(){
  if (frameCount % 100 === 0){
    var obstacle = createSprite(2000,700,80,10);
    var rand = Math.round(random(0,750));
    obstacle.addImage(HoleImg)
    obstacle.y = rand
    obstacle.velocityX = -8
    
    
     //assign scale and lifetime to the obstacle           
     obstacle.scale = 0.5;
     obstacle.lifetime = 1000;
    
    //add each obstacle to the group
     obstaclesGroup.add(obstacle);
  
 

     //assign scale and lifetime to the obstacle           
     obstacle.scale = 0.5;
     obstacle.lifetime = 1000;
    
    //add each obstacle to the group
     obstaclesGroup.add(obstacle);
  }
 }
 
 function spawnObstacles2(){

 }
    
  