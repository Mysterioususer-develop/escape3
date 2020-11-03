var platform1;
var player;
var bg1;
gameState=0;

var bg1_image;
var bg3;
var bg3_image;
var player_img;
var player2_img;
var bg4;
var bg4_img;
var bg5;
var bg5_img;
var key;
var key_img;

gameState=0;
function preload(){

  bg1_image=loadImage("Sprites/Bg2.jpg");
  bg3_image=loadImage("Sprites/bg3.jpg");
  bg4_img=loadImage("Sprites/bg4.png");
  bg5_img=loadImage("Sprites/bg5.jpg");
  player_img=loadImage("Sprites/player.png");
  player2_img=loadImage("Sprites/playerRight.png");
  key_img=loadImage("Sprites/key.png");
}
function setup() {
  createCanvas(1500, 600);
  platform1=createSprite(800,425,1600,40);
  player=createSprite(1485,395,30,30);
 // key = createSprite(762,191,20,40);

}

function draw() {

  if(gameState===0){
    background(bg1_image);
  }
  


else if(gameState===1){
  background(bg3_image);
}  

 

if(gameState===2){
  background(bg4_img);
}

else if(gameState===3){
  background(bg5_img);
}

  fill("white");
  player.collide(platform1);



platform1.visible=false;

player.collide(ob1);
player.collide(ob2);
player.collide(ob3);
player.collide(ob4);
player.collide(ob5);

player.scale=1/8
player.velocityY=player.velocityY+0.8;


if(gameState===0){
  if(player.isTouching(ob1Group)){
  player.x=65;
  player.y=231;
    }
    
    
  }

  
if (player.x>=1495 && gameState===1 ){
  player.x=65;
  gameState=2;
}


player.addImage("player_img",player_img);
//key.addImage("key_img",key_img);
//key.scale=1/10;
if(player.x>=1495 && gameState===0){
  player.x=65;
  gameState=1;
}
 
if(player.x>=1495 && gameState===2){
  player.x=500;
  gameState=3;
}

if(player.x<=396 && gameState===3){
gameState=2;
player.x=1490;
}

if(player.x<=11 && gameState===2){
  gameState=1;
  player.x=1490;
}

if(player.x<=11 && gameState===1){
  gameState=0;
  player.x=1490;
  player.y=395;
  platform1.x=800;
  platform1.y=425;
}




if(gameState===1){
  platform1.x=758;
  platform1.y=550;
}



  drawSprites();
  text(mouseX+","+mouseY,mouseX,mouseY);
  
  PlayerMovement();


}
function Obstacles(){
  
  
      
}
function PlayerMovement(){
  if(keyIsDown(38) && player.y>=200){
    player.velocityY=-10;
  }
  else if(keyIsDown(39)){
    player.x=player.x+10;
    
  }
  else if(keyIsDown(37)){
    player.x=player.x-10;
    player.addImage("player2_img",player2_img);
  }
  
}