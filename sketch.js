var car1,wall; 

var speed,weight;

var deformation;

var highFlames,lessFlames,normal;

function preload(){
  
  highFlames = loadImage("sprites/flames.png");
  lessFlames = loadImage("sprites/lessFlames.png");
  normal = loadImage("sprites/normal.png");

}
function setup() {
  createCanvas(1000,400);
  //createSprite(400, 200, 50, 50);
  
  
  speed=random(55,90);
  weight=random(400,1500);

 car1=createSprite(50,200,50,50);

  

 wall=createSprite(1000,200,30,300);
 wall.shapeColor=color(80,80,80);
}

function draw() {
  background(255,255,255);
  car1.velocityX=speed;

  text("car speed="+car1.velocityX,500,365);
  text("car weight="+weight,500,380);
  text("car deformation="+deformation,500,395);
  
  if(wall.x-car1.x < (car1.width+wall.width)/2){
    car1.velocityX=0;
     deformation=0.5*weight*speed*speed/22500;
    if(deformation>180){
      //car1.shapeColor=color(255,0,0);
      car1.addImage("bad",highFlames);
    }


    if(deformation<180 && deformation>100){
      //car1.shapeColor=color(230,230,0);
      car1.addImage("average",lessFlames)
    }
    if(deformation<100){
      //car1.shapeColor=color(0,255,0);
      car1.addImage("normal car",normal);
    }

  }
  
  drawSprites();
 //text(mouseX+","+mouseY,mouseX,mouseY);
  
  
}