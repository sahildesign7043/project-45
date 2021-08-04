var target; 
 var wall1,player,wall2,wall3,wall4;
 var gun1,gun2;
 var targetimg,gun1img,gun2img
 
 function setup() {
  createCanvas(1400,675);
  target=createSprite(1200,200,50,50);
  target.shapeColor="red";

  wall1=createSprite(700,337,-2500,10);
  wall1.shapeColor="lime";

  wall2=createSprite(700,0,-2500,10);
  wall2.shapeColor="lime";

  wall3=createSprite(700,675,-2500,10);
  wall3.shapeColor="lime";

  gun1=createSprite(100,150,10,10);
  gun1.shapeColor="green";

  gun2=createSprite(100,500,10,10);
  gun2.shapeColor="green";
}




function preload(){
gun1=loadImage("gun1.jpg");
gun2=loadImage("gun2.jpg"); 
target=loadImage("target.jpg");

}






function draw() {
  background("cyan");  
  drawSprites();
  target.velocityY="3";


}