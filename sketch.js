var ookla,ookla_running_left,ookla_running_right,ookla_standing;
var sleeping_guard,guardsleep
var guard_1,guard_2
var background_jail,jail_background;
var Cage,lockpik,lockpikImg
var wall;
var gameState = 1;

function preload()
{
    ookla_running_left = loadAnimation("animation/ookla_left.png","animation/ooklaleft2.png","animation/ooklaleft3.png","animation/ooklaleft4.png");
    ookla_running_right = loadAnimation("animation/pixel.png","animation/pixel2.png","animation/pixel3.png");
    ookla_standing = loadImage("animation/ookla.png")
    background_jail = loadImage("animation/jail.png")
    sleeping_guard =loadImage("animation/sleepingguard.gif")
    lockpikImg = loadImage("animation/lockpik.png");
    wall = loadImage("animation/wall.jpg");
}

function setup() {
	createCanvas(1200, 700);
Cage = createSprite(890,600,10,700)
ookla = createSprite(420,550,20,60)

ookla.addImage(ookla_standing)

ookla.scale = 3
ookla.addAnimation("ooklaRight",ookla_running_right);
ookla.addAnimation("ooklaLeft",ookla_running_left);

//jail_background = createSprite(350,350,700,700);
//jail_background.addImage(background_jail);


}


function draw() {
  background("blue");
  if(gameState === 1){
    lockpik = createSprite(25,660)
    lockpik.addImage(lockpikImg);
    imageMode(CENTER)
image(background_jail,400,350,800,700)
image(sleeping_guard,1000,350,400,700)
if(ookla.isTouching(lockpik)){
  Cage.destroy();
  fill(225);
  text('Congrats you found the pick now escape the jail', 180, 400)
  textSize(100);
  textAlign(CENTER);
}
ookla.collide(Cage)
if(ookla.velocityX  === -5 && ookla.x >= 800  ){
  ookla.changeAnimation(ookla_standing)
  ookla.x = 420
  fill(225);
  textSize(60);
  textAlign(CENTER);
  text('you got caught', 180, 400)
}
   
text("X:"+mouseX,1100,100)
text("Y:"+mouseY,1100,120)
Cage.visible = false;
if(keyDown("right")){
  ookla.changeAnimation("ooklaRight",ookla_running_right);
  ookla.y = 617
  ookla.velocityX = 5
}
if(keyDown("left")){
  ookla.changeAnimation("ooklaLeft",ookla_running_left);
  ookla.y = 617
  ookla.velocityX = -5
}

if(ookla.x >= 1195){
  gameState = 2;
}
  }
  else if(gameState === 2){
    imageMode(CENTER)
image(wall,600,350,1200,700)
text("X:"+mouseX,1100,100)
text("Y:"+mouseY,1100,120)
ookla.x = 100;
if(keyDown("right")){
  ookla.changeAnimation("ooklaRight",ookla_running_right);
  ookla.y = 617
  ookla.velocityX = 5
}
if(keyDown("left")){
  ookla.changeAnimation("ooklaLeft",ookla_running_left);
  ookla.y = 617
  ookla.velocityX = -5
}
lockpik.visible = false

  }
  

text("X:"+mouseX,1100,100)
text("Y:"+mouseY,1100,120)
Cage.visible = false;
if(keyDown("right")){
  ookla.changeAnimation("ooklaRight",ookla_running_right);
  ookla.y = 617
  ookla.velocityX = 5
}
if(keyDown("left")){
  ookla.changeAnimation("ooklaLeft",ookla_running_left);
  ookla.y = 617
  ookla.velocityX = -5
}





  


  drawSprites();
 
}



