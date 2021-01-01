var car,wall,speed,weight,deformation;

function setup(){
  createCanvas(600,600);
car = createSprite(30,300,20,20);
car.shapeColor = "black";

wall = createSprite(500,300,10,300);

speed = Math.round(random(40,80));
weight = Math.round(random(500,2500));
car.velocityX = speed;


}

function draw(){
  background("white");
  
 
  
  if(isTouching(car,wall)){
    
    car.velocityX = 0;
    deformation = 0.5*speed*speed*weight/22500;


    if(deformation<=100){
      car.shapeColor = color(0,255,0);      
    }
    
    if(deformation>100&&deformation<180){
      car.shapeColor = color(230,230,0);
    }
 
    if(deformation>180){
      car.shapeColor =color(255,0,0);
     
    }
  
    }
    
  drawSprites();
}