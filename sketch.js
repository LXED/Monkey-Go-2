var  PLAY = 1;
var  END = 0;
var SECOND = 0;
var gameState = PLAY;

var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score = 0;
var ground;
var background ,backgroundImage;


function preload()
{
  
  monkey_running =      loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  backgroundImage = loadImage("jungle.jpg");
 
}



function setup() {
  createCanvas(400,400);
  
  background = createSprite(500,200,10,10)
  background.addImage("s",backgroundImage);
  
  
  
  monkey = createSprite(50,400,20,50);
  monkey.addAnimation("s",  monkey_running);
  monkey.scale = 0.1;

  
  
  ground = createSprite(300,400,900,10)
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(monkey.y)
  
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
  
  
  
  
}


function draw() 
{

   
  
  if(gameState === PLAY)
  {
  
    
    
    background.velocityX = -4;
    if(background.x < 0){
   background.x = background.width/2;
    }
  
    
    
  if(ground.x < 0){
   ground.x = ground.width/2;
  }
  
  
  
  if(keyDown("space")&& monkey.y >= 320)
  {
    monkey.velocityY = -20;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);

  
  
  
   
  
  if(FoodGroup.isTouching(monkey))
  {
    score = score +2;
    var Score = Math.round(random(1,4));
    switch(Score)
    {
      case 1: monkey.scale = 0.12;
        break;
      case 2: monkey.scale = 0.14;
        break;
      case 3: monkey.scale = 0.16;
        break;
        case 4: monkey.scale = 0.18;
         break;
      default:break;
    }
    FoodGroup.destroyEach();
  }
  
  console.log(monkey.scale);
  
  
  if(obstacleGroup.isTouching(monkey))
  {
    monkey.scale = 0.1;
    obstacleGroup.destroyEach();
    gameState = SECOND;
  }
  
  if(obstacleGroup.isTouching(monkey))
  {
    obstacleGroup.setVelocityXEach(0);
    FoodGroup.setVelocityXEach(0);
    obstacleGroup.setLifetimeEach(-1);
    FoodGroup.setLifetimeEach(-1);
    ground.velocityX = 0;
    monkey.velocityY = 0;
    
  }
  
  }


if(gameState === SECOND)
  {
  
    
    
    background.velocityX = -4;
    if(background.x < 0){
   background.x = background.width/2;
    }
  
    
    
  if(ground.x < 0){
   ground.x = ground.width/2;
  }
  
  
  
  if(keyDown("space")&& monkey.y >= 340)
  {
    monkey.velocityY = -20;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);

  
  
  
   
  
  if(FoodGroup.isTouching(monkey))
  {
    score = score +2;
    var Score = Math.round(random(1,4));
    switch(Score)
    {
      case 1: monkey.scale = 0.12;
        break;
      case 2: monkey.scale = 0.14;
        break;
      case 3: monkey.scale = 0.16;
        break;
        case 4: monkey.scale = 0.18;
         break;
      default:break;
    }
    FoodGroup.destroyEach();
  }
  
  console.log(monkey.scale);
  
  
  
  
  if(obstacleGroup.isTouching(monkey))
  {
    obstacleGroup.setVelocityXEach(0);
    FoodGroup.setVelocityXEach(0);
    obstacleGroup.setLifetimeEach(-1);
    FoodGroup.setLifetimeEach(-1);
    background.velocityX = 0;
    ground.velocityX = 0;
    monkey.velocityY = 0;

    
    
    
  }
    
  }
  
    
     obs();
  banana();
  drawSprites();
  textSize(20);
  fill("White");
  text("Score: " + score,150,100);
  }

  










function banana()
{
  if(frameCount % 60 === 0)
  {
  var banana1 = createSprite(600,160,10,10)
  banana1.y = Math.round(random(50,250));
  banana1.velocityX = -4;
  banana1.addImage("ban",bananaImage);
  banana1.scale = 0.1;
    banana1.lifetime = 160;
    
  FoodGroup.add(banana1);
 }
  
}

function obs()
{
  if(frameCount % 300 === 0)
  {
  var obstacle1 = createSprite(600,380,10,10)
  obstacle1.velocityX = -4;
  obstacle1.addImage("ob",obstacleImage);
  obstacle1.scale = 0.3;
    obstacle1.setCollider("rectangle",0,0,300,300);
    obstacle1.lifetime = 160;
  
  obstacleGroup.add(obstacle1);
  }
}


 



