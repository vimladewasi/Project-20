
var car,wall;
var speed,weight;  
var deformation; 

function setup() {
  createCanvas(1600,400);
  
  car = createSprite(50, 200, 50, 50); 
  car.shapeColor ="white";
 

  wall =createSprite(1500,200,60,height/2);
  wall.shapeColor = 80,80,80;
  

  speed = random(55,90);
  weight =random(400,1500);
}

function draw() {
  background("black"); 
  
  car.velocityX =speed; 
 
 // console.log(speed);
  //console.log(weight);
  
  if (car.x - wall.x < wall.width/2 + car.width/2
    && wall.x - car.x < wall.width/2 + car.width/2) {
  car.velocityX = car.velocityX * (-1);
  wall.velocityX = wall.velocityX * (-1);
  }

  if (car.y - wall.y < wall.height/2 + car.height/2
  && wall.y - car.y < wall.height/2 + car.height/2) {
  car.velocityY = car.velocityY * (-1);
  wall.velocityY = wall.velocityY * (-1);
  }

  deformation = (0.5*weight*speed*speed)/22500;
  console.log(deformation);

  if(car.isTouching(wall)){
    if(deformation<100)
    {
      car.shapeColor = color(0,255,0);
    }
    if(deformation >=100 && deformation <=180)
    {
      car.shapeColor = color(230,230,0);
    }
    if(deformation>180)
    {
      car.shapeColor = color(255,0,0);
    }
 }
  
  drawSprites();
}