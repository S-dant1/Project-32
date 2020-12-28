const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const Body = Matter.Body;
const World=Matter.World;
const Constraint = Matter.Constraint;

var engine,world;
var polygon, polygon_img, slingShot;
var score;
var backgroundImg, bg;

function preload(){

  polygon_img = loadImage("polygon.png");
  getBackgroundimage();
}


function setup() {
  createCanvas(800,400);
  stroke(255);

  engine=Engine.create();
  world=engine.world;
  ground = new Ground(400,380,800,20);
  ground1=new Ground (390,235,200,20)
  block1=new Block(330,200,30,40);
  block2=new Block(360,200,30,40);
  block3=new Block(390,200,30,40);
  block4=new Block(420,200,30,40);
  block5=new Block(450,200,30,40);
  block6=new Block(360,155,30,40);
  block7=new Block(390,155,30,40);
  block8=new Block(420,155,30,40);
  block9=new Block(390,105,30,40);
  
  score=0;
  //polygon
  fill("yellow");
  polygon = Bodies.circle(50, 150, 20);
  World.add(world, polygon);

  slingShot = new SlingShot(this.polygon,{x:100, y:150});

}

function draw() {
  if (backgroundImg) {
    background(backgroundImg);
  }  
  Engine.update(engine);
  
  ground.display();
  ground1.display();

  block1.display();
  block1.score();
  
  block2.display();
  block2.score();

  block3.display();
  block3.score();

  block4.display();
  block4.score();
 
  block5.display();
  block5.score();

  block6.display();
  block6.score();
 
  block7.display();
  block7.score();
 
  block8.display();
  block8.score();
 
  block9.display();
  block9.score();

  imageMode(CENTER);
  image(polygon_img, polygon.position.x, polygon.position.y, 40, 40);
  slingShot.display();

  text("SCORE : " + score, 700, 40);
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}

function mousePressed(){
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }
}

function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
	if(keyCode === 32)	{
		Matter.Body.setPosition(polygon, {x:50, y:150});
		slingShot.attach(polygon);
    slingShot.display();
  }
}



async function getBackgroundimage() {

  var response= await fetch("http://worldclockapi.com/api/json/cst/now");
  var responseJSON=await response.json();
  var datetime=responseJSON.currentDateTime;
  var hour=datetime.slice(11,13);
  console.log("Hour of the day " +hour);
  if(hour >=06 && hour <18){
      bg="bg.png";
  }
  else{
      bg="bg2.jpg";
  }
  backgroundImg=loadImage(bg);
}

